import type { SkillCategory } from "@/types";

// Níveis revisados em 2026-09-02 com base em evidência real de projeto (não são mais
// o chute inicial da primeira versão). Onde eu (Claude) subi ou desci um número, foi
// porque um projeto real comprova (ou não) aquele nível — ver perfil-base.md no
// projeto CURRÍCULO VAGAS para o motivo de cada um. Ainda assim é uma autoavaliação:
// ajuste como quiser, o número final é seu.
export const skillCategories: SkillCategory[] = [
  {
    id: "dados",
    title: "Linguagens & Dados",
    icon: "database",
    skills: [
      { name: "Python", level: 78 },
      { name: "SQL", level: 78 },
      { name: "Pandas", level: 72 },
      { name: "scikit-learn", level: 60 },
      { name: "JavaScript", level: 55 },
      { name: "NumPy", level: 65 },
      { name: "PostgreSQL", level: 70 },
      { name: "SQLite", level: 68 },
    ],
  },
  {
    id: "bi",
    title: "Business Intelligence",
    icon: "brain",
    skills: [
      { name: "Excel", level: 85 },
      { name: "Power BI", level: 80 },
      { name: "DAX", level: 68 },
      { name: "Power Query", level: 65 },
    ],
  },
  {
    id: "backend",
    title: "Backend & APIs",
    icon: "server",
    skills: [
      { name: "Node.js", level: 62 },
      { name: "Express", level: 58 },
      { name: "APIs REST", level: 68 },
      { name: "Supabase", level: 60 },
      { name: "JWT", level: 55 },
      { name: "Oracle APEX", level: 55 },
      { name: "POO", level: 60 },
    ],
  },
  {
    id: "frontend",
    title: "Front-end",
    icon: "layoutGrid",
    skills: [
      { name: "HTML", level: 75 },
      { name: "CSS", level: 68 },
      { name: "React", level: 62 },
      { name: "Next.js", level: 62 },
      { name: "TypeScript", level: 60 },
      { name: "Tailwind CSS", level: 65 },
    ],
  },
  {
    id: "ferramentas",
    title: "Ferramentas",
    icon: "wrench",
    skills: [
      { name: "Git & GitHub", level: 75 },
      { name: "VS Code", level: 85 },
      { name: "Insomnia / Postman", level: 65 },
      { name: "Suporte técnico", level: 78 },
    ],
  },
];
