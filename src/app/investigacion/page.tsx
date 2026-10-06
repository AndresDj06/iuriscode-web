import type { Metadata } from "next";
import { publicationData } from "@/lib/data";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

export const metadata: Metadata = {
  title: "Investigación",
  description: "¿Quién decide los derechos de la naturaleza?, documento de Frank Sebastián Mena.",
};

export default function ResearchPage() {
  const pub = publicationData;
  return (
    <div className="pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal className="mb-16">
          <SectionHeading title="Investigación" eyebrow="DOCUMENTO" />
        </Reveal>
        <Reveal>
          <article className="glass p-8">
            <h2 className="text-2xl font-bold text-text-primary mb-2">{pub.title}</h2>
            <p className="text-sm text-text-dim mb-6">{pub.format}</p>
            {pub.summary && <p className="text-text-muted">{pub.summary}</p>}
          </article>
        </Reveal>
      </div>
    </div>
  );
}
