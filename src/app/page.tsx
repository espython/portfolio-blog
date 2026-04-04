import { Hero } from '@/components/home/Hero'
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
