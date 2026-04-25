/**
 * ServiceVisual
 * -----------------------------------------------------------------------------
 * Renders the right-column visual on the /services page for a single service.
 *
 * Hybrid system:
 * - 4 services with natural campaign imagery render a real <img> (Megan Thee
 *   Stallion / Madison Beer / Alix Earle / Me and Who Els podcast cover).
 * - 3 abstract services with no obvious imagery render a distinct animated
 *   gradient treatment (radial spotlight / diagonal linear shift / rotating
 *   conic dial). Each gradient feels intentional and varied rather than
 *   "missing" content.
 *
 * The wrapper container is identical across all 7 cards (aspect ratio, 1px
 * cream/10 hairline border, hover lift to gold/60 border, 200ms ease) so the
 * visitor reads the system as a deliberate hybrid, not a partial design.
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
  // Service 03 — uses YouTube CDN since the Megan thumbnail isn't stored
  // locally in /public; the source matches the videoId in the Fashion Nova
  // case study thumbnail row.
  influencer: {
    src: "https://img.youtube.com/vi/RIUt8pmKMoY/maxresdefault.jpg",
    alt: "Megan Thee Stallion x Fashion Nova campaign — influencer marketing in action",
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

// Shared wrapper styles for ALL 7 cards. Image and gradient variants must
// look identical at rest and on hover so the hybrid system reads as
// intentional. Using `transition-all` covers both the border-color shift
// and the subtle lift on hover.
const cardWrapperClasses =
  "relative aspect-[4/5] lg:aspect-[4/5] overflow-hidden border border-lma-cream/10 transition-all duration-200 ease-out hover:border-lma-gold/60 hover:-translate-y-0.5"

// Small DM-Mono-style number tag in the bottom-right of every gradient
// card. Subtle (gold @ 30% opacity) — design element, not foreground copy.
function NumberTag({ number }: { number: string }) {
  return (
    <span
      aria-hidden="true"
      className="absolute bottom-4 right-4 font-mono text-xs uppercase tracking-[0.25em] text-lma-gold/30"
    >
      {number}
    </span>
  )
}

export function ServiceVisual({ slug, number, shortLabel }: ServiceVisualProps) {
  // ---- PART A — Real-image services -------------------------------------
  const image = imageMap[slug]
  if (image) {
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
      </div>
    )
  }

  // ---- PART B — Animated gradient services ------------------------------

  // Service 01 — TikTok Shop. Drifting radial spotlight + faint commerce
  // grid overlay. Two stacked layers: the radial uses background-position
  // animation against a 200% × 200% background-size so the gold center
  // visibly wanders; the grid is a static 32px lattice at 5% opacity.
  if (slug === "tiktok-shop") {
    return (
      <div className={`${cardWrapperClasses} bg-[#0A0A0A]`}>
        {/* Drifting gold spotlight */}
        <div
          className="absolute inset-0 animate-service-radial-drift"
          style={{
            backgroundImage:
              "radial-gradient(circle at 50% 50%, rgba(201, 169, 97, 0.30) 0%, transparent 55%)",
            backgroundSize: "200% 200%",
            backgroundColor: "#0A0A0A",
          }}
        />
        {/* Static commerce-coded grid overlay (~32px squares, 5% gold) */}
        <div
          aria-hidden="true"
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(rgba(201, 169, 97, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(201, 169, 97, 0.05) 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />
        <NumberTag number={number} />
      </div>
    )
  }

  // Service 02 — Affiliate Marketing. 135° linear gradient that slowly
  // shifts diagonally, plus a layer of drifting diagonal lines (network /
  // connection metaphor without being literal). The lines drift one stripe
  // period (80px) over the same 8s loop so the motion is seamless.
  if (slug === "affiliate-marketing") {
    return (
      <div className={`${cardWrapperClasses} bg-[#0A0A0A]`}>
        {/* Diagonal base gradient with shifting position */}
        <div
          className="absolute inset-0 animate-service-linear-shift"
          style={{
            backgroundImage:
              "linear-gradient(135deg, #0A0A0A 0%, rgba(201, 169, 97, 0.15) 50%, #0A0A0A 100%)",
            backgroundSize: "200% 200%",
          }}
        />
        {/* Drifting diagonal connection lines. Outer container clips, inner
            layer is intentionally over-sized so translate doesn't reveal
            edges as it loops. */}
        <div className="absolute inset-0 overflow-hidden">
          <div
            aria-hidden="true"
            className="absolute -inset-x-1/4 -inset-y-1/4 animate-service-lines-drift"
            style={{
              backgroundImage:
                "repeating-linear-gradient(135deg, transparent 0px, transparent 80px, rgba(201, 169, 97, 0.08) 80px, rgba(201, 169, 97, 0.08) 81px)",
            }}
          />
        </div>
        <NumberTag number={number} />
      </div>
    )
  }

  // Service 04 — Paid Media. Slowly rotating conic gradient with narrow
  // gold bands at 0°/90°/180°/270° (suggests a dial / amplification).
  // Layer is 200% × 200% and centered with translate(-50%,-50%) so the
  // rotation never reveals container corners.
  if (slug === "paid-media") {
    return (
      <div className={`${cardWrapperClasses} bg-[#0A0A0A]`}>
        <div className="absolute inset-0 overflow-hidden">
          <div
            aria-hidden="true"
            className="absolute left-1/2 top-1/2 w-[200%] h-[200%] animate-service-conic-rotate"
            style={{
              background:
                "conic-gradient(from 0deg, #0A0A0A 0deg, rgba(201, 169, 97, 0.20) 25deg, #0A0A0A 50deg, #0A0A0A 90deg, rgba(201, 169, 97, 0.20) 115deg, #0A0A0A 140deg, #0A0A0A 180deg, rgba(201, 169, 97, 0.20) 205deg, #0A0A0A 230deg, #0A0A0A 270deg, rgba(201, 169, 97, 0.20) 295deg, #0A0A0A 320deg, #0A0A0A 360deg)",
            }}
          />
        </div>
        <NumberTag number={number} />
      </div>
    )
  }

  // ---- Fallback — should never render in production but keeps the system
  //      defensive if a new service slug is added without a visual mapping.
  return (
    <div className={`${cardWrapperClasses} bg-lma-cream/[0.03]`}>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center px-6">
          <span className="font-[family-name:var(--font-anton)] text-lma-cream/10 text-6xl md:text-8xl lg:text-9xl tracking-tight block">
            {number}
          </span>
          <span className="font-sans text-[10px] tracking-[0.25em] uppercase text-lma-cream/30 mt-2 block">
            {shortLabel} Visual
          </span>
        </div>
      </div>
    </div>
  )
}
