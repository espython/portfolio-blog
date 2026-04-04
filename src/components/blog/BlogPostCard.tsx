import Link from 'next/link'

import { type PostMeta } from '@/types/post'

interface BlogPostCardProps {
  post: PostMeta
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

export function BlogPostCard({ post }: BlogPostCardProps) {
  return (
    <article className="group flex flex-col rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6 transition-shadow hover:shadow-md">
      <Link href={`/blog/${post.slug}`} className="flex flex-1 flex-col">
        <div className="mb-2 flex items-center gap-2 text-xs text-[var(--color-text-subtle)]">
          <time dateTime={post.date}>{formatDate(post.date)}</time>
          <span>·</span>
          <span>{post.readingTime} min read</span>
        </div>
        <h2 className="mb-2 text-lg font-semibold text-[var(--color-text)] transition-colors group-hover:text-[var(--color-primary)]">
          {post.title}
        </h2>
        <p className="flex-1 text-sm leading-relaxed text-[var(--color-text-muted)]">
          {post.summary}
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-md bg-[var(--color-bg-subtle)] px-2.5 py-1 text-xs font-medium text-[var(--color-text-muted)]"
            >
              {tag}
            </span>
          ))}
        </div>
      </Link>
    </article>
  )
}
