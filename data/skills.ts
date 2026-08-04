import type { SkillCategory } from "@/types";

// Os valores de "level" (0-100) são um ponto de partida — ajuste para refletir
// sua real proficiência autoavaliada em cada tecnologia.
export const skillCategories: SkillCategory[] = [
  {
    id: "dados",
    title: "Linguagens & Dados",
    icon: "database",
    skills: [
      { name: "Python", level: 78 },
      { name: "SQL", level: 78 },
      { name: "JavaScript", level: 55 },
      { name: "NumPy", level: 65 },
      { name: "PostgreSQL", level: 68 },
      { name: "SQLite", level: 68 },
    ],
  },
  {
    id: "bi",
    title: "Business Intelligence",
    icon: "brain",
    skills: [
      { name: "Excel", level: 85 },
      { name: "Power BI", level: 75 },
      { name: "Power Query", level: 65 },
      { name: "DAX", level: 60 },
    ],
  },
  {
    id: "backend",
    title: "Backend & APIs",
    icon: "server",
    skills: [
      { name: "Node.js", level: 60 },
      { name: "APIs REST", level: 68 },
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
      { name: "React", level: 45 },
      { name: "Next.js", level: 42 },
      { name: "Tailwind CSS", level: 55 },
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
