"use client"

import { ArrowRight } from "lucide-react"
import { useState } from "react"

export function ContactCTA() {
  const [isButtonHovered, setIsButtonHovered] = useState(false)
  const [isEmailHovered, setIsEmailHovered] = useState(false)

  return (
    <section className="flex min-h-screen items-center justify-center bg-lma-black px-6 py-24 md:py-32">
      <div className="mx-auto max-w-4xl text-center">
        {/* Eyebrow */}
        <p className="mb-6 font-sans text-xs uppercase tracking-[0.2em] text-lma-cream/60">
          Let&apos;s Build
        </p>

        {/* Headline */}
        <h2 className="font-[family-name:var(--font-anton)] text-5xl uppercase leading-[0.9] tracking-tight text-lma-cream sm:text-6xl md:text-7xl lg:text-8xl">
          Your brand is next.
        </h2>

        {/* Kicker */}
        <p className="mt-4 font-[family-name:var(--font-instrument-serif)] text-xl italic text-lma-gold/80 md:mt-6 md:text-2xl lg:text-3xl">
          Let&apos;s make it move.
        </p>

        {/* Body */}
        <p className="mx-auto mt-6 max-w-xl font-sans text-base leading-relaxed text-lma-body/80 md:mt-8 md:text-lg">
          Tell us about your brand, your goals, and what you&apos;re trying to unlock. 
          We respond to every inquiry within 48 hours.
        </p>

        {/* Primary CTA */}
        <div className="mt-10 md:mt-12">
          <a
            href="/contact"
            onMouseEnter={() => setIsButtonHovered(true)}
            onMouseLeave={() => setIsButtonHovered(false)}
            className="group inline-flex items-center gap-3 border border-lma-cream/80 px-8 py-4 font-sans text-sm uppercase tracking-[0.15em] text-lma-cream transition-all duration-300 hover:border-lma-cream md:px-10 md:py-5 md:text-base"
          >
            Book a strategy call
            <ArrowRight
              className={`h-4 w-4 transition-transform duration-300 md:h-5 md:w-5 ${
                isButtonHovered ? "translate-x-1" : "translate-x-0"
              }`}
            />
          </a>
        </div>

        {/* Divider + Secondary */}
        <div className="mx-auto mt-10 max-w-md md:mt-12">
          <div className="mb-6 h-px w-full bg-lma-cream/15" />
          <p className="font-sans text-sm text-lma-cream/60">
            Or email us directly at{" "}
            <a
              href="mailto:hello@leemarketingagency.com"
              onMouseEnter={() => setIsEmailHovered(true)}
              onMouseLeave={() => setIsEmailHovered(false)}
              className={`text-lma-gold/80 transition-all duration-300 ${
                isEmailHovered ? "underline" : "no-underline"
              }`}
            >
              hello@leemarketingagency.com
            </a>
          </p>
        </div>
      </div>
    </section>
  )
}
