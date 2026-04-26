"use client"

import { ArrowRight } from "lucide-react"
import { useState } from "react"

export type ServiceSectionData = {
  number: string
  slug: string
  name: string
  kicker: string
  body: string
  campaigns: string[]
  stats: { value: string; label: string }[]
}

export function ServiceSection({ service, isLast }: { service: ServiceSectionData; isLast: boolean }) {
  const [isLinkHovered, setIsLinkHovered] = useState(false)

  return (
    <section className="bg-lma-black px-6 md:px-12 lg:px-20 py-24 md:py-32">
      <div className="max-w-7xl mx-auto">
        {/* Top Row - Number + Name */}
        <div className="flex flex-col md:flex-row md:items-start gap-4 md:gap-8 mb-6 md:mb-8">
          {/* Service Number */}
          <div className="md:w-[15%] flex-shrink-0">
            <span className="font-[family-name:var(--font-anton)] text-lma-gold text-4xl md:text-5xl lg:text-6xl tracking-tight">
              {service.number}
            </span>
          </div>

          {/* Service Name */}
          <div className="md:w-[85%]">
            <h2 className="font-[family-name:var(--font-anton)] text-lma-cream uppercase tracking-tight leading-[0.95] text-[clamp(3rem,7vw,5.5rem)] text-balance">
              {service.name}
            </h2>
          </div>
        </div>

        {/* Italic Kicker */}
        <div className="md:pl-[calc(15%+2rem)]">
          <p className="font-serif italic text-lma-gold text-[clamp(1.25rem,2vw,1.75rem)] mb-8 md:mb-12">
            {service.kicker}
          </p>

          {/* Body Copy */}
          <p className="font-sans text-lma-cream/80 text-base md:text-lg leading-relaxed max-w-[780px] mb-16 md:mb-20">
            {service.body}
          </p>

          {/* Campaign Asset Placeholders */}
          <div className={`grid gap-6 md:gap-8 mb-16 md:mb-20 ${
            service.campaigns.length === 2 
              ? "grid-cols-1 md:grid-cols-2" 
              : "grid-cols-1 md:grid-cols-3"
          }`}>
            {service.campaigns.map((label) => (
              <div
                key={label}
                className="relative aspect-video bg-lma-cream/[0.02] border border-lma-cream/[0.08] flex items-center justify-center"
                data-campaign-placeholder={label}
              >
                <span className="font-sans text-[10px] md:text-xs tracking-[0.2em] uppercase text-lma-cream/40">
                  {label}
                </span>
              </div>
            ))}
          </div>

          {/* Stats Row */}
          <div className="flex flex-col md:flex-row md:items-center gap-0 mb-12 md:mb-16">
            {service.stats.map((stat, index) => (
              <div
                key={stat.label}
                className={`flex flex-col gap-1 py-4 md:py-0 md:pr-8 lg:pr-10 ${
                  index !== 0 
                    ? "border-t md:border-t-0 md:border-l border-lma-cream/20 md:pl-8 lg:pl-10" 
                    : ""
                }`}
              >
                <span className="font-[family-name:var(--font-anton)] text-lma-gold text-2xl md:text-3xl tracking-tight">
                  {stat.value}
                </span>
                <span className="font-sans text-lma-cream/60 text-[10px] md:text-xs tracking-[0.15em] uppercase">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>

          {/* CTA Link — was previously `/#contact?service=...`, which is
              malformed (anchor before query string is unreachable) AND
              there is no `#contact` anchor on the homepage anymore.
              Routes correctly to the dedicated /contact page now. */}
          <a
            href={`/contact?service=${service.slug}`}
            onMouseEnter={() => setIsLinkHovered(true)}
            onMouseLeave={() => setIsLinkHovered(false)}
            className="group inline-flex items-center gap-2 font-sans text-xs md:text-sm tracking-[0.2em] uppercase text-lma-gold transition-colors duration-300 border-b border-lma-gold/40 hover:border-lma-gold pb-1"
          >
            Work with us on {service.name}
            <ArrowRight
              className={`w-4 h-4 transition-transform duration-300 ${
                isLinkHovered ? "translate-x-1" : "translate-x-0"
              }`}
            />
          </a>
        </div>
      </div>

      {/* Hairline Divider Between Services */}
      {!isLast && (
        <div className="max-w-7xl mx-auto mt-24 md:mt-32">
          <div className="h-px w-full bg-lma-cream/[0.08]" />
        </div>
      )}
    </section>
  )
}
