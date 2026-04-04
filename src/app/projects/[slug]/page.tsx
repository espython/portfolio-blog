import { notFound } from 'next/navigation'
import Link from 'next/link'
import { type Metadata } from 'next'

import { projects } from '@/data/projects'

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const project = projects.find((p) => p.slug === slug)
  if (!project) return {}
  return {
    title: project.title,
    description: project.description,
  }
}

export default async function ProjectDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const project = projects.find((p) => p.slug === slug)

  if (!project) notFound()

  return (
    <main className="mx-auto max-w-3xl px-6 py-20">
      <Link
        href="/projects"
        className="mb-8 inline-flex items-center gap-1 text-sm text-[var(--color-text-subtle)] transition-colors hover:text-[var(--color-primary)]"
      >
        ← All Projects
      </Link>

      <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-[var(--color-text)] sm:text-5xl">
        {project.title}
      </h1>

      <div className="mt-4 flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-md bg-[var(--color-bg-subtle)] px-2.5 py-1 text-xs font-medium text-[var(--color-text-muted)]"
          >
            {tag}
          </span>
        ))}
      </div>

      <p className="mt-8 text-lg leading-relaxed text-[var(--color-text-muted)]">
        {project.longDescription ?? project.description}
      </p>

      <div className="mt-10 flex gap-4">
        {project.githubUrl && (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg border border-[var(--color-border)] px-5 py-2.5 text-sm font-semibold text-[var(--color-text)] transition-colors hover:border-[var(--color-primary)] hover:text-[var(--color-primary)]"
          >
            View on GitHub
          </a>
        )}
        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg bg-[var(--color-primary)] px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[var(--color-primary-hover)]"
          >
            Live Demo
          </a>
        )}
      </div>
    </main>
  )
}
