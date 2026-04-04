import { type Metadata } from 'next'

import { ProjectCard } from '@/components/projects/ProjectCard'
import { projects } from '@/data/projects'

export const metadata: Metadata = {
  title: 'Projects',
  description: 'A collection of projects I have built.',
  openGraph: {
    url: '/projects',
    title: 'Projects — Eslam Mahmoud',
    description:
      'Full-stack and open-source projects built with React, Node.js, TypeScript, and AWS.',
  },
}

export default function ProjectsPage() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-20">
      <div className="mb-12">
        <p className="mb-2 text-sm font-medium tracking-widest text-[var(--color-primary)] uppercase">
          My Work
        </p>
        <h1 className="text-4xl font-extrabold tracking-tight text-[var(--color-text)] sm:text-5xl">
          Projects
        </h1>
        <p className="mt-4 max-w-2xl text-lg text-[var(--color-text-muted)]">
          Things I&apos;ve built — from side projects to open-source tools.
        </p>
      </div>

      <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <li key={project.slug}>
            <ProjectCard project={project} />
          </li>
        ))}
      </ul>
    </main>
  )
}
