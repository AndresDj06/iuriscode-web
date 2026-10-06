// [PENDIENTE: dominio definitivo en Hostinger]. Defínelo en NEXT_PUBLIC_SITE_URL antes de `npm run build`.
const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000").replace(/\/$/, "");

const email = "frankse1808@gmail.com";
const whatsappNumber = "573013597813";

export const siteConfig = {
  name: "Frank Sebastián Mena",
  title: "Frank Sebastián Mena | Derecho, derechos humanos y tecnología",
  description:
    "Estudiante de Derecho en Quibdó, Chocó (Colombia). Derechos humanos, derechos étnico-ambientales, investigación jurídica, Python e inteligencia artificial.",
  url: siteUrl,
  locale: "es_CO",
  ogImage: "/images/og-image.png",
  author: {
    name: "Frank Sebastián Mena",
    headline: "Estudiante de Derecho | Derechos humanos y tecnología | Python e IA",
    location: "Quibdó, Chocó, Colombia",
    email,
    phoneDisplay: "+57 301 359 7813",
  },
  links: {
    linkedin: "https://www.linkedin.com/in/franksebasti%C3%A1nmena/",
    github: "https://github.com/FRANK1808K",
    whatsapp: `https://wa.me/${whatsappNumber}`,
    email: `mailto:${email}`,
  },
  keywords: [
    "Frank Sebastián Mena",
    "derechos humanos",
    "derecho ambiental",
    "derechos étnico-ambientales",
    "Sistema Interamericano",
    "LegalTech",
    "inteligencia artificial",
    "IA",
    "Python",
    "Quibdó",
    "Chocó",
  ],
};

export type SiteConfig = typeof siteConfig;
