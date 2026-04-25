/**
 * CaseStudyTabBg
 * -----------------------------------------------------------------------------
 * Full-bleed ambient gradient layer for the active case study tab on
 * /case-studies. Renders all 4 brand-specific gradient layers stacked, with
 * the active slug at opacity: 1 and the others at opacity: 0. CSS transitions
 * the opacity over 600ms ease-in-out, so brand color identities cross-fade
 * smoothly between tab clicks instead of cutting hard.
 *
 * Each gradient uses brand-pulled colors at low opacity (5–10%) so the wash
 * reads as ambient peripheral atmosphere — fully legible at every animation
 * phase. Motion is pure CSS (background-position drift / linear sweep) and
 * is disabled by the global prefers-reduced-motion override in globals.css.
 *
 * Caller supplies the active slug. The component renders absolutely-
 * positioned inside a `relative` parent and the page content stacks above
 * via z-index.
 */

type CaseStudyTabBgProps = {
  activeSlug: string
}

type GradientDef = {
  slug: string
  /** Tailwind animate-* class that drives this gradient's motion. */
  animateClass: string
  /** Inline style for the gradient layer. */
  style: React.CSSProperties
}

// Each gradient is sized 200%×200% so the keyframes can shift
// background-position visibly across the full section without revealing
// any tiled edges.
const GRADIENTS: GradientDef[] = [
  // Fashion Nova — radial pink-to-deep-red drift. Hot pink center at 10%
  // bleeds into deep red at 6% before fading to pure black at 60% radius.
  {
    slug: "fashion-nova",
    animateClass: "animate-cs-fashion-nova",
    style: {
      backgroundImage:
        "radial-gradient(circle at center, rgba(255, 45, 122, 0.10) 0%, rgba(139, 0, 48, 0.06) 30%, #0A0A0A 60%)",
      backgroundSize: "200% 200%",
    },
  },
  // Forever 21 — narrow yellow band sweeping diagonally over black.
  {
    slug: "forever-21",
    animateClass: "animate-cs-forever-21",
    style: {
      backgroundImage:
        "linear-gradient(135deg, #0A0A0A 0%, #0A0A0A 40%, rgba(255, 229, 0, 0.08) 50%, #0A0A0A 60%, #0A0A0A 100%)",
      backgroundSize: "300% 300%",
    },
  },
  // Ivy City Co — champagne-cream radial drift. Warm cream center fades to
  // soft brand gold and out to black.
  {
    slug: "ivy-city",
    animateClass: "animate-cs-ivy-city",
    style: {
      backgroundImage:
        "radial-gradient(circle at center, rgba(244, 228, 193, 0.09) 0%, rgba(201, 169, 97, 0.05) 30%, #0A0A0A 60%)",
      backgroundSize: "200% 200%",
    },
  },
  // Sol de Janeiro — tropical orange→coral→green diagonal sweep at 110°.
  {
    slug: "sol-de-janeiro",
    animateClass: "animate-cs-sol-de-janeiro",
    style: {
      backgroundImage:
        "linear-gradient(110deg, rgba(255, 107, 53, 0.07) 0%, rgba(255, 154, 139, 0.05) 50%, rgba(45, 155, 79, 0.06) 100%)",
      backgroundSize: "200% 200%",
    },
  },
]

export function CaseStudyTabBg({ activeSlug }: CaseStudyTabBgProps) {
  return (
    <div
      aria-hidden="true"
      className="absolute inset-0 pointer-events-none overflow-hidden"
    >
      {GRADIENTS.map((g) => {
        const isActive = g.slug === activeSlug
        return (
          <div
            key={g.slug}
            className={`absolute inset-0 ${g.animateClass}`}
            style={{
              ...g.style,
              opacity: isActive ? 1 : 0,
              transition: "opacity 600ms ease-in-out",
            }}
          />
        )
      })}
    </div>
  )
}
