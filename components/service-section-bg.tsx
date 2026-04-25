/**
 * ServiceSectionBg
 * -----------------------------------------------------------------------------
 * Full-bleed animated gradient layer for the 3 abstract services on /services
 * (TikTok Shop / Affiliate Marketing / Paid Media).
 *
 * Renders absolutely-positioned inside a `relative` parent so the centered
 * text content stacks on top via z-index. All three variants stay in the
 * brand palette (#0A0A0A black, #C9A961 gold) and keep gold opacity at 6–8%
 * so the motion reads as ambient peripheral atmosphere, not foreground noise.
 *
 * Returns null for unknown / image-backed slugs — caller still renders the
 * static black section background as the fallback.
 */

type ServiceSectionBgProps = {
  slug: string
}

export function ServiceSectionBg({ slug }: ServiceSectionBgProps) {
  // Service 01 — TikTok Shop. Drifting gold spotlight. Center starts at the
  // top-left and slowly walks the 4 corners over 18s; gold tops out at 8%
  // opacity at the spotlight center and fades to pure black by 60% radius.
  if (slug === "tiktok-shop") {
    return (
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none animate-service-radial-drift"
        style={{
          backgroundImage:
            "radial-gradient(circle at 0% 0%, rgba(201, 169, 97, 0.08) 0%, #0A0A0A 60%)",
          backgroundSize: "200% 200%",
        }}
      />
    )
  }

  // Service 02 — Affiliate Marketing. 135° diagonal linear gradient with a
  // narrow 6%-gold band in the middle. Background is 200% so the position
  // shift visibly walks the band across the section over 12s.
  if (slug === "affiliate-marketing") {
    return (
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none animate-service-linear-shift"
        style={{
          backgroundImage:
            "linear-gradient(135deg, #0A0A0A 0%, #0A0A0A 40%, rgba(201, 169, 97, 0.06) 50%, #0A0A0A 60%, #0A0A0A 100%)",
          backgroundSize: "200% 200%",
        }}
      />
    )
  }

  // Service 04 — Paid Media. Slowly rotating conic gradient with four narrow
  // 8%-gold bands. Layer is 200% × 200% and centered via translate so the
  // rotation never reveals corner clipping. 28s linear infinite.
  if (slug === "paid-media") {
    return (
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          aria-hidden="true"
          className="absolute left-1/2 top-1/2 w-[200%] h-[200%] animate-service-conic-rotate"
          style={{
            background:
              "conic-gradient(from 0deg, #0A0A0A 0deg, rgba(201, 169, 97, 0.08) 18deg, #0A0A0A 36deg, #0A0A0A 90deg, rgba(201, 169, 97, 0.08) 108deg, #0A0A0A 126deg, #0A0A0A 180deg, rgba(201, 169, 97, 0.08) 198deg, #0A0A0A 216deg, #0A0A0A 270deg, rgba(201, 169, 97, 0.08) 288deg, #0A0A0A 306deg, #0A0A0A 360deg)",
          }}
        />
      </div>
    )
  }

  return null
}
