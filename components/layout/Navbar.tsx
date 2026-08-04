"use client";

import { useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, Moon, Sun } from "lucide-react";
import { navLinks } from "@/data/nav";
import { useActiveSection } from "@/hooks/useActiveSection";
import { useScrollProgress } from "@/hooks/useScrollProgress";
import { useTheme } from "@/components/providers/ThemeProvider";
import { scrollToSection } from "@/utils/helpers";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const { scrolled, progress } = useScrollProgress();
  const active = useActiveSection(navLinks.map((l) => l.href.replace("#", "")));
  const { theme, toggle } = useTheme();
  const router = useRouter();
  const pathname = usePathname();
  const isHome = pathname === "/";

  function go(href: string) {
    setOpen(false);
    if (isHome) {
      scrollToSection(href);
    } else {
      router.push(`/${href}`);
    }
  }

  function goTop() {
    if (isHome) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      router.push("/");
    }
  }

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-colors duration-300",
        scrolled ? "border-b border-paper/10 bg-ink/70 backdrop-blur-xl" : "bg-transparent"
      )}
    >
      <div className="mx-auto flex h-20 max-w-6xl items-center justify-between px-6 lg:px-8">
        <a
          href="#top"
          onClick={(e) => {
            e.preventDefault();
            goTop();
          }}
          className="font-mono text-sm font-semibold tracking-tight text-paper"
        >
          caio<span className="text-signal">.</span>dev
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => go(link.href)}
              className={cn(
                "font-mono text-[12px] uppercase tracking-wider transition-colors",
                active === link.href.replace("#", "") && isHome
                  ? "text-paper"
                  : "text-haze hover:text-paper"
              )}
            >
              {link.label}
            </button>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <button
            aria-label="Alternar tema"
            onClick={toggle}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-paper/15 text-paper transition-colors hover:border-paper/40"
          >
            {theme === "dark" ? <Sun size={15} /> : <Moon size={15} />}
          </button>
          <button
            onClick={() => go("#contato")}
            className="rounded-full border border-paper px-5 py-2 font-mono text-[12px] font-medium text-paper transition-colors hover:bg-paper hover:text-ink"
          >
            Contato
          </button>
        </div>

        <button
          aria-label="Abrir menu"
          onClick={() => setOpen(true)}
          className="text-paper md:hidden"
        >
          <Menu size={24} />
        </button>
      </div>

      <div className="h-px w-full bg-paper/10">
        <div
          className="h-px bg-signal transition-[width] duration-150"
          style={{ width: `${Math.round(progress * 100)}%` }}
        />
      </div>

      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-ink/95 backdrop-blur-xl md:hidden"
          >
            <div className="flex h-20 items-center justify-between px-6">
              <span className="font-mono text-sm font-semibold text-paper">
                caio<span className="text-signal">.</span>dev
              </span>
              <button aria-label="Fechar menu" onClick={() => setOpen(false)} className="text-paper">
                <X size={24} />
              </button>
            </div>
            <nav className="flex flex-col items-center justify-center gap-8 pt-16">
              {navLinks.map((link, i) => (
                <motion.button
                  key={link.href}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.05 * i }}
                  onClick={() => go(link.href)}
                  className="font-mono text-xl uppercase tracking-wide text-paper"
                >
                  {link.label}
                </motion.button>
              ))}
              <button
                onClick={toggle}
                className="mt-4 flex items-center gap-2 font-mono text-[12px] uppercase tracking-wider text-haze"
              >
                {theme === "dark" ? <Sun size={14} /> : <Moon size={14} />}
                {theme === "dark" ? "Tema claro" : "Tema escuro"}
              </button>
            </nav>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
