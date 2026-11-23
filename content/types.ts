// Estrutura de conteúdo compartilhada por todas as LPs.
// Cada LP nova = um arquivo em content/ + uma pasta em app/<slug>/page.tsx.

export type Stat = { value: string; label: string };

export type ModuleGroup = { icon?: IconName; title: string; summary: string; items: string[] };

export type Feature = { icon: IconName; title: string; text: string; image?: string };

export type IconName =
  | "calendar"
  | "clock"
  | "book"
  | "pin"
  | "users"
  | "video"
  | "live"
  | "play"
  | "clinic"
  | "lab"
  | "chat"
  | "file"
  | "badge"
  | "leaf"
  | "dna"
  | "check"
  | "arrow"
  | "star"
  | "phone"
  | "whatsapp"
  | "globe";

export type Campaign = {
  /** Vira tag no RD Station e parâmetro no dataLayer, ex.: "black-nutmed-2026" */
  slug: string;
  /** Data e hora de fim com fuso, ex.: "2026-11-30T23:59:59-03:00" */
  endsAt: string;
  bar: { text: string; cta: string };
  tape: string;
  ticket: { label: string; text: string };
  formNote: string;
};

export type Course = {
  slug: string;
  /** Data de início para o selo de vidro do CTA final, ex.: "13 de março" */
  startLabel?: string;
  /** Foto de fundo (desfocada) do CTA final */
  ctaImage?: string;
  /** Identificador da conversão no RD Station (aparece no histórico do lead). */
  rdConversionId: string;
  seo: { title: string; description: string };
  /** Texto das fitas cruzadas do CTA final quando não há campanha no ar. */
  tape: string;
  /** Campanha com data de fim (ex.: Black NutMed). Depois de endsAt a LP volta sozinha para a versão fixa. */
  campaign?: Campaign;
  hero: {
    eyebrow: string;
    title: string;
    highlight: string;
    subtitle: string;
    chips: { icon: IconName; label: string }[];
    seals: string[];
    image?: string;
    imageAlt?: string;
  };
  stats: Stat[];
  /** Faixa animada de temas logo abaixo dos números. */
  topics?: string[];
  audience: { title: string; intro: string; bullets: string[] };
  hook?: { kicker: string; title: string; text: string };
  modules: { title: string; intro: string; groups: ModuleGroup[] };
  features: Feature[];
  modes: { icon: IconName; title: string }[];
  pendingNotes: string[];
};
