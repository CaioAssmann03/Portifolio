export interface NavLink {
  label: string;
  href: string;
}

export interface SocialLink {
  label: string;
  href: string;
  icon: "github" | "linkedin" | "mail" | "whatsapp";
}

export interface Skill {
  name: string;
  icon: string; // key in components/ui/TechIcon.tsx
  // Project tags (lowercase) that prove this skill; "where I used it" is derived from them.
  match?: string[];
  // Shown when no project tag proves the skill (coursework, day-to-day use).
  note?: string;
}

export interface SkillCategory {
  id: string;
  title: string;
  icon: "database" | "brain" | "server" | "layoutGrid" | "wrench";
  skills: Skill[];
}

export interface Project {
  slug: string;
  name: string;
  description: string;
  tags: string[];
  repoUrl: string;
  demoUrl?: string;
  icon:
    | "map"
    | "building2"
    | "library"
    | "keyRound"
    | "sparkles"
    | "wallet"
    | "briefcase"
    | "users"
    | "shieldCheck"
    | "fingerprint"
    | "dumbbell"
    | "fileText"
    | "receipt";
}

export interface Certification {
  name: string;
  issuer: string;
  date: string;
  url: string;
}

export interface CertificationCourse {
  name: string;
  period: string;
  hours: string;
  verifyUrl?: string;
}

export interface CertificationTrack {
  title: string;
  hours: string;
  courses: CertificationCourse[];
  verifyUrl?: string;
}

export interface ExperienceItem {
  type: "work";
  org: string;
  role: string;
  period: string;
  bullets: string[];
}

export interface EducationItem {
  type: "education";
  org: string;
  role: string;
  period: string;
  bullets: string[];
}

export type JourneyItem = ExperienceItem | EducationItem;
