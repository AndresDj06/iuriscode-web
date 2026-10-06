import { SectionHeading } from '@/components/ui/SectionHeading';
import { Reveal, Stagger, StaggerItem } from '@/components/ui/Reveal';
import { profileData } from '@/lib/data';

export default function ValueProposition() {
  return (
    <section aria-labelledby="areas-title" className="border-t border-line">
      <div className="container-page py-20 sm:py-28">
        <Reveal>
          <SectionHeading id="areas-title" eyebrow="Enfoque" title="Áreas de trabajo" className="mb-12 sm:mb-16" />
        </Reveal>

        <Stagger as="ol" className="grid gap-5 lg:grid-cols-3">
          {profileData.focusAreas.map((area, index) => (
            <StaggerItem as="li" key={area.title} className="card card-hover flex flex-col gap-4 p-6 sm:p-8">
              <span aria-hidden="true" className="font-serif text-sm text-accent">
                {String(index + 1).padStart(2, '0')}
              </span>
              <h3 className="font-serif text-xl font-medium leading-snug">{area.title}</h3>
              <p className="text-[15px] leading-relaxed text-body">{area.description}</p>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
