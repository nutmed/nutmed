import { courseOgImage, OG_SIZE } from "@/lib/og";
import { posNutricaoDePrecisao as course } from "@/content/pos-nutricao-de-precisao";

// Imagem de compartilhamento desta LP (gerada no build a partir do conteúdo do curso).
export const alt = course.seo.title;
export const size = OG_SIZE;
export const contentType = "image/png";

export default function OgImage() {
  return courseOgImage(course);
}
