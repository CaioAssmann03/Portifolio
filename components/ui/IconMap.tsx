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
  Wallet,
  Briefcase,
  Users,
  Code2,
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
  wallet: Wallet,
  briefcase: Briefcase,
  users: Users,
};

export const socialIcons: Record<string, LucideIcon> = {
  github: Code2,
  linkedin: Briefcase,
  mail: Mail,
  whatsapp: MessageCircle,
};
