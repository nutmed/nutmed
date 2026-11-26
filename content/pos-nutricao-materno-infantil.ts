import type { Course } from "./types";

// Fontes (lidas em 26/11/2026): nutmed.com.br/cursos/pos-graduacao-presencial-em-nutricao-na-obstetricia-pediatria-e-adolescencia/
// (presencial 3 em 1, "Pós-graduação em Nutrição Materno-Infantil") e nutmed.com.br/cursos/pos-graduacao-online-em-nutricao-obstetricia/ (online).
// Como nas LPs de Clínica e Esportiva, a LP apresenta as duas modalidades lado a lado.
// Turma online com início em 03/02/2027 (a caixa de inscrição do site ainda mostra 18/11/2026);
// presencial 2027 às quartas, com início em 19/05/2027.
// Itens listados em pendingNotes ainda precisam de confirmação da NutMed.

export const posNutricaoMaternoInfantil: Course = {
  slug: "pos-nutricao-materno-infantil",
  theme: "maternal",
  startLabel: "fevereiro (online)",
  ctaImage: "/img/turma-evento-provisoria.jpg",
  rdConversionId: "Pós Nutrição Materno Infantil",
  seo: {
    title: "Pós em Nutrição Materno-Infantil | NutMed",
    description:
      "Pós para nutricionistas, presencial 3 em 1 no Rio ou 100% online: gestação, lactação, infância e adolescência. Reconhecida pelo MEC.",
  },
  og: {
    kicker: "Pós-graduação · Turma 2027",
    title: "Pós em Nutrição",
    highlight: "Materno-Infantil",
    footer: "Presencial ou online · Reconhecida pelo MEC",
    image: "/img/og/materno-og.jpg",
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
  featuresTitle: "Docentes de maternidades e hospitais de referência",
  featuresGrid: true,
  cta: { pill: "Presencial ou online", title: "Nutrição", highlight: "Materno-Infantil" },
  hero: {
    eyebrow: "Pós-graduação · Turma 2027",
    modality: { before: "", strong: "2", after: "modalidades" },
    title: "Pós em Nutrição",
    highlight: "Materno-Infantil",
    subtitle:
      "Acompanhe com segurança cada fase, da fertilidade e da gestação à amamentação, à introdução alimentar e à adolescência, com docentes que atuam em maternidades e hospitais de referência.",
    chips: [
      { icon: "pin", label: "Presencial 3 em 1 no Centro do Rio" },
      { icon: "globe", label: "Ou 100% online, no seu ritmo" },
      { icon: "calendar", label: "Turma online: início 03/02/2027" },
      { icon: "heart", label: "Gestação, lactação, infância e adolescência" },
    ],
    seals: ["Reconhecida pelo MEC"],
    image: "/img/materno-gestante-consulta.jpg",
    imageAlt: "Gestante em consulta com a nutricionista no consultório",
  },
  stats: [
    { value: "2", label: "modalidades à sua escolha" },
    { value: "4", label: "fases, da gestação à adolescência" },
    { value: "360h+", label: "de carga horária" },
    { value: "15 mil+", label: "alunos formados desde 2005" },
  ],
  topics: [
    "Fertilidade",
    "Pré-natal",
    "Gestação de risco",
    "Aleitamento materno",
    "Introdução alimentar",
    "Seletividade alimentar",
    "Alergias alimentares",
    "Obesidade infantil",
    "TEA e TDAH",
  ],
  audience: {
    title: "Para nutricionistas que querem cuidar de mães e crianças",
    intro:
      "Curso exclusivo para nutricionistas formados que querem atender gestantes, lactantes, crianças e adolescentes com segurança, no consultório, na maternidade, no hospital ou na creche.",
    bullets: [
      "Acompanhar a nutrição da pré-concepção ao pós-parto, incluindo a gestação de risco",
      "Orientar o aleitamento materno e conduzir a introdução alimentar",
      "Avaliar o crescimento e prescrever para crianças e adolescentes",
      "Conduzir alergias, refluxo, seletividade, obesidade e transtornos alimentares na infância",
      "Atender crianças com TEA, TDAH e síndrome de Down e estruturar o consultório",
    ],
  },
  hook: {
    icon: "heart",
    kicker: "Gestação · amamentação · infância",
    title: "Os primeiros mil dias e tudo o que vem depois",
    text: "A pós cobre toda a jornada materno-infantil, com base em evidência e na rotina de quem atende. Você escolhe fazer na sede da NutMed, com aulas práticas e atendimento a gestantes, lactantes e crianças na clínica-escola, ou 100% online.",
    stat: { value: "2", label: "modalidades, o mesmo cuidado com mães e crianças" },
  },
  modules: {
    title: "O que você vai aprender",
    intro: "Da fertilidade à adolescência, em seis grandes eixos. A grade completa você recebe da nossa equipe.",
    groups: [
      {
        icon: "dna",
        title: "Fertilidade e pré-natal",
        summary: "Fisiologia reprodutiva, assistência pré-natal e micronutrientes.",
        items: [
          "Fisiologia reprodutiva, nutrição e fertilidade",
          "Endometriose, SOP e programação metabólica",
          "Assistência nutricional pré-natal e carências na gestação",
        ],
      },
      {
        icon: "pulse",
        title: "Gestação de risco",
        summary: "Diabetes, síndromes hipertensivas, obesidade e situações especiais.",
        items: [
          "Diabetes, hipotireoidismo e síndromes hipertensivas na gestação",
          "Obesidade e cirurgia bariátrica na gestação",
          "Gestante adolescente, gemelar e doença celíaca",
        ],
      },
      {
        icon: "heart",
        title: "Lactação e aleitamento",
        summary: "Nutrição da lactante, amamentação e alimentação complementar.",
        items: [
          "Nutrição na lactação",
          "Aleitamento materno, com aula prática no presencial",
          "Introdução e alimentação complementar",
        ],
      },
      {
        icon: "check",
        title: "Pediatria e adolescência",
        summary: "Avaliação, necessidades nutricionais e alimentação em cada idade.",
        items: [
          "Avaliação nutricional em pediatria e adolescência",
          "Prematuro, CIUR e terapia nutricional em pediatria",
          "Alimentação do pré-escolar, do escolar e do adolescente",
        ],
      },
      {
        icon: "clinic",
        title: "Condições clínicas na infância",
        summary: "Alergias, seletividade, obesidade e neurodesenvolvimento.",
        items: [
          "Alergias alimentares, refluxo e doença celíaca",
          "Seletividade, obesidade e transtornos alimentares",
          "TEA, TDAH e síndrome de Down",
        ],
      },
      {
        icon: "users",
        title: "Consultório e carreira",
        summary: "Fitoterapia, nutrição em creches, comportamento e gestão.",
        items: [
          "Fitoterapia na gestação, lactação e pediatria",
          "Nutrição em creches e nutrição comportamental",
          "Marketing e montagem de consultório",
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
          "Início em 19/05/2027",
          "360h em encontros quinzenais, às quartas, das 8h30 às 17h30",
          "Atendimento supervisionado a gestantes, lactantes e crianças na clínica-escola",
          "Aula prática de aleitamento e Laboratório de Técnica Dietética",
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
      title: "Docentes que estão nas maternidades",
      text: "Mestres e doutores pela UFRJ, UERJ e Fiocruz que atuam em maternidades, pediatria e amamentação. Coordenação da Profa. Dra. Jamile Nogueira.",
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
    "Duração: online 16 a 18 meses, presencial 15 a 16 meses",
    "Fotos originais (as atuais são do Magnific)",
  ],
};
