type ActiveCampaignInput = {
  nome: string;
  email: string;
  telefone: string;
};

const LEAD_TAG_NAME = process.env.ACTIVECAMPAIGN_TAG_NAME || "IPDCON 2026 - Formulário";

function splitName(nome: string) {
  const [firstName, ...rest] = nome.trim().split(/\s+/);
  return { firstName: firstName ?? "", lastName: rest.join(" ") };
}

function authHeaders(apiKey: string) {
  return {
    "Content-Type": "application/json",
    "Api-Token": apiKey,
  };
}

async function getOrCreateTagId(baseUrl: string, apiKey: string, tagName: string): Promise<number> {
  const searchRes = await fetch(
    `${baseUrl}/api/3/tags?search=${encodeURIComponent(tagName)}&limit=100`,
    { headers: authHeaders(apiKey) }
  );

  if (!searchRes.ok) {
    throw new Error(`ActiveCampaign tags (busca) falhou: ${searchRes.status} ${await searchRes.text()}`);
  }

  const searchData = await searchRes.json();
  const existing = (searchData?.tags ?? []).find((t: { tag: string }) => t.tag === tagName);
  if (existing) return Number(existing.id);

  const createRes = await fetch(`${baseUrl}/api/3/tags`, {
    method: "POST",
    headers: authHeaders(apiKey),
    body: JSON.stringify({ tag: { tag: tagName, tagType: "contact" } }),
  });

  if (!createRes.ok) {
    // Pode ter sido criada em paralelo por outra requisição — tenta buscar de novo antes de desistir.
    const retryRes = await fetch(
      `${baseUrl}/api/3/tags?search=${encodeURIComponent(tagName)}&limit=100`,
      { headers: authHeaders(apiKey) }
    );
    const retryData = await retryRes.json().catch(() => null);
    const foundOnRetry = retryData?.tags?.find((t: { tag: string }) => t.tag === tagName);
    if (foundOnRetry) return Number(foundOnRetry.id);

    throw new Error(`ActiveCampaign tags (criação) falhou: ${createRes.status} ${await createRes.text()}`);
  }

  const createData = await createRes.json();
  return Number(createData.tag.id);
}

async function tagContact(baseUrl: string, apiKey: string, contactId: string, tagId: number) {
  const res = await fetch(`${baseUrl}/api/3/contactTags`, {
    method: "POST",
    headers: authHeaders(apiKey),
    body: JSON.stringify({ contactTag: { contact: contactId, tag: tagId } }),
  });

  // 422 aqui normalmente significa que a tag já está associada a esse contato — não é erro.
  if (!res.ok && res.status !== 422) {
    throw new Error(`ActiveCampaign contactTags falhou: ${res.status} ${await res.text()}`);
  }
}

export async function syncContactToActiveCampaign(input: ActiveCampaignInput): Promise<void> {
  const baseUrl = process.env.ACTIVECAMPAIGN_URL;
  const apiKey = process.env.ACTIVECAMPAIGN_API_KEY;

  if (!baseUrl || !apiKey) {
    throw new Error("Variáveis de ambiente do ActiveCampaign não configuradas");
  }

  const { firstName, lastName } = splitName(input.nome);

  const syncRes = await fetch(`${baseUrl}/api/3/contact/sync`, {
    method: "POST",
    headers: authHeaders(apiKey),
    body: JSON.stringify({
      contact: {
        email: input.email,
        firstName,
        lastName,
        phone: input.telefone,
      },
    }),
  });

  if (!syncRes.ok) {
    throw new Error(`ActiveCampaign contact/sync falhou: ${syncRes.status} ${await syncRes.text()}`);
  }

  const syncData = await syncRes.json();
  const contactId = syncData?.contact?.id;

  if (!contactId) {
    throw new Error("ActiveCampaign contact/sync não retornou um id de contato");
  }

  // Marca o contato como lead vindo do formulário do IPDCON — fica visível
  // direto no perfil do contato e é usada para segmentação/relatórios.
  const tagId = await getOrCreateTagId(baseUrl, apiKey, LEAD_TAG_NAME);
  await tagContact(baseUrl, apiKey, contactId, tagId);
}
