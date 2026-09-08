import type { SocialLink } from "@/types";

export const site = {
  name: "Caio Assmann",
  role: "Desenvolvedor de Software",
  roles: ["Desenvolvedor de Software", "Full-Stack", "Analista de Dados", "Backend Developer"],
  tagline:
    "Construo software full-stack e transformo dados em decisões: Python, SQL, APIs e Power BI.",
  email: "caioassmann7@gmail.com",
  github: "https://github.com/CaioAssmann03",
  linkedin: "https://www.linkedin.com/in/caio-assmann/",
  whatsapp: "https://wa.me/5551991934351",
  // Usado em metadata, sitemap e Open Graph. Troque quando um domínio próprio existir.
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://caio-assmann.vercel.app",
  curriculoUrl: "/Caio_Assmann_Curriculo.pdf",
  photoUrl: "/profile.png",
} as const;

export const socialLinks: SocialLink[] = [
  { label: "GitHub", href: site.github, icon: "github" },
  { label: "LinkedIn", href: site.linkedin, icon: "linkedin" },
  { label: "E-mail", href: `mailto:${site.email}`, icon: "mail" },
  { label: "WhatsApp", href: site.whatsapp, icon: "whatsapp" },
];
