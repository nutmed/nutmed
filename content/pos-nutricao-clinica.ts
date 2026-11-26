import type { Course } from "./types";

// Fontes (lidas em 25/11/2026): nutmed.com.br/cursos/pos-graduacao-nutricao-clinica-e-metabolismo/ (online)
// e nutmed.com.br/cursos/pos-graduacao-presencial-em-nutricao-clinica/ (presencial 3 em 1).
// Nome novo do curso (lista da NutMed): Nutrição Clínica Ambulatorial e Hospitalar. A LP apresenta as duas modalidades
// (decisão da Juliana em 25/11/2026). Turma online com início em 03/02/2027; data da presencial a confirmar.
// Itens listados em pendingNotes ainda precisam de confirmação da NutMed.

export const posNutricaoClinica: Course = {
  slug: "pos-nutricao-clinica",
  theme: "clinical",
  startLabel: "fevereiro (online)",
  ctaImage: "/img/turma-evento-provisoria.jpg",
  rdConversionId: "Pós Nutrição Clínica Ambulatorial e Hospitalar",
  seo: {
    title: "Pós em Nutrição Clínica Ambulatorial e Hospitalar | NutMed",
    description:
      "Pós para nutricionistas, presencial 3 em 1 no Rio ou 100% online, do hospital ao consultório. Turma online começa em 03/02/2027. Reconhecida pelo MEC.",
  },
  og: {
    kicker: "Pós-graduação · Turma 2027",
    title: "Pós em Nutrição Clínica",
    highlight: "Ambulatorial e Hospitalar",
    footer: "Presencial ou online · Reconhecida pelo MEC",
    image: "/img/og/clinica-og.jpg",
  },
  tape: "Inscrições abertas · Turma 2027 · Vagas limitadas",
  // Black NutMed: sai do ar sozinha depois de endsAt (mesma campanha da LP de Precisão).
  campaign: {
    slug: "black-nutmed-2026",
    endsAt: "2026-11-30T23:59:59-03:00",
    bar: { text: "Black NutMed: condição especial para a Turma 2027", cta: "Fale com a equipe" },
    tape: "Black NutMed · Oferta por tempo limitado",
    ticket: { label: "Descontos especiais", text: "Condição de Black válida até 30/11" },
    formNote: "Receba a grade completa, os valores e a condição especial da Black NutMed para a Turma 2027.",
  },
  badge: {
    ring: "PRESENCIAL • AO VIVO • ONLINE • NUTMED •",
    strong: "Você",
    text: "escolhe",
    label: "Presencial ou online: você escolhe",
  },
  featuresTitle: "Prática, flexibilidade e docentes por perto",
  cta: { pill: "Presencial ou online", title: "Nutrição Clínica", highlight: "Ambulatorial e Hospitalar" },
  hero: {
    eyebrow: "Pós-graduação · Turma 2027",
    modality: { before: "", strong: "2", after: "modalidades" },
    title: "Pós em Nutrição Clínica",
    highlight: "Ambulatorial e Hospitalar",
    subtitle:
      "Conduza com segurança a terapia nutricional do paciente, do leito hospitalar ao consultório, com base em bioquímica, fisiopatologia e exames.",
    chips: [
      { icon: "pin", label: "Presencial 3 em 1 no Centro do Rio" },
      { icon: "globe", label: "Ou 100% online, no seu ritmo" },
      { icon: "calendar", label: "Turma online: início 03/02/2027" },
      { icon: "clinic", label: "Hospital, ambulatório e consultório" },
    ],
    seals: ["Reconhecida pelo MEC"],
    image: "/img/nutricao-clinica-hospital.jpg",
    imageAlt: "Nutricionista levando a refeição a uma paciente em ambiente de saúde",
  },
  stats: [
    { value: "2", label: "modalidades à sua escolha" },
    { value: "20+", label: "temas de terapia nutricional" },
    { value: "460h+", label: "de carga horária" },
    { value: "15 mil+", label: "alunos formados desde 2005" },
  ],
  topics: [
    "Terapia enteral e parenteral",
    "Paciente crítico",
    "Exames laboratoriais",
    "Oncologia",
    "Doenças renais",
    "Obesidade e bariátrica",
    "Geriatria e home care",
    "Comportamento alimentar",
  ],
  audience: {
    title: "Para nutricionistas que querem atuar com segurança na clínica",
    intro:
      "Curso exclusivo para nutricionistas formados que querem dominar a terapia nutricional nas principais doenças e atender com confiança no hospital, no ambulatório, no consultório e em home care.",
    bullets: [
      "Avaliar o estado nutricional e interpretar exames laboratoriais para decidir a conduta",
      "Indicar e acompanhar terapia nutricional enteral e parenteral, inclusive no paciente crítico",
      "Montar a dietoterapia de doenças cardiovasculares, renais, hepáticas, oncológicas e do diabetes",
      "Considerar interações entre fármacos e nutrientes em cada prescrição",
      "Na presencial, atender pacientes reais na clínica-escola, com supervisão de docente",
    ],
  },
  hook: {
    icon: "clinic",
    kicker: "Hospital · ambulatório · consultório",
    title: "Uma pós para todos os cenários da nutrição clínica",
    text: "Da UTI ao atendimento no consultório, a pós cobre a terapia nutricional nas principais doenças, com a base bioquímica e farmacológica que sustenta cada decisão. Você escolhe fazer na sede da NutMed, com prática na clínica-escola, ou 100% online.",
    stat: { value: "2", label: "modalidades, o mesmo conteúdo clínico" },
  },
  modules: {
    title: "O que você vai aprender",
    intro: "Da bioquímica à conduta no hospital e no consultório, em seis grandes eixos. A grade completa você recebe da nossa equipe.",
    groups: [
      {
        icon: "book",
        title: "Bases e avaliação",
        summary: "Bioquímica, avaliação nutricional, exames e interação droga-nutriente.",
        items: [
          "Bioquímica e metabolismo de macro e micronutrientes",
          "Avaliação e diagnóstico do estado nutricional e interpretação de exames laboratoriais",
          "Farmacologia e interação droga-nutrientes",
        ],
      },
      {
        icon: "clinic",
        title: "Terapia nutricional hospitalar",
        summary: "Nutrição enteral e parenteral, imunomodulação e paciente crítico.",
        items: [
          "Terapia nutricional enteral e parenteral, legislação e imunomodulação",
          "Terapia nutricional no paciente crítico",
        ],
      },
      {
        icon: "lab",
        title: "Doenças crônicas e metabólicas",
        summary: "Cardiovasculares, diabetes, tireoide, rins, obesidade e cirurgia bariátrica.",
        items: [
          "Doenças cardiovasculares, diabetes mellitus e tireoide",
          "Doenças renais",
          "Obesidade e cirurgia bariátrica",
        ],
      },
      {
        icon: "file",
        title: "Sistemas e condições clínicas",
        summary: "Trato gastrointestinal, câncer, HIV, doenças pulmonares, neurológicas e mais.",
        items: [
          "Doenças do trato gastrointestinal e glândulas anexas",
          "Câncer",
          "HIV/AIDS",
          "Doenças ósseas, pulmonares, neurológicas e reumatológicas",
          "Geriatria e home care",
        ],
      },
      {
        icon: "chat",
        title: "Comportamento e saúde mental",
        summary: "Transtornos alimentares, ansiedade, depressão e nutrição comportamental.",
        items: [
          "Transtornos do comportamento alimentar",
          "Ansiedade e depressão",
          "Nutrição comportamental",
          "Vegetarianismo",
        ],
      },
      {
        icon: "users",
        title: "Consultório e carreira",
        summary: "Personal diet, gastronomia clínica, marketing e pesquisa científica.",
        items: [
          "Marketing aplicado ao nutricionista e personal diet",
          "Gastronomia aplicada à nutrição clínica",
          "Metodologia da pesquisa científica",
        ],
      },
    ],
  },
  formats: {
    title: "Escolha como fazer a sua pós",
    intro: "O mesmo foco clínico, do hospital ao consultório, em dois formatos. A equipe ajuda você a escolher.",
    items: [
      {
        icon: "users",
        tag: "Presencial 3 em 1",
        title: "Na sede da NutMed, com prática na clínica-escola",
        text: "Aulas presenciais no Centro do Rio, transmitidas ao vivo e gravadas durante toda a pós.",
        facts: [
          "460h em 36 encontros quinzenais",
          "Turmas de semana ou de sábado, das 8h30 às 17h30",
          "Atendimento a pacientes reais com supervisão de docente",
          "Laboratório de Técnica Dietética e apostilas impressas",
        ],
      },
      {
        icon: "globe",
        tag: "100% online",
        title: "No seu ritmo, de qualquer lugar",
        text: "Aulas gravadas na plataforma da NutMed, disponível 24 horas, com encontros ao vivo com docentes.",
        facts: [
          "Início em 03/02/2027",
          "490h de carga horária",
          "Tira-dúvidas com docentes pelo chat da plataforma",
          "Nutripapo: encontros online e ao vivo com especialistas",
        ],
      },
    ],
  },
  features: [
    {
      icon: "users",
      title: "Docentes que estão no hospital",
      text: "Mestres e doutores que atuam em hospitais de referência do Rio, como o INCA e o HUCFF/UFRJ, e levam para a aula os casos que atendem no dia a dia. Nas duas modalidades.",
      image: "/img/clinica-docentes-hospital.jpg",
    },
    {
      icon: "live",
      title: "Nutripapo ao vivo",
      text: "Encontros online e ao vivo com docentes e especialistas para discutir casos e novidades, nas duas modalidades.",
    },
    {
      icon: "play",
      title: "Aulas gravadas",
      text: "Reveja as aulas quando quiser, no computador ou no celular, durante toda a pós.",
    },
    {
      icon: "badge",
      title: "Reconhecida pelo MEC",
      text: "Pós-graduação lato sensu da NutMed, com certificado registrado. TCC não obrigatório.",
    },
  ],
  modes: [
    { icon: "users", title: "Presencial" },
    { icon: "live", title: "Ao vivo" },
    { icon: "globe", title: "Online" },
  ],
  pendingNotes: [
    "Presencial: data de início da turma 2027, dias (semana/sábado) e se a grade de 460h segue igual com o nome novo",
    "Nome oficial e grade: o site ainda mostra 'Nutrição Clínica e Metabolismo'; confirmar se a grade mudou com o nome",
    "Duração: online 16 a 18 meses, presencial 15 a 18 meses (site diverge)",
    "Fotos originais (as atuais são provisórias)",
  ],
};
