import Link from 'next/link'

import { type Project } from '@/types/project'

interface ProjectCardProps {
  project: Project
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="flex flex-col rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6 transition-shadow hover:shadow-md">
      <h3 className="mb-2 text-lg font-semibold text-[var(--color-text)]">{project.title}</h3>
      <p className="mb-4 flex-1 text-sm leading-relaxed text-[var(--color-text-muted)]">
        {project.description}
      </p>
      <div className="mb-4 flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-md bg-[var(--color-bg-subtle)] px-2.5 py-1 text-xs font-medium text-[var(--color-text-muted)]"
          >
            {tag}
          </span>
        ))}
      </div>
      <div className="flex gap-4">
        {project.githubUrl && (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-[var(--color-text-subtle)] transition-colors hover:text-[var(--color-primary)]"
          >
            GitHub
          </a>
        )}
        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-[var(--color-text-subtle)] transition-colors hover:text-[var(--color-primary)]"
          >
            Live Demo
          </a>
        )}
        <Link
          href={`/projects/${project.slug}`}
          className="ml-auto text-sm font-medium text-[var(--color-primary)] transition-colors hover:text-[var(--color-primary-hover)]"
        >
          Details →
        </Link>
      </div>
    </article>
  )
}
