import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { AboutHero } from "@/components/about/about-hero"
import { AboutFounder } from "@/components/about/about-founder"
import { AboutApproach } from "@/components/about/about-approach"
import { AboutPodcast } from "@/components/about/about-podcast"
import { AboutClosingCTA } from "@/components/about/about-closing-cta"
import { AboutPageBg } from "@/components/about/about-page-bg"

export default function AboutPage() {
  // <main> intentionally has NO bg-lma-black — the fixed gradient layer
  // (AboutPageBg) sits at -z-10 and provides the dark page base via its
  // own #0A0A0A solid layer. Footer is rendered in transparent mode so
  // the gradient reads through behind it. Same architecture as the
  // /case-studies page.
  return (
    <main className="min-h-screen">
      <AboutPageBg />

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

      <Footer transparent />
    </main>
  )
}
