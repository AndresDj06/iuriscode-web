import type { Metadata } from "next";
import { projectsData } from "@/lib/data";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Badge } from "@/components/ui/Badge";

export const metadata: Metadata = {
  title: "Proyectos",
  description: "Proyectos personales de Frank Sebastián Mena.",
};

export default function ProjectsPage() {
  return (
    <div className="pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal className="mb-16">
          <SectionHeading title="Proyectos" eyebrow="PORTAFOLIO" />
        </Reveal>
        {projectsData.map((project) => (
          <Reveal key={project.title}>
            <article className="glass p-8">
              <Badge>{project.status}</Badge>
              <h2 className="text-2xl font-bold text-text-primary mt-4 mb-3">{project.title}</h2>
              <p className="text-text-muted mb-4">{project.summary}</p>
              <p className="text-text-muted mb-6">{project.problem}</p>
              <ul className="flex flex-wrap gap-2 mb-6">
                {project.stack.map((tech) => (
                  <li key={tech}><Badge variant="outline">{tech}</Badge></li>
                ))}
              </ul>
              {project.repositoryUrl && (
                <a href={project.repositoryUrl} target="_blank" rel="noopener noreferrer" className="underline">
                  Ver repositorio
                </a>
              )}
            </article>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
