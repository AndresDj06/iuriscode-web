import type { Metadata } from "next";
import { profileData } from "@/lib/data";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Markdown } from "@/components/ui/Markdown";
import type { TimelineItem } from "@/types";

export const metadata: Metadata = {
  title: "Sobre mí",
  description: "Biografía, experiencia y educación de Frank Sebastián Mena, estudiante de Derecho en Quibdó.",
};

function Timeline({ items }: { items: TimelineItem[] }) {
  return (
    <ol className="flex flex-col gap-6">
      {items.map((item) => (
        <li key={`${item.title}-${item.organization}`} className="glass p-6">
          <h3 className="text-lg font-bold text-text-primary">{item.title}</h3>
          <p className="font-medium">{item.organization}</p>
          <p className="text-sm text-text-dim">{item.period}</p>
          {item.location && <p className="text-sm text-text-dim">{item.location}</p>}
          {item.description && <p className="mt-2 text-text-muted">{item.description}</p>}
        </li>
      ))}
    </ol>
  );
}

export default function AboutPage() {
  return (
    <div className="pt-24 pb-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="mb-20 pt-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{profileData.fullName}</h1>
          <p className="text-xl mb-8">{profileData.headline}</p>
          <Markdown content={profileData.bio} className="text-lg" />
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <AnimatedSection>
            <SectionHeading title="Experiencia" alignment="left" className="mb-8" />
            <Timeline items={profileData.experience} />
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <SectionHeading title="Educación" alignment="left" className="mb-8" />
            <Timeline items={profileData.education} />
          </AnimatedSection>
        </div>
      </div>
    </div>
  );
}
