import Link from 'next/link';
import AnimatedSection from '@/components/ui/AnimatedSection';
import Button from '@/components/ui/Button';

export default function CTASection() {
  return (
    <section className="py-24 container mx-auto px-4 sm:px-6 lg:px-8">
      <AnimatedSection>
        <div className="glass p-10 md:p-16 flex flex-col items-center text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-6">
            ¿Conversamos?
          </h2>
          <p className="text-lg text-text-muted mb-10 max-w-2xl">
            Escríbeme si quieres hablar de derechos humanos, investigación jurídica o tecnología.
          </p>
          <Link href="/contacto">
            <Button variant="primary" size="lg">Contáctame</Button>
          </Link>
        </div>
      </AnimatedSection>
    </section>
  );
}
