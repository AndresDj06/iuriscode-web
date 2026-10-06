import type { Metadata } from "next";
import { MapPin } from "lucide-react";
import { profileData } from "@/lib/data";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Markdown } from "@/components/ui/Markdown";
import { Portrait } from "@/components/ui/Portrait";
import { Headline } from "@/components/ui/Headline";
import { Badge } from "@/components/ui/Badge";
import { Timeline } from "@/components/sections/about/Timeline";

export const metadata: Metadata = {
  title: "Sobre mí",
  description:
    "Biografía, experiencia y educación de Frank Sebastián Mena, estudiante de Derecho en Quibdó, Chocó.",
};

export default function AboutPage() {
  return (
    <>
      {/* Cabecera */}
      <section className="container-page pb-16 pt-28 sm:pb-20 sm:pt-40">
        <Reveal className="flex flex-col gap-8 sm:flex-row sm:items-center sm:gap-10">
          <Portrait eager className="size-28 sm:size-40" />
          <div>
            <p className="eyebrow mb-4">Sobre mí</p>
            <h1 className="font-serif text-4xl font-medium tracking-tight sm:text-5xl">
              {profileData.fullName}
            </h1>
            <Headline text={profileData.headline} className="mt-3 text-lg text-body" />
            <p className="mt-2 flex items-center gap-1.5 text-sm text-mute">
              <MapPin aria-hidden="true" className="size-4" />
              {profileData.location}
            </p>
          </div>
        </Reveal>
      </section>

      {/* Biografía */}
      <section aria-labelledby="bio-title" className="border-t border-line">
        <div className="container-page grid gap-8 py-16 sm:py-20 lg:grid-cols-[1fr_2fr] lg:gap-16">
          <Reveal>
            <h2 id="bio-title" className="eyebrow">Biografía</h2>
          </Reveal>
          <Reveal delay={0.05}>
            <Markdown content={profileData.bio} className="max-w-prose text-lg" />
          </Reveal>
        </div>
      </section>

      {/* Trayectoria */}
      <section aria-labelledby="trayectoria-title" className="border-t border-line">
        <div className="container-page py-16 sm:py-20">
          <Reveal>
            <SectionHeading id="trayectoria-title" eyebrow="Trayectoria" title="Experiencia y educación" className="mb-12" />
          </Reveal>
          <div className="grid gap-14 md:grid-cols-2 md:gap-12">
            <div>
              <h3 className="mb-8 text-sm font-semibold uppercase tracking-[0.12em] text-mute">
                Experiencia
              </h3>
              <Timeline items={profileData.experience} />
            </div>
            <div>
              <h3 className="mb-8 text-sm font-semibold uppercase tracking-[0.12em] text-mute">Educación</h3>
              <Timeline items={profileData.education} />
            </div>
          </div>
        </div>
      </section>

      {/* Habilidades */}
      <section aria-labelledby="skills-title" className="border-t border-line">
        <div className="container-page py-16 sm:py-20">
          <Reveal>
            <SectionHeading id="skills-title" eyebrow="Habilidades" title="Derecho, tecnología y gestión" className="mb-12" />
          </Reveal>
          <Stagger className="grid gap-10 md:grid-cols-3">
            {profileData.skills.map((group) => (
              <StaggerItem key={group.category}>
                <h3 className="mb-4 font-serif text-lg font-medium">{group.category}</h3>
                <ul className="flex flex-wrap gap-2">
                  {group.items.map((skill) => (
                    <li key={skill}>
                      <Badge variant="outline">{skill}</Badge>
                    </li>
                  ))}
                </ul>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>
    </>
  );
}
