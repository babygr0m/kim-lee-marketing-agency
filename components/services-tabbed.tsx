"use client"

import Link from "next/link"
import { useState, useRef, useEffect } from "react"
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react"
import type { ServiceSectionData } from "@/components/service-section"
import { ServiceVisual } from "@/components/service-visual"
import { ServiceSectionBg } from "@/components/service-section-bg"

type ServiceTabData = ServiceSectionData & { shortLabel: string }

// Slugs of the 3 abstract services that get the full-bleed centered layout +
// ambient gradient background instead of the 60/40 image-card treatment.
const ABSTRACT_SLUGS = new Set(["tiktok-shop", "affiliate-marketing", "paid-media"])

export function ServicesTabbed({ services }: { services: ServiceTabData[] }) {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isLinkHovered, setIsLinkHovered] = useState(false)
  const tabsRef = useRef<HTMLDivElement>(null)
  const activeTabRef = useRef<HTMLButtonElement>(null)

  const active = services[activeIndex]
  const isAbstract = ABSTRACT_SLUGS.has(active.slug)

  // Read URL hash on mount and select matching tab.
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

  // Sync state → URL hash whenever the active tab changes (matches the
  // case-studies tab strip behavior — clicking a tab OR clicking a chevron
  // updates the URL so the section is shareable / back-button-friendly).
  // Uses replaceState so we don't pollute browser history with each click
  // and don't re-trigger our own hashchange listener.
  useEffect(() => {
    if (typeof window === "undefined") return
    const slug = services[activeIndex]?.slug
    if (!slug) return
    const nextHash = `#${slug}`
    if (window.location.hash !== nextHash) {
      window.history.replaceState(null, "", nextHash)
    }
  }, [activeIndex, services])

  // Auto-scroll active tab into view inside the horizontal tab strip.
  useEffect(() => {
    if (activeTabRef.current) {
      activeTabRef.current.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "center",
      })
    }
  }, [activeIndex])

  // Wrapping prev/next handlers — used by both the top tab-row chevrons
  // and the inline prev/next chevrons next to the CTA on image-layout
  // services. From the first tab, prev wraps to the last; from the last,
  // next wraps to the first.
  const goToPrev = () =>
    setActiveIndex((i) => (i > 0 ? i - 1 : services.length - 1))
  const goToNext = () =>
    setActiveIndex((i) => (i < services.length - 1 ? i + 1 : 0))

  return (
    <section className="bg-lma-black min-h-[calc(100vh-5rem)] flex flex-col pt-24 md:pt-28">
      {/* Small Eyebrow */}
      <div className="px-6 md:px-12 lg:px-20 mb-6 md:mb-8">
        <p className="text-center font-sans text-[10px] md:text-xs tracking-[0.25em] uppercase text-lma-gold font-semibold">
          Built for brands that move
        </p>
      </div>

      {/* Tab Navigation — tabs are centered on md+ and the arrows sit at
          the edges of a constrained max-w-7xl rail. Chevrons advance the
          active tab (wrapping at both ends) — same behavior as clicking a
          tab directly. */}
      <div className="border-b border-lma-cream/10 mb-10 md:mb-14">
        <div className="relative max-w-7xl mx-auto">
          {/* Left arrow → previous tab (wraps) */}
          <button
            onClick={goToPrev}
            aria-label="Previous service"
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

          {/* Right arrow → next tab (wraps) */}
          <button
            onClick={goToNext}
            aria-label="Next service"
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 hidden md:flex items-center justify-center w-12 h-12 text-lma-cream/70 hover:text-lma-gold transition-colors"
          >
            <ChevronRight className="w-9 h-9" strokeWidth={1.75} />
          </button>
        </div>
      </div>

      {/* Active Service Content.
          Two layout variants:
          - Abstract services (TikTok Shop / Affiliate / Paid Media): full-bleed
            section bg with an animated ambient gradient + centered single-column
            text content stacked above (number → headline → kicker → body →
            stats → CTA, all centered).
          - Image services (Influencer / Creative / Social Media / Podcast):
            unchanged 60/40 grid with copy on the left and ServiceVisual card
            on the right. */}
      <div className="relative flex-1">
        {isAbstract && <ServiceSectionBg slug={active.slug} />}

        {/* Keyed wrapper — re-mounts on tab change so the `lma-tab-enter`
            keyframe runs fresh (250ms ease-out fade + 4px rise after a
            50ms pause). Reduced motion drops the animation in CSS. */}
        <div
          key={active.slug}
          className="lma-tab-enter relative z-10 px-6 md:px-12 lg:px-20 pb-12 md:pb-16 h-full"
        >
          {isAbstract ? (
            // ---------- Centered abstract layout ----------
            <div className="max-w-3xl mx-auto text-center flex flex-col items-center justify-center min-h-[60vh]">
              {/* Number */}
              <span className="font-[family-name:var(--font-anton)] text-lma-gold text-2xl md:text-3xl tracking-tight block mb-3">
                {active.number} / 07
              </span>

              {/* Headline */}
              <h1 className="font-[family-name:var(--font-anton)] text-lma-cream uppercase tracking-tight leading-[0.95] text-[clamp(2.5rem,6vw,5rem)] text-balance mb-4 md:mb-6">
                {active.name}
              </h1>

              {/* Italic Kicker */}
              <p className="font-serif italic text-lma-gold text-lg md:text-xl lg:text-2xl mb-6 md:mb-8">
                {active.kicker}
              </p>

              {/* Body Copy — centered, capped at 720px */}
              <p className="font-sans text-lma-cream/80 text-base md:text-lg leading-relaxed max-w-[720px] mx-auto mb-10 md:mb-12">
                {active.body}
              </p>

              {/* Stats Row — centered, evenly distributed */}
              <div className="w-full max-w-[720px] mx-auto grid grid-cols-1 md:grid-cols-3 mb-10 md:mb-14">
                {active.stats.map((stat, index) => (
                  <div
                    key={stat.label}
                    className={`flex flex-col items-center gap-1 py-4 md:py-0 ${
                      index !== 0
                        ? "border-t md:border-t-0 md:border-l border-lma-cream/20"
                        : ""
                    }`}
                  >
                    <span className="font-[family-name:var(--font-anton)] text-lma-gold text-xl md:text-2xl tracking-tight">
                      {stat.value}
                    </span>
                    <span className="font-sans text-lma-cream/60 text-[9px] md:text-[10px] tracking-[0.15em] uppercase text-center">
                      {stat.label}
                    </span>
                  </div>
                ))}
              </div>

              {/* CTA — centered, same boxed button styling as the rest of the site */}
              <Link
                href={`/contact?service=${active.slug}`}
                onMouseEnter={() => setIsLinkHovered(true)}
                onMouseLeave={() => setIsLinkHovered(false)}
                className="group inline-flex items-center gap-3 border border-lma-cream/80 px-7 md:px-8 py-[18px] font-mono text-xs uppercase tracking-[0.2em] text-lma-cream hover:bg-lma-cream hover:text-lma-black transition-colors duration-200"
              >
                Work with us
                <ArrowRight
                  className={`w-4 h-4 text-lma-gold group-hover:text-lma-black transition-transform duration-300 ${
                    isLinkHovered ? "translate-x-1" : "translate-x-0"
                  }`}
                />
              </Link>
            </div>
          ) : (
            // ---------- Image services 60/40 layout (unchanged) ----------
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
                  <Link
                    href={`/contact?service=${active.slug}`}
                    onMouseEnter={() => setIsLinkHovered(true)}
                    onMouseLeave={() => setIsLinkHovered(false)}
                    className="group inline-flex items-center gap-3 border border-lma-cream/80 px-7 md:px-8 py-[18px] font-mono text-xs uppercase tracking-[0.2em] text-lma-cream hover:bg-lma-cream hover:text-lma-black transition-colors duration-200"
                  >
                    Work with us
                    <ArrowRight
                      className={`w-4 h-4 text-lma-gold group-hover:text-lma-black transition-transform duration-300 ${
                        isLinkHovered ? "translate-x-1" : "translate-x-0"
                      }`}
                    />
                  </Link>

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

              {/* Right - Service visual (image card) */}
              <ServiceVisual
                slug={active.slug}
                number={active.number}
                shortLabel={active.shortLabel}
              />
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
