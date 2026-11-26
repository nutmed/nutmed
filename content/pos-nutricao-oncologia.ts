import type { Course } from "./types";

// Fontes (lidas em 26/11/2026): nutmed.com.br/cursos/pos-graduacao-presencial-em-oncologia/ (presencial 3 em 1)
// e nutmed.com.br/cursos/pos-graduacao-online-em-nutricao-em-oncologia/ (online).
// Como nas outras LPs, as duas modalidades lado a lado.
// Turma online com início em 03/02/2027 (a caixa de inscrição do site ainda mostra 18/11/2026);
// presencial 2027 às terças, com início em 27/04/2027.
// Itens listados em pendingNotes ainda precisam de confirmação da NutMed.

export const posNutricaoOncologia: Course = {
  slug: "pos-nutricao-oncologia",
  theme: "onco",
  startLabel: "fevereiro (online)",
  ctaImage: "/img/turma-evento-provisoria.jpg",
  rdConversionId: "Pós Nutrição em Oncologia",
  seo: {
    title: "Pós em Nutrição em Oncologia | NutMed",
    description:
      "Pós para nutricionistas, presencial 3 em 1 no Rio ou 100% online, com docentes do INCA: da prevenção aos cuidados paliativos. Reconhecida pelo MEC.",
  },
  og: {
    kicker: "Pós-graduação · Turma 2027",
    title: "Pós em Nutrição",
    highlight: "em Oncologia",
    footer: "Presencial ou online · Reconhecida pelo MEC",
    image: "/img/og/oncologia-og.jpg",
  },
  tape: "Inscrições abertas · Turma 2027 · Vagas limitadas",
  // Black NutMed: sai do ar sozinha depois de endsAt (mesma campanha das outras LPs).
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
  // Selo embaixo do card: no canto de cima ele cobria o rosto da paciente na foto.
  badgePosition: "bottom",
  featuresTitle: "Docentes que estão no INCA e nos centros de referência",
  featuresGrid: true,
  cta: { pill: "Presencial ou online", title: "Nutrição", highlight: "em Oncologia" },
  hero: {
    eyebrow: "Pós-graduação · Turma 2027",
    modality: { before: "", strong: "2", after: "modalidades" },
    title: "Pós em Nutrição",
    highlight: "em Oncologia",
    subtitle:
      "Cuide do paciente oncológico em todas as fases, da prevenção ao tratamento, à sobrevivência e aos cuidados paliativos, com docentes que atuam no INCA e em centros de referência.",
    chips: [
      { icon: "pin", label: "Presencial 3 em 1 no Centro do Rio" },
      { icon: "globe", label: "Ou 100% online, no seu ritmo" },
      { icon: "calendar", label: "Turma online: início 03/02/2027" },
      { icon: "ribbon", label: "Adultos, idosos e pediatria" },
    ],
    seals: ["Reconhecida pelo MEC"],
    image: "/img/oncologia-consulta.jpg",
    imageAlt: "Nutricionista em consulta com paciente em tratamento oncológico",
  },
  stats: [
    { value: "2", label: "modalidades à sua escolha" },
    { value: "INCA", label: "no corpo docente" },
    { value: "460h+", label: "de carga horária" },
    { value: "15 mil+", label: "alunos formados desde 2005" },
  ],
  topics: [
    "Quimioterapia",
    "Radioterapia",
    "Imunoterapia",
    "Cirurgia oncológica",
    "TCTH",
    "Caquexia e sarcopenia",
    "Terapia nutricional",
    "Oncologia pediátrica",
    "Cuidados paliativos",
  ],
  audience: {
    title: "Para nutricionistas que querem atuar na oncologia",
    intro:
      "Curso exclusivo para nutricionistas formados que querem atender pacientes com câncer com segurança, no hospital, no ambulatório, na clínica de oncologia, no home care ou no consultório.",
    bullets: [
      "Avaliar o estado nutricional com ASG-PPP e identificar sarcopenia e caquexia",
      "Conduzir a nutrição durante quimio, radio, imuno e hormonioterapia e na cirurgia",
      "Prescrever terapia nutricional oral, enteral e parenteral",
      "Manejar sintomas de impacto nutricional e responder aos mitos sobre dieta e câncer",
      "Acompanhar sobreviventes, crianças e pacientes em cuidados paliativos",
    ],
  },
  hook: {
    icon: "heart",
    kicker: "Prevenção · tratamento · cuidado",
    title: "A nutrição faz diferença em cada fase do tratamento",
    text: "A pós cobre toda a jornada do paciente oncológico, com base em evidência e na rotina de quem atende. Você escolhe fazer na sede da NutMed, com aulas práticas e atendimento a pacientes reais na clínica-escola, ou 100% online.",
    stat: { value: "2", label: "modalidades, o mesmo cuidado com o paciente" },
  },
  modules: {
    title: "O que você vai aprender",
    intro: "Da prevenção aos cuidados paliativos, em seis grandes eixos. A grade completa você recebe da nossa equipe.",
    groups: [
      {
        icon: "dna",
        title: "Bases da oncologia",
        summary: "Carcinogênese, metabolismo tumoral e diagnóstico.",
        items: [
          "Carcinogênese, fatores de risco e de proteção",
          "Metabolismo tumoral e farmacologia",
          "Diagnóstico, exames laboratoriais e bases do tratamento",
        ],
      },
      {
        icon: "check",
        title: "Avaliação nutricional",
        summary: "ASG-PPP, sarcopenia, caquexia e necessidades nutricionais.",
        items: [
          "Triagem e avaliação nutricional com ASG-PPP",
          "Sarcopenia e caquexia no câncer",
          "Recomendações nutricionais e micronutrientes",
        ],
      },
      {
        icon: "pulse",
        title: "Nutrição no tratamento",
        summary: "Quimio, radio, imuno e hormonioterapia, cirurgia e TCTH.",
        items: [
          "Tratamentos clínico, radioterápico e cirúrgico",
          "Transplante de células-tronco hematopoiéticas (TCTH)",
          "Sintomas de impacto nutricional e dietas restritivas",
        ],
      },
      {
        icon: "clinic",
        title: "Terapia nutricional",
        summary: "Oral, enteral e parenteral, do paciente crítico à pediatria.",
        items: [
          "Terapia nutricional oral, enteral e parenteral",
          "Paciente crítico e oncologia pediátrica",
          "Técnica dietética aplicada à oncologia",
        ],
      },
      {
        icon: "leaf",
        title: "Prevenção e evidências",
        summary: "Compostos bioativos, microbiota, suplementação e mitos.",
        items: [
          "Compostos bioativos e quimioprevenção",
          "Microbiota, suplementação e fitoterapia",
          "Mitos sobre alimentação e câncer",
        ],
      },
      {
        icon: "users",
        title: "Cuidado integral",
        summary: "Sobreviventes, cuidados paliativos e equipe multiprofissional.",
        items: [
          "Estilo de vida, atividade física e sobreviventes",
          "Cuidados paliativos e home care",
          "Psico-oncologia e abordagem multiprofissional",
        ],
      },
    ],
  },
  formats: {
    title: "Escolha como fazer a sua pós",
    intro: "O mesmo conteúdo em dois formatos. A equipe ajuda você a escolher.",
    items: [
      {
        icon: "users",
        tag: "Presencial 3 em 1",
        title: "Na sede da NutMed, com aulas práticas",
        text: "Aulas presenciais no Centro do Rio, transmitidas ao vivo e gravadas durante toda a pós.",
        facts: [
          "Início em 27/04/2027",
          "460h em encontros quinzenais, às terças, das 8h30 às 17h30",
          "Atendimento supervisionado a pacientes reais na clínica-escola",
          "Laboratório de Técnica Dietética aplicada à oncologia",
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
      title: "Docentes que estão no INCA",
      text: "Nutricionistas, oncologistas e equipe multiprofissional do INCA e de centros de referência. Coordenação da Profa. Dra. Emanuelly Wiegert.",
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
    "Online: o site mostra início 03/02/2027 na seção de investimento e 18/11/2026 na caixa de inscrição",
    "Presencial: o site diz terças quinzenais no topo e semanalmente em outro bloco",
    "Fotos originais (as atuais são do Magnific)",
  ],
};
