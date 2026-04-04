import { Hero } from '@/components/home/Hero'
import { FeaturedProjects } from '@/components/home/FeaturedProjects'
import { LatestPosts } from '@/components/home/LatestPosts'

export default function Home() {
  return (
    <main>
      <Hero />
      <FeaturedProjects />
      <LatestPosts />
    </main>
  )
}
