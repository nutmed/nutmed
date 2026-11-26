import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";
import { posNutricaoDePrecisao } from "@/content/pos-nutricao-de-precisao";
import { posNutricaoClinica } from "@/content/pos-nutricao-clinica";
import { posNutricaoEsportiva } from "@/content/pos-nutricao-esportiva";

// Uma entrada por LP. Ao criar uma LP nova, inclua o curso aqui.
const courses = [posNutricaoDePrecisao, posNutricaoClinica, posNutricaoEsportiva];

export default function sitemap(): MetadataRoute.Sitemap {
  return courses.map((c) => ({
    url: `${SITE_URL}/${c.slug}`,
    changeFrequency: "weekly",
    priority: 1,
  }));
}
