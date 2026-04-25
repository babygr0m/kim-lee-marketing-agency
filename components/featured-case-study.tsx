"use client"

import { ArrowRight } from "lucide-react"
import { useState } from "react"

const caseStudyStats = [
  { value: "$1B+", label: "Revenue" },
  { value: "8 YRS", label: "Built from zero" },
  { value: "100M+", label: "Combined reach" },
]

export function FeaturedCaseStudy() {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <section className="bg-lma-black px-6 md:px-12 lg:px-20 py-16 md:py-24 lg:py-32">
      <div className="max-w-7xl mx-auto">
        {/* Two Column Layout — vertically centered against each other so the
            shorter video card no longer floats above a much taller content
            column. Video bumped to 65% width so the autoplay hero carries more
            visual weight against the right-column copy. */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 lg:items-center">
          {/* Left Column - Video (65%) */}
          <div className="lg:w-[65%]">
            {/* Decorative autoplay-loop hero — full video lives on /case-studies */}
            <div
              className="relative w-full overflow-hidden border border-lma-cream/10"
              style={{ aspectRatio: "16 / 9" }}
            >
              <iframe
                src="https://www.youtube.com/embed/7hXhsXrlDhE?autoplay=1&mute=1&loop=1&playlist=7hXhsXrlDhE&controls=0&showinfo=0&rel=0&modestbranding=1&playsinline=1"
                title="Cardi B x Fashion Nova"
                allow="autoplay; encrypted-media; picture-in-picture"
                allowFullScreen
                aria-hidden="true"
                tabIndex={-1}
                className="absolute inset-0 w-full h-full pointer-events-none"
                style={{ border: 0 }}
              />
            </div>
          </div>

          {/* Right Column - Content (unchanged 45% — flex-shrink handles
              the overflow vs the wider 65% video so the text column visually
              stays at its original size and the body copy / headline / CTA
              don't reflow). */}
          <div className="lg:w-[45%] flex flex-col justify-center">
            {/* Eyebrow */}
            <span className="text-lma-cream/60 text-[10px] md:text-xs tracking-[0.2em] uppercase mb-6 md:mb-8">
              Featured Case Study / 01
            </span>

            {/* Headline */}
            <h2 className="font-display text-lma-cream text-[clamp(2rem,5vw,4rem)] leading-[0.95] tracking-[-0.02em] uppercase mb-4 md:mb-6 text-balance">
              The brand we built from zero.
            </h2>

            {/* Subhead */}
            <p className="font-serif italic text-lma-gold text-[clamp(1.125rem,2vw,1.5rem)] mb-6 md:mb-8">
              Eight years. One playbook. A billion-dollar outcome.
            </p>

            {/* Body Copy */}
            <div className="font-sans text-lma-body/70 text-sm md:text-base leading-relaxed mb-8 md:mb-12 max-w-md space-y-4">
              <p>
                Built Fashion Nova&apos;s social media department and digital marketing infrastructure from the ground up over eight years — establishing the influencer strategy, celebrity campaign engine, and brand placement framework that scaled the company from local boutique to $1B+ in annual revenue.
              </p>
              <p>
                Sourced and led every major celebrity campaign — Cardi B, Megan Thee Stallion, Amber Rose, Cassie — generating billions of impressions and defining the brand&apos;s cultural position.
              </p>
            </div>

            {/* Stats Row */}
            <div className="flex items-center gap-0 mb-8 md:mb-12">
              {caseStudyStats.map((stat, index) => (
                <div 
                  key={stat.value}
                  className={`flex flex-col gap-1 pr-6 md:pr-8 ${
                    index !== 0 ? "pl-6 md:pl-8 border-l border-lma-cream/20" : ""
                  }`}
                >
                  <span className="font-display text-lma-cream text-base md:text-lg tracking-tight">
                    {stat.value}
                  </span>
                  <span className="text-lma-body/60 text-[9px] md:text-[10px] tracking-[0.15em] uppercase">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>

            {/* Button CTA */}
            <a
              href="/case-studies#fashion-nova"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              className="group inline-flex items-center gap-3 border border-lma-cream/80 px-7 md:px-8 py-[18px] font-mono text-xs uppercase tracking-[0.2em] text-lma-cream hover:bg-lma-cream hover:text-lma-black transition-colors self-start"
            >
              Read the full story
              <ArrowRight
                className={`w-4 h-4 text-lma-gold group-hover:text-lma-black transition-transform duration-300 ${
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
