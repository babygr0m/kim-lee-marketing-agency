"use client"

import { useEffect, useRef, useState } from "react"

/**
 * useInView
 * -----------------------------------------------------------------------------
 * "Fire once on enter" IntersectionObserver hook. Used to trigger
 * scroll-triggered animations (stat count-ups, fade-in reveals) the first
 * time an element scrolls into the viewport. Once the element has been seen,
 * the observer disconnects and the hook never re-fires on subsequent
 * scroll-up / scroll-down passes.
 *
 * Returns a ref to attach to the target element and a boolean indicating
 * whether the element has entered the viewport at least once.
 */
export function useInView<T extends Element>(
  options?: IntersectionObserverInit,
): { ref: React.RefObject<T | null>; inView: boolean } {
  const ref = useRef<T | null>(null)
  const [inView, setInView] = useState(false)

  // Stash the options in a ref so the effect doesn't re-run when callers
  // pass an inline { threshold: 0.4 } object literal.
  const optionsRef = useRef(options)
  optionsRef.current = options

  useEffect(() => {
    if (inView) return
    const node = ref.current
    if (!node) return

    // SSR / older browsers without IntersectionObserver — bail out and
    // assume "in view" so content still renders at final state.
    if (typeof IntersectionObserver === "undefined") {
      setInView(true)
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          observer.disconnect()
        }
      },
      { threshold: 0.2, ...optionsRef.current },
    )
    observer.observe(node)

    return () => observer.disconnect()
  }, [inView])

  return { ref, inView }
}
