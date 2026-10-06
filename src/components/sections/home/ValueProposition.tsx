import { Reveal } from '@/components/ui/Reveal';
import SectionHeading from '@/components/ui/SectionHeading';
import { profileData } from '@/lib/data';

export default function ValueProposition() {
  return (
    <section className="py-24 container mx-auto px-4 sm:px-6 lg:px-8">
      <SectionHeading eyebrow="ÁREAS" title="En qué trabajo" alignment="center" />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
        {profileData.focusAreas.map((area, index) => (
          <Reveal key={area.title} delay={index * 0.1}>
            <div className="glass h-full p-6 flex flex-col gap-4">
              <h3 className="text-lg font-bold text-text-primary">{area.title}</h3>
              <p className="text-text-muted text-sm leading-relaxed">{area.description}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
