// One place for "scroll to a section of the page", so every caller uses the
// same offset (the sticky header, including the language bar, is ~128 px tall,
// not 80) and only one scroll animation runs at a time.
export function sectionScrollTop(el: Element): number {
  const header = document.querySelector('nav');
  const offset = header ? header.getBoundingClientRect().height : 80;
  return Math.max(0, Math.round(el.getBoundingClientRect().top + window.scrollY - offset));
}

export function scrollToSection(id: string, behavior: ScrollBehavior): number | null {
  const el = document.getElementById(id);
  if (!el) return null;
  const top = sectionScrollTop(el);
  window.scrollTo({ top, behavior });
  return top;
}
