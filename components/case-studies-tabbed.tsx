"use client"

import { useState, useRef, useEffect } from "react"
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react"
import { YouTubeThumbnail } from "@/components/youtube-thumbnail"
import { CaseStudyTabBg } from "@/components/case-study-tab-bg"
import { AnimatedStat } from "@/components/animated-stat"

export type CaseStudyEmbed = {
  src: string
  title: string
  /**
   * When provided, the featured asset renders as a static press still rather
   * than an inline iframe. Treated as display-only (no link), so callers
   * shouldn't rely on `watchHref` being clickable from the UI.
   */
  poster?: {
    thumbnailSrc: string
    watchHref: string
    /** Defaults to "cover". Use "contain" for portrait/full-frame stills. */
    objectFit?: "cover" | "contain"
  }
}

export type CaseStudyThumbnail = {
  videoId: string
  href: string
  alt: string
  primaryLabel: string
  secondaryLabel: string
  /** Optional direct URL — skips the maxres → hqdefault fallback. */
  directSrc?: string
  /**
   * When provided, the thumbnail renders a plain <img> using this local
   * /static path instead of routing through YouTubeThumbnail. Treated as
   * display-only (no link).
   */
  imageSrc?: string
  /** Defaults to "cover". Use "contain" for portrait stills that get clipped. */
  objectFit?: "cover" | "contain"
  /** Defaults to "center". Pass e.g. "top" to bias the crop. */
  objectPosition?: string
  /**
   * Tailwind aspect class applied to the thumbnail frame. Defaults to
   * "aspect-video" (16:9). Use "aspect-[3/4]" for portrait stills so the
   * frame matches the image instead of letterboxing it.
   */
  aspectClass?: string
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
  /**
   * Optional per-tab "Work with us" CTA destination. Falls back to
   * `/contact?service=affiliate-marketing` when omitted so existing tabs
   * (Fashion Nova, Forever 21) keep their current behavior.
   */
  ctaHref?: string
}

// Smooth tab swap timings, kept in sync with the .lma-tab-enter keyframes
// in globals.css so the JS state machine and the CSS reveal stay aligned.
const EXIT_MS = 200
const ENTER_DELAY_MS = 50
const ENTER_DURATION_MS = 250

export function CaseStudiesTabbed({ caseStudies }: { caseStudies: CaseStudyData[] }) {
  // The user-visible "selected tab" — drives the tab strip styling and the
  // ambient gradient (which cross-fades on its own via CSS opacity, no key
  // re-mount needed).
  const [activeIndex, setActiveIndex] = useState(0)

  // The currently-rendered case study content. Lags behind activeIndex by
  // EXIT_MS during a transition so we can run a fade-out on the old content
  // before unmounting it.
  const [displayIndex, setDisplayIndex] = useState(0)

  // Tab swap phase machine: idle → exiting → entering → idle.
  // - exiting: old content stays mounted, fades opacity 1→0 over EXIT_MS
  // - entering: new content mounted via key change, .lma-tab-enter runs
  const [phase, setPhase] = useState<"idle" | "exiting" | "entering">("idle")

  const [isCtaHovered, setIsCtaHovered] = useState(false)
  const tabsRef = useRef<HTMLDivElement>(null)
  const activeTabRef = useRef<HTMLButtonElement>(null)
  const exitTimer = useRef<ReturnType<typeof setTimeout> | null>(null)
  const enterTimer = useRef<ReturnType<typeof setTimeout> | null>(null)

  const active = caseStudies[displayIndex]

  // Read URL hash on mount, select matching tab, listen for hash changes.
  // Hash sync drives `activeIndex` only — the displayIndex catches up via
  // the transition effect below.
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

  // Drive the tab swap state machine. Whenever activeIndex diverges from
  // displayIndex, run exit on current content, then swap content, then run
  // enter. Cleanup any in-flight transition timers on re-trigger or unmount.
  useEffect(() => {
    if (activeIndex === displayIndex) return

    if (exitTimer.current) clearTimeout(exitTimer.current)
    if (enterTimer.current) clearTimeout(enterTimer.current)

    setPhase("exiting")
    exitTimer.current = setTimeout(() => {
      setDisplayIndex(activeIndex)
      setPhase("entering")
      enterTimer.current = setTimeout(
        () => setPhase("idle"),
        ENTER_DELAY_MS + ENTER_DURATION_MS,
      )
    }, EXIT_MS)

    return () => {
      if (exitTimer.current) clearTimeout(exitTimer.current)
      if (enterTimer.current) clearTimeout(enterTimer.current)
    }
  }, [activeIndex, displayIndex])

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
    // Section is intentionally TRANSPARENT — the fixed gradient layer
    // (rendered below) sits at -z-10 and provides the dark page bg via its
    // own #0A0A0A base. Adding bg-lma-black here would paint over the
    // gradient and we'd be back to a solid black page.
    <section className="relative pt-24 md:pt-28">
      {/* Hero — stagger reveal on first paint via lma-reveal-* classes. */}
      <div className="px-6 md:px-12 lg:px-20 pt-12 md:pt-16 pb-10 md:pb-14 max-w-6xl mx-auto text-center">
        <p className="lma-reveal-eyebrow font-sans text-[10px] md:text-xs tracking-[0.25em] uppercase text-lma-gold font-semibold mb-5">
          Our Work
        </p>
        <h1 className="lma-reveal-headline font-[family-name:var(--font-anton)] text-lma-cream uppercase tracking-tight leading-[0.95] text-[clamp(2.75rem,7vw,6rem)] text-balance mb-5">
          Built from zero.
        </h1>
        <p className="lma-reveal-kicker font-serif italic text-lma-gold text-xl md:text-2xl mb-6">
          Proven at scale.
        </p>
        <p className="lma-reveal-body font-sans text-lma-cream/75 text-sm md:text-base leading-relaxed max-w-[680px] mx-auto">
          A decade of building the digital marketing engine behind some of the
          internet&apos;s fastest-growing brands. These are the campaigns,
          collaborations, and category-defining moments that made the playbook.
        </p>
      </div>

      {/* Tab Navigation — wrapped in max-w-4xl so the prev/next arrows sit
          right beside the centered tab row instead of at the page edges.
          Tab strip itself stays clean — no gradient applied behind it. */}
      <div className="border-b border-lma-cream/10 mb-10 md:mb-14">
        <div className="relative max-w-4xl mx-auto">
          <button
            onClick={goToPrev}
            aria-label="Previous case study"
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 hidden md:flex items-center justify-center w-12 h-12 text-lma-cream/70 hover:text-lma-gold transition-colors"
          >
            <ChevronLeft className="w-9 h-9" strokeWidth={1.75} />
          </button>

          <div
            ref={tabsRef}
            className="flex justify-start md:justify-center overflow-x-auto px-6 md:px-16"
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
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 hidden md:flex items-center justify-center w-12 h-12 text-lma-cream/70 hover:text-lma-gold transition-colors"
          >
            <ChevronRight className="w-9 h-9" strokeWidth={1.75} />
          </button>
        </div>
      </div>

      {/* Fixed full-viewport gradient layer — pulled OUT of the active
          case study div so it always covers the whole page (header to
          footer), and animated based on the active tab. Sits at -z-10
          so all content naturally stacks above it without needing its
          own positive z-index. */}
      <CaseStudyTabBg activeSlug={caseStudies[activeIndex].slug} />

      {/* Active Case Study content. Keyed on displayIndex so it unmounts/
          re-mounts on tab swap, triggering the `lma-tab-enter` reveal. The
          exit fade is driven by phase="exiting" → opacity 0 + translateY. */}
      <div>
        <div
          key={displayIndex}
          className={`px-6 md:px-12 lg:px-20 pb-16 md:pb-20 max-w-7xl mx-auto ${
            phase === "entering" ? "lma-tab-enter" : ""
          }`}
          style={{
            opacity: phase === "exiting" ? 0 : undefined,
            transform: phase === "exiting" ? "translateY(-4px)" : undefined,
            transition:
              phase === "exiting"
                ? `opacity ${EXIT_MS}ms ease-in, transform ${EXIT_MS}ms ease-in`
                : undefined,
          }}
        >
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

        {/* Hero Metrics Row — values animate via <AnimatedStat>: numeric
            stats count up from 0 → target on entry; non-numeric stats
            (e.g. "VERIFIED", "Active", "GMV", "Full") fade in with the
            same translateY(8 → 0) treatment. */}
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
              <AnimatedStat
                value={stat.value}
                className="font-[family-name:var(--font-anton)] text-lma-gold text-3xl md:text-5xl tracking-tight leading-none"
              />
              <span className="font-sans text-lma-cream/60 text-[10px] md:text-xs tracking-[0.2em] uppercase">
                {stat.label}
              </span>
            </div>
          ))}
        </div>

        {/* Narrative + Featured Asset.
            Grid flipped from 1.5fr / 1fr → 1fr / 1.1fr so the featured asset
            (Fashion Nova autoplay video, Forever 21 Rolling Loud still, Sol /
            Ivy editorials) carries more visual weight than the narrative
            column on every tab. */}
        <div className="grid gap-10 lg:gap-16 lg:grid-cols-[1fr_1.1fr] mb-12 md:mb-16">
          {/* Narrative size is per-tab:
              - Fashion Nova / Forever 21 ship long-form copy that already
                fills the column → keep the original compact `text-sm md:text-base`.
              - Ivy City / Sol de Janeiro ship shorter copy → bump up so the
                column fills the empty space next to the featured asset. */}
          {(() => {
            const useLargeNarrative =
              active.slug === "ivy-city" || active.slug === "sol-de-janeiro"
            const sizeClass = useLargeNarrative
              ? "text-base md:text-lg lg:text-xl"
              : "text-sm md:text-base"
            const spacingClass = useLargeNarrative
              ? "space-y-6 md:space-y-7"
              : "space-y-5 md:space-y-6"
            return (
              <div className={`${spacingClass} max-w-[640px]`}>
                {active.narrative.map((para, i) => (
                  <p
                    key={i}
                    className={`font-sans text-lma-cream/80 ${sizeClass} leading-relaxed`}
                  >
                    {para}
                  </p>
                ))}
              </div>
            )
          })()}

          {active.featuredEmbed ? (
            active.featuredEmbed.poster ? (
              // Static press still — no forced aspect, no border, no bg.
              // Renders at the image's natural ratio, scaled to column width.
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={active.featuredEmbed.poster.thumbnailSrc || "/placeholder.svg"}
                alt={active.featuredEmbed.title}
                loading="lazy"
                className="w-full h-auto block"
              />
            ) : (
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
            )
          ) : (
            <div className="relative aspect-[4/5] bg-lma-cream/[0.03] border border-lma-cream/[0.08] overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center px-6">
                  <span className="font-[family-name:var(--font-anton)] text-lma-cream/10 text-7xl md:text-9xl tracking-tight block leading-none">
                    {String(displayIndex + 1).padStart(2, "0")}
                  </span>
                  <span className="font-sans text-[10px] tracking-[0.25em] uppercase text-lma-cream/30 mt-3 block">
                    {active.shortLabel}-Featured
                  </span>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Thumbnail Row — when only 2 thumbs, use a centered 2-up grid at a
            narrower max width so they don't stretch awkwardly across the row.
            Each thumbnail is a `group` so the image, vignette overlay, border,
            and gold caption can all react to the same hover state. */}
        <div
          className={`grid gap-4 md:gap-5 mb-12 md:mb-16 ${
            active.thumbnails && active.thumbnails.length === 2
              ? "grid-cols-1 sm:grid-cols-2 max-w-3xl mx-auto"
              : "grid-cols-2 lg:grid-cols-4"
          }`}
        >
          {active.thumbnails && active.thumbnails.length > 0
            ? active.thumbnails.map((thumb) =>
                thumb.imageSrc ? (
                  <div key={thumb.videoId} className="group block">
                    {/* Frame — 1px hairline border transitions to gold on hover.
                        overflow-hidden clips the image's hover zoom. */}
                    <div
                      className={`relative ${
                        thumb.aspectClass ?? "aspect-video"
                      } overflow-hidden border border-lma-cream/10 group-hover:border-lma-gold transition-colors duration-200`}
                    >
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={thumb.imageSrc || "/placeholder.svg"}
                        alt={thumb.alt}
                        loading="lazy"
                        className="absolute inset-0 w-full h-full transition-transform duration-[400ms] ease-out group-hover:scale-[1.04]"
                        style={{
                          objectFit: thumb.objectFit ?? "cover",
                          objectPosition: thumb.objectPosition ?? "center",
                        }}
                      />
                      {/* Vignette overlay — 0.15 black wash that fades in
                          on hover (200ms in, 150ms out). Sits beneath the
                          gold border via z-index and is pointer-transparent
                          so it never intercepts clicks/hovers. */}
                      <div
                        aria-hidden="true"
                        className="absolute inset-0 pointer-events-none bg-black/0 group-hover:bg-black/15 transition-[background-color] duration-150 group-hover:duration-200"
                      />
                    </div>
                    <p className="mt-3 font-mono text-[10px] md:text-[11px] tracking-[0.2em] uppercase">
                      {/* Gold celebrity / category name shifts to brighter
                          gold (#D4B570) on row hover, smooth 200ms. */}
                      <span className="text-lma-gold group-hover:text-[#D4B570] transition-colors duration-200">
                        {thumb.primaryLabel}
                      </span>
                      <span className="text-lma-cream/60"> / {thumb.secondaryLabel}</span>
                    </p>
                  </div>
                ) : (
                  <YouTubeThumbnail
                    key={thumb.videoId}
                    videoId={thumb.videoId}
                    href={thumb.href}
                    alt={thumb.alt}
                    primaryLabel={thumb.primaryLabel}
                    secondaryLabel={thumb.secondaryLabel}
                    directSrc={thumb.directSrc}
                  />
                ),
              )
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
            href={active.ctaHref ?? "/contact?service=affiliate-marketing"}
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
