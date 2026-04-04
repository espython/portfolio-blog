import { notFound } from 'next/navigation'
import Link from 'next/link'
import { type Metadata } from 'next'

import { getAllPostSlugs, getAdjacentPosts, getPostBySlug } from '@/lib/posts'

export function generateStaticParams() {
  return getAllPostSlugs().map((slug) => ({ slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const post = await getPostBySlug(slug)
  if (!post) return {}
  return {
    title: post.title,
    description: post.summary,
  }
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = await getPostBySlug(slug)

  if (!post) notFound()

  const { prev, next } = getAdjacentPosts(slug)

  return (
    <main className="mx-auto max-w-3xl px-6 py-20">
      <Link
        href="/blog"
        className="mb-8 inline-flex items-center gap-1 text-sm text-[var(--color-text-subtle)] transition-colors hover:text-[var(--color-primary)]"
      >
        ← All Posts
      </Link>

      <header className="mt-4 mb-10">
        <div className="mb-4 flex flex-wrap gap-2">
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-md bg-[var(--color-bg-subtle)] px-2.5 py-1 text-xs font-medium text-[var(--color-text-muted)]"
            >
              {tag}
            </span>
          ))}
        </div>
        <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-[var(--color-text)] sm:text-5xl">
          {post.title}
        </h1>
        <time dateTime={post.date} className="mt-4 block text-sm text-[var(--color-text-subtle)]">
          {formatDate(post.date)}
        </time>
        <p className="mt-4 text-lg text-[var(--color-text-muted)]">{post.summary}</p>
      </header>

      <article
        className="prose prose-neutral max-w-none dark:prose-invert"
        dangerouslySetInnerHTML={{ __html: post.contentHtml }}
      />

      <nav className="mt-16 flex items-center justify-between gap-4 border-t border-[var(--color-border)] pt-8">
        <div className="flex-1">
          {prev && (
            <Link href={`/blog/${prev.slug}`} className="group flex flex-col gap-1 text-sm">
              <span className="text-[var(--color-text-subtle)]">← Previous</span>
              <span className="font-medium text-[var(--color-text)] transition-colors group-hover:text-[var(--color-primary)]">
                {prev.title}
              </span>
            </Link>
          )}
        </div>
        <div className="flex-1 text-right">
          {next && (
            <Link href={`/blog/${next.slug}`} className="group flex flex-col gap-1 text-sm">
              <span className="text-[var(--color-text-subtle)]">Next →</span>
              <span className="font-medium text-[var(--color-text)] transition-colors group-hover:text-[var(--color-primary)]">
                {next.title}
              </span>
            </Link>
          )}
        </div>
      </nav>
    </main>
  )
}
