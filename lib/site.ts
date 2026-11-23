// Endereço público do subdomínio das LPs (canonical, Open Graph, sitemap).
export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL || "https://conteudo.nutmed.com.br").replace(/\/$/, "");

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
