import type { Certification, CertificationTrack } from "@/types";

// Todos os certificados abaixo são reais e verificáveis. Os da Alura usam o link
// oficial do certificado consolidado "Todos os Cursos". Os do TIC em Trilhas (PUCRS/
// Instituto Eldorado) não têm um link consolidado só deles — cada curso verificável
// individualmente carrega o próprio verifyUrl (só "Introdução à IA" tem link
// confirmado; os 3 emitidos via TCPDF pela PUCRS não trouxeram um link individual
// no PDF, não invente um pra eles).
const ALURA_URL =
  "https://cursos.alura.com.br/user/caioassmann33/fullCertificate/458de498e7b0a3a53f7a4742564c2442";

// 6 certificados em destaque na home.
export const certifications: Certification[] = [
  {
    name: "Introdução à Inteligência Artificial",
    issuer: "Instituto de Pesquisas Eldorado",
    date: "set/2026",
    url: "https://ticemtrilhas.org.br/certificate-validation?code=0fd7efc0-651b-4fa3-a0fc-7a2abbe3392f",
  },
  {
    name: "Python para Dados: primeiros passos",
    issuer: "Alura",
    date: "mai/2026",
    url: ALURA_URL,
  },
  {
    name: "Power BI Desktop: construindo meu primeiro dashboard",
    issuer: "Alura",
    date: "jun/2026",
    url: ALURA_URL,
  },
  {
    name: "SQLite online: conhecendo instruções SQL",
    issuer: "Alura",
    date: "jul/2026",
    url: ALURA_URL,
  },
  {
    name: "NumPy: análise numérica eficiente com Python",
    issuer: "Alura",
    date: "jul/2026",
    url: ALURA_URL,
  },
  {
    name: "IA: explorando o potencial da inteligência artificial generativa",
    issuer: "Alura",
    date: "mai/2026",
    url: ALURA_URL,
  },
];

// Lista completa, agrupada por trilha — usada na página /certificados.
// Período consolidado: 13/08/2025 a 23/09/2026 · 311h em 6 trilhas, 2 instituições.
export const certificationTracks: CertificationTrack[] = [
  {
    title: "TIC em Trilhas",
    hours: "128h",
    courses: [
      {
        name: "Introdução à Inteligência Artificial",
        period: "22/09/2026",
        hours: "56h",
        verifyUrl: "https://ticemtrilhas.org.br/certificate-validation?code=0fd7efc0-651b-4fa3-a0fc-7a2abbe3392f",
      },
      { name: "Fundamentos de Programação com IA", period: "27/08/2026", hours: "24h" },
      { name: "Guia Prático de Scrum", period: "23/09/2026", hours: "24h" },
      { name: "Design para quem não é Designer", period: "23/09/2026", hours: "24h" },
    ],
  },
  {
    title: "Excel",
    hours: "48h",
    verifyUrl: ALURA_URL,
    courses: [
      { name: "Excel: domine o editor de planilhas", period: "13/08/2025 – 21/08/2025", hours: "8h" },
      { name: "Funções com Excel: operações matemáticas e filtros", period: "22/08/2025 – 10/09/2025", hours: "8h" },
      { name: "Recursos Visuais com Excel: explorando gráficos e formatos", period: "17/09/2025 – 24/09/2025", hours: "8h" },
      { name: "Excel: aprendendo lógica booleana e busca por valores", period: "24/09/2025 – 06/11/2025", hours: "8h" },
      { name: "Excel: utilizando tabelas dinâmicas e gráficos dinâmicos", period: "18/02/2026 – 16/03/2026", hours: "8h" },
      { name: "Excel: automatizando tarefas com Macros", period: "16/03/2026 – 20/05/2026", hours: "8h" },
    ],
  },
  {
    title: "Power BI",
    hours: "32h",
    verifyUrl: ALURA_URL,
    courses: [
      { name: "Power BI Desktop: construindo meu primeiro dashboard", period: "26/06/2026", hours: "8h" },
      { name: "Power BI: visualizando e analisando dados", period: "26/06/2026", hours: "8h" },
      { name: "Power BI: construindo cálculos com Dax", period: "26/06/2026", hours: "8h" },
      { name: "Power BI Desktop: realizando ETL no Power Query", period: "26/06/2026", hours: "8h" },
    ],
  },
  {
    title: "Dados",
    hours: "67h",
    verifyUrl: ALURA_URL,
    courses: [
      { name: "Excel: simulação e análise de cenários", period: "26/06/2026", hours: "6h" },
      { name: "Análise de dados: cálculos, padrões e estratégias com Excel", period: "26/06/2026", hours: "6h" },
      { name: "BI com Excel: trabalhando com tabelas dinâmicas com Power Pivot", period: "26/06/2026", hours: "8h" },
      { name: "Python para Dados: primeiros passos", period: "20/05/2026 – 26/05/2026", hours: "10h" },
      { name: "Python para Dados: trabalhando com funções, estruturas de dados e exceções", period: "02/06/2026", hours: "8h" },
      { name: "NumPy: análise numérica eficiente com Python", period: "22/07/2026 – 23/07/2026", hours: "8h" },
      { name: "SQLite online: conhecendo instruções SQL", period: "15/06/2026 – 27/07/2026", hours: "8h" },
      { name: "Power BI: analisando dados de forma inteligente", period: "19/03/2026 – 02/06/2026", hours: "12h" },
      { name: "Carreira Análise de Dados: boas-vindas e primeiros passos", period: "10/09/2025", hours: "1h" },
    ],
  },
  {
    title: "Inteligência Artificial",
    hours: "28h",
    verifyUrl: ALURA_URL,
    courses: [
      { name: "ChatGPT: otimizando a qualidade dos resultados", period: "02/06/2026 – 15/06/2026", hours: "8h" },
      { name: "Aprendizagem: personalizando sua rotina de estudos com ChatGPT", period: "15/06/2026 – 26/06/2026", hours: "6h" },
      { name: "Engenharia de Prompt: criando prompts eficazes para IA Generativa", period: "20/05/2026 – 02/06/2026", hours: "6h" },
      { name: "IA: explorando o potencial da inteligência artificial generativa", period: "20/05/2026", hours: "8h" },
    ],
  },
  {
    title: "Back-end",
    hours: "8h",
    verifyUrl: ALURA_URL,
    courses: [
      { name: "Pensamento computacional: fundamentos da computação e lógica de programação", period: "15/06/2026 – 16/06/2026", hours: "8h" },
    ],
  },
];

export const certificationsMeta = {
  totalHours: "311h",
  period: "13/08/2025 – 23/09/2026",
  alura: { issuer: "Alura", hours: "183h", url: ALURA_URL },
};
