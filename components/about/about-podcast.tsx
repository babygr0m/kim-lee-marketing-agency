"use client"

import { ArrowRight } from "lucide-react"
import { useState } from "react"

export function AboutPodcast() {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <section className="px-6 py-24 md:px-12 md:py-32 lg:px-20 lg:py-40">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-10 md:grid-cols-5 md:gap-12 lg:gap-16 items-center">
          {/* Cover art — 2/5 col */}
          <div className="md:col-span-2">
            <div className="relative aspect-square w-full overflow-hidden border border-lma-cream/10">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/me-and-who-els-cover.jpeg"
                alt="Me and Who Els podcast cover art — chunky olive script logo on a cream background"
                loading="lazy"
                className="absolute inset-0 w-full h-full"
                style={{ objectFit: "cover", objectPosition: "center" }}
              />
            </div>
          </div>

          {/* Content — 3/5 col */}
          <div className="md:col-span-3">
            <p className="mb-4 font-mono font-semibold text-xs uppercase tracking-[0.2em] text-lma-gold">
              On the Mic
            </p>

            <h2 className="font-[family-name:var(--font-anton)] text-4xl uppercase leading-[0.95] tracking-tight text-lma-cream md:text-5xl lg:text-6xl">
              Me and Who Els
            </h2>

            <p className="mt-3 font-[family-name:var(--font-instrument-serif)] text-xl italic text-lma-gold/80 md:mt-4 md:text-2xl text-balance">
              The podcast where culture, commerce, and creators meet.
            </p>

            <p className="mt-6 max-w-xl font-sans text-base leading-relaxed text-lma-cream/80 md:mt-8 md:text-[17px] text-pretty">
              Hosted and produced by Kim, Me and Who Els is the podcast where the people building
              modern brand culture come to talk shop. From founders and creators to marketers and
              operators, every conversation pulls back the curtain on how culture actually gets
              made, and how brands break through.
            </p>

            {/* "Listen now" tertiary link — was using a weak opacity fade
                on hover. Switched to the same smooth color shift the rest
                of the site uses (gold → cream) for consistency. The arrow
                keeps its translate-x-1 hover for the standard micro-
                interaction. */}
            <a
              href="#"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              className="mt-8 inline-flex items-center gap-2 font-mono text-xs font-semibold uppercase tracking-[0.2em] text-lma-gold transition-colors duration-200 hover:text-lma-cream md:mt-10"
            >
              Listen now
              <ArrowRight
                className={`h-3.5 w-3.5 transition-transform duration-300 ${
                  isHovered ? "translate-x-1" : "translate-x-0"
                }`}
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
