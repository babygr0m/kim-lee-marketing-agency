/**
 * ServiceVisual
 * -----------------------------------------------------------------------------
 * Renders the right-column image card on the /services page for the 4 services
 * with natural campaign imagery (Influencer / Creative / Social Media / Podcast).
 *
 * The 3 abstract services (TikTok Shop / Affiliate Marketing / Paid Media) do
 * NOT use this component — they use a full-bleed centered text layout with an
 * ambient gradient applied to the section background (see ServiceSectionBg).
 * As a defensive fallback we return null for those slugs so the caller can
 * branch cleanly without leaking placeholder UI.
 */

type ServiceVisualProps = {
  slug: string
  number: string
  shortLabel: string
}

// Real-image services — keys are service slugs from app/services/page.tsx.
// `objectPosition` biases the crop toward the subject's face so the 4/5
// portrait container doesn't cut off the most important part of the still.
const imageMap: Record<
  string,
  { src: string; alt: string; objectPosition?: string }
> = {
  // Service 03 — Megan Thee Stallion / Fashion Nova. Sourced from the
  // YouTube CDN until the local influencer.jpg is uploaded.
  influencer: {
    src: "https://img.youtube.com/vi/RIUt8pmKMoY/maxresdefault.jpg",
    alt: "Megan Thee Stallion x Fashion Nova Pets — influencer marketing campaign",
    objectPosition: "center",
  },
  // Service 05 — Madison Beer holiday still from F21 case study.
  creative: {
    src: "/case-studies/f21-madison-beer.jpg",
    alt: "Madison Beer x Forever 21 holiday campaign — creative production",
    objectPosition: "center top",
  },
  // Service 06 — Alix Earle creator content from F21 case study. Asset is
  // stored as .webp in /public, not .jpg.
  "social-media": {
    src: "/case-studies/f21-alix-earle.webp",
    alt: "Alix Earle x Forever 21 — creator-led social content",
    objectPosition: "center top",
  },
  // Service 07 — Me and Who Els podcast cover from About page.
  podcast: {
    src: "/me-and-who-els-cover.jpeg",
    alt: "Me and Who Els — Kim Lee's podcast",
    objectPosition: "center",
  },
}

// Shared wrapper styles — 4/5 portrait card, 1px cream/10 hairline border,
// hover lift to gold/60 border with a subtle 200ms translate.
const cardWrapperClasses =
  "relative aspect-[4/5] lg:aspect-[4/5] overflow-hidden border border-lma-cream/10 transition-all duration-200 ease-out hover:border-lma-gold/60 hover:-translate-y-0.5"

export function ServiceVisual({ slug, number, shortLabel }: ServiceVisualProps) {
  const image = imageMap[slug]

  // Abstract services no longer render an image card — caller switches to
  // the full-bleed centered layout instead.
  if (!image) return null

  return (
    <div className={cardWrapperClasses}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={image.src || "/placeholder.svg"}
        alt={image.alt}
        loading="lazy"
        className="absolute inset-0 w-full h-full"
        style={{
          objectFit: "cover",
          objectPosition: image.objectPosition ?? "center",
        }}
      />
      <span className="sr-only">{shortLabel} visual</span>
      {/* number is reserved for future overlay treatments — currently unused
          on image cards but kept on the prop signature for API symmetry */}
      <span className="sr-only">{number}</span>
    </div>
  )
}
