import type { Metadata } from "next";
import type { Course } from "@/content/types";
import { OG_CONTENT_TYPE, OG_SIZE } from "@/lib/og";

// Metadados completos de uma LP: título, descrição, canonical, Open Graph e Twitter/X.
// A imagem (og:image e twitter:image) é /og/<slug>.jpg, gerada por app/og/[file]/route.ts a partir do curso.
// REGRA: toda LP usa buildCourseMetadata(course) no page.tsx. Ver CLAUDE.md.
export function buildCourseMetadata(course: Course): Metadata {
  const { title, description } = course.seo;
  const path = `/${course.slug}`;
  const image = { url: `/og/${course.slug}.jpg`, ...OG_SIZE, type: OG_CONTENT_TYPE, alt: title };
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
      images: [image],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
  };
}
