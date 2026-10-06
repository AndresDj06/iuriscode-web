import { Reveal } from '@/components/ui/Reveal';
import { ButtonLink } from '@/components/ui/Button';
import { siteConfig } from '@/config/site';

export default function CTASection() {
  return (
    <section aria-labelledby="cta-title" className="border-t border-line bg-surface">
      <Reveal className="container-page flex flex-col items-start gap-6 py-20 sm:py-24 lg:flex-row lg:items-end lg:justify-between">
        <div className="max-w-2xl">
          <h2 id="cta-title" className="font-serif text-3xl font-medium tracking-tight sm:text-4xl">
            ¿Conversamos?
          </h2>
          <p className="mt-4 text-lg text-body">
            Escríbeme si quieres hablar de derechos humanos, investigación jurídica o tecnología.
          </p>
        </div>
        <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
          <ButtonLink href="/contacto" size="lg" arrow>
            Contáctame
          </ButtonLink>
          <ButtonLink href={siteConfig.links.email} variant="secondary" size="lg">
            {siteConfig.author.email}
          </ButtonLink>
        </div>
      </Reveal>
    </section>
  );
}
