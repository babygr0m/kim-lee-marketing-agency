"use client"

import { ArrowRight } from "lucide-react"
import { useState } from "react"

export function AboutClosingCTA() {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <section className="px-6 py-24 md:py-32 lg:py-40">
      <div className="mx-auto max-w-3xl text-center">
        {/* Eyebrow */}
        <p className="mb-6 font-sans text-xs font-semibold uppercase tracking-[0.2em] text-lma-gold md:text-sm">
          Let&apos;s Work
        </p>

        {/* Headline */}
        <h2 className="font-[family-name:var(--font-anton)] text-5xl uppercase leading-[0.9] tracking-tight text-lma-cream sm:text-6xl md:text-7xl lg:text-8xl text-balance">
          Build with us.
        </h2>

        {/* Kicker */}
        <p className="mt-4 font-[family-name:var(--font-instrument-serif)] text-2xl italic text-lma-gold/80 md:mt-6 md:text-3xl lg:text-4xl text-balance">
          Your brand. Our playbook.
        </p>

        {/* Body */}
        <p className="mx-auto mt-8 max-w-xl font-sans text-base leading-relaxed text-lma-cream/75 md:mt-10 md:text-lg text-pretty">
          If you&apos;re a brand ready to move at the speed of culture, and ready to build a creator
          commerce engine that actually performs, we&apos;d love to hear from you.
        </p>

        {/* CTA */}
        <div className="mt-10 md:mt-12">
          <a
            href="/contact"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="inline-flex items-center gap-3 border border-lma-cream/80 px-8 py-4 font-sans text-sm uppercase tracking-[0.15em] text-lma-cream transition-colors duration-300 hover:border-lma-gold hover:text-lma-gold md:px-10 md:py-5 md:text-base"
          >
            Book a strategy call
            <ArrowRight
              className={`h-4 w-4 transition-transform duration-300 md:h-5 md:w-5 ${
                isHovered ? "translate-x-1" : "translate-x-0"
              }`}
            />
          </a>
        </div>
      </div>
    </section>
  )
}
