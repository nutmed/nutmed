import { courseOgImage, OG_CONTENT_TYPE, OG_SIZE } from "@/lib/og";
import { posNutricaoMaternoInfantil as course } from "@/content/pos-nutricao-materno-infantil";

// Imagem de compartilhamento desta LP (gerada no build a partir do conteúdo do curso).
export const alt = course.seo.title;
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default function OgImage() {
  return courseOgImage(course);
}
