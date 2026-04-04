import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'Eslam Mahmoud — Full Stack Engineer'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function OGImage() {
  return new ImageResponse(
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        padding: '80px',
        background: 'linear-gradient(135deg, #0a0a0f 0%, #1c1c27 100%)',
        fontFamily: 'sans-serif',
      }}
    >
      {/* Accent bar */}
      <div
        style={{
          width: 64,
          height: 6,
          borderRadius: 3,
          background: '#6366f1',
          marginBottom: 40,
        }}
      />

      {/* Name */}
      <div
        style={{
          fontSize: 64,
          fontWeight: 800,
          color: '#f0f0f8',
          lineHeight: 1.1,
          marginBottom: 16,
        }}
      >
        Eslam Mahmoud
      </div>

      {/* Title */}
      <div
        style={{
          fontSize: 32,
          fontWeight: 500,
          color: '#6366f1',
          marginBottom: 24,
        }}
      >
        Full Stack Software Engineer
      </div>

      {/* Description */}
      <div
        style={{
          fontSize: 20,
          color: '#9898b3',
          lineHeight: 1.5,
          maxWidth: 700,
        }}
      >
        React · Node.js · TypeScript · AWS · 6+ years of experience
      </div>

      {/* URL */}
      <div
        style={{
          position: 'absolute',
          bottom: 60,
          right: 80,
          fontSize: 18,
          color: '#52526e',
        }}
      >
        espython.dev
      </div>
    </div>,
    { ...size }
  )
}
