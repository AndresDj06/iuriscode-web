import type { Metadata } from "next";
import { Download, FileText } from "lucide-react";
import { profileData, publicationData } from "@/lib/data";
import { siteConfig } from "@/config/site";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ButtonLink } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Investigación",
  description:
    "«¿Quién decide los derechos de la naturaleza?», documento de Frank Sebastián Mena, y su trabajo como asistente de investigación en la Universidad Tecnológica del Chocó.",
};

/** Portada tipográfica del documento (sin imagen). */
function DocumentCover({ title, author }: { title: string; author: string }) {
  return (
    <div
      aria-hidden="true"
      className="relative mx-auto flex aspect-[3/4] w-full max-w-52 flex-col md:max-w-64 justify-between overflow-hidden rounded-md border border-line bg-canvas p-6 shadow-[0_18px_40px_-24px_rgb(18_22_28/0.35)]"
    >
      <span className="absolute inset-y-0 left-0 w-1.5 bg-accent" />
      <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-mute">Documento</p>
      <p className="font-serif text-xl font-medium leading-tight text-ink">{title}</p>
      <div className="flex flex-col gap-1.5">
        <span className="h-px w-10 bg-line-strong" />
        <p className="text-xs text-body">{author}</p>
      </div>
    </div>
  );
}

export default function ResearchPage() {
  const pub = publicationData;
  const research = profileData.experience.find((job) => job.title === "Asistente de investigación");

  return (
    <>
      <section className="container-page pb-14 pt-28 sm:pb-16 sm:pt-40">
        <Reveal>
          <SectionHeading
            as="h1"
            eyebrow="Investigación"
            title="Investigación"
            subtitle="Derechos humanos, derechos étnico-ambientales y derecho público, desde Quibdó."
          />
        </Reveal>
      </section>

      {/* Documento */}
      <section aria-labelledby="doc-title" className="border-t border-line">
        <div className="container-page grid items-center gap-12 py-16 sm:py-20 md:grid-cols-[minmax(0,16rem)_1fr] md:gap-16">
          <Reveal>
            <DocumentCover title={pub.title} author={profileData.fullName} />
          </Reveal>

          <Reveal delay={0.08} className="flex flex-col items-start">
            <p className="flex items-center gap-2 text-sm text-mute">
              <FileText aria-hidden="true" className="size-4" />
              {pub.format}
            </p>
            <h2 id="doc-title" className="mt-3 font-serif text-3xl font-medium leading-tight tracking-tight sm:text-4xl">
              {pub.title}
            </h2>

            {pub.summary && <p className="mt-5 max-w-prose text-lg leading-relaxed text-body">{pub.summary}</p>}

            <div className="mt-8 flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
              {pub.pdfUrl ? (
                <a
                  href={pub.pdfUrl}
                  download
                  className="group inline-flex h-12 items-center justify-center gap-2 rounded-md bg-accent px-6 text-[15px] font-medium text-on-accent transition-colors duration-200 hover:bg-accent-hover"
                >
                  Descargar PDF
                  <Download aria-hidden="true" className="size-4 transition-transform duration-200 group-hover:translate-y-0.5" />
                </a>
              ) : (
                <p className="inline-flex h-12 items-center justify-center rounded-md border border-dashed border-line-strong px-6 text-[15px] text-mute">
                  PDF disponible próximamente
                </p>
              )}
              <ButtonLink href={pub.externalUrl ?? siteConfig.links.linkedin} variant="secondary" size="lg">
                {pub.externalUrl ? "Ver en LinkedIn" : "Ver mi LinkedIn"}
              </ButtonLink>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Contexto */}
      {research && (
        <section aria-labelledby="context-title" className="border-t border-line bg-surface">
          <Reveal className="container-page grid gap-6 py-16 sm:py-20 lg:grid-cols-[1fr_2fr] lg:gap-16">
            <h2 id="context-title" className="eyebrow">Dónde investigo</h2>
            <div>
              <p className="text-sm text-mute">{research.period}</p>
              <h3 className="mt-1 font-serif text-2xl font-medium">{research.title}</h3>
              <p className="text-lg text-body">{research.organization}</p>
            </div>
          </Reveal>
        </section>
      )}
    </>
  );
}
