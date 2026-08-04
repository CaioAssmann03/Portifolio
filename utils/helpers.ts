/** Smooth-scrolls to a section by id, accounting for the fixed navbar height. */
export function scrollToSection(id: string) {
  const el = document.querySelector(id);
  if (!el) return;
  const NAV_OFFSET = 88;
  const top = el.getBoundingClientRect().top + window.scrollY - NAV_OFFSET;
  window.scrollTo({ top, behavior: "smooth" });
}

/** Formats an index as a zero-padded two-digit label, e.g. 1 -> "01". */
export function pad2(n: number) {
  return String(n).padStart(2, "0");
}

export function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}
