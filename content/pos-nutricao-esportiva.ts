import type { Course } from "./types";

// Fontes (lidas em 26/11/2026): nutmed.com.br/cursos/pos-graduacao-em-nutricao-esportiva/ (presencial 3 em 1)
// e nutmed.com.br/cursos/pos-graduacao-online-em-nutricao-esportiva/ (online).
// Como na LP de Nutrição Clínica, a LP apresenta as duas modalidades lado a lado.
// Turma online com início em 03/02/2027; data da presencial 2027 a confirmar (o site ainda mostra a turma 2026, às quintas).
// Itens listados em pendingNotes ainda precisam de confirmação da NutMed.

export const posNutricaoEsportiva: Course = {
  slug: "pos-nutricao-esportiva",
  theme: "sport",
  startLabel: "fevereiro (online)",
  ctaImage: "/img/turma-evento-provisoria.jpg",
  rdConversionId: "Pós Nutrição Esportiva",
  seo: {
    title: "Pós em Nutrição Esportiva | NutMed",
    description:
      "Pós para nutricionistas, presencial 3 em 1 no Rio ou 100% online: avaliação, prescrição e suplementação no esporte. Reconhecida pelo MEC.",
  },
  og: {
    kicker: "Pós-graduação · Turma 2027",
    title: "Pós em Nutrição",
    highlight: "Esportiva",
    footer: "Presencial ou online · Reconhecida pelo MEC",
    image: "/img/og/esportiva-og.jpg",
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
  featuresTitle: "Ciência do exercício, prática e docentes do esporte",
  cta: { pill: "Presencial ou online", title: "Nutrição", highlight: "Esportiva" },
  hero: {
    eyebrow: "Pós-graduação · Turma 2027",
    modality: { before: "", strong: "2", after: "modalidades" },
    title: "Pós em Nutrição",
    highlight: "Esportiva",
    subtitle:
      "Avalie, prescreva e suplemente com segurança, de quem treina por saúde a atletas de alto rendimento, com base em fisiologia, bioquímica e composição corporal.",
    chips: [
      { icon: "pin", label: "Presencial 3 em 1 no Centro do Rio" },
      { icon: "globe", label: "Ou 100% online, no seu ritmo" },
      { icon: "calendar", label: "Turma online: início 03/02/2027" },
      { icon: "bolt", label: "Força, endurance e alto rendimento" },
    ],
    seals: ["Reconhecida pelo MEC"],
    image: "/img/esportiva-hidratacao.jpg",
    imageAlt: "Atleta se hidratando durante o treino ao ar livre",
  },
  stats: [
    { value: "2", label: "modalidades à sua escolha" },
    { value: "18", label: "temas da nutrição esportiva" },
    { value: "460h+", label: "de carga horária" },
    { value: "15 mil+", label: "alunos formados desde 2005" },
  ],
  topics: [
    "Bioquímica do exercício",
    "Composição corporal",
    "Periodização nutricional",
    "Recursos ergogênicos",
    "Suplementação",
    "Força e endurance",
    "Exames laboratoriais",
    "Doping",
  ],
  audience: {
    title: "Para nutricionistas que querem atuar com quem treina",
    intro:
      "Curso exclusivo para nutricionistas formados que querem atender praticantes de atividade física e atletas com segurança, do consultório à academia e ao clube.",
    bullets: [
      "Entender as demandas fisiológicas e bioquímicas de cada modalidade esportiva",
      "Avaliar composição corporal e interpretar exames de quem treina",
      "Prescrever dieta, hidratação e periodização nutricional para cada fase do treino",
      "Indicar suplementos e recursos ergogênicos com base em evidência, sem riscos de doping",
      "Estruturar o atendimento e se posicionar no mercado da nutrição esportiva",
    ],
  },
  hook: {
    icon: "bolt",
    kicker: "Saúde · performance · alto rendimento",
    title: "Do treino de quem está começando ao atleta de competição",
    text: "A pós une nutrição e ciência do exercício: fisiologia, composição corporal, suplementação e as particularidades de força e endurance. Você escolhe fazer na sede da NutMed, com aulas práticas e atendimento na clínica-escola, ou 100% online.",
    stat: { value: "2", label: "modalidades, o mesmo foco no esporte" },
  },
  modules: {
    title: "O que você vai aprender",
    intro: "Da fisiologia do exercício à conduta no consultório, em seis grandes eixos. A grade completa você recebe da nossa equipe.",
    groups: [
      {
        icon: "dna",
        title: "Bases do exercício",
        summary: "Bioquímica, fisiologia e as demandas de cada modalidade.",
        items: [
          "Bioquímica e fisiologia do exercício",
          "Bases moleculares para a nutrição esportiva",
          "Nutrigenômica e epigenética no esporte",
        ],
      },
      {
        icon: "check",
        title: "Avaliação do atleta",
        summary: "Composição corporal, avaliação nutricional e exames laboratoriais.",
        items: [
          "Métodos de avaliação nutricional e composição corporal",
          "Interpretação de exames laboratoriais de quem treina",
          "Estruturação do atendimento ao desportista e ao atleta",
        ],
      },
      {
        icon: "file",
        title: "Prescrição e periodização",
        summary: "Macro e micronutrientes, hidratação e periodização nutricional.",
        items: [
          "Prescrição de macronutrientes, micronutrientes e hidratação",
          "Periodização nutricional na atividade física",
          "Modalidades de força e de endurance",
        ],
      },
      {
        icon: "lab",
        title: "Suplementação e ergogênicos",
        summary: "Recursos ergogênicos, fitoterapia e o que é doping.",
        items: [
          "Recursos ergogênicos e suplementação nutricional",
          "Fitoterapia e nutrição funcional na atividade física",
          "Recursos farmacológicos e doping",
        ],
      },
      {
        icon: "pulse",
        title: "Condições clínicas no esporte",
        summary: "Imunologia, saúde intestinal, obesidade e doenças crônicas.",
        items: [
          "Imunologia e saúde intestinal no esporte",
          "Condições clínicas em praticantes de atividade física e atletas",
          "Obesidade, nutrição estética e vegetarianismo no esporte",
        ],
      },
      {
        icon: "users",
        title: "Consultório e carreira",
        summary: "Comportamento, gastronomia, marketing e gestão do consultório.",
        items: [
          "Nutrição comportamental aplicada ao esporte",
          "Gastronomia aplicada à nutrição esportiva",
          "Marketing, personal diet e gestão de consultório",
        ],
      },
    ],
  },
  formats: {
    title: "Escolha como fazer a sua pós",
    intro: "O mesmo foco no esporte em dois formatos. A equipe ajuda você a escolher.",
    items: [
      {
        icon: "users",
        tag: "Presencial 3 em 1",
        title: "Na sede da NutMed, com aulas práticas",
        text: "Aulas presenciais no Centro do Rio, transmitidas ao vivo e gravadas durante toda a pós.",
        facts: [
          "460h em 36 encontros quinzenais",
          "Às quintas, das 8h30 às 17h30",
          "Aula prática de composição corporal e atendimento na clínica-escola",
          "Laboratório de Técnica Dietética e apostilas",
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
      title: "Docentes que vivem o esporte",
      text: "Mestres e doutores em bioquímica e ciência do exercício, com nutricionistas que atendem clubes e atletas olímpicos e levam para a aula o que funciona no dia a dia. Nas duas modalidades.",
      image: "/img/esportiva-laboratorio.jpg",
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
    "Presencial: data de início e dia da semana da turma 2027 (o site mostra a turma 2026, às quintas)",
    "Duração: online 16 a 18 meses, presencial 15 a 16 meses",
    "Fotos originais (as atuais são do Magnific)",
  ],
};
