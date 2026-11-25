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
    ],
    text: "*Só chega nesse volume se o curso for vendido como Nutrição Hospitalar. Rio é só o 19º estado e falta hospital parceiro.",
  },
];

export const intents: { tag: Intent; title: string; text: string }[] = [
  { tag: "Compra", title: "Quem procura curso", text: "Público da campanha." },
  { tag: "Estudo", title: "Pesquisa o tema", text: "Remarketing e conteúdo." },
  { tag: "Paciente", title: "Busca do consultório", text: "Mostra se o assunto cresce no consultório." },
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
  segTitle: string;
  segmentation: { label: string; text: string }[];
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
    segTitle: "Segmentação sugerida",
    segmentation: [
      { label: "Google", text: "“pós nutrição gastroenterologia”, “curso microbiota intestinal”, “pós saúde intestinal”" },
      { label: "Região", text: "Grande Rio e Niterói para o presencial; Brasil para ao vivo e gravado" },
      { label: "Meta", text: "Nutricionistas de 23 a 45 anos; interesses microbiota, probióticos, nutrição funcional e clínica" },
      { label: "Negativas", text: "gratuito, técnico, receita, sintomas, médico" },
      { label: "Mensagem", text: "Único presencial no Rio com atendimento supervisionado em gastro na clínica-escola" },
    ],
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
    segTitle: "Segmentação sugerida",
    segmentation: [
      { label: "Google", text: "Só termos com local ou formato (“pós nutrição comportamental rj”, “presencial”). Fora do Rio, o leilão é dos EADs" },
      { label: "Região", text: "Grande Rio e Niterói" },
      { label: "Meta", text: "Nutricionistas de 23 a 40 anos; interesses comportamento alimentar, comer intuitivo, transtornos alimentares, psicologia" },
      { label: "Negativas", text: "EAD, online, barato, gratuito, curso livre" },
      { label: "Mensagem", text: "Atendimento real supervisionado e o novo paciente das canetas emagrecedoras" },
    ],
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
    segTitle: "Se for abrir",
    segmentation: [
      { label: "Nome", text: "Vender como Nutrição Hospitalar e Terapia Nutricional" },
      { label: "Google", text: "“pós nutrição hospitalar”, “pós terapia nutricional”" },
      { label: "Meta", text: "Nutricionistas em hospital, home care e UTI; recém-formados que miram residência" },
      { label: "Mensagem", text: "Prática em hospital parceiro" },
    ],
    argsTitle: "Por que terceiro",
    args: [
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

export const nextSteps: { title: string; text: string }[] = [
  {
    title: "Medir o volume real",
    text: "Rodar os termos de compra no Planejador de Palavras-chave do Google Ads, com filtro Brasil e Rio. Leva cerca de uma hora, troca as estimativas por números e mostra o custo por clique.",
  },
  {
    title: "Perguntar para a base",
    text: "Pesquisa curta pelo RD Station para ex-alunos e leads, com os três temas e o formato preferido.",
  },
  {
    title: "Teste de captação",
    text: "Página de lista de espera de Gastro com R$ 1 mil a R$ 2 mil de mídia por 2 a 3 semanas, comparando o custo por lead com o da Pós em Nutrição de Precisão.",
  },
];
