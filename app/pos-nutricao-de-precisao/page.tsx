import type { Metadata } from "next";
import CourseLanding from "@/components/CourseLanding";
import { activeCampaign } from "@/lib/campaign";
import { ORGANIZATION, SITE_URL } from "@/lib/site";
import { posNutricaoDePrecisao as course } from "@/content/pos-nutricao-de-precisao";

// A imagem de compartilhamento vem de ./opengraph-image.tsx (Next inclui sozinho em og:image e twitter:image).
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
  twitter: {
    card: "summary_large_image",
    title: course.seo.title,
    description: course.seo.description,
  },
};

// Dados estruturados (schema.org) para o Google entender que a página é um curso.
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Course",
  name: "Pós-graduação em Nutrição de Precisão Funcional e Fitoterapia",
  description: course.seo.description,
  url: `${SITE_URL}/${course.slug}`,
  inLanguage: "pt-BR",
  educationalCredentialAwarded: "Pós-graduação lato sensu",
  audience: { "@type": "EducationalAudience", educationalRole: "Nutricionistas" },
  provider: ORGANIZATION,
  hasCourseInstance: {
    "@type": "CourseInstance",
    courseMode: ["Onsite", "Online"],
    startDate: "2027-03-13",
    courseWorkload: "PT460H",
    location: {
      "@type": "Place",
      name: "NutMed · Centro do Rio de Janeiro",
      address: ORGANIZATION.address,
    },
  },
};

// Notas internas ("A confirmar" etc.) só aparecem com NEXT_PUBLIC_SHOW_PENDING=true.
const showPending = process.env.NEXT_PUBLIC_SHOW_PENDING === "true";

// A página é estática, mas é regenerada a cada 5 minutos: quando a campanha vence,
// a versão sem Black entra no ar sozinha, sem novo deploy.
export const revalidate = 300;

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <CourseLanding course={course} campaign={activeCampaign(course)} showPending={showPending} />
    </>
  );
}
