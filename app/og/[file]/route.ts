import { courses } from "@/lib/courses";
import { courseOgImage } from "@/lib/og";

// Imagem de compartilhamento de cada LP num endereço fixo terminado em .jpg (/og/<slug>.jpg),
// gerada no build. O WhatsApp não mostrava a foto com o endereço padrão do Next
// (/<slug>/opengraph-image?<hash>), então as LPs usam este. Ver CLAUDE.md.
export const dynamic = "force-static";
export const dynamicParams = false;

export function generateStaticParams() {
  return courses.map((c) => ({ file: `${c.slug}.jpg` }));
}

export async function GET(_req: Request, { params }: { params: Promise<{ file: string }> }) {
  const { file } = await params;
  const course = courses.find((c) => `${c.slug}.jpg` === file);
  if (!course) return new Response("Not found", { status: 404 });
  const res = await courseOgImage(course);
  res.headers.set("Cache-Control", "public, max-age=3600, s-maxage=86400");
  return res;
}
