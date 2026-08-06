import type { SocialLink } from "@/types";

export const site = {
  name: "Caio Assmann",
  role: "Data Analyst · Python Developer · Backend Developer",
  roles: ["Data Analyst", "Python Developer", "Backend Developer"],
  tagline:
    "Transformando dados em decisões inteligentes através de Python, SQL e Business Intelligence.",
  email: "caioassmann7@gmail.com",
  github: "https://github.com/CaioAssmann03",
  linkedin: "https://www.linkedin.com/in/caio-assmann/",
  whatsapp: "https://wa.me/5551991934351",
  // Usado em metadata, sitemap e Open Graph. Troque pelo domínio real após o deploy.
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://caioassmann.dev",
  curriculoUrl: "/Caio_Assmann_Curriculo.pdf",
} as const;

export const socialLinks: SocialLink[] = [
  { label: "GitHub", href: site.github, icon: "github" },
  { label: "LinkedIn", href: site.linkedin, icon: "linkedin" },
  { label: "E-mail", href: `mailto:${site.email}`, icon: "mail" },
  { label: "WhatsApp", href: site.whatsapp, icon: "whatsapp" },
];
