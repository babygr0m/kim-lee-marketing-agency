"use client"

import { useState, useRef, useEffect } from "react"
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react"
import type { ServiceSectionData } from "@/components/service-section"

type ServiceTabData = ServiceSectionData & { shortLabel: string }

export function ServicesTabbed({ services }: { services: ServiceTabData[] }) {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isLinkHovered, setIsLinkHovered] = useState(false)
  const tabsRef = useRef<HTMLDivElement>(null)
  const activeTabRef = useRef<HTMLButtonElement>(null)

  const active = services[activeIndex]

  // Read URL hash on mount and select matching tab
  useEffect(() => {
    const selectFromHash = () => {
      const hash = window.location.hash.replace("#", "")
      if (!hash) return
      const matchIndex = services.findIndex((s) => s.slug === hash)
      if (matchIndex !== -1) {
        setActiveIndex(matchIndex)
      }
    }

    selectFromHash()
    window.addEventListener("hashchange", selectFromHash)
    return () => window.removeEventListener("hashchange", selectFromHash)
  }, [services])

  // Auto-scroll active tab into view
  useEffect(() => {
    if (activeTabRef.current) {
      activeTabRef.current.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "center",
      })
    }
  }, [activeIndex])

  const scrollTabs = (direction: "left" | "right") => {
    if (tabsRef.current) {
      const amount = direction === "left" ? -200 : 200
      tabsRef.current.scrollBy({ left: amount, behavior: "smooth" })
    }
  }

  const goToPrev = () => setActiveIndex((i) => (i > 0 ? i - 1 : services.length - 1))
  const goToNext = () => setActiveIndex((i) => (i < services.length - 1 ? i + 1 : 0))

  return (
    <section className="bg-lma-black min-h-[calc(100vh-5rem)] flex flex-col pt-24 md:pt-28">
      {/* Small Eyebrow */}
      <div className="px-6 md:px-12 lg:px-20 mb-6 md:mb-8">
        <p className="text-center font-sans text-[10px] md:text-xs tracking-[0.25em] uppercase text-lma-gold font-semibold">
          Built for brands that move
        </p>
      </div>

      {/* Tab Navigation — tabs are centered on md+ and the arrows sit at
          the edges of a constrained max-w-7xl rail so they read as paired
          nav controls instead of disconnected page-edge chevrons. */}
      <div className="border-b border-lma-cream/10 mb-10 md:mb-14">
        <div className="relative max-w-7xl mx-auto">
          {/* Left arrow */}
          <button
            onClick={() => scrollTabs("left")}
            aria-label="Scroll tabs left"
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 hidden md:flex items-center justify-center w-12 h-12 text-lma-cream/70 hover:text-lma-gold transition-colors"
          >
            <ChevronLeft className="w-9 h-9" strokeWidth={1.75} />
          </button>

          {/* Scrollable tabs */}
          <div
            ref={tabsRef}
            className="flex md:justify-center overflow-x-auto scrollbar-none px-6 md:px-16"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {services.map((service, index) => {
              const isActive = index === activeIndex
              return (
                <button
                  key={service.slug}
                  ref={isActive ? activeTabRef : null}
                  onClick={() => setActiveIndex(index)}
                  className={`relative flex-shrink-0 px-5 md:px-7 py-4 md:py-5 font-sans text-xs md:text-sm tracking-[0.15em] uppercase whitespace-nowrap transition-colors duration-200 ${
                    isActive
                      ? "text-lma-gold"
                      : "text-lma-cream/60 hover:text-lma-cream"
                  }`}
                >
                  {service.shortLabel}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-lma-gold" />
                  )}
                </button>
              )
            })}
          </div>

          {/* Right arrow */}
          <button
            onClick={() => scrollTabs("right")}
            aria-label="Scroll tabs right"
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 hidden md:flex items-center justify-center w-12 h-12 text-lma-cream/70 hover:text-lma-gold transition-colors"
          >
            <ChevronRight className="w-9 h-9" strokeWidth={1.75} />
          </button>
        </div>
      </div>

      {/* Active Service Content */}
      <div className="flex-1 px-6 md:px-12 lg:px-20 pb-12 md:pb-16">
        <div className="max-w-7xl mx-auto grid gap-10 lg:gap-16 lg:grid-cols-[1.1fr_0.9fr] items-center">
          {/* Left - Copy */}
          <div>
            {/* Number */}
            <span className="font-[family-name:var(--font-anton)] text-lma-gold text-2xl md:text-3xl tracking-tight block mb-3">
              {active.number} / 07
            </span>

            {/* Headline */}
            <h1 className="font-[family-name:var(--font-anton)] text-lma-cream uppercase tracking-tight leading-[0.95] text-[clamp(2.25rem,5vw,4.5rem)] text-balance mb-4 md:mb-6">
              {active.name}
            </h1>

            {/* Italic Kicker */}
            <p className="font-serif italic text-lma-gold text-lg md:text-xl lg:text-2xl mb-5 md:mb-7">
              {active.kicker}
            </p>

            {/* Body Copy */}
            <p className="font-sans text-lma-cream/80 text-sm md:text-base leading-relaxed max-w-[640px] mb-8 md:mb-10">
              {active.body}
            </p>

            {/* Stats Row */}
            <div className="flex flex-col md:flex-row md:items-center gap-0 mb-8 md:mb-10">
              {active.stats.map((stat, index) => (
                <div
                  key={stat.label}
                  className={`flex flex-col gap-1 py-3 md:py-0 md:pr-6 lg:pr-8 ${
                    index !== 0
                      ? "border-t md:border-t-0 md:border-l border-lma-cream/20 md:pl-6 lg:pl-8"
                      : ""
                  }`}
                >
                  <span className="font-[family-name:var(--font-anton)] text-lma-gold text-xl md:text-2xl tracking-tight">
                    {stat.value}
                  </span>
                  <span className="font-sans text-lma-cream/60 text-[9px] md:text-[10px] tracking-[0.15em] uppercase">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>

            {/* CTA + Prev/Next Controls */}
            <div className="flex flex-wrap items-center gap-6 md:gap-8">
              <a
                href={`/contact?service=${active.slug}`}
                onMouseEnter={() => setIsLinkHovered(true)}
                onMouseLeave={() => setIsLinkHovered(false)}
                className="group inline-flex items-center gap-3 border border-lma-cream/80 px-7 md:px-8 py-[18px] font-mono text-xs uppercase tracking-[0.2em] text-lma-cream hover:bg-lma-cream hover:text-lma-black transition-colors"
              >
                Work with us
                <ArrowRight
                  className={`w-4 h-4 text-lma-gold group-hover:text-lma-black transition-transform duration-300 ${
                    isLinkHovered ? "translate-x-1" : "translate-x-0"
                  }`}
                />
              </a>

              <div className="flex items-center gap-2 ml-auto">
                <button
                  onClick={goToPrev}
                  aria-label="Previous service"
                  className="p-2 border border-lma-cream/20 text-lma-cream/60 hover:border-lma-gold hover:text-lma-gold transition-colors"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={goToNext}
                  aria-label="Next service"
                  className="p-2 border border-lma-cream/20 text-lma-cream/60 hover:border-lma-gold hover:text-lma-gold transition-colors"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Right - Media Placeholder */}
          <div className="relative aspect-[4/5] lg:aspect-[4/5] bg-lma-cream/[0.03] border border-lma-cream/[0.08] overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center px-6">
                <span className="font-[family-name:var(--font-anton)] text-lma-cream/10 text-6xl md:text-8xl lg:text-9xl tracking-tight block">
                  {active.number}
                </span>
                <span className="font-sans text-[10px] tracking-[0.25em] uppercase text-lma-cream/30 mt-2 block">
                  {active.shortLabel} Visual
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
