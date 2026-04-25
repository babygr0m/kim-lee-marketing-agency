/**
 * CaseStudyTabBg
 * -----------------------------------------------------------------------------
 * Full-viewport ambient gradient layer for /case-studies. Renders all 4
 * brand-specific gradient layers stacked, with the active slug at opacity: 1
 * and the others at opacity: 0. CSS transitions the opacity over 600ms
 * ease-in-out so brand color identities cross-fade smoothly between tab
 * clicks instead of cutting hard.
 *
 * Positioning: `fixed inset-0 z-0`.
 *  - Covers the ENTIRE viewport at all times (including the footer area)
 *    instead of being scoped to just the active case study content section.
 *  - Stays in place as the user scrolls, providing constant ambient
 *    atmosphere regardless of scroll position.
 *  - For this to read correctly, the page wrapper (<main>) must NOT have an
 *    opaque bg-lma-black, and the footer must be transparent — the gradient
 *    layer's base color (#0A0A0A) provides the dark page bg itself.
 *
 * Each gradient uses brand-pulled colors at moderate opacity so the wash
 * reads as ambient peripheral atmosphere — fully legible at every animation
 * phase, but vibrant enough to register the brand color identity. Motion is
 * pure CSS (background-position drift / linear sweep) and is disabled by
 * the global prefers-reduced-motion override in globals.css.
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

// Each gradient is sized 200%×200% (or 300% for the F21 sweep) so the
// keyframes can shift background-position visibly across the full viewport
// without revealing any tiled edges.
const GRADIENTS: GradientDef[] = [
  // Fashion Nova — radial pink-to-deep-red drift. Hot pink center bleeds
  // into deep red before fading to the dark page base.
  {
    slug: "fashion-nova",
    animateClass: "animate-cs-fashion-nova",
    style: {
      backgroundImage:
        "radial-gradient(circle at center, rgba(255, 45, 122, 0.22) 0%, rgba(139, 0, 48, 0.14) 30%, #0A0A0A 65%)",
      backgroundSize: "200% 200%",
    },
  },
  // Forever 21 — wide yellow band sweeping diagonally over black. Band is
  // wider (44–56% range) and ~3× more opaque than the original 8% slice
  // so the F21 brand yellow registers clearly as you scroll.
  {
    slug: "forever-21",
    animateClass: "animate-cs-forever-21",
    style: {
      backgroundImage:
        "linear-gradient(135deg, #0A0A0A 0%, #0A0A0A 30%, rgba(255, 229, 0, 0.22) 50%, #0A0A0A 70%, #0A0A0A 100%)",
      backgroundSize: "300% 300%",
    },
  },
  // Ivy City Co — champagne-cream radial drift. Warm cream center fades
  // through brand gold and out to black — boosted to ~22% / 14% so the
  // signature gold-on-black wedding aesthetic actually reads.
  {
    slug: "ivy-city",
    animateClass: "animate-cs-ivy-city",
    style: {
      backgroundImage:
        "radial-gradient(circle at center, rgba(244, 228, 193, 0.22) 0%, rgba(201, 169, 97, 0.14) 30%, #0A0A0A 65%)",
      backgroundSize: "200% 200%",
    },
  },
  // Sol de Janeiro — tropical orange→coral→green diagonal sweep at 110°.
  // Boosted opacities so the Brazilian summer palette pops alongside the
  // other three brand gradients.
  {
    slug: "sol-de-janeiro",
    animateClass: "animate-cs-sol-de-janeiro",
    style: {
      backgroundImage:
        "linear-gradient(110deg, rgba(255, 107, 53, 0.18) 0%, rgba(255, 154, 139, 0.13) 50%, rgba(45, 155, 79, 0.16) 100%)",
      backgroundSize: "200% 200%",
    },
  },
]

export function CaseStudyTabBg({ activeSlug }: CaseStudyTabBgProps) {
  return (
    <div
      aria-hidden="true"
      // Fixed inset-0 — covers the entire viewport including the footer
      // area, regardless of scroll position. z-0 sits below all page
      // content (which sits at z-10 in the tabbed component and footer).
      className="fixed inset-0 z-0 pointer-events-none overflow-hidden"
    >
      {/* Solid base layer — always-on dark page bg so when one gradient
          fades out and another fades in, there's no flash of whatever
          might be behind the fixed layer. */}
      <div className="absolute inset-0 bg-[#0A0A0A]" />

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
