import type { Course } from "./types";

// Fonte: nutmed.com.br/cursos/pos-graduacao-presencial-nutricao-funcional/ (lido em 23/11/2026).
// Itens marcados "pending" ou listados em pendingNotes ainda precisam de confirmação da NutMED.

export const posNutricaoDePrecisao: Course = {
  slug: "pos-nutricao-de-precisao",
  startLabel: "13 de março",
  ctaImage: "/img/turma-evento-provisoria.jpg",
  rdConversionId: "lp-pos-nutricao-de-precisao-2027",
  seo: {
    title: "Pós em Nutrição de Precisão Funcional e Fitoterapia | NutMed",
    description:
      "Pós-graduação 3 em 1 para nutricionistas: 460h, turma 2027 com início em 13/03. Prescreva suplementos e fitoterápicos com segurança. Reconhecida pelo MEC.",
  },
  tape: "Inscrições abertas · Turma 2027 · Vagas limitadas",
  // Black NutMed: sai do ar sozinha depois de endsAt (data a confirmar com a NutMed).
  campaign: {
    slug: "black-nutmed-2026",
    endsAt: "2026-11-30T23:59:59-03:00",
    bar: { text: "Black NutMed: condição especial para a Turma 2027", cta: "Fale com a equipe" },
    tape: "Black NutMed · Oferta por tempo limitado",
    ticket: { label: "Descontos especiais", text: "Condição de Black válida até 30/11" },
    formNote: "Receba a grade completa, os valores e a condição especial da Black NutMed para a Turma 2027.",
  },
  hero: {
    eyebrow: "Pós-graduação · Turma 2027",
    title: "Pós em Nutrição de Precisão",
    highlight: "Funcional e Fitoterapia",
    subtitle:
      "Prescreva suplementos, compostos ortomoleculares e fitoterápicos com segurança, de acordo com a individualidade bioquímica de cada paciente.",
    chips: [
      { icon: "calendar", label: "Início 13/03/2027" },
      { icon: "clock", label: "Sábados quinzenais, 8h30 às 17h30" },
      { icon: "book", label: "460h em 36 encontros" },
      { icon: "pin", label: "Centro do Rio de Janeiro" },
    ],
    seals: ["Reconhecida pelo MEC"],
    image: "/img/herbs-provisoria.jpg",
    imageAlt: "Ervas medicinais e chá em tábua de madeira",
  },
  stats: [
    { value: "460h", label: "de carga horária" },
    { value: "200h+", label: "de fitoterapia" },
    { value: "23", label: "disciplinas" },
    { value: "15 mil+", label: "alunos formados desde 2005" },
  ],
  topics: [
    "Fitoterapia",
    "Nutrigenética",
    "Exames laboratoriais",
    "Suplementação",
    "Manipulação magistral",
    "Nutrição funcional",
    "Ortomolecular",
    "Prática clínica",
  ],
  audience: {
    title: "Para nutricionistas que querem prescrever com segurança",
    intro:
      "Curso exclusivo para nutricionistas formados que querem ir além do plano alimentar e atender com os quatro enfoques mais procurados no consultório: bem-estar, desempenho no trabalho, esporte e tratamento de doenças.",
    bullets: [
      "Prescrever aminoácidos, lipídios, vitaminas, minerais e nutracêuticos dentro das doses do Ministério da Saúde e das regras do CFN",
      "Interpretar exames laboratoriais e aplicar nutrigenética e nutrigenômica na conduta",
      "Escolher formas farmacêuticas e formular com manipulação magistral",
      "Atender pacientes reais na clínica-escola, com supervisão de docente",
    ],
  },
  hook: {
    kicker: "Resolução CFN 680/2021",
    title: "Prescreva fitoterápicos sem precisar do título ASBRAN",
    text: "Pela resolução do CFN, nutricionistas com pós-graduação que tenham pelo menos 200h de fitoterapia podem prescrever fitoterápicos em todas as formas farmacêuticas. Esta pós cobre toda a carga horária e os parâmetros curriculares exigidos.",
  },
  modules: {
    title: "O que você vai aprender",
    intro: "Da base bioquímica à prática no consultório, em cinco grandes eixos. A grade completa você recebe da nossa equipe.",
    groups: [
      {
        icon: "book",
        title: "Bases e avaliação",
        summary: "Bioquímica, farmacologia e exames para uma conduta individualizada.",
        items: [
          "Estruturação do atendimento em Nutrição Ortomolecular, Funcional e Fitoterapia",
          "Avaliação nutricional e clínica e interpretação de exames laboratoriais",
          "Bioquímica de macro e micronutrientes",
          "Farmacologia aplicada",
        ],
      },
      {
        icon: "dna",
        title: "Nutrição de precisão",
        summary: "Genética, toxicologia e interação entre fármacos e nutrientes.",
        items: [
          "Nutrigenética e nutrigenômica",
          "Toxicologia, farmacotécnica, manipulação magistral e interação droga-nutriente",
        ],
      },
      {
        icon: "leaf",
        title: "Fitoterapia",
        summary: "Das plantas medicinais à legislação, com reconhecimento de espécies.",
        items: [
          "Fitoterapia popular e tradicional, farmacobotânica e fitoquímica",
          "Fitofarmácia prática e reconhecimento de espécies",
          "Legislação aplicada à fitoterapia",
        ],
      },
      {
        icon: "clinic",
        title: "Aplicações clínicas",
        summary: "Condutas funcionais, ortomoleculares e fitoterápicas por sistema e fase da vida.",
        items: [
          "Distúrbios do trato gastrointestinal",
          "Doenças hepáticas",
          "Diabetes mellitus e tireoide",
          "Sistema geniturinário, doenças pulmonares, imunologia e processos inflamatórios",
          "Gestação, lactação, pediatria, saúde da mulher e envelhecimento",
          "Atividade física e dermatologia estética",
          "Obesidade",
          "Distúrbios do comportamento e ansiedade",
          "Cardiologia",
          "Doenças ósseo-metabólicas e detoxificação",
        ],
      },
      {
        icon: "users",
        title: "Prática e carreira",
        summary: "Atendimento supervisionado, gastronomia funcional e posicionamento profissional.",
        items: [
          "Prática de atendimento na Clínica NutMed",
          "Gastronomia funcional no Laboratório de Técnica Dietética",
          "Nutrição comportamental",
          "Personal diet",
          "Marketing aplicado ao nutricionista",
          "Metodologia científica",
        ],
      },
    ],
  },
  features: [
    {
      icon: "clinic",
      title: "Clínica-escola com pacientes reais",
      text: "Você atende de verdade, com supervisão de docente e discussão de cada caso. É a prática que dá segurança no consultório.",
      image: "/img/clinica-nutricionista.jpg",
    },
    {
      icon: "lab",
      title: "Laboratório de Técnica Dietética",
      text: "Gastronomia aplicada à nutrição funcional e à fitoterapia, com a mão na massa.",
    },
    {
      icon: "live",
      title: "Modalidade 3 em 1",
      text: "Aula presencial na sede, transmissão ao vivo e gravação disponível durante toda a pós.",
    },
    {
      icon: "badge",
      title: "Reconhecida pelo MEC",
      text: "Pós-graduação lato sensu NutMed + EnsinE, com certificado registrado.",
    },
  ],
  modes: [
    { icon: "users", title: "Presencial" },
    { icon: "live", title: "Ao vivo" },
    { icon: "play", title: "Gravada" },
  ],
  pendingNotes: [
    "Nome oficial e grade: confirmar se mudaram junto com o novo nome",
    "Duração: site diz 18 meses no resumo e 15 a 16 meses no FAQ",
    "Fotos originais (as atuais são provisórias)",
          ],
};
