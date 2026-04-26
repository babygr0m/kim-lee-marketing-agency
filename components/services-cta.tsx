"use client"

import { ArrowRight } from "lucide-react"
import { useState } from "react"

export function ServicesCTA() {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <section className="bg-lma-black px-6 md:px-12 lg:px-20 py-32 md:py-48 border-t border-lma-cream/[0.08]">
      <div className="max-w-4xl mx-auto text-center">
        {/* Headline */}
        <h2 className="font-[family-name:var(--font-anton)] text-lma-cream uppercase tracking-tight leading-[0.9] text-[clamp(3.5rem,9vw,7rem)]">
          Ready to build?
        </h2>

        {/* Italic Kicker */}
        <p className="font-serif italic text-lma-gold text-[clamp(1.5rem,3vw,2.25rem)] mt-4 md:mt-6 mb-12 md:mb-16">
          Let&apos;s make it move.
        </p>

        {/* CTA Button — standardized to the canonical nav-bar pattern:
            cream outline + gold arrow → cream fill + black text/arrow
            on hover. */}
        <a
          href="/contact"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="group inline-flex items-center gap-3 border border-lma-cream/80 px-8 md:px-10 py-4 md:py-5 font-mono text-xs md:text-sm uppercase tracking-[0.2em] text-lma-cream hover:bg-lma-cream hover:text-lma-black transition-colors duration-200"
        >
          Book a Strategy Call
          <ArrowRight
            className={`h-4 w-4 text-lma-gold group-hover:text-lma-black transition-transform duration-300 ${
              isHovered ? "translate-x-1" : "translate-x-0"
            }`}
          />
        </a>
      </div>
    </section>
  )
}
