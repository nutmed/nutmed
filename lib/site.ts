// Endereço público das LPs (canonical, Open Graph, sitemap, robots, JSON-LD), nesta ordem:
// 1) NEXT_PUBLIC_SITE_URL, quando cadastrada (domínio próprio);
// 2) domínio de produção que a Vercel define sozinha (VERCEL_PROJECT_PRODUCTION_URL, ex.: nutmed.vercel.app);
// 3) endereço do deploy atual na Vercel (VERCEL_URL);
// 4) domínio definitivo.
function resolveSiteUrl(): string {
  const env = process.env;
  const url =
    env.NEXT_PUBLIC_SITE_URL ||
    (env.VERCEL_PROJECT_PRODUCTION_URL && `https://${env.VERCEL_PROJECT_PRODUCTION_URL}`) ||
    (env.VERCEL_URL && `https://${env.VERCEL_URL}`) ||
    "https://conteudo.nutmed.com.br";
  return url.replace(/\/$/, "");
}

export const SITE_URL = resolveSiteUrl();

export const ORGANIZATION = {
  "@type": "EducationalOrganization",
  name: "NutMed",
  legalName: "PRONUTRI JFC Treinamento Profissional Ltda",
  url: "https://nutmed.com.br",
  telephone: "+55-21-2240-4217",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Rua da Quitanda, 187",
    addressLocality: "Rio de Janeiro",
    addressRegion: "RJ",
    addressCountry: "BR",
  },
} as const;
