"use client"

import { useState } from "react"

type YouTubeThumbnailProps = {
  videoId: string
  href: string
  alt: string
  primaryLabel: string
  secondaryLabel: string
  /**
   * When provided, this exact URL is used for the poster image and the
   * maxresdefault → hqdefault fallback is skipped entirely. Useful for videos
   * that don't have a maxresdefault.jpg generated.
   */
  directSrc?: string
}

export function YouTubeThumbnail({
  videoId,
  href,
  alt,
  primaryLabel,
  secondaryLabel,
  directSrc,
}: YouTubeThumbnailProps) {
  // If a direct URL is supplied, use it as-is (skip maxres entirely).
  // Otherwise try maxresdefault first and fall back to hqdefault on error.
  const [src, setSrc] = useState(
    directSrc ?? `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`,
  )
  const [hasFallenBack, setHasFallenBack] = useState(Boolean(directSrc))

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener"
      aria-label={alt}
      className="group block"
    >
      <div className="relative aspect-video overflow-hidden border border-lma-cream/10 group-hover:border-lma-gold transition-[border-color,transform] duration-200 ease-out group-hover:scale-[1.02]">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={src || "/placeholder.svg"}
          alt={alt}
          loading="lazy"
          onError={() => {
            if (!hasFallenBack) {
              setSrc(`https://img.youtube.com/vi/${videoId}/hqdefault.jpg`)
              setHasFallenBack(true)
            }
          }}
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>
      <p className="mt-3 font-mono text-[10px] md:text-[11px] tracking-[0.2em] uppercase">
        <span className="text-lma-gold">{primaryLabel}</span>
        <span className="text-lma-cream/60">{` / ${secondaryLabel}`}</span>
      </p>
    </a>
  )
}
