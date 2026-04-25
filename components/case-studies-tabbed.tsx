"use client"

import { useState, useRef, useEffect } from "react"
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react"
import { YouTubeThumbnail } from "@/components/youtube-thumbnail"

export type CaseStudyEmbed = {
  src: string
  title: string
}

export type CaseStudyThumbnail = {
  videoId: string
  href: string
  alt: string
  primaryLabel: string
  secondaryLabel: string
}

export type CaseStudyArchiveLink = {
  href: string
  label: string
}

export type CaseStudyData = {
  slug: string
  shortLabel: string
  brand: string
  roleEyebrow: string
  kicker: string
  metrics: { value: string; label: string }[]
  narrative: string[]
  collaborators: string[]
  featuredEmbed?: CaseStudyEmbed
  thumbnails?: CaseStudyThumbnail[]
  archiveLink?: CaseStudyArchiveLink
}

export function CaseStudiesTabbed({ caseStudies }: { caseStudies: CaseStudyData[] }) {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isCtaHovered, setIsCtaHovered] = useState(false)
  const tabsRef = useRef<HTMLDivElement>(null)
  const activeTabRef = useRef<HTMLButtonElement>(null)

  const active = caseStudies[activeIndex]

  // Read URL hash on mount, select matching tab, listen for hash changes
  useEffect(() => {
    const selectFromHash = () => {
      const hash = window.location.hash.replace("#", "")
      if (!hash) return
      const matchIndex = caseStudies.findIndex((c) => c.slug === hash)
      if (matchIndex !== -1) {
        setActiveIndex(matchIndex)
      }
    }

    selectFromHash()
    window.addEventListener("hashchange", selectFromHash)
    return () => window.removeEventListener("hashchange", selectFromHash)
  }, [caseStudies])

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

  // Update hash when tab changes
  const setTab = (i: number) => {
    setActiveIndex(i)
    if (typeof window !== "undefined") {
      history.replaceState(null, "", `#${caseStudies[i].slug}`)
    }
  }

  const goToPrev = () => setTab(activeIndex > 0 ? activeIndex - 1 : caseStudies.length - 1)
  const goToNext = () => setTab(activeIndex < caseStudies.length - 1 ? activeIndex + 1 : 0)

  return (
    <section className="bg-lma-black pt-24 md:pt-28">
      {/* Hero */}
      <div className="px-6 md:px-12 lg:px-20 pt-12 md:pt-16 pb-10 md:pb-14 max-w-6xl mx-auto text-center">
        <p className="font-sans text-[10px] md:text-xs tracking-[0.25em] uppercase text-lma-gold font-semibold mb-5">
          Our Work
        </p>
        <h1 className="font-[family-name:var(--font-anton)] text-lma-cream uppercase tracking-tight leading-[0.95] text-[clamp(2.75rem,7vw,6rem)] text-balance mb-5">
          Built from zero.
        </h1>
        <p className="font-serif italic text-lma-gold text-xl md:text-2xl mb-6">
          Proven at scale.
        </p>
        <p className="font-sans text-lma-cream/75 text-sm md:text-base leading-relaxed max-w-[680px] mx-auto">
          A decade of building the digital marketing engine behind some of the
          internet&apos;s fastest-growing brands. These are the campaigns,
          collaborations, and category-defining moments that made the playbook.
        </p>
      </div>

      {/* Tab Navigation */}
      <div className="relative border-b border-lma-cream/10 mb-10 md:mb-14">
        <button
          onClick={goToPrev}
          aria-label="Previous case study"
          className="absolute left-0 top-0 bottom-0 z-10 hidden md:flex items-center justify-center w-12 bg-gradient-to-r from-lma-black via-lma-black to-transparent text-lma-cream/60 hover:text-lma-gold transition-colors"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        <div
          ref={tabsRef}
          className="flex justify-start md:justify-center overflow-x-auto px-6 md:px-14 lg:px-20"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {caseStudies.map((cs, index) => {
            const isActive = index === activeIndex
            return (
              <button
                key={cs.slug}
                ref={isActive ? activeTabRef : null}
                onClick={() => setTab(index)}
                className={`flex-shrink-0 px-5 md:px-7 py-4 md:py-5 font-sans text-xs md:text-sm tracking-[0.15em] uppercase whitespace-nowrap transition-colors duration-200 ${
                  isActive
                    ? "text-lma-cream"
                    : "text-lma-cream/60 hover:text-lma-cream/80"
                }`}
              >
                <span className="relative inline-block px-1 pb-2">
                  {cs.shortLabel}
                  {isActive && (
                    <span
                      aria-hidden="true"
                      className="absolute bottom-0 left-0 right-0 h-[2px] bg-lma-gold"
                    />
                  )}
                </span>
              </button>
            )
          })}
        </div>

        <button
          onClick={goToNext}
          aria-label="Next case study"
          className="absolute right-0 top-0 bottom-0 z-10 hidden md:flex items-center justify-center w-12 bg-gradient-to-l from-lma-black via-lma-black to-transparent text-lma-cream/60 hover:text-lma-gold transition-colors"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      {/* Active Case Study */}
      <div className="px-6 md:px-12 lg:px-20 pb-16 md:pb-20 max-w-7xl mx-auto">
        {/* Top Block — eyebrow + headline + kicker */}
        <div className="mb-10 md:mb-14">
          <p className="font-sans text-[10px] md:text-xs tracking-[0.2em] uppercase text-lma-gold font-semibold mb-4 md:mb-5">
            {active.roleEyebrow}
          </p>
          <h2 className="font-[family-name:var(--font-anton)] text-lma-cream uppercase tracking-tight leading-[0.95] text-[clamp(2.5rem,6.5vw,5.5rem)] mb-4 md:mb-5">
            {active.brand}
          </h2>
          <p className="font-serif italic text-lma-gold text-lg md:text-2xl">
            {active.kicker}
          </p>
        </div>

        {/* Hero Metrics Row */}
        <div className="flex flex-col md:flex-row md:items-stretch border-y border-lma-cream/10 mb-12 md:mb-16">
          {active.metrics.map((stat, index) => (
            <div
              key={stat.label}
              className={`flex-1 flex flex-col gap-2 py-6 md:py-8 px-2 md:px-6 ${
                index !== 0
                  ? "border-t md:border-t-0 md:border-l border-lma-cream/10"
                  : ""
              }`}
            >
              <span className="font-[family-name:var(--font-anton)] text-lma-gold text-3xl md:text-5xl tracking-tight leading-none">
                {stat.value}
              </span>
              <span className="font-sans text-lma-cream/60 text-[10px] md:text-xs tracking-[0.2em] uppercase">
                {stat.label}
              </span>
            </div>
          ))}
        </div>

        {/* Narrative + Featured Asset */}
        <div className="grid gap-10 lg:gap-16 lg:grid-cols-[1.5fr_1fr] mb-12 md:mb-16">
          <div className="space-y-5 md:space-y-6 max-w-[640px]">
            {active.narrative.map((para, i) => (
              <p
                key={i}
                className="font-sans text-lma-cream/80 text-sm md:text-base leading-relaxed"
              >
                {para}
              </p>
            ))}
          </div>

          {active.featuredEmbed ? (
            <div
              className="relative w-full overflow-hidden border border-lma-cream/10"
              style={{ aspectRatio: "16 / 9" }}
            >
              <iframe
                src={active.featuredEmbed.src}
                title={active.featuredEmbed.title}
                allow="autoplay; encrypted-media; picture-in-picture"
                allowFullScreen
                aria-hidden="true"
                tabIndex={-1}
                className="absolute inset-0 w-full h-full pointer-events-none"
                style={{ border: 0 }}
              />
            </div>
          ) : (
            <div className="relative aspect-[4/5] bg-lma-cream/[0.03] border border-lma-cream/[0.08] overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center px-6">
                  <span className="font-[family-name:var(--font-anton)] text-lma-cream/10 text-7xl md:text-9xl tracking-tight block leading-none">
                    {String(activeIndex + 1).padStart(2, "0")}
                  </span>
                  <span className="font-sans text-[10px] tracking-[0.25em] uppercase text-lma-cream/30 mt-3 block">
                    {active.shortLabel}-Featured
                  </span>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Thumbnail Row */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5 mb-12 md:mb-16">
          {active.thumbnails && active.thumbnails.length > 0
            ? active.thumbnails.map((thumb) => (
                <YouTubeThumbnail
                  key={thumb.videoId}
                  videoId={thumb.videoId}
                  href={thumb.href}
                  alt={thumb.alt}
                  primaryLabel={thumb.primaryLabel}
                  secondaryLabel={thumb.secondaryLabel}
                />
              ))
            : [1, 2, 3, 4].map((n) => (
                <div
                  key={n}
                  className="relative aspect-video bg-lma-cream/[0.03] border border-lma-cream/[0.08] overflow-hidden"
                >
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="font-sans text-[9px] md:text-[10px] tracking-[0.25em] uppercase text-lma-cream/30">
                      {active.shortLabel.split(" ")[0]}-CAMPAIGN-0{n}
                    </span>
                  </div>
                </div>
              ))}
        </div>

        {/* Archive Link — sits between thumbnails and collaborators when present */}
        {active.archiveLink && (
          <div className="flex justify-center pt-2 pb-2 mb-4 md:mb-6">
            <a
              href={active.archiveLink.href}
              target="_blank"
              rel="noopener"
              className="inline-flex items-center gap-2 font-mono text-[10px] md:text-[11px] tracking-[0.2em] uppercase text-lma-gold hover:text-lma-cream transition-colors no-underline"
            >
              {active.archiveLink.label}
              <span aria-hidden="true">↗</span>
            </a>
          </div>
        )}

        {/* Collaborators Strip */}
        <div className="border-y border-lma-cream/10 py-6 md:py-8 mb-12 md:mb-16">
          <p className="font-sans text-[10px] md:text-xs tracking-[0.2em] uppercase text-center text-lma-gold/90 leading-relaxed">
            {active.collaborators.join("  ·  ")}
          </p>
        </div>

        {/* CTA + Prev/Next */}
        <div className="flex flex-wrap items-center gap-6 md:gap-8">
          <a
            href="/contact?service=affiliate-marketing"
            onMouseEnter={() => setIsCtaHovered(true)}
            onMouseLeave={() => setIsCtaHovered(false)}
            className="group inline-flex items-center gap-3 border border-lma-cream/80 px-7 md:px-8 py-[18px] font-mono text-xs uppercase tracking-[0.2em] text-lma-cream hover:bg-lma-cream hover:text-lma-black transition-colors"
          >
            Work with us
            <ArrowRight
              className={`w-4 h-4 text-lma-gold group-hover:text-lma-black transition-transform duration-300 ${
                isCtaHovered ? "translate-x-1" : "translate-x-0"
              }`}
            />
          </a>

          <div className="flex items-center gap-2 ml-auto">
            <button
              onClick={goToPrev}
              aria-label="Previous case study"
              className="p-2 border border-lma-cream/20 text-lma-cream/60 hover:border-lma-gold hover:text-lma-gold transition-colors"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={goToNext}
              aria-label="Next case study"
              className="p-2 border border-lma-cream/20 text-lma-cream/60 hover:border-lma-gold hover:text-lma-gold transition-colors"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Hairline divider before closing section */}
      <div className="border-t border-lma-cream/[0.08]" />

      {/* Closing Section */}
      <div className="px-6 md:px-12 lg:px-20 py-20 md:py-28 text-center max-w-4xl mx-auto">
        <h3 className="font-[family-name:var(--font-anton)] text-lma-cream uppercase tracking-tight leading-[0.95] text-[clamp(2.5rem,6vw,5rem)] text-balance mb-5">
          Your brand is next.
        </h3>
        <p className="font-serif italic text-lma-gold text-xl md:text-2xl mb-10">
          Let&apos;s make it move.
        </p>
        <a
          href="/contact"
          className="inline-flex items-center gap-3 border border-lma-gold px-8 py-4 font-sans text-xs md:text-sm tracking-[0.2em] uppercase text-lma-gold hover:bg-lma-gold hover:text-lma-black transition-colors"
        >
          Book a strategy call
          <ArrowRight className="w-4 h-4" />
        </a>
      </div>
    </section>
  )
}
