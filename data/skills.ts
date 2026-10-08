import type { SkillCategory } from "@/types";

// "Onde usei" is derived: each skill lists the project tags that prove it (`match`),
// and components/sections/Skills.tsx finds the projects carrying those tags in
// data/projects.ts. Skills no project tag proves get a short `note` instead.
export const skillCategories: SkillCategory[] = [
  {
    id: "dados",
    title: "Linguagens & Dados",
    icon: "database",
    skills: [
      { name: "Python", icon: "python", match: ["python"] },
      { name: "SQL", icon: "sql", match: ["sql"] },
      { name: "Pandas", icon: "pandas", match: ["pandas"] },
      { name: "NumPy", icon: "numpy", note: "Curso na Alura" },
      { name: "scikit-learn", icon: "scikitlearn", match: ["scikit-learn"] },
      { name: "PostgreSQL", icon: "postgresql", match: ["postgresql"] },
      { name: "SQLite", icon: "sqlite", match: ["sqlite"] },
      { name: "JavaScript", icon: "javascript", note: "Base do Node.js e do React" },
    ],
  },
  {
    id: "bi",
    title: "Business Intelligence",
    icon: "brain",
    skills: [
      { name: "Power BI", icon: "powerbi", match: ["power bi"] },
      { name: "DAX", icon: "dax", match: ["dax"] },
      { name: "Excel", icon: "excel", note: "Planilhas do dia a dia" },
    ],
  },
  {
    id: "backend",
    title: "Backend & APIs",
    icon: "server",
    skills: [
      { name: "Node.js", icon: "nodejs", match: ["node.js"] },
      { name: "Express", icon: "express", match: ["express"] },
      { name: "FastAPI", icon: "fastapi", match: ["fastapi"] },
      { name: "NestJS", icon: "nestjs", match: ["nestjs"] },
      { name: "Supabase", icon: "supabase", match: ["supabase"] },
      { name: "JWT", icon: "jwt", match: ["jwt"] },
      { name: "Prisma", icon: "prisma", match: ["prisma"] },
      { name: "pytest", icon: "pytest", match: ["pytest"] },
    ],
  },
  {
    id: "frontend",
    title: "Front-end",
    icon: "layoutGrid",
    skills: [
      { name: "HTML", icon: "html", note: "Base de todos os projetos web" },
      { name: "CSS", icon: "css", note: "Base de todos os projetos web" },
      { name: "React", icon: "react", match: ["react"] },
      { name: "Next.js", icon: "nextjs", match: ["next.js"] },
      { name: "TypeScript", icon: "typescript", match: ["typescript"] },
      { name: "Tailwind CSS", icon: "tailwind", match: ["tailwind css"] },
    ],
  },
  {
    id: "ferramentas",
    title: "Ferramentas",
    icon: "wrench",
    skills: [{ name: "Git & GitHub", icon: "git", note: "Todos os projetos" }],
  },
];

// Skills without a recognizable logo or a project to point at: listed as plain chips.
export const alsoUse = [
  "Power Query",
  "Oracle APEX",
  "POO",
  "Insomnia / Postman",
  "VS Code",
  "Suporte técnico",
];
