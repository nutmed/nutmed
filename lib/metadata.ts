import type { Metadata } from "next";
import type { Course } from "@/content/types";

// Metadados completos de uma LP: título, descrição, canonical, Open Graph e Twitter/X.
// A imagem (og:image e twitter:image) vem do arquivo app/<slug>/opengraph-image.tsx, que o Next inclui sozinho.
// REGRA: toda LP usa buildCourseMetadata(course) no page.tsx. Ver CLAUDE.md.
export function buildCourseMetadata(course: Course): Metadata {
  const { title, description } = course.seo;
  const path = `/${course.slug}`;
  return {
    title,
    description,
    alternates: { canonical: path },
    robots: { index: true, follow: true },
    openGraph: {
      title,
      description,
      url: path,
      siteName: "NutMed",
      locale: "pt_BR",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}
