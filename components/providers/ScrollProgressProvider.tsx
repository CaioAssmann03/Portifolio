"use client";

import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

interface ScrollProgressValue {
  progress: number;
  scrolled: boolean;
}

const ScrollProgressContext = createContext<ScrollProgressValue | null>(null);

// Navbar's progress bar and BackToTop's visibility both need scroll position.
// Each used to run its own `scroll` listener; this computes it once and shares
// it, instead of two listeners doing the same rAF-throttled work in parallel.
export function ScrollProgressProvider({ children }: { children: ReactNode }) {
  const [progress, setProgress] = useState(0);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    let ticking = false;

    const measure = () => {
      const doc = document.documentElement;
      const scrollTop = doc.scrollTop || document.body.scrollTop;
      const height = doc.scrollHeight - doc.clientHeight;
      setProgress(height > 0 ? scrollTop / height : 0);
      setScrolled(scrollTop > 24);
      ticking = false;
    };

    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(measure);
    };

    measure();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <ScrollProgressContext.Provider value={{ progress, scrolled }}>
      {children}
    </ScrollProgressContext.Provider>
  );
}

export function useScrollProgress() {
  const ctx = useContext(ScrollProgressContext);
  if (!ctx) throw new Error("useScrollProgress must be used within ScrollProgressProvider");
  return ctx;
}
