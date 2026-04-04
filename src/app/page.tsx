import { type Metadata } from 'next'

import { Hero } from '@/components/home/Hero'

export const metadata: Metadata = {
  openGraph: {
    url: '/',
    title: 'Eslam Mahmoud — Full Stack Engineer',
    description:
      'Portfolio and blog of Eslam Mahmoud — Full Stack Software Engineer specializing in React, Node.js, and AWS.',
  },
}
import { FeaturedProjects } from '@/components/home/FeaturedProjects'
import { LatestPosts } from '@/components/home/LatestPosts'
import { CallToAction } from '@/components/home/CallToAction'

export default function Home() {
  return (
    <main>
      <Hero />
      <section className="bg-[var(--color-bg-subtle)]">
        <FeaturedProjects />
      </section>
      <LatestPosts />
      <CallToAction />
    </main>
  )
}
