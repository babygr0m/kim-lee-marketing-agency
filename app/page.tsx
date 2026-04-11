import { Hero } from "@/components/hero"
import { LogoWall } from "@/components/logo-wall"
import { FeaturedCaseStudy } from "@/components/featured-case-study"

export default function Home() {
  return (
    <main>
      <Hero />
      <LogoWall />
      <FeaturedCaseStudy />
    </main>
  )
}
