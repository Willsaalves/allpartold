type ActiveCampaignInput = {
  nome: string;
  email: string;
  telefone: string;
};

const AC_LIST_SUBSCRIBED_STATUS = 1;

function splitName(nome: string) {
  const [firstName, ...rest] = nome.trim().split(/\s+/);
  return { firstName: firstName ?? "", lastName: rest.join(" ") };
}

export async function syncContactToActiveCampaign(input: ActiveCampaignInput): Promise<void> {
  const baseUrl = process.env.ACTIVECAMPAIGN_URL;
  const apiKey = process.env.ACTIVECAMPAIGN_API_KEY;
  const listId = process.env.ACTIVECAMPAIGN_LIST_ID;

  if (!baseUrl || !apiKey || !listId) {
    throw new Error("Variáveis de ambiente do ActiveCampaign não configuradas");
  }

  const { firstName, lastName } = splitName(input.nome);

  const syncRes = await fetch(`${baseUrl}/api/3/contact/sync`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Api-Token": apiKey,
    },
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

  const listRes = await fetch(`${baseUrl}/api/3/contactLists`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Api-Token": apiKey,
    },
    body: JSON.stringify({
      contactList: {
        list: listId,
        contact: contactId,
        status: AC_LIST_SUBSCRIBED_STATUS,
      },
    }),
  });

  if (!listRes.ok) {
    throw new Error(`ActiveCampaign contactLists falhou: ${listRes.status} ${await listRes.text()}`);
  }
}
