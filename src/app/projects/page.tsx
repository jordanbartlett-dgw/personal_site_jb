import type { Metadata } from "next";
import { SectionLabel } from "@/components/section-label";
import { NewsletterForm } from "@/components/newsletter-form";
import { ProjectCard } from "@/components/project-card";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Projects — Jordan Bartlett",
  description:
    "What I'm building. Social enterprise tech, nonprofit platforms, AI agents, and the tools that connect them.",
  openGraph: {
    title: "Projects — Jordan Bartlett",
    description:
      "What I'm building. Social enterprise tech, nonprofit platforms, AI agents, and the tools that connect them.",
    url: "https://jordanbartlett.co/projects",
  },
};

const sorted = [...projects].sort((a, b) => a.order - b.order);

export default function ProjectsPage() {
  return (
    <div>
      <section className="px-6 md:px-10 pt-20 pb-16 max-w-prose mx-auto">
        <SectionLabel>Projects</SectionLabel>
        <h1 className="font-serif text-3xl md:text-4xl leading-tight mb-4">
          What I&apos;m building
        </h1>
        <p className="text-base text-muted leading-relaxed mb-12">
          The things I spend my time on. Social enterprise infrastructure,
          nonprofit community platforms, and the AI systems that make small teams
          move fast.
        </p>

        <div className="divide-y divide-border-light">
          {sorted.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>

      <div className="border-t border-border-light mx-6 md:mx-10" />

      <section className="px-6 md:px-10 py-16 max-w-prose mx-auto">
        <SectionLabel>Stay in the loop</SectionLabel>
        <p className="text-base text-muted leading-relaxed mb-6">
          Infrastructure of Belonging. Weekly on building things that matter.
        </p>
        <NewsletterForm />
      </section>
    </div>
  );
}
