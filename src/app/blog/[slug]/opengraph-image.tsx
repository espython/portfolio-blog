import { ImageResponse } from 'next/og'

import { getPostBySlug } from '@/lib/posts'

export const runtime = 'nodejs'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default async function BlogPostOGImage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = await getPostBySlug(slug)

  const title = post?.title ?? 'Blog Post'
  const summary = post?.summary ?? ''
  const tags = post?.tags ?? []
  const date = post?.date
    ? new Date(post.date).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      })
    : ''

  return new ImageResponse(
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        padding: '72px 80px',
        background: 'linear-gradient(135deg, #0a0a0f 0%, #1c1c27 100%)',
        fontFamily: 'sans-serif',
      }}
    >
      {/* Top — site label */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
        <div
          style={{
            width: 10,
            height: 10,
            borderRadius: '50%',
            background: '#6366f1',
          }}
        />
        <span style={{ fontSize: 18, color: '#6366f1', fontWeight: 600 }}>
          Eslam Mahmoud · Blog
        </span>
      </div>

      {/* Middle — title + summary */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
        <div
          style={{
            fontSize: 56,
            fontWeight: 800,
            color: '#f0f0f8',
            lineHeight: 1.15,
            maxWidth: 900,
          }}
        >
          {title}
        </div>
        {summary && (
          <div
            style={{
              fontSize: 22,
              color: '#9898b3',
              lineHeight: 1.5,
              maxWidth: 800,
            }}
          >
            {summary}
          </div>
        )}
      </div>

      {/* Bottom — tags + date */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div style={{ display: 'flex', gap: 10 }}>
          {tags.slice(0, 3).map((tag) => (
            <div
              key={tag}
              style={{
                padding: '6px 14px',
                borderRadius: 6,
                background: '#2e2e3e',
                color: '#9898b3',
                fontSize: 16,
                fontWeight: 500,
              }}
            >
              {tag}
            </div>
          ))}
        </div>
        {date && <div style={{ fontSize: 18, color: '#52526e' }}>{date}</div>}
      </div>
    </div>,
    { ...size }
  )
}
