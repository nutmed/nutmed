import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";
import { courses } from "@/lib/courses";

// Uma entrada por LP (lista em lib/courses.ts).
export default function sitemap(): MetadataRoute.Sitemap {
  return courses.map((c) => ({
    url: `${SITE_URL}/${c.slug}`,
    changeFrequency: "weekly",
    priority: 1,
  }));
}
