import CourseLanding from "@/components/CourseLanding";
import { activeCampaign } from "@/lib/campaign";
import { buildCourseMetadata } from "@/lib/metadata";
import { ORGANIZATION, SITE_URL } from "@/lib/site";
import { posNutricaoEsportiva as course } from "@/content/pos-nutricao-esportiva";

// Título, descrição, canonical, Open Graph e Twitter. A imagem é /og/<slug>.jpg (lib/courses.ts).
export const metadata = buildCourseMetadata(course);

// Dados estruturados (schema.org) para o Google entender que a página é um curso.
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Course",
  name: "Pós-graduação em Nutrição Esportiva",
  description: course.seo.description,
  url: `${SITE_URL}/${course.slug}`,
  inLanguage: "pt-BR",
  educationalCredentialAwarded: "Pós-graduação lato sensu",
  audience: { "@type": "EducationalAudience", educationalRole: "Nutricionistas" },
  provider: ORGANIZATION,
  hasCourseInstance: [
    {
      "@type": "CourseInstance",
      courseMode: "Online",
      startDate: "2027-02-03",
      courseWorkload: "PT490H",
    },
    {
      "@type": "CourseInstance",
      courseMode: ["Onsite", "Online"],
      courseWorkload: "PT460H",
      location: {
        "@type": "Place",
        name: "NutMed · Centro do Rio de Janeiro",
        address: ORGANIZATION.address,
      },
    },
  ],
};

// Notas internas ("A confirmar" etc.) só aparecem com NEXT_PUBLIC_SHOW_PENDING=true.
const showPending = process.env.NEXT_PUBLIC_SHOW_PENDING === "true";

// Regenerada a cada 5 minutos: quando a campanha vence, a versão sem Black entra no ar sozinha.
export const revalidate = 300;

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <CourseLanding course={course} campaign={activeCampaign(course)} showPending={showPending} />
    </>
  );
}
