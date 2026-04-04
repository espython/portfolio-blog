import Link from 'next/link'

import { featuredProjects } from '@/data/projects'

export function FeaturedProjects() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20">
      <div className="mb-10 flex items-end justify-between">
        <div>
          <p className="mb-2 text-sm font-medium tracking-widest text-[var(--color-primary)] uppercase">
            My Work
          </p>
          <h2 className="text-3xl font-extrabold tracking-tight text-[var(--color-text)] sm:text-4xl">
            Featured Projects
          </h2>
        </div>
        <Link
          href="/projects"
          className="hidden text-sm font-medium text-[var(--color-primary)] transition-colors hover:text-[var(--color-primary-hover)] sm:block"
        >
          View all →
        </Link>
      </div>

      <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {featuredProjects.map((project) => (
          <li
            key={project.slug}
            className="flex flex-col rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6 transition-shadow hover:shadow-md"
          >
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
          </li>
        ))}
      </ul>

      <div className="mt-8 sm:hidden">
        <Link
          href="/projects"
          className="text-sm font-medium text-[var(--color-primary)] transition-colors hover:text-[var(--color-primary-hover)]"
        >
          View all projects →
        </Link>
      </div>
    </section>
  )
}
