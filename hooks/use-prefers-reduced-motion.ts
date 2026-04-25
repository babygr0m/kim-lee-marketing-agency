"use client"

import { useEffect, useState } from "react"

/**
 * usePrefersReducedMotion
 * -----------------------------------------------------------------------------
 * Reads the user's prefers-reduced-motion media query and stays subscribed
 * to changes (e.g. user toggles the OS setting while the tab is open).
 *
 * CSS animations are disabled via a global @media query in globals.css —
 * this hook exists solely for JS-driven animations (the stat count-up RAF
 * loop in <AnimatedStat>) so they can short-circuit to the final value when
 * motion is reduced.
 */
export function usePrefersReducedMotion(): boolean {
  const [prefers, setPrefers] = useState(false)

  useEffect(() => {
    if (typeof window === "undefined" || !window.matchMedia) return

    const mq = window.matchMedia("(prefers-reduced-motion: reduce)")
    setPrefers(mq.matches)

    const handler = (e: MediaQueryListEvent) => setPrefers(e.matches)
    mq.addEventListener("change", handler)
    return () => mq.removeEventListener("change", handler)
  }, [])

  return prefers
}
