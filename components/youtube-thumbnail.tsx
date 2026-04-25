"use client"

import { useState } from "react"

type YouTubeThumbnailProps = {
  videoId: string
  href: string
  alt: string
  primaryLabel: string
  secondaryLabel: string
}

export function YouTubeThumbnail({
  videoId,
  href,
  alt,
  primaryLabel,
  secondaryLabel,
}: YouTubeThumbnailProps) {
  // Try maxresdefault first, fall back to hqdefault on error
  const [src, setSrc] = useState(
    `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`,
  )
  const [hasFallenBack, setHasFallenBack] = useState(false)

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
