import { OG_SIZE, renderOgImage } from "@/lib/og";

// Imagem de compartilhamento padrão (marca NutMed) para qualquer página sem uma própria.
// Cada LP tem a sua em /og/<slug>.jpg (ver CLAUDE.md).
export const alt = "NutMed · Cursos de Nutrição";
export const size = OG_SIZE;
export const contentType = "image/png";

export default function OgImage() {
  return renderOgImage({
    kicker: "Cursos de Nutrição",
    title: "NutMed",
    highlight: "Pós-graduação para nutricionistas",
    footer: "Mais de 15 mil nutricionistas formados desde 2005",
  });
}
