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
  | "globe"
  | "pulse";

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
  /**
   * Tema dos elementos decorativos. "herbs" (padrão): ramos de ervas e folhas de vidro.
   * "clinical": estetoscópio, coração com batimento e soro em traço fino, cruz e coração de vidro.
   */
  theme?: "herbs" | "clinical";
  /** Data de início para o selo de vidro do CTA final, ex.: "13 de março" */
  startLabel?: string;
  /** Foto de fundo (desfocada) do CTA final */
  ctaImage?: string;
  /** Identificador da conversão no RD Station (aparece no histórico do lead). */
  rdConversionId: string;
  seo: { title: string; description: string };
  /**
   * Textos da imagem de compartilhamento (WhatsApp/redes).
   * Campos vazios usam o hero (eyebrow, title, highlight, início e selos).
   * `image` é a foto suave no fundo (JPEG ou PNG em /public, nunca WebP/AVIF): use uma versão mínima e
   * desfocada do hero em /img/og/ (ver CLAUDE.md), senão o PNG passa de 300 KB. Sem ela, só o degradê roxo.
   */
  og?: { kicker?: string; title?: string; highlight?: string; footer?: string; image?: string };
  /** Texto das fitas cruzadas do CTA final quando não há campanha no ar. */
  tape: string;
  /** Campanha com data de fim (ex.: Black NutMed). Depois de endsAt a LP volta sozinha para a versão fixa. */
  campaign?: Campaign;
  /**
   * Selo giratório ao lado do título do hero. Sem este campo usa o selo "Pacientes reais / clínica-escola".
   * `false` esconde o selo.
   */
  badge?: { ring: string; strong: string; text: string; label: string } | false;
  /** Título da seção de diferenciais. */
  featuresTitle?: string;
  /** Círculo de vidro do CTA final: tipo de pós e nome curto do curso. */
  cta?: { pill: string; title: string; highlight: string };
  hero: {
    eyebrow: string;
    /** Linha acima do card do título, ex.: Modalidade **3** em 1. Sem ela, mostra "Modalidade 3 em 1". */
    modality?: { before?: string; strong: string; after?: string };
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
  hook?: { kicker: string; title: string; text: string; icon?: IconName; stat?: Stat };
  modules: { title: string; intro: string; groups: ModuleGroup[] };
  /** Modalidades lado a lado (ex.: presencial e online). Aparece depois do conteúdo; no celular vira lista. */
  formats?: {
    title: string;
    intro?: string;
    items: { icon: IconName; tag: string; title: string; text: string; facts: string[] }[];
  };
  features: Feature[];
  modes: { icon: IconName; title: string }[];
  pendingNotes: string[];
};
