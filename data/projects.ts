import type { Project } from "@/types";

// Descrições reais, verificadas direto no código/README de cada repositório.
// Ainda assim, revise o texto com sua própria voz antes de publicar uma mudança.
//
// Ordem importa: a home mostra só os primeiros FEATURED_PROJECTS_COUNT (ver
// components/sections/Projects.tsx), o resto aparece em /projetos. Os mais
// fortes/diversos vêm primeiro.
export const projects: Project[] = [
  {
    slug: "people-analytics",
    name: "People Analytics",
    description:
      "Análise de turnover de 1.470 funcionários (IBM HR Analytics): regressão logística balanceada e dashboard de 3 páginas no Power BI, modelo semântico versionado como projeto (.pbip). O cruzamento entre salário e hora extra separa um grupo com 58,5% de saída contra 7,2% no extremo oposto, e o modelo escolhido identifica 64,4% de quem realmente sai, priorizando recall em vez de acurácia, que em base desbalanceada esconde o problema.",
    tags: ["Python", "scikit-learn", "Power BI", "DAX"],
    repoUrl: "https://github.com/CaioAssmann03/people-analytics-IBM",
    icon: "users",
  },
  {
    slug: "finance-ia",
    name: "Finance IA",
    description:
      "Controle financeiro pessoal para substituir planilha: lançamento em segundos, parcelamento, fatura de cartão, metas e importação de extrato (OFX/CSV/XLS). Full-stack com Next.js e Supabase (Postgres + Auth + Row Level Security), PWA instalável.",
    tags: ["Next.js", "TypeScript", "React", "Supabase", "Tailwind CSS"],
    repoUrl: "https://github.com/CaioAssmann03/Finance_IA",
    demoUrl: "https://financeia2026.vercel.app/login",
    icon: "wallet",
  },
  {
    slug: "lgpd-em-sql",
    name: "LGPD em SQL",
    description:
      "Base sintética de uma loja fictícia (400 clientes, gerados com Faker pt_BR) com mascaramento de CPF/e-mail/telefone, pseudonimização e 4 views de acesso por papel (Atendimento, Financeiro, Marketing, DPO), tudo em SQL puro. A pseudonimização usa chave substituta em vez de hash: CPF tem só 11 dígitos, então um hash determinístico seria quebrável por força bruta em minutos.",
    tags: ["SQL", "SQLite", "LGPD", "Python"],
    repoUrl: "https://github.com/CaioAssmann03/lgpd-anonimizacao-sql",
    icon: "shieldCheck",
  },
  {
    slug: "mercado-de-dados-poa",
    name: "Mercado de Dados em Porto Alegre",
    description:
      "Coleta de 312 vagas reais de Dados/BI direto da API JSON do Gupy (descoberta via DevTools, sem precisar de Selenium), tratamento em Python e dashboard de 3 páginas no Power BI. SQL aparece em 83,3% das vagas do RS.",
    tags: ["Python", "API", "Pandas", "Power BI"],
    repoUrl: "https://github.com/CaioAssmann03/Scrapper_de_Dados_Gupy",
    icon: "briefcase",
  },
  {
    slug: "painel-locacoes-imobiliarias",
    name: "Painel de Locações Imobiliárias",
    description:
      "Banco relacional modelado do zero em SQLite (4 tabelas, 500 registros), 20 consultas SQL de negócio e dashboard em Power BI. A auditoria de qualidade de dados encontrou 17 imóveis marcados como alugados sem contrato correspondente, virou KPI de alerta no próprio painel.",
    tags: ["SQL", "SQLite", "Power BI", "DAX"],
    repoUrl: "https://github.com/CaioAssmann03/dashboard_imobiliaria",
    icon: "building2",
  },
  {
    slug: "api-biblioteca",
    name: "API Biblioteca",
    description:
      "API REST para controle de acervo, empréstimos e usuários de uma biblioteca, com autenticação JWT e PostgreSQL. Arquitetura em camadas (router, controller, service, repository). Projeto em equipe, com mais dois colegas.",
    tags: ["Node.js", "Express", "PostgreSQL", "JWT"],
    repoUrl: "https://github.com/CaioAssmann03/API_BIBLIOTECA",
    icon: "library",
  },
  {
    slug: "criminalidade-rs",
    name: "Análise de Criminalidade no RS",
    description:
      "Análise exploratória de ocorrências criminais de 2025 (SSP-RS): tratamento em Python/Pandas no Colab, depois cruzamento com população do IBGE e taxa por 100 mil habitantes em Power BI. Estelionato concentra 83% dos casos entre manhã e tarde.",
    tags: ["Python", "Pandas", "Power BI", "DAX"],
    repoUrl: "https://github.com/CaioAssmann03/Criminalidade_Porto_Alegre",
    icon: "map",
  },
  {
    slug: "sql-murder-mystery",
    name: "SQL Murder Mystery",
    description:
      "Investigação de um assassinato fictício resolvida inteiramente com queries SQL, documentada passo a passo: da cena do crime até a mandante, cruzando testemunhas, um álibi que quase engana e um suspeito que era só metade da história. Primeiro projeto do portfólio, feito pra provar fundamentos de SQL.",
    tags: ["SQL", "SQLite"],
    repoUrl: "https://github.com/CaioAssmann03/sql-murder-mystery",
    icon: "fingerprint",
  },
  {
    slug: "gerador-de-senhas",
    name: "Gerador de Senhas",
    description:
      "Utilitário em Python que gera senhas seguras garantindo pelo menos um caractere de cada categoria escolhida, avalia a força da senha e copia automaticamente para a área de transferência.",
    tags: ["Python"],
    repoUrl: "https://github.com/CaioAssmann03/Gerador-de-Senhas",
    icon: "keyRound",
  },
];

// Quantos projetos aparecem na home antes do link "Ver todos os projetos".
// O resto some pra /projetos, na mesma ordem.
export const FEATURED_PROJECTS_COUNT = 6;

export const moreProjectsNote = "Mais projetos a caminho. Acompanhe o progresso no GitHub.";
