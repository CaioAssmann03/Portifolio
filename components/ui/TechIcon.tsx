import {
  siPython,
  siPandas,
  siNumpy,
  siScikitlearn,
  siPostgresql,
  siSqlite,
  siJavascript,
  siNodedotjs,
  siExpress,
  siFastapi,
  siNestjs,
  siSupabase,
  siJsonwebtokens,
  siPrisma,
  siPytest,
  siHtml5,
  siCss,
  siReact,
  siNextdotjs,
  siTypescript,
  siTailwindcss,
  siGit,
} from "simple-icons";
import { Database, BarChart3, Sigma, Table2 } from "lucide-react";
import type { CSSProperties } from "react";

interface BrandIcon {
  title: string;
  path: string;
  hex: string;
}

const brandIcons: Record<string, BrandIcon> = {
  python: siPython,
  pandas: siPandas,
  numpy: siNumpy,
  scikitlearn: siScikitlearn,
  postgresql: siPostgresql,
  sqlite: siSqlite,
  javascript: siJavascript,
  nodejs: siNodedotjs,
  express: siExpress,
  fastapi: siFastapi,
  nestjs: siNestjs,
  supabase: siSupabase,
  jwt: siJsonwebtokens,
  prisma: siPrisma,
  pytest: siPytest,
  html: siHtml5,
  css: siCss,
  react: siReact,
  nextjs: siNextdotjs,
  typescript: siTypescript,
  tailwind: siTailwindcss,
  git: siGit,
};

// No official logo in simple-icons for these: generic icons, tinted with the product color.
const fallbackIcons = {
  sql: { Icon: Database, hex: "4479A1" },
  powerbi: { Icon: BarChart3, hex: "F2C811" },
  dax: { Icon: Sigma, hex: "F2C811" },
  excel: { Icon: Table2, hex: "217346" },
};

function luminance(hex: string): number {
  const [r, g, b] = [0, 2, 4].map((i) => {
    const v = parseInt(hex.slice(i, i + 2), 16) / 255;
    return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4);
  });
  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
}

// Brand colors keep the logos recognizable, but near-black ones vanish on the dark theme
// and near-white/yellow ones wash out on the light theme. In those cases fall back to the
// theme's text color (see .tech-logo in globals.css).
function themeColors(hex: string): CSSProperties {
  const lum = luminance(hex);
  return {
    "--c-dark": lum < 0.06 ? "var(--paper)" : `#${hex}`,
    "--c-light": lum > 0.45 ? "var(--paper)" : `#${hex}`,
  } as CSSProperties;
}

export function TechIcon({ name, size = 28 }: { name: string; size?: number }) {
  const brand = brandIcons[name];
  if (brand) {
    return (
      <span className="tech-logo inline-flex" style={themeColors(brand.hex)}>
        <svg aria-hidden viewBox="0 0 24 24" width={size} height={size} fill="currentColor">
          <path d={brand.path} />
        </svg>
      </span>
    );
  }
  const fallback = fallbackIcons[name as keyof typeof fallbackIcons] ?? fallbackIcons.sql;
  const { Icon, hex } = fallback;
  return (
    <span className="tech-logo inline-flex" style={themeColors(hex)}>
      <Icon size={size} strokeWidth={1.5} aria-hidden />
    </span>
  );
}
