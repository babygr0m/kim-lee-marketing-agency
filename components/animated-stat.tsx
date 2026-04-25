"use client"

import { useEffect, useRef, useState } from "react"
import { useInView } from "@/hooks/use-in-view"
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion"

type AnimatedStatProps = {
  /** The full stat string to display, e.g. "$1B+", "8 YRS", "100M+", "VERIFIED". */
  value: string
  /** Optional class names forwarded to the wrapping span. */
  className?: string
  /** Count-up duration in ms. Defaults to 1200. Ignored for non-numeric stats. */
  duration?: number
}

// Splits a stat string into [prefix, number, suffix].
//   "$1B+"     → ["$", "1",   "B+"]
//   "8 YRS"    → ["",  "8",   " YRS"]
//   "100M+"    → ["",  "100", "M+"]
//   "$1.5M+"   → ["$", "1.5", "M+"]
//   "10+ YRS"  → ["",  "10",  "+ YRS"]
//   "VERIFIED" → null  (no numeric portion → fade-in only)
const NUMERIC_RE = /^([^0-9]*)(\d+(?:\.\d+)?)([^0-9]*)$/

/**
 * AnimatedStat
 * -----------------------------------------------------------------------------
 * Single-stat reveal that triggers when the stat scrolls into viewport.
 *
 * Numeric stats (e.g. "$1B+", "100M+", "8 YRS"): the numeric portion counts
 * up from 0 → target over `duration` ms with ease-out, while prefix and
 * suffix render immediately. Decimals are preserved if present.
 *
 * Non-numeric stats (e.g. "VERIFIED", "ALL", "Active"): no count-up, just a
 * fade-in + translateY 8px → 0 over 500ms once in view.
 *
 * Each instance fires exactly once per page load. Honors
 * prefers-reduced-motion by displaying the final value immediately.
 */
export function AnimatedStat({
  value,
  className,
  duration = 1200,
}: AnimatedStatProps) {
  const { ref, inView } = useInView<HTMLSpanElement>({ threshold: 0.4 })
  const reducedMotion = usePrefersReducedMotion()
  const rafRef = useRef<number | null>(null)

  const match = value.match(NUMERIC_RE)
  const isNumeric = !!match
  const prefix = match ? match[1] : ""
  const numStr = match ? match[2] : ""
  const target = match ? Number(numStr) : 0
  const suffix = match ? match[3] : ""
  // Preserve decimal places throughout the count (e.g. 1.5 stays at one decimal).
  const decimals = numStr.includes(".") ? numStr.split(".")[1].length : 0

  // For numeric stats: start at "0" (or "0.0" etc.) until the count-up runs.
  // For non-numeric: render the value immediately — fade-in is handled via
  //                  opacity / transform on the wrapping span.
  const initialDisplay = isNumeric
    ? `${prefix}${(0).toFixed(decimals)}${suffix}`
    : value
  const [display, setDisplay] = useState<string>(initialDisplay)

  useEffect(() => {
    if (!isNumeric) return

    // Reduced motion → skip the count-up, jump to final value as soon as
    // the stat is in view.
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
      const v = (target * easeOut(t)).toFixed(decimals)
      setDisplay(`${prefix}${v}${suffix}`)
      if (t < 1) {
        rafRef.current = requestAnimationFrame(tick)
      }
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
    suffix,
    target,
    decimals,
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
