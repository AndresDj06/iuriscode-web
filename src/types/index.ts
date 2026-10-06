// ============================================================
// Tipos globales del sitio
// ============================================================

// --- Perfil ---
export interface TimelineItem {
  title: string;
  organization: string;
  period: string;
  location?: string;
  description?: string;
}

export interface SkillGroup {
  category: string;
  items: string[];
}

export interface FocusArea {
  title: string;
  description: string;
}

export interface Profile {
  fullName: string;
  headline: string;
  valueStatement: string;
  location: string;
  /** Biografía en Markdown, en primera persona. */
  bio: string;
  avatarUrl: string;
  focusAreas: FocusArea[];
  experience: TimelineItem[];
  education: TimelineItem[];
  skills: SkillGroup[];
}

// --- Formación y certificaciones ---
export type CredentialKind = "Programa" | "Certificación" | "Curso";

export interface Credential {
  title: string;
  issuer: string;
  date: string;
  kind: CredentialKind;
  description?: string;
  credentialId?: string;
  credentialUrl?: string;
}

// --- Investigación ---
export interface Publication {
  title: string;
  format: string;
  /** null mientras falte el resumen real. */
  summary: string | null;
  pdfUrl?: string;
  externalUrl?: string;
}

// --- Proyectos ---
export interface Project {
  title: string;
  status: string;
  summary: string;
  problem: string;
  stack: string[];
  repositoryUrl?: string;
  liveUrl?: string;
}

// --- Blog ---
export interface BlogPost {
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  publishedAt: string;
}
