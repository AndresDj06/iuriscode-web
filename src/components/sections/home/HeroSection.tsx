import type { CSSProperties } from 'react';
import { profileData } from '@/lib/data';
import { siteConfig } from '@/config/site';
import { ButtonLink } from '@/components/ui/Button';
import { Portrait } from '@/components/ui/Portrait';
import { Headline } from '@/components/ui/Headline';

/** Retraso escalonado para .animate-rise (CSS, sin JavaScript). */
const delay = (step: number) => ({ '--delay': `${step * 90}ms` }) as CSSProperties;

export default function HeroSection() {
  return (
    <section aria-labelledby="hero-title" className="container-page pb-20 pt-28 sm:pb-28 sm:pt-40">
      <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[minmax(0,1fr)_auto] lg:gap-16">
        <div className="animate-rise lg:order-last" style={delay(0)}>
          <Portrait eager className="size-24 sm:size-32 lg:size-72" />
        </div>

        <div className="flex min-w-0 max-w-3xl flex-col items-start">
          <p className="eyebrow animate-rise mb-5" style={delay(1)}>
            {profileData.fullName} · {profileData.location}
          </p>

          <h1
            id="hero-title"
            className="animate-rise font-serif text-[2.5rem] font-medium leading-[1.08] tracking-tight text-ink sm:text-6xl lg:text-[4.25rem]"
            style={delay(2)}
          >
            {profileData.valueStatement}
          </h1>

          <div className="animate-rise" style={delay(3)}>
            <Headline text={profileData.headline} className="mt-6 text-lg text-body sm:text-xl" />
          </div>

          <div className="animate-rise mt-10 flex w-full flex-col gap-3 sm:w-auto sm:flex-row" style={delay(4)}>
            <ButtonLink href="/contacto" size="lg" arrow>
              Contáctame
            </ButtonLink>
            <ButtonLink href={siteConfig.links.linkedin} variant="secondary" size="lg">
              Ver mi LinkedIn
            </ButtonLink>
          </div>
        </div>
      </div>
    </section>
  );
}
