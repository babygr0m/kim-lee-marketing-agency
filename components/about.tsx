"use client"

import { ArrowRight } from "lucide-react"
import { useState } from "react"

export function About() {
  const [isHovered, setIsHovered] = useState(false)
  
  const founderStats = [
    { value: "$1B+", label: "Revenue built at Fashion Nova" },
    { value: "100M+", label: "Combined reach across clients" },
    { value: "10+ YRS", label: "Pioneering influencer marketing" },
  ]

  return (
    <section className="bg-lma-black px-6 py-24 md:px-12 md:py-32 lg:px-20">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <p className="mb-4 font-sans text-xs uppercase tracking-[0.2em] text-lma-cream/60">
          ABOUT
        </p>
        <h2 className="font-[family-name:var(--font-anton)] text-4xl uppercase leading-[0.9] tracking-tight text-lma-cream md:text-6xl lg:text-7xl">
          Built from the inside.
        </h2>
        <p className="mt-2 font-serif text-xl italic text-lma-gold/70 md:text-2xl">
          Proven at scale.
        </p>

        {/* Founder Block */}
        <div className="mt-16 grid gap-10 md:mt-20 md:grid-cols-2 md:gap-16">
          {/* Portrait */}
          <div className="relative aspect-[3/4] overflow-hidden border border-lma-cream/10">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202026-04-17%20at%205.13.47%E2%80%AFPM-FWvU564UFJVC0celrWGwpVHHmmhf3y.png"
              alt="Kim Lee, Founder & CEO of LMA"
              className="absolute inset-0 w-full h-full object-cover object-top"
            />
          </div>

          {/* Bio */}
          <div className="flex flex-col justify-center">
            <p className="mb-2 font-sans text-xs uppercase tracking-[0.2em] text-lma-cream/60">
              FOUNDER & CEO
            </p>
            <h3 className="font-[family-name:var(--font-anton)] text-4xl uppercase tracking-tight text-lma-cream md:text-5xl">
              Kim Lee
            </h3>
            
            <p className="mt-6 font-sans text-base leading-relaxed text-lma-cream/80">
              Kim Lee is the founder and CEO of LMA, a full-service digital marketing agency 
              specializing in social commerce and affiliate marketing. She is one of the original 
              architects of modern influencer marketing, having spent eight years at Fashion Nova 
              building the brand&apos;s entire marketing operation from the ground up: the viral strategy 
              that turned a local boutique into one of the fastest-growing fashion brands in the 
              world, generating over $1B+ in annual revenue.
            </p>
            
            <p className="mt-4 font-sans text-base leading-relaxed text-lma-cream/80">
              Today, from culturally-driven influencer campaigns and high-performing TikTok Shop 
              affiliate programs to paid media and viral campaign creatives, she builds the digital 
              marketing engine behind some of the most-watched brands in culture. Current and past 
              clients include Forever 21, Netflix, Mattel, Sanrio, Sol de Janeiro, Rolling Loud, and more.
            </p>

            {/* Founder Stats */}
            <div className="mt-8 md:mt-12 flex flex-col md:flex-row md:items-center gap-0">
              {founderStats.map((stat, index) => (
                <div 
                  key={index}
                  className={`flex flex-col gap-1 py-4 md:py-0 md:pr-6 lg:pr-8 ${
                    index !== 0 ? "border-t md:border-t-0 md:border-l border-lma-cream/20 md:pl-6 lg:pl-8" : ""
                  }`}
                >
                  <span className="font-[family-name:var(--font-anton)] text-lma-cream text-base md:text-lg tracking-tight">
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
              href="/about"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              className="group mt-8 md:mt-12 inline-flex items-center gap-2 text-lma-cream text-sm tracking-[0.1em] uppercase transition-colors duration-300 hover:text-lma-gold"
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
    </section>
  )
}
