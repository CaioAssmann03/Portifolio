import type { JourneyItem } from "@/types";

export const journey: JourneyItem[] = [
  {
    type: "work",
    org: "Eve Imóveis",
    role: "Auxiliar Administrativo",
    period: "2022 — Atual",
    bullets: [
      "Administração condominial, locações e vendas",
      "Atendimento ao cliente e suporte em processos de documentação legal",
      "Organização de visitas e controle de informações de imóveis",
    ],
  },
  {
    type: "work",
    org: "Secretaria da Saúde — Porto Alegre, RS",
    role: "Estagiário",
    period: "2020 — 2021",
    bullets: [
      "Apoio em operações administrativas e atendimento ao público",
      "Lançamentos e provisionamento de dados internos",
      "Desenvolvimento de habilidades em gestão de dados e comunicação interpessoal",
    ],
  },
  {
    type: "education",
    org: "Senac — Serviço Nacional de Aprendizagem Comercial",
    role: "Análise e Desenvolvimento de Sistemas",
    period: "Fevereiro de 2024 — Em andamento",
    bullets: [
      "Foco em dados, backend e engenharia de software",
      "Projetos práticos aplicando Python, SQL e Machine Learning",
    ],
  },
];
