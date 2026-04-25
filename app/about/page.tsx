import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { AboutHero } from "@/components/about/about-hero"
import { AboutFounder } from "@/components/about/about-founder"
import { AboutApproach } from "@/components/about/about-approach"
import { AboutPodcast } from "@/components/about/about-podcast"
import { AboutClosingCTA } from "@/components/about/about-closing-cta"

export default function AboutPage() {
  return (
    <main className="bg-lma-black">
      <Header />

      <AboutHero />

      {/* Hairline divider */}
      <div className="mx-auto h-px w-full max-w-7xl bg-lma-cream/[0.08]" />

      <AboutFounder />

      <div className="mx-auto h-px w-full max-w-7xl bg-lma-cream/[0.08]" />

      <AboutApproach />

      <div className="mx-auto h-px w-full max-w-7xl bg-lma-cream/[0.08]" />

      <AboutPodcast />

      <div className="mx-auto h-px w-full max-w-7xl bg-lma-cream/[0.08]" />

      <AboutClosingCTA />

      <Footer />
    </main>
  )
}
