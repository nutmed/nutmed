# NutMed · Landing pages

Landing pages de captação de leads da NutMed (Next.js 16, App Router), feitas sobre a base visual do template Edplus com a identidade da NutMed. Deploy na Vercel, no subdomínio `materiais.nutmed.com.br`.

## Rodar localmente

```bash
npm install
cp .env.example .env.local   # preencha as variáveis
npm run dev                  # http://localhost:3000/pos-nutricao-de-precisao
```

Sem `RD_STATION_API_KEY`, o formulário funciona normalmente e o lead só não é enviado ao RD (aparece um aviso no terminal).

## Estrutura

| Caminho | O que é |
|---|---|
| `content/<slug>.ts` | Todo o texto, dados e preços de uma LP |
| `app/<slug>/page.tsx` | Rota da LP (SEO + componente) |
| `components/CourseLanding.tsx` | Layout das seções, compartilhado entre as LPs |
| `components/LeadForm.tsx` | Formulário, máscara de WhatsApp, UTMs e evento `generate_lead` |
| `app/api/lead/route.ts` | Valida o lead e envia ao RD Station (servidor) |
| `lib/rdstation.ts` | Chamada à API de conversões do RD Station Marketing |
| `app/globals.css` | Tokens e estilos da marca |

### Nova LP

1. Copie `content/pos-nutricao-de-precisao.ts` para `content/<novo-slug>.ts` e troque o conteúdo (inclusive `rdConversionId`).
2. Copie `app/pos-nutricao-de-precisao/` para `app/<novo-slug>/` e aponte o import para o novo conteúdo.

## Integrações

**RD Station Marketing.** O formulário envia para `/api/lead`, que chama `POST https://api.rd.services/platform/conversions` com a chave pública em `RD_STATION_API_KEY`. Cada LP usa seu próprio `conversion_identifier` (ex.: `lp-pos-nutricao-de-precisao-2027`) e envia nome, e-mail, celular (+55), tags (`lp`, slug do curso, `perfil-<nutricionista|formando|estudante>`), consentimento LGPD e UTMs.

**Google Tag Manager.** Definido por `NEXT_PUBLIC_GTM_ID`. Depois de um envio aceito, o formulário faz:

```js
dataLayer.push({
  event: "generate_lead",
  form_id: "form-hero" | "form-final",
  lead_source: "landing_page",
  course_slug, course_name, lead_profile, conversion_identifier,
  utm_source, utm_medium, utm_campaign, ... // quando existirem na URL
});
```

No GTM: acionador "Evento personalizado" = `generate_lead`, ligado às tags de GA4 (evento recomendado `generate_lead`), Google Ads e Meta Pixel (`Lead`).

## Variáveis de ambiente (Vercel)

Veja `.env.example`. As notas internas ("A confirmar", origem das fotos) ficam escondidas; use `NEXT_PUBLIC_SHOW_PENDING=true` só para revisar.

## Campanhas com prazo (ex.: Black NutMed)

Cada LP tem uma versão fixa e, opcionalmente, um bloco `campaign` no arquivo de conteúdo (`content/<slug>.ts`) com `endsAt` (data e hora de fim, com fuso).
Enquanto a campanha está no ar, aparecem a barra do topo, o ticket acima do formulário, as fitas "oferta por tempo limitado" e o texto do formulário final.
Depois de `endsAt`, a página volta sozinha para a versão fixa em até 5 minutos (`revalidate = 300`), sem novo deploy.
Os leads recebidos durante a campanha ganham a tag da campanha no RD Station (ex.: `black-nutmed-2026`) e o parâmetro `campaign` no evento `generate_lead`.
Para a próxima campanha, basta trocar o bloco `campaign` e fazer o deploy.
