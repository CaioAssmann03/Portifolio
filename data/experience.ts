import type { JourneyItem } from "@/types";

export const journey: JourneyItem[] = [
  {
    type: "work",
    org: "Eve Imóveis",
    role: "Auxiliar Administrativo",
    period: "2022 — Atual",
    bullets: [
      "Administração de condomínios, locações e vendas",
      "Automatizei 4 rotinas em Python que geram recibos e listas a partir de relatórios em PDF: o que levava horas por mês sai em segundos",
      "Organização de visitas, controle de informações de imóveis e suporte à documentação legal",
    ],
  },
  {
    type: "work",
    org: "Secretaria da Saúde — Porto Alegre, RS",
    role: "Estagiário",
    period: "2020 — 2021",
    bullets: [
      "Apoio administrativo e atendimento ao público",
      "Lançamento e provisionamento de dados internos: primeiro contato com gestão de dados",
    ],
  },
  {
    type: "education",
    org: "Senac — Serviço Nacional de Aprendizagem Comercial",
    role: "Análise e Desenvolvimento de Sistemas",
    period: "Fevereiro de 2024 — Em andamento",
    bullets: [
      "Foco em desenvolvimento de software, banco de dados e backend",
      "Projetos publicados no GitHub: APIs com JWT e testes, dashboards em Power BI e um SaaS multi-tenant",
    ],
  },
];
