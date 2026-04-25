"use client"

import { useEffect, useRef, useState } from "react"
import { useInView } from "@/hooks/use-in-view"
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion"

type AnimatedStatProps = {
  /** The full stat string to display, e.g. "$1B+", "8 YRS", "100M+", "VERIFIED". */
  value: string
  /** Optional class names forwarded to the wrapping span. */
  className?: string
  /** Count-up duration in ms. Defaults to 3000. Ignored for non-numeric stats. */
  duration?: number
}

/* ---------------------------------------------------------------------------
 * Stat string parser.
 *
 * Splits the source into [prefix, number, magnitude, trailing]:
 *   "$1B+"     → prefix="$", num="1",   mag="B", trailing="+"
 *   "$15M+"    → prefix="$", num="15",  mag="M", trailing="+"
 *   "100M+"    → prefix="",  num="100", mag="M", trailing="+"
 *   "8 YRS"    → prefix="",  num="8",   mag="",  trailing=" YRS"
 *   "10+ YRS"  → prefix="",  num="10",  mag="",  trailing="+ YRS"
 *   "VERIFIED" → null  (no numeric portion → fade-in only, no count-up)
 *
 * Note the magnitude (K / M / B) is parsed out separately so the count-up
 * can interpolate through real units (e.g. 1 → 100 → 10K → 1M → 1B) instead
 * of just sweeping the leading number ("$0.0B+ → $1.0B+", which is what the
 * old implementation did).
 * ------------------------------------------------------------------------- */
const STAT_RE = /^([^\d]*)(\d+(?:\.\d+)?)([KMB]?)(.*)$/

const MAGNITUDE_MULTIPLIER: Record<string, number> = {
  "": 1,
  K: 1_000,
  M: 1_000_000,
  B: 1_000_000_000,
}

/**
 * Format a raw numeric value as a compact magnitude string, picking the
 * largest tier that fits. Values 1K+ get one decimal of precision below 10
 * (so "1.2K" rather than "1K"), then drop to integer above 10 of that tier.
 *
 *   0           → "0"
 *   750         → "750"
 *   1_500       → "1.5K"
 *   75_000      → "75K"
 *   1_500_000   → "1.5M"
 *   100_000_000 → "100M"
 *   1_000_000_000 → "1B"
 */
function formatMagnitude(raw: number): string {
  const abs = Math.abs(raw)
  if (abs < 1_000) return String(Math.round(raw))
  if (abs < 1_000_000) {
    const k = raw / 1_000
    return k < 10 ? `${k.toFixed(1)}K` : `${Math.round(k)}K`
  }
  if (abs < 1_000_000_000) {
    const m = raw / 1_000_000
    return m < 10 ? `${m.toFixed(1)}M` : `${Math.round(m)}M`
  }
  const b = raw / 1_000_000_000
  return b < 10 ? `${b.toFixed(1)}B` : `${Math.round(b)}B`
}

/**
 * AnimatedStat
 * -----------------------------------------------------------------------------
 * Single-stat reveal that triggers when the stat scrolls into viewport.
 *
 * Numeric stats with a magnitude letter (K/M/B) — e.g. "$1B+", "$15M+",
 * "100M+" — count up through each decade of magnitude in roughly equal time.
 * Logarithmic interpolation: value(t) = (target + 1)^t - 1 starting at 0,
 * landing on `target` at t=1. For target = 1B that produces visible passes
 * through ~10, ~100, ~1K, ~10K, ~100K, ~1M, ~10M, ~100M, ~1B at evenly
 * spaced fractions of the duration — exactly the "growing through hundreds,
 * thousands, millions" feel.
 *
 * Numeric stats WITHOUT a magnitude — e.g. "8 YRS", "10+ YRS" — just count
 * linearly with ease-out (logarithmic doesn't help when the target is 8).
 *
 * Non-numeric stats (e.g. "VERIFIED") fade in with translateY(8 → 0) over
 * 500ms, no count-up.
 *
 * Each instance fires exactly once per page load. Honors
 * prefers-reduced-motion by displaying the final value immediately.
 */
export function AnimatedStat({
  value,
  className,
  duration = 3000,
}: AnimatedStatProps) {
  const { ref, inView } = useInView<HTMLSpanElement>({ threshold: 0.4 })
  const reducedMotion = usePrefersReducedMotion()
  const rafRef = useRef<number | null>(null)

  const match = value.match(STAT_RE)
  const isNumeric = !!match
  const prefix = match ? match[1] : ""
  const numStr = match ? match[2] : ""
  const mag = match ? match[3] : ""
  const trailing = match ? match[4] : ""
  const baseNumber = match ? Number(numStr) : 0
  const target = baseNumber * (MAGNITUDE_MULTIPLIER[mag] ?? 1)
  const useLogarithmic = !!mag && target >= 1_000

  // Initial display: "0" for numeric stats (with the same prefix/trailing),
  // or the full final value for non-numeric stats (their reveal is the fade,
  // not a count).
  const initialDisplay = isNumeric
    ? `${prefix}0${trailing}`
    : value
  const [display, setDisplay] = useState<string>(initialDisplay)

  useEffect(() => {
    if (!isNumeric) return

    // Reduced motion → snap to final string as soon as it's in view.
    if (reducedMotion) {
      if (inView) setDisplay(value)
      return
    }

    if (!inView) return

    const start = performance.now()
    const easeOut = (t: number) => 1 - Math.pow(1 - t, 3)

    const tick = (now: number) => {
      const elapsed = now - start
      const t = Math.min(elapsed / duration, 1)

      if (t >= 1) {
        // Snap to the original source string at the end so "1B+" reads as
        // "1B+" exactly (not "1.0B" from the formatter).
        setDisplay(value)
        return
      }

      let body: string
      if (useLogarithmic) {
        // (target + 1)^t - 1 — equal time per decade of magnitude, formatted
        // with a magnitude-aware suffix so the visible string climbs through
        // 0 → 750 → 12K → 1.2M → 100M → ... → 1B.
        const raw = Math.pow(target + 1, t) - 1
        body = formatMagnitude(raw)
      } else {
        // Linear ease-out for small whole-number stats like "8 YRS".
        const raw = target * easeOut(t)
        const decimals = numStr.includes(".") ? numStr.split(".")[1].length : 0
        body = raw.toFixed(decimals)
      }

      setDisplay(`${prefix}${body}${trailing}`)
      rafRef.current = requestAnimationFrame(tick)
    }
    rafRef.current = requestAnimationFrame(tick)

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
    }
  }, [
    isNumeric,
    inView,
    reducedMotion,
    prefix,
    trailing,
    target,
    useLogarithmic,
    numStr,
    value,
    duration,
  ])

  // Non-numeric branch uses a small fade-in on the wrapping span. Numeric
  // branch is always opaque — the count-up itself is the reveal.
  const showFinalState = inView || reducedMotion
  const fadeStyle = !isNumeric
    ? {
        opacity: showFinalState ? 1 : 0,
        transform: showFinalState ? "translateY(0)" : "translateY(8px)",
        transition: reducedMotion
          ? "none"
          : "opacity 500ms ease-out, transform 500ms ease-out",
      }
    : undefined

  return (
    <span ref={ref} className={className} style={fadeStyle}>
      {display}
    </span>
  )
}
