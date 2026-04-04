import Link from 'next/link'

import { featuredProjects } from '@/data/projects'
import { ProjectCard } from '@/components/projects/ProjectCard'

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
          <li key={project.slug}>
            <ProjectCard project={project} />
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
