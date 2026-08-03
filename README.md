# IPDCON 2026 — Landing Page

Landing page temporária de captação de cadastros para o IPDCON 2026 (Grupo All Party), construída a partir do design no Figma.

## Stack

- Next.js 15 (App Router) + TypeScript
- Tailwind CSS
- Prisma ORM + Postgres
- Integração com ActiveCampaign (REST v3)
- Deploy: Vercel

## Rodando localmente

```bash
npm install
cp .env.example .env.local   # preencha as variáveis (veja abaixo)
npx prisma migrate dev       # cria as tabelas no banco configurado em DATABASE_URL
npm run dev                  # http://localhost:3000
```

## Variáveis de ambiente

Veja `.env.example`. Nunca commitar valores reais.

| Variável | Descrição |
|---|---|
| `DATABASE_URL` | Connection string do Postgres (Vercel Postgres, Neon, Supabase...) |
| `ACTIVECAMPAIGN_URL` | URL base da conta ActiveCampaign, ex: `https://sua-conta.api-us1.com` |
| `ACTIVECAMPAIGN_API_KEY` | API Token da conta (Settings → Developer) |
| `ACTIVECAMPAIGN_TAG_NAME` | *(opcional)* Nome da tag aplicada a todo contato vindo deste formulário, usada para identificar/segmentar os leads do IPDCON no ActiveCampaign. Padrão: `IPDCON 2026 - Formulário`. |
| `NEXT_PUBLIC_SITE_URL` | URL pública final do site, usada em metadata/OG/sitemap/robots |
| `INTERNAL_API_KEY` | Chave secreta exigida por `GET /api/registrations` (ver abaixo). Gere um valor longo e aleatório, ex: `openssl rand -hex 32`. |

## Fluxo de cadastro (`/api/cadastro`)

1. Valida o payload (`nome`, `email`, `telefone` obrigatórios; `empresa`, `cargo`, `segmento`, `autorizo` opcionais).
2. Salva o registro no Postgres via Prisma (`Registration`) — isso é garantido antes de qualquer chamada externa.
3. Tenta sincronizar o contato com o ActiveCampaign: `POST /api/3/contact/sync` e aplica a tag de lead (criando-a se ainda não existir) via `POST /api/3/tags` + `POST /api/3/contactTags` — tudo isolado em `try/catch`.
4. Se a sincronização falhar, o registro permanece salvo com `syncedToAC = false` (para reprocessamento manual/posterior) e a resposta ao usuário continua sendo de sucesso — o cadastro nunca é perdido por causa de uma indisponibilidade do CRM.

## Listagem de inscritos (`GET /api/registrations`)

Endpoint para o sistema interno consumir todos os cadastros (ex: montar uma página de confirmados). Retorna todos os registros da tabela `Registration`, mais recentes primeiro.

Protegido por header `Authorization: Bearer <INTERNAL_API_KEY>` — sem o header correto retorna `401`. Nunca exponha essa chave no frontend/client-side; consuma este endpoint só a partir de outro servidor/sistema interno.

```bash
curl -H "Authorization: Bearer $INTERNAL_API_KEY" https://seu-dominio/api/registrations
```

Resposta:

```json
{ "registrations": [ { "id": "...", "nome": "...", "email": "...", "telefone": "...", "empresa": null, "cargo": null, "segmento": "...", "autorizo": true, "syncedToAC": true, "createdAt": "2026-08-15T19:00:00.000Z" } ] }
```

## Deploy na Vercel

1. Importe o repositório na Vercel.
2. Configure as variáveis de ambiente do item acima em **Settings → Environment Variables** (Production e Preview).
3. Provisione o Postgres (Vercel Postgres, Neon ou Supabase) e aponte `DATABASE_URL` para ele.
4. Aplique as migrations no banco de produção — a Vercel não roda `prisma migrate` automaticamente:
   - Manualmente: `DATABASE_URL="<url-de-produção>" npx prisma migrate deploy`, ou
   - Ajustando o Build Command do projeto na Vercel para `prisma migrate deploy && next build`.
5. Deploy.

## Estrutura

```
app/                # rotas (App Router), layout, metadata, sitemap, robots, OG image
app/api/cadastro/   # API route do formulário
components/         # seções da landing page (fiéis ao design do Figma)
lib/                # cliente Prisma e integração ActiveCampaign
prisma/              # schema + migrations
```
