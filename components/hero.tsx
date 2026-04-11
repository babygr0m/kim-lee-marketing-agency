"use client"

import { ArrowRight } from "lucide-react"
import { useState } from "react"

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
      {/* Video Placeholder with Overlay */}
      <div className="absolute inset-0">
        {/* VIDEO PLACEHOLDER - Replace this div's background with your video element */}
        <div 
          className="absolute inset-0 bg-lma-black"
          data-video-placeholder="true"
          aria-label="Background video placeholder"
        />
        {/* Dark gradient overlay from bottom for text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-lma-black via-lma-black/70 to-lma-black/30" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 flex flex-col justify-end h-full px-6 md:px-12 lg:px-20 pt-24 pb-8 md:pb-12">
        {/* Middle Section - Headline & CTA */}
        <div className="flex flex-col items-start max-w-5xl">
          <h1 className="font-display text-lma-cream text-[clamp(2.5rem,10vw,8rem)] leading-[0.9] tracking-[-0.02em] uppercase text-balance">
            We built the internet&apos;s fastest-growing brands.
          </h1>
          <p className="font-serif italic text-lma-gold text-[clamp(1.25rem,3vw,2.5rem)] mt-4 md:mt-6">
            Now we&apos;ll build yours.
          </p>
          
          <button
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="group mt-8 md:mt-12 px-6 py-3 border border-lma-cream/60 text-lma-cream text-sm tracking-[0.1em] uppercase rounded-[4px] transition-all duration-300 hover:border-lma-cream flex items-center gap-3"
          >
            Book a strategy call
            <ArrowRight 
              className={`w-4 h-4 transition-all duration-300 ${
                isHovered ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-2"
              }`}
            />
          </button>
        </div>

        {/* Bottom Section - Proof Bar */}
        <div className="w-full">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-y-6 md:gap-y-0">
            {stats.map((stat, index) => (
              <div 
                key={stat.value}
                className={`flex flex-col gap-1 px-0 md:px-6 ${
                  index !== 0 ? "md:border-l md:border-lma-cream/20" : ""
                } ${index % 2 !== 0 ? "pl-6 border-l border-lma-cream/20 md:border-l md:pl-6" : ""}`}
              >
                <span className="font-display text-lma-cream text-lg md:text-xl tracking-tight">
                  {stat.value}
                </span>
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
