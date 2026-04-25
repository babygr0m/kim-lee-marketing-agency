/**
 * AboutPageBg — fixed full-viewport ambient gradient layer for /about.
 *
 * Same architectural pattern as <CaseStudyTabBg>: rendered once at the
 * top of the page, sits at `fixed inset-0 -z-10` so it covers the entire
 * viewport (header to footer area) at all times, and stays in place as the
 * user scrolls — providing constant atmospheric brand presence behind the
 * editorial content.
 *
 * Treatment: a single brand-gold radial drift (no tab cross-fade — only
 * one identity here). The gold core blooms outward and fades into a
 * deep amber ring before settling into the #0A0A0A page base. Opacity
 * tuned for the same visual weight as the boosted case study gradients
 * (Ivy City / Fashion Nova) so /about reads as a peer in the same system.
 *
 * Why this lives in a separate component instead of a generic primitive:
 *  - The gradient is page-specific (gold-only, no tab state to react to).
 *  - It owns its own #0A0A0A solid base layer so the page wrapper doesn't
 *    need bg-lma-black — same contract as <CaseStudyTabBg>.
 *  - Reduced-motion is handled in CSS (the `.animate-about-gold` class is
 *    listed in the prefers-reduced-motion block in globals.css).
 */
export function AboutPageBg() {
  return (
    <div
      aria-hidden="true"
      // Fixed inset-0 — covers the entire viewport regardless of scroll.
      // -z-10 places the layer beneath every natural-flow element so
      // section content stacks above the gradient automatically without
      // needing its own positive z-index. The fixed Header (z-50) still
      // sits well above this layer.
      className="fixed inset-0 -z-10 pointer-events-none overflow-hidden"
    >
      {/* Solid base — provides the dark page bg via the gradient layer
          itself, so the page wrapper and footer can be transparent. */}
      <div className="absolute inset-0 bg-[#0A0A0A]" />

      {/* Brand-gold radial drift — bloom of #C9A961 (LMA gold) cores
          centered, ease into a deep amber halo (#8B6E2A) before fading
          to the dark base. background-position drift via the
          .animate-about-gold keyframes makes the bloom slowly migrate
          across the viewport on a 24s cycle. */}
      <div
        className="absolute inset-0 animate-about-gold"
        style={{
          backgroundImage:
            "radial-gradient(circle at center, rgba(201, 169, 97, 0.45) 0%, rgba(139, 110, 42, 0.30) 30%, #0A0A0A 70%)",
          backgroundSize: "200% 200%",
        }}
      />
    </div>
  )
}
