import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { AboutHero } from "@/components/about/about-hero"
import { AboutFounder } from "@/components/about/about-founder"
import { AboutClosingCTA } from "@/components/about/about-closing-cta"
import { AboutPageBg } from "@/components/about/about-page-bg"

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <AboutPageBg />

      <Header />

      <AboutHero />

      <div className="mx-auto h-px w-full max-w-7xl bg-lma-cream/[0.08]" />

      <AboutFounder />

      <div className="mx-auto h-px w-full max-w-7xl bg-lma-cream/[0.08]" />

      <AboutClosingCTA />

      <Footer transparent />
    </main>
  )
}
