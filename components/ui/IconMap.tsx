import {
  Database,
  Brain,
  Server,
  LayoutGrid,
  Wrench,
  Map,
  Building2,
  Library,
  KeyRound,
  Sparkles,
  Code2,
  Briefcase,
  Mail,
  MessageCircle,
  type LucideIcon,
} from "lucide-react";

export const skillCategoryIcons: Record<string, LucideIcon> = {
  database: Database,
  brain: Brain,
  server: Server,
  layoutGrid: LayoutGrid,
  wrench: Wrench,
};

export const projectIcons: Record<string, LucideIcon> = {
  map: Map,
  building2: Building2,
  library: Library,
  keyRound: KeyRound,
  sparkles: Sparkles,
};

export const socialIcons: Record<string, LucideIcon> = {
  github: Code2,
  linkedin: Briefcase,
  mail: Mail,
  whatsapp: MessageCircle,
};
