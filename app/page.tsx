import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { LogoWall } from "@/components/logo-wall"
import { FeaturedCaseStudy } from "@/components/featured-case-study"
import { Services } from "@/components/services"
import { ContactCTA } from "@/components/contact-cta"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <LogoWall />
      <FeaturedCaseStudy />
      <Services />
      <ContactCTA />
      <Footer />
    </main>
  )
}
