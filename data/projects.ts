import type { Project } from "@/types";

// Descrições geradas como ponto de partida — personalize com os detalhes reais
// (resultado, contexto, decisões técnicas) de cada projeto antes de publicar.
// Troque repoUrl/demoUrl pelos links reais assim que os repositórios existirem.
export const projects: Project[] = [
  {
    slug: "dashboard-criminalidade-rs",
    name: "Dashboard Criminalidade RS",
    description:
      "Análise exploratória de dados públicos de criminalidade do Rio Grande do Sul, com tratamento em Python/Pandas e visualização de indicadores por região em Power BI.",
    tags: ["Python", "Pandas", "Power BI", "Análise de Dados"],
    repoUrl: "#",
    demoUrl: "#",
    icon: "map",
  },
  {
    slug: "saas-clinicas",
    name: "Sistema SaaS para Clínicas",
    description:
      "Plataforma SaaS para gestão de clínicas — agendamentos, pacientes e autenticação — construída com Next.js no front-end e API própria em Node.js.",
    tags: ["Next.js", "Node.js", "PostgreSQL", "JWT"],
    repoUrl: "#",
    demoUrl: "#",
    icon: "building2",
  },
  {
    slug: "sistema-imobiliario",
    name: "Sistema Imobiliário",
    description:
      "Aplicação para gestão de imóveis, proprietários e contratos de locação, inspirada na vivência prática adquirida na Eve Imóveis.",
    tags: ["React", "Node", "PostgreSQL"],
    repoUrl: "#",
    demoUrl: "#",
    icon: "building2",
  },
  {
    slug: "api-biblioteca",
    name: "API Biblioteca",
    description:
      "API REST para controle de acervo, empréstimos e usuários de uma biblioteca, documentada e com autenticação de rotas.",
    tags: ["Node.js", "Express", "PostgreSQL"],
    repoUrl: "#",
    demoUrl: "#",
    icon: "library",
  },
  {
    slug: "gerador-de-senhas",
    name: "Gerador de Senhas",
    description:
      "Utilitário desktop em Python para gerar senhas seguras com critérios configuráveis de tamanho e complexidade.",
    tags: ["Python", "Tkinter"],
    repoUrl: "#",
    icon: "keyRound",
  },
];

export const moreProjectsNote =
  "Mais projetos a caminho — acompanhe o progresso no GitHub.";
