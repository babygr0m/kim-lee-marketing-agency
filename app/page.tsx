import { Hero } from "@/components/hero"
import { LogoWall } from "@/components/logo-wall"
import { FeaturedCaseStudy } from "@/components/featured-case-study"
import { Services } from "@/components/services"
import { About } from "@/components/about"

export default function Home() {
  return (
    <main>
      <Hero />
      <LogoWall />
      <FeaturedCaseStudy />
      <Services />
      <About />
    </main>
  )
}
