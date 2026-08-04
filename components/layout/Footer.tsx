import { site, socialLinks } from "@/data/site";
import { socialIcons } from "@/components/ui/IconMap";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-paper/10 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-6 text-center lg:px-8">
        <div className="flex items-center gap-5">
          {socialLinks.map((link) => {
            const Icon = socialIcons[link.icon];
            return (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                aria-label={link.label}
                className="text-haze transition-colors hover:text-signal"
              >
                <Icon size={18} />
              </a>
            );
          })}
        </div>
        <p className="font-mono text-[11px] uppercase tracking-wider text-haze">
          © {year} {site.name} — construído com Next.js, TypeScript e café.
        </p>
      </div>
    </footer>
  );
}
