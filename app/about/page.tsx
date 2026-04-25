import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { LogoWall } from "@/components/logo-wall"
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

      {/* Brands carousel — reuses homepage component */}
      <section className="bg-lma-black pt-24 md:pt-32">
        <div className="mx-auto max-w-7xl px-6 md:px-12 lg:px-20 mb-12 md:mb-16 text-center">
          <p className="mb-4 font-sans text-xs uppercase tracking-[0.2em] text-lma-gold font-semibold">
            Brands
          </p>
          <h2 className="font-[family-name:var(--font-anton)] text-4xl uppercase leading-[0.95] tracking-tight text-lma-cream md:text-5xl lg:text-6xl">
            Who we&apos;ve built with.
          </h2>
          <p className="mt-3 font-[family-name:var(--font-instrument-serif)] text-xl italic text-lma-gold/80 md:text-2xl">
            A decade of category-defining work.
          </p>
        </div>
        <LogoWall showEyebrow={false} />
      </section>

      <div className="mx-auto h-px w-full max-w-7xl bg-lma-cream/[0.08]" />

      <AboutPodcast />

      <div className="mx-auto h-px w-full max-w-7xl bg-lma-cream/[0.08]" />

      <AboutClosingCTA />

      <Footer />
    </main>
  )
}
