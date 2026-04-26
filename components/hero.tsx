"use client"

import { ArrowRight } from "lucide-react"
import { useState } from "react"
import { AnimatedStat } from "@/components/animated-stat"

const stats = [
  { value: "1B+", label: "Audience reach across creator network" },
  { value: "$15M+", label: "GMV driven through TikTok Shop" },
  { value: "10+ YRS", label: "Pioneering influencer marketing" },
  { value: "VERIFIED", label: "TikTok Shop Affiliate Partner" },
]

export function Hero() {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <section className="relative h-screen w-full bg-lma-black overflow-hidden">
      {/* Flat dark background - no video, no imagery */}
      <div className="absolute inset-0 bg-lma-black" />

      {/* Content Container — bumped bottom padding from `pb-8 md:pb-12`
          → `pb-16 md:pb-24` to push the proof bar away from the viewport
          edge, and the proof bar itself now has its own top margin so it
          sits well below the headline / CTA block instead of being crammed
          against it. */}
      <div className="relative z-10 flex flex-col justify-end h-full px-6 md:px-12 lg:px-20 pt-24 pb-16 md:pb-24">
        {/* Middle Section - Headline & CTA.
            Hero stagger reveal classes (lma-reveal-*) drive the editorial
            entrance: headline → kicker → CTA. The homepage hero has no
            eyebrow or body paragraph — only 3 of the 5 stagger slots fire. */}
        <div className="flex flex-col items-start max-w-5xl">
          <h1 className="lma-reveal-headline font-display text-lma-cream text-[clamp(2.5rem,10vw,8rem)] leading-[0.9] tracking-[-0.02em] uppercase text-balance">
            We built the internet&apos;s fastest-growing brands.
          </h1>
          <p className="lma-reveal-kicker font-serif italic text-lma-gold text-[clamp(1.25rem,3vw,2.5rem)] mt-4 md:mt-6">
            Now we&apos;ll build yours.
          </p>

          {/* Hero primary CTA — standardized to the canonical nav-bar
              pattern: cream outline + gold arrow → fully filled cream with
              black text + black arrow on hover. `transition-colors
              duration-200` keeps the color shift smooth. The arrow keeps
              its own `translate-x-1` shift on hover for the same micro-
              interaction the nav uses. */}
          <button
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="lma-reveal-cta group mt-8 md:mt-12 inline-flex items-center gap-3 border border-lma-cream/80 px-7 md:px-8 py-3 md:py-[14px] font-mono text-xs uppercase tracking-[0.2em] text-lma-cream hover:bg-lma-cream hover:text-lma-black transition-colors duration-200"
          >
            Book a strategy call
            <ArrowRight
              className={`w-4 h-4 text-lma-gold group-hover:text-lma-black transition-transform duration-300 ${
                isHovered ? "translate-x-1" : "translate-x-0"
              }`}
            />
          </button>
        </div>

        {/* Bottom Section - Proof Bar.
            Numeric stat values are animated with <AnimatedStat>: numbers
            count up from 0 → target on viewport entry; non-numeric values
            (VERIFIED) fade in instead.

            Sizing & timing pass:
            - `mt-16 md:mt-24` puts real breathing room between the CTA and
              the stat row so the row doesn't feel crammed against it.
            - Numbers bumped from `text-lg md:text-xl` → `text-3xl md:text-5xl
              lg:text-6xl` so they read as a hero proof bar, not a footnote.
            - `duration={4500}` runs the logarithmic count over ~4.5s so the
              value visibly climbs through hundreds → thousands → millions →
              billions, spending ~500ms in each magnitude tier. */}
        <div className="w-full mt-16 md:mt-24">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-y-8 md:gap-y-0">
            {stats.map((stat, index) => (
              <div
                key={stat.value}
                className={`flex flex-col gap-2 md:gap-3 px-0 md:px-6 ${
                  index !== 0 ? "md:border-l md:border-lma-cream/20" : ""
                } ${index % 2 !== 0 ? "pl-6 border-l border-lma-cream/20 md:border-l md:pl-6" : ""}`}
              >
                <AnimatedStat
                  value={stat.value}
                  duration={4500}
                  className="font-display text-lma-cream text-3xl md:text-5xl lg:text-6xl tracking-tight leading-none"
                />
                <span className="text-lma-body/70 text-[10px] md:text-xs tracking-[0.15em] uppercase leading-relaxed">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
