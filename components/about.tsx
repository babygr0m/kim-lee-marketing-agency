"use client"

import { ArrowRight } from "lucide-react"
import { useState } from "react"
import { AnimatedStat } from "@/components/animated-stat"
import { useInView } from "@/hooks/use-in-view"

export function About() {
  const [isHovered, setIsHovered] = useState(false)

  const founderStats = [
    { value: "$1B+", label: "Revenue built at Fashion Nova" },
    { value: "100M+", label: "Combined reach across clients" },
    { value: "10+ YRS", label: "Pioneering influencer marketing" },
  ]

  // Two observers in this section:
  //  - `founderRef` — fires when the portrait + bio block (founder grid)
  //    crosses 15% visible. Drives the portrait slide-in + bio stagger.
  //  - `statsRef` — fires when the 3-stat row below the bio crosses 25%
  //    visible. Drives the stagger of the stat cards (count-up animation
  //    is handled by AnimatedStat's own internal IntersectionObserver,
  //    so this only animates the stat label / wrapper fade-in).
  const { ref: founderRef, inView: founderInView } =
    useInView<HTMLDivElement>({ threshold: 0.15 })
  const { ref: statsRef, inView: statsInView } =
    useInView<HTMLDivElement>({ threshold: 0.25 })

  const founderRevealed = founderInView ? "true" : "false"
  const statsRevealed = statsInView ? "true" : "false"

  return (
    <section className="bg-lma-black px-6 py-24 md:px-12 md:py-32 lg:px-20">
      <div className="mx-auto max-w-7xl">
        {/* Section Header — animates as part of the founder block reveal
            (eyebrow first at 0ms, headline at 100ms, kicker at 250ms). */}
        <p
          ref={founderRef}
          data-reveal="fade-up-8"
          data-revealed={founderRevealed}
          style={{ transitionDelay: "0ms" }}
          className="mb-4 font-sans text-xs uppercase tracking-[0.2em] text-lma-cream/60"
        >
          ABOUT
        </p>
        <h2
          data-reveal="fade-up-12"
          data-revealed={founderRevealed}
          style={{ transitionDelay: "100ms", transitionDuration: "600ms" }}
          className="font-[family-name:var(--font-anton)] text-4xl uppercase leading-[0.9] tracking-tight text-lma-cream md:text-6xl lg:text-7xl"
        >
          Built from the inside.
        </h2>
        <p
          data-reveal="fade-up-8"
          data-revealed={founderRevealed}
          style={{ transitionDelay: "250ms", transitionDuration: "500ms" }}
          className="mt-2 font-serif text-xl italic text-lma-gold/70 md:text-2xl"
        >
          Proven at scale.
        </p>

        {/* Founder Block */}
        <div className="mt-16 grid gap-10 md:mt-20 md:grid-cols-2 md:gap-16">
          {/* Portrait — slides in from -16px over 700ms, no delay so it
              starts moving at the same moment as the section header
              eyebrow above. */}
          <div
            data-reveal="slide-x-16"
            data-revealed={founderRevealed}
            style={{ transitionDuration: "700ms" }}
            className="relative aspect-[3/4] overflow-hidden border border-lma-cream/10"
          >
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202026-04-17%20at%205.13.47%E2%80%AFPM-FWvU564UFJVC0celrWGwpVHHmmhf3y.png"
              alt="Kim Lee, Founder & CEO of LMA"
              className="absolute inset-0 w-full h-full object-cover object-top"
            />
          </div>

          {/* Bio — eyebrow → name → kicker → paragraphs at 0/100/200/350ms */}
          <div className="flex flex-col justify-center">
            <p
              data-reveal="fade-up-8"
              data-revealed={founderRevealed}
              style={{ transitionDelay: "0ms" }}
              className="mb-2 font-sans text-xs uppercase tracking-[0.2em] text-lma-cream/60"
            >
              FOUNDER & CEO
            </p>
            <h3
              data-reveal="fade-up-12"
              data-revealed={founderRevealed}
              style={{ transitionDelay: "100ms", transitionDuration: "600ms" }}
              className="font-[family-name:var(--font-anton)] text-4xl uppercase tracking-tight text-lma-cream md:text-5xl"
            >
              Kim Lee
            </h3>

            <p
              data-reveal="fade-up-8"
              data-revealed={founderRevealed}
              style={{ transitionDelay: "200ms" }}
              className="mt-6 font-sans text-base leading-relaxed text-lma-cream/80"
            >
              Kim Lee is the founder and CEO of LMA, a full-service digital marketing agency
              specializing in social commerce and affiliate marketing. She is one of the original
              architects of modern influencer marketing, having spent eight years at Fashion Nova
              building the brand&apos;s entire marketing operation from the ground up: the viral strategy
              that turned a local boutique into one of the fastest-growing fashion brands in the
              world, generating over $1B+ in annual revenue.
            </p>

            <p
              data-reveal="fade-up-8"
              data-revealed={founderRevealed}
              style={{ transitionDelay: "350ms" }}
              className="mt-4 font-sans text-base leading-relaxed text-lma-cream/80"
            >
              Today, from culturally-driven influencer campaigns and high-performing TikTok Shop
              affiliate programs to paid media and viral campaign creatives, she builds the digital
              marketing engine behind some of the most-watched brands in culture. Current and past
              clients include Forever 21, Netflix, Mattel, Sanrio, Sol de Janeiro, Rolling Loud, and more.
            </p>

            {/* Founder Stats — separate observer because the stat row
                often sits below the fold even when the portrait is
                already visible. Stats cascade in 80ms apart. */}
            <div
              ref={statsRef}
              className="mt-8 md:mt-12 flex flex-col md:flex-row md:items-center gap-0"
            >
              {founderStats.map((stat, index) => (
                <div
                  key={index}
                  data-reveal="fade-up-8"
                  data-revealed={statsRevealed}
                  style={{ transitionDelay: `${index * 80}ms` }}
                  className={`flex flex-col gap-1 py-4 md:py-0 md:pr-6 lg:pr-8 ${
                    index !== 0 ? "border-t md:border-t-0 md:border-l border-lma-cream/20 md:pl-6 lg:pl-8" : ""
                  }`}
                >
                  <AnimatedStat
                    value={stat.value}
                    className="font-[family-name:var(--font-anton)] text-lma-cream text-base md:text-lg tracking-tight"
                  />
                  <span className="text-lma-body/60 text-[9px] md:text-[10px] tracking-[0.15em] uppercase">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>

            {/* Text Link — wrapped so the inner <a> keeps its own
                hover transition (color + arrow translate) intact. */}
            <div
              data-reveal="fade-up-8"
              data-revealed={founderRevealed}
              style={{ transitionDelay: "500ms" }}
              className="mt-8 md:mt-12"
            >
              <a
                href="/about"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                className="group inline-flex items-center gap-2 text-lma-cream text-sm tracking-[0.1em] uppercase transition-colors duration-300 hover:text-lma-gold"
              >
                Read Kim&apos;s full story
                <ArrowRight
                  className={`w-4 h-4 transition-transform duration-300 ${
                    isHovered ? "translate-x-1" : "translate-x-0"
                  }`}
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
