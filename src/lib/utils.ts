import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Merge Tailwind CSS classes with clsx and tailwind-merge.
 * Prevents class conflicts (e.g., "px-4 px-2" → "px-2").
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/** Compara rutas ignorando la barra final (trailingSlash: true). */
export function isActivePath(pathname: string, href: string) {
  const clean = (p: string) => (p.length > 1 ? p.replace(/\/$/, "") : p);
  const current = clean(pathname);
  return href === "/" ? current === "/" : current === href || current.startsWith(`${href}/`);
}
