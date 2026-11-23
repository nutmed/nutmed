import type { Metadata } from "next";
import CourseLanding from "@/components/CourseLanding";
import { activeCampaign } from "@/lib/campaign";
import { posNutricaoDePrecisao as course } from "@/content/pos-nutricao-de-precisao";

export const metadata: Metadata = {
  title: course.seo.title,
  description: course.seo.description,
  alternates: { canonical: `/${course.slug}` },
  openGraph: {
    title: course.seo.title,
    description: course.seo.description,
    url: `/${course.slug}`,
    siteName: "NutMed",
    locale: "pt_BR",
    type: "website",
  },
};

// Notas internas ("A confirmar" etc.) só aparecem com NEXT_PUBLIC_SHOW_PENDING=true.
const showPending = process.env.NEXT_PUBLIC_SHOW_PENDING === "true";

// A página é estática, mas é regenerada a cada 5 minutos: quando a campanha vence,
// a versão sem Black entra no ar sozinha, sem novo deploy.
export const revalidate = 300;

export default function Page() {
  return <CourseLanding course={course} campaign={activeCampaign(course)} showPending={showPending} />;
}
