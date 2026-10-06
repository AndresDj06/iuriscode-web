import type { Metadata } from "next";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { SectionHeading } from "@/components/ui/SectionHeading";

export const metadata: Metadata = {
  title: "Blog",
  description: "Artículos de Frank Sebastián Mena. Próximamente.",
};

export default function BlogPage() {
  return (
    <div className="pt-24 pb-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <SectionHeading title="Próximamente" subtitle="Aún no hay artículos publicados." accentText="BLOG" />
        </AnimatedSection>
      </div>
    </div>
  );
}
