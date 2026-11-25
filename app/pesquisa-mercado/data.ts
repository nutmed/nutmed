// Dados da pesquisa de mercado (desk research + Google Trends, coletados em 25/11/2026).
// Página interna de estudo: sem formulário, sem envio para o RD Station.

export type Tone = "green" | "orange" | "magenta";
export type Intent = "Compra" | "Estudo" | "Paciente";

export type Verdict = {
  n: number;
  name: string;
  tone: Tone;
  recommended?: boolean;
  metrics: { label: string; value: string; trend?: "up" | "down" }[];
  text: string;
};

export const verdicts: Verdict[] = [
  {
    n: 1,
    name: "Nutrição e Gastroenterologia",
    tone: "green",
    recommended: true,
    metrics: [
      { label: "Busca de curso", value: "150 a 900/mês" },
      { label: "Tendência", value: "Sobe forte (microbiota 25→54)", trend: "up" },
      { label: "Concorrência", value: "Baixa" },
      { label: "Preço do mercado", value: "R$ 2,6 mil a R$ 18 mil" },
      { label: "Título de especialista", value: "Sim, aberto em 2026", trend: "up" },
    ],
    text: "Menos gente buscando hoje, mas o tema cresce e quase ninguém disputa esse aluno. Melhor custo por aluno esperado.",
  },
  {
    n: 2,
    name: "Nutrição Comportamental",
    tone: "orange",
    metrics: [
      { label: "Busca de curso", value: "1 mil a 3 mil/mês" },
      { label: "Tendência", value: "Cai (17→5 desde 2022)", trend: "down" },
      { label: "Concorrência", value: "Muito alta, 18+ EADs" },
      { label: "Preço do mercado", value: "R$ 60 a R$ 250 por mês" },
      { label: "Título de especialista", value: "Não existe", trend: "down" },
    ],
    text: "Maior volume de busca hoje e o Rio é o 3º estado. Só que o leilão é disputado por EAD barato, então o lead sai caro.",
  },
  {
    n: 3,
    name: "Terapia Nutricional Enteral e Parenteral",
    tone: "magenta",
    metrics: [
      { label: "Busca de curso", value: "600 a 2 mil/mês*" },
      { label: "Tendência", value: "Cai (53→33 desde 2022)", trend: "down" },
      { label: "Concorrência", value: "IDOR domina o Rio" },
      { label: "Preço do mercado", value: "R$ 700 a R$ 16,6 mil" },
      { label: "Título de especialista", value: "Reconhecido, sem edital em 2026" },
    ],
    text: "*Só chega nesse volume se o curso for vendido como Nutrição Hospitalar. Rio é só o 19º estado e falta hospital parceiro.",
  },
];

export const intents: { tag: Intent; title: string; text: string }[] = [
  { tag: "Compra", title: "Procura um curso", text: "Quem já está buscando onde estudar o tema." },
  { tag: "Estudo", title: "Pesquisa o tema", text: "Nutricionistas se informando sobre o assunto." },
  { tag: "Paciente", title: "Interesse do público final", text: "Mostra se o assunto cresce no consultório." },
];

export type TrendRow = { term: string; ref?: boolean; avg: number; change: string; trend?: "up" | "down"; rj: string };

export const trends: TrendRow[] = [
  { term: "microbiota intestinal", avg: 49, change: "25 → 54", trend: "up", rj: "n/d" },
  { term: "terapia nutricional", avg: 45, change: "53 → 33", trend: "down", rj: "19º" },
  { term: "nutrição comportamental", avg: 12, change: "17 → 5", trend: "down", rj: "3º" },
  { term: "nutrição clínica", ref: true, avg: 45, change: "n/d", rj: "2º" },
  { term: "nutrição funcional", ref: true, avg: 19, change: "n/d", rj: "n/d" },
];

export type Level = "pico" | "medio" | "baixa";
export const seasonality: { m: string; level: Level }[] = [
  { m: "jan", level: "medio" },
  { m: "fev", level: "medio" },
  { m: "mar", level: "pico" },
  { m: "abr", level: "pico" },
  { m: "mai", level: "pico" },
  { m: "jun", level: "medio" },
  { m: "jul", level: "baixa" },
  { m: "ago", level: "pico" },
  { m: "set", level: "pico" },
  { m: "out", level: "medio" },
  { m: "nov", level: "medio" },
  { m: "dez", level: "baixa" },
];

export type TermRow = { term: string; intent?: Intent; volume: string; total?: boolean };

export const terms: { name: string; short: string; tone: Tone; rows: TermRow[] }[] = [
  {
    name: "Nutrição e Gastroenterologia",
    short: "Gastro",
    tone: "green",
    rows: [
      { term: "pós graduação nutrição gastroenterologia", intent: "Compra", volume: "50–300" },
      { term: "curso microbiota intestinal para nutricionistas / curso modulação intestinal", intent: "Compra", volume: "100–500" },
      { term: "pós nutrição clínica gastroenterologia / pós saúde intestinal", intent: "Compra", volume: "10–100" },
      { term: "Total com intenção de curso", volume: "150–900", total: true },
      { term: "nutrição em gastroenterologia / nutricionista gastro", intent: "Estudo", volume: "500–1.500" },
      { term: "microbiota intestinal / saúde intestinal / dieta fodmap", intent: "Paciente", volume: "10 mil–30 mil cada" },
    ],
  },
  {
    name: "Nutrição Comportamental",
    short: "Comportamental",
    tone: "orange",
    rows: [
      { term: "pós graduação / pós em nutrição comportamental", intent: "Compra", volume: "500–1.500" },
      { term: "curso nutrição comportamental (inclui cursos livres)", intent: "Compra", volume: "500–1.500" },
      { term: "pós nutrição comportamental rj / presencial", intent: "Compra", volume: "10–100" },
      { term: "Total com intenção de curso", volume: "1 mil–3 mil", total: true },
      { term: "nutrição comportamental", intent: "Estudo", volume: "5 mil–15 mil" },
      { term: "comer intuitivo / mindful eating / compulsão alimentar", intent: "Paciente", volume: "1 mil–15 mil cada" },
    ],
  },
  {
    name: "Terapia Nutricional Enteral e Parenteral",
    short: "Enteral e Parenteral",
    tone: "magenta",
    rows: [
      { term: "pós graduação terapia nutricional enteral e parenteral", intent: "Compra", volume: "100–500" },
      { term: "pós graduação nutrição hospitalar (termo vizinho, maior)", intent: "Compra", volume: "500–1.500" },
      { term: "Total com intenção de curso", volume: "600–2 mil", total: true },
      { term: "terapia nutricional enteral e parenteral", intent: "Estudo", volume: "500–1.500" },
      { term: "nutrição enteral / dieta enteral", intent: "Paciente", volume: "10 mil–30 mil" },
    ],
  },
];

export type Competitor = { name: string; url?: string; mode: string; hours: string; length: string; price: string; local?: boolean };

export type CourseSegment = {
  n: number;
  name: string;
  tone: Tone;
  seal: string;
  argsTitle: string;
  args: { text: string; kind?: "pro" | "con" }[];
  competitors: Competitor[];
};

export const segments: CourseSegment[] = [
  {
    n: 1,
    name: "Nutrição e Gastroenterologia",
    tone: "green",
    seal: "Demanda crescente · concorrência baixa",
    argsTitle: "Por que primeiro",
    args: [
      { text: "Microbiota é o termo de maior interesse e mais que dobrou desde 2022.", kind: "pro" },
      { text: "A PUC Minas abriu turma recente.", kind: "pro" },
      { text: "Cursos de nicho cobram acima de R$ 13 mil.", kind: "pro" },
      { text: "Conversa com fitoterapia e com a Pós em Nutrição de Precisão.", kind: "pro" },
    ],
    competitors: [
      { name: "Modulação Intestinal", url: "https://pos.modulacaointestinal.com.br/turmas/11/visualizar", mode: "Online ao vivo + módulo em Brasília", hours: "360h", length: "12 meses", price: "R$ 13 mil a R$ 18 mil" },
      { name: "PUC Minas · Saúde Intestinal", url: "https://vemprapuc.pucminas.br/nutricao-e-saude-intestinal-ead-com-aulas-ao-vivo", mode: "EAD ao vivo", hours: "360h", length: "até 20 meses", price: "24x R$ 515 ou R$ 11.205 à vista" },
      { name: "iPGS · Gastro e Hepatologia", url: "https://rd.ipgs.com.br/pos-graduacao-nutricao-gastroenterologia-hepatologia", mode: "EAD", hours: "n/d", length: "n/d", price: "21x R$ 253,81 + R$ 400" },
      { name: "PratiEnsino", url: "https://pratiensino.com.br/pos-graduacao-em-gatroenterologia-aplicada-a-nutricao-clinica/", mode: "EAD gravado", hours: "360h", length: "12 meses", price: "12x R$ 420 ou 24x R$ 210" },
      { name: "UniBF", url: "https://www.unibf.com.br/curso/pos-graduacao/estudos-em-gastroenterologia", mode: "EAD gravado", hours: "1.080h", length: "8 meses", price: "R$ 1,3 mil a R$ 2,6 mil" },
    ],
  },
  {
    n: 2,
    name: "Nutrição Comportamental",
    tone: "orange",
    seal: "Demanda alta em queda · concorrência muito alta",
    argsTitle: "Riscos e a favor",
    args: [
      { text: "O aluno compara com EAD de R$ 100/mês, e 18+ faculdades anunciam.", kind: "con" },
      { text: "O interesse caiu de 17 para 5 desde 2022.", kind: "con" },
      { text: "A favor: o Rio é o 3º estado e quase ninguém oferece presencial.", kind: "pro" },
    ],
    competitors: [
      { name: "16 faculdades EAD (Anhanguera, Unopar, Facuminas, UniCV e outras)", url: "https://www.guiadacarreira.com.br/cursos-e-faculdades/nutricao-comportamental/pos-graduacao", mode: "EAD gravado", hours: "360h", length: "6 a 18 meses", price: "R$ 140 a R$ 230/mês (R$ 60 a R$ 180 com bolsa)" },
      { name: "Uniube", url: "https://pos.uniube.br/curso/ead/especializacao-em-nutricao-comportamental", mode: "EAD", hours: "360h", length: "6 meses", price: "R$ 1.099 à vista" },
      { name: "MasterPós", url: "https://masterpos.com.br/pos-graduacoes/pos-graduacao-em-nutricao-comportamental/", mode: "Online", hours: "360h", length: "12 meses", price: "A partir de R$ 250/mês" },
      { name: "wPós · Psiconutrição", url: "https://wpos.com.br/pos-graduacao/curso/psiconutricao---o-comportamento-alimentar", mode: "EAD", hours: "360h", length: "8 meses", price: "Sob consulta" },
      { name: "Univates", url: "https://www.univates.br/pos-graduacao/especializacao/230", mode: "EAD", hours: "392h", length: "~18 meses", price: "Sob consulta" },
    ],
  },
  {
    n: 3,
    name: "Terapia Nutricional Enteral e Parenteral",
    tone: "magenta",
    seal: "Nicho em queda · exige hospital",
    argsTitle: "Por que terceiro",
    args: [
      { text: "Teria mais busca se fosse vendido como Nutrição Hospitalar, termo vizinho com 500 a 1.500 buscas por mês.", kind: "pro" },
      { text: "“Terapia nutricional” caiu de 53 para 33 e o Rio é o 19º estado.", kind: "con" },
      { text: "O IDOR (Rede D'Or) vende com prática no Copa D'Or por R$ 16,6 mil.", kind: "con" },
      { text: "A clínica-escola é ambulatorial, sem UTI nem parenteral.", kind: "con" },
    ],
    competitors: [
      { name: "IDOR · Rede D'Or (RJ)", url: "https://www.rededorsaoluiz.com.br/instituto/idor/cursos/terapia-nutricional/", mode: "Híbrido com prática hospitalar", hours: "360h", length: "12 meses", price: "24x R$ 693,75 (R$ 16.650)", local: true },
      { name: "Univ. Tuiuti do Paraná", url: "https://www.posdigital.utp.br/cursos/terapia-nutricional-enteral-e-parenteral/", mode: "EAD", hours: "360h", length: "n/d", price: "R$ 5.892 à vista" },
      { name: "Univ. de Passo Fundo", url: "https://www.pos.upf.br/cursos/terapia-nutricional-enteral-e-parenteral/", mode: "EAD", hours: "360h", length: "n/d", price: "R$ 4.250 à vista" },
      { name: "iPGS", url: "https://rd.ipgs.com.br/terapia-nutricional-enteral-e-parenteral-lp", mode: "EAD", hours: "n/d", length: "n/d", price: "21x R$ 253,81 + R$ 400" },
      { name: "Facuminas", mode: "EAD", hours: "640h", length: "n/d", price: "R$ 2.800 com taxas" },
      { name: "Faveni", url: "https://faveni.edu.br/curso/terapia-nutricional-parenteral-e-enteral/", mode: "EAD", hours: "750h", length: "6 a 18 meses", price: "R$ 699 + R$ 199" },
      { name: "Uninter e Ganep", mode: "EAD / híbrido", hours: "360h", length: "6 a 12 meses", price: "Sob consulta" },
    ],
  },
];

// Validação com a própria base: o que medir numa pesquisa interna com alunos e ex-alunos.
export const validation: { title: string; text: string }[] = [
  {
    title: "Interesse em cada tema",
    text: "Qual das três pós cada aluno faria: Nutrição e Gastroenterologia, Nutrição Comportamental ou Terapia Nutricional Enteral e Parenteral.",
  },
  {
    title: "Formato preferido",
    text: "Presencial no Centro do Rio, ao vivo ou gravado, para saber quanto da turma depende da sala de aula.",
  },
  {
    title: "Faixa de investimento",
    text: "Quanto pagariam por uma pós com prática supervisionada, para comparar com os preços do mercado mapeados aqui.",
  },
  {
    title: "O que impediria",
    text: "Por que não fariam: preço, distância até o Centro, horário de sábado ou já ter outra pós. Mostra onde a turma pode perder alunos.",
  },
];

export type Source = { name: string; url?: string; detail?: string };

export const sourceGroups: { title: string; items: Source[] }[] = [
  {
    title: "Interesse de busca",
    items: [
      {
        name: "Google Trends",
        url: "https://trends.google.com/trends/explore?geo=BR&date=today%205-y&q=microbiota%20intestinal,terapia%20nutricional,nutri%C3%A7%C3%A3o%20comportamental",
        detail:
          "Brasil, últimos 5 anos, consulta em 25/11/2026. Termos: microbiota intestinal, terapia nutricional, nutrição comportamental, nutrição clínica e nutrição funcional. Índice relativo de 0 a 100.",
      },
      {
        name: "Volume mensal de busca",
        detail: "Estimativa de ordem de grandeza da UPDO, a confirmar no Planejador de Palavras-chave do Google Ads (dados não públicos).",
      },
    ],
  },
  {
    title: "Mercado de trabalho",
    items: [
      {
        name: "CFN · Consulta Nacional de Nutricionistas e Perfil da Nutrição",
        url: "https://pesquisa.cfn.org.br/",
        detail: "Nutricionistas inscritos por estado (fev/2024) e formação (pesquisa de 2016, amostra de 1.104 profissionais).",
      },
      {
        name: "DIEESE · Perfil dos Nutricionistas no Brasil (mar/2025)",
        url: "https://www.fnn.org.br/arquivos/noticias/relatorio-nutricionistas-2025.pdf",
        detail: "Vínculos com carteira assinada e remuneração, base RAIS 2022.",
      },
    ],
  },
  {
    title: "Título de especialista",
    items: [
      { name: "ASBRAN · Título de especialista", url: "https://www.asbran.org.br/titulo" },
      { name: "ASBRAN · Edital nº 001/2026", url: "https://www.asbran.org.br/storage/arquivos/titulo/Edital_ASBRAN_n001_2026.pdf" },
      { name: "ASBRAN · Perguntas frequentes 2026", url: "https://www.asbran.org.br/storage/arquivos/titulo/FAQ_2026.pdf" },
      { name: "CRN-7 · Registro do título de especialista", url: "https://www.crn7.org/registro-do-titulo-de-especialista/" },
    ],
  },
  {
    title: "Agregadores de cursos",
    items: [
      {
        name: "Guia da Carreira · Nutrição Comportamental",
        url: "https://www.guiadacarreira.com.br/cursos-e-faculdades/nutricao-comportamental/pos-graduacao",
        detail: "18 instituições, cerca de 500 ofertas.",
      },
      {
        name: "Quero Bolsa · Terapia Nutricional Enteral e Parenteral",
        url: "https://querobolsa.com.br/cursos-e-faculdades/terapia-nutricional-enteral-e-parenteral/pos-graduacao",
        detail: "18 instituições.",
      },
      {
        name: "Educaedu · Nutrição no Rio de Janeiro",
        url: "https://www.educaedu-brasil.com/nutricao/rio-de-janeiro",
        detail: "Pós presenciais listadas no Rio (não verificadas nas páginas próprias).",
      },
    ],
  },
  {
    title: "Sites oficiais das instituições (consultados em 25/11/2026)",
    items: [
      { name: "FABA · Faculdade Bezerra de Araújo", url: "https://posgraduacao.faba.edu.br/barra/nutricao-clinica/" },
      { name: "Modulação Intestinal", url: "https://pos.modulacaointestinal.com.br/turmas/11/visualizar" },
      { name: "PUC Minas", url: "https://vemprapuc.pucminas.br/nutricao-e-saude-intestinal-ead-com-aulas-ao-vivo" },
      { name: "iPGS · Gastro e Hepatologia", url: "https://rd.ipgs.com.br/pos-graduacao-nutricao-gastroenterologia-hepatologia" },
      { name: "PratiEnsino", url: "https://pratiensino.com.br/pos-graduacao-em-gatroenterologia-aplicada-a-nutricao-clinica/" },
      { name: "UniBF", url: "https://www.unibf.com.br/curso/pos-graduacao/estudos-em-gastroenterologia" },
      { name: "Uniube", url: "https://pos.uniube.br/curso/ead/especializacao-em-nutricao-comportamental" },
      { name: "MasterPós", url: "https://masterpos.com.br/pos-graduacoes/pos-graduacao-em-nutricao-comportamental/" },
      { name: "wPós", url: "https://wpos.com.br/pos-graduacao/curso/psiconutricao---o-comportamento-alimentar" },
      { name: "Univates", url: "https://www.univates.br/pos-graduacao/especializacao/230" },
      { name: "IDOR · Rede D'Or", url: "https://www.rededorsaoluiz.com.br/instituto/idor/cursos/terapia-nutricional/" },
      { name: "Univ. Tuiuti do Paraná", url: "https://www.posdigital.utp.br/cursos/terapia-nutricional-enteral-e-parenteral/" },
      { name: "Univ. de Passo Fundo", url: "https://www.pos.upf.br/cursos/terapia-nutricional-enteral-e-parenteral/" },
      { name: "iPGS · Enteral e Parenteral", url: "https://rd.ipgs.com.br/terapia-nutricional-enteral-e-parenteral-lp" },
      { name: "Faveni", url: "https://faveni.edu.br/curso/terapia-nutricional-parenteral-e-enteral/" },
      { name: "Uninter", url: "https://www.uninter.com/pos-graduacao/a-distancia/terapia-nutricional-enteral-e-parenteral/" },
      { name: "Ganep", url: "https://www.ead.com.br/faculdades/ganep-educacao/cursos/terapia-nutricional-e-nutricao-clinica" },
    ],
  },
];

// ---------- Tamanho do mercado ----------
export const market: { value: string; label: string; detail: string; source: string }[] = [
  {
    value: "194.018",
    label: "nutricionistas inscritos no Brasil",
    detail: "Base total da profissão.",
    source: "CFN, Consulta Nacional de Nutricionistas, fev/2024",
  },
  {
    value: "15.254",
    label: "nutricionistas no estado do Rio",
    detail: "2º maior estado, depois de SP (34.189). É o público direto de um curso presencial no Centro do Rio.",
    source: "CFN, Perfil da Nutrição",
  },
  {
    value: "73,2%",
    label: "têm pós-graduação",
    detail: "50,5% têm especialização lato sensu.",
    source: "CFN, Perfil da Nutrição, 2016 (1.104 profissionais)",
  },
  {
    value: "54.282",
    label: "com carteira assinada no Brasil",
    detail: "6.128 no RJ (11,3%), com remuneração média de R$ 4.283,70 no estado.",
    source: "DIEESE, Perfil dos Nutricionistas no Brasil, mar/2025 (RAIS 2022)",
  },
];

export const marketReads: string[] = [
  "A especialização é a norma da profissão: o desafio não é convencer a fazer pós, é ser a escolhida (e a segunda pós).",
  "A maioria atua como autônoma ou em consultório, o perfil que mais busca diferenciação clínica.",
];

// ---------- Concorrência presencial no Rio ----------
export type RioCompetitor = { name: string; course: string; detail: string; url?: string; verified: boolean };

export const rioCompetitors: RioCompetitor[] = [
  {
    name: "FABA · Faculdade Bezerra de Araújo",
    course: "Pós em Nutrição Clínica",
    detail:
      "Polo Barra da Tijuca, híbrida (sábados alternados, 8h às 17h), 400h, 18 meses. R$ 250 de matrícula + 17x R$ 450 (R$ 7.900). Cita assistência hospitalar e modulação intestinal.",
    url: "https://posgraduacao.faba.edu.br/barra/nutricao-clinica/",
    verified: true,
  },
  {
    name: "IDOR · Rede D'Or",
    course: "Terapia Nutricional",
    detail: "Híbrido com prática no Copa D'Or e no Copa Star. R$ 16.650.",
    url: "https://www.rededorsaoluiz.com.br/instituto/idor/cursos/terapia-nutricional/",
    verified: true,
  },
  { name: "UNISUAM", course: "Nutrição Clínica com ênfase em obesidade e endocrinologia", detail: "Presencial no Rio.", verified: false },
  { name: "Faculdades São Camilo", course: "Nutrição Clínica", detail: "Presencial no Rio.", verified: false },
  { name: "Estácio", course: "Nutrição Clínica e Funcional", detail: "Presencial no Rio.", verified: false },
  { name: "UFRJ", course: "Especialização em Nutrição", detail: "Presencial no Rio.", verified: false },
  { name: "UVA", course: "Nutrologia", detail: "Presencial na Tijuca.", verified: false },
  { name: "PUC-Rio (CCE)", course: "Nutrição Clínica", detail: "A página do curso não abriu para leitura.", verified: false },
];

// ---------- Régua de preço (total do curso, R$ 0 a R$ 18 mil) ----------
export const PRICE_MAX = 18000;

export const priceBands: { label: string; min: number; max: number; range: string; who: string; tone: "ead" | "uni" | "rio" | "premium" }[] = [
  { label: "EAD gravado", min: 700, max: 2600, range: "R$ 700 a R$ 2.600", who: "Faveni, Uniube, UniBF, faculdades dos agregadores", tone: "ead" },
  { label: "EAD de universidade / ao vivo", min: 4250, max: 11205, range: "R$ 4.250 a R$ 11.205", who: "UPF, UTP, iPGS (~R$ 5.700), PUC Minas", tone: "uni" },
  { label: "Presencial / híbrido no Rio", min: 7900, max: 16650, range: "R$ 7.900 a R$ 16.650", who: "FABA (R$ 7.900) a IDOR (R$ 16.650)", tone: "rio" },
  { label: "Premium de nicho com prática", min: 13000, max: 18000, range: "R$ 13 mil a R$ 18 mil", who: "Modulação Intestinal, IDOR", tone: "premium" },
];

export const nutmedBand = { min: 8000, max: 16000, label: "Onde a NutMed se encaixa", range: "R$ 8 mil a R$ 16 mil" };

// ---------- Título de especialista ----------
export const titleRows: { course: string; tone: Tone; specialty: string; status: string; kind: "yes" | "partial" | "no"; note: string }[] = [
  {
    course: "Nutrição e Gastroenterologia",
    tone: "green",
    specialty: "Nutrição Clínica em Gastroenterologia",
    status: "Reconhecida e aberta no edital 2026",
    kind: "yes",
    note: "Uma das 6 áreas do edital ASBRAN 001/2026 (prova em 23/10/2026). Forte argumento de venda.",
  },
  {
    course: "Nutrição Comportamental",
    tone: "orange",
    specialty: "Não existe com esse nome",
    status: "Sem título",
    kind: "no",
    note: "O curso não leva a um título, o que reforça a necessidade de diferencial prático.",
  },
  {
    course: "Terapia Nutricional Enteral e Parenteral",
    tone: "magenta",
    specialty: "Terapia de Nutrição Parenteral e Enteral",
    status: "Reconhecida, sem edital em 2026",
    kind: "partial",
    note: "Não foi aberta no edital 2026. A área de Nutrição Clínica em Terapia Intensiva foi.",
  },
];

export const titleRules: { label: string; text: string }[] = [
  { label: "Quem concede", text: "A ASBRAN concede o título e ele é registrado no CRN. O CFN reconhece 34 especialidades (Resolução CFN 689/2021)." },
  { label: "Peso da pós", text: "Não é pré-requisito, mas uma especialização lato sensu de no mínimo 360h na área vale 5 pontos na análise de títulos (área afim, 2,5)." },
  { label: "Requisitos", text: "2 anos de inscrição ativa no CRN; prova de 50 questões, com aprovação a partir de 70%; taxa de R$ 400 (sócio) ou R$ 800." },
];
