import Link from "next/link";
import type { Project } from "@/data/projects";

const statusStyles: Record<string, { dot: string; label: string }> = {
  active: { dot: "bg-terracotta", label: "Active" },
  shipped: { dot: "bg-subtle", label: "Shipped" },
  exploring: { dot: "bg-ink/40", label: "Exploring" },
};

export function ProjectCard({ project }: { project: Project }) {
  const status = statusStyles[project.status];

  return (
    <article className="py-6">
      <div className="flex items-center gap-2 mb-2">
        <span className={`inline-block w-1.5 h-1.5 rounded-full ${status.dot}`} />
        <span className="text-xs text-subtle uppercase tracking-wider">
          {status.label}
        </span>
      </div>
      <h2 className="font-serif text-xl md:text-2xl mb-1">{project.name}</h2>
      <p className="text-sm text-subtle mb-3">{project.tagline}</p>
      <p className="text-sm text-muted leading-relaxed mb-4">
        {project.description}
      </p>
      <div className="flex flex-wrap gap-2 mb-4">
        {project.techStack.map((tech) => (
          <span
            key={tech}
            className="text-xs text-subtle border border-border-light rounded-full px-2.5 py-0.5"
          >
            {tech}
          </span>
        ))}
      </div>
      {project.url && (
        project.url.startsWith("/") ? (
          <Link
            href={project.url}
            className="text-sm text-terracotta border-b border-terracotta hover:opacity-80 transition-opacity"
          >
            View project →
          </Link>
        ) : (
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-terracotta border-b border-terracotta hover:opacity-80 transition-opacity"
          >
            Visit site →
          </a>
        )
      )}
    </article>
  );
}
