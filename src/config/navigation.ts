export interface NavItem {
  label: string;
  href: string;
}

/** Menú principal (header y menú móvil). */
export const navigationItems: NavItem[] = [
  { label: "Inicio", href: "/" },
  { label: "Sobre mí", href: "/sobre-mi" },
  { label: "Formación", href: "/formacion" },
  { label: "Investigación", href: "/investigacion" },
  { label: "Proyectos", href: "/proyectos" },
  { label: "Contacto", href: "/contacto" },
];

/**
 * Enlaces del footer. El blog queda fuera del menú principal
 * mientras no tenga artículos publicados.
 */
export const footerItems: NavItem[] = [
  ...navigationItems,
  { label: "Blog", href: "/blog" },
];
