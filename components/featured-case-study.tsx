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
        {/* Two Column Layout */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
          {/* Left Column - Image (60%) */}
          <div className="lg:w-[60%]">
            <div 
              className="relative aspect-[4/5] bg-lma-black border border-lma-cream/20 flex items-center justify-center"
              data-image-placeholder="fashion-nova-hero"
            >
              <span className="text-lma-cream/30 text-xs tracking-[0.15em] uppercase">
                Fashion Nova Hero Image
              </span>
            </div>
          </div>

          {/* Right Column - Content (40%) */}
          <div className="lg:w-[40%] flex flex-col justify-center">
            {/* Eyebrow */}
            <span className="text-lma-cream/60 text-[10px] md:text-xs tracking-[0.2em] uppercase mb-6 md:mb-8">
              Featured Case Study — 01
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
            <p className="font-sans text-lma-body/70 text-sm md:text-base leading-relaxed mb-8 md:mb-12 max-w-md">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
            </p>

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

            {/* Text Link */}
            <a
              href="#"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              className="group inline-flex items-center gap-2 text-lma-cream text-sm tracking-[0.1em] uppercase transition-colors duration-300 hover:text-lma-gold"
            >
              Read the full story
              <ArrowRight 
                className={`w-4 h-4 transition-transform duration-300 ${
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
