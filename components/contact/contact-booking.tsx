const socials = [
  { label: "Instagram", href: "https://instagram.com" },
  { label: "TikTok", href: "https://tiktok.com" },
  { label: "LinkedIn", href: "https://linkedin.com" },
]

export function ContactBooking() {
  return (
    <div>
      {/* Eyebrow */}
      <p className="mb-5 font-sans text-[10px] md:text-xs uppercase tracking-[0.25em] text-lma-gold font-semibold">
        Prefer to talk?
      </p>

      {/* Headline */}
      <h2 className="font-[family-name:var(--font-anton)] text-lma-cream uppercase tracking-tight leading-[0.95] text-[clamp(2.5rem,5vw,4rem)] mb-4">
        Book a call.
      </h2>

      {/* Kicker */}
      <p className="font-[family-name:var(--font-instrument-serif)] italic text-lma-gold text-xl md:text-2xl mb-6">
        30 minutes. No pitch.
      </p>

      {/* Body */}
      <p className="font-sans text-sm md:text-base text-lma-cream/75 leading-relaxed mb-10">
        Book a strategy call directly with Kim. We&apos;ll talk through your
        brand, your goals, and whether LMA is the right fit.
      </p>

      {/* Booking embed placeholder */}
      <div className="relative aspect-[4/5] border border-lma-cream/15 mb-10 overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center px-6">
          <span className="text-center font-mono text-[10px] md:text-xs uppercase tracking-[0.25em] text-lma-gold">
            Booking embed — Cal.com placeholder
          </span>
        </div>
      </div>

      {/* Hairline divider */}
      <div className="h-px w-full bg-lma-cream/15 mb-10" />

      {/* Direct contact */}
      <p className="mb-5 font-sans text-[10px] md:text-xs uppercase tracking-[0.25em] text-lma-gold font-semibold">
        Or reach out directly
      </p>

      <a
        href="mailto:hello@leemarketingagency.com"
        className="block font-sans text-base md:text-lg text-lma-gold mb-8 hover:underline"
      >
        hello@leemarketingagency.com
      </a>

      <div className="flex flex-wrap items-center gap-x-8 gap-y-3">
        {socials.map((s) => (
          <a
            key={s.label}
            href={s.href}
            target="_blank"
            rel="noreferrer"
            className="font-mono text-[11px] uppercase tracking-[0.2em] text-lma-cream/60 hover:text-lma-gold transition-colors"
          >
            {s.label}
          </a>
        ))}
      </div>
    </div>
  )
}
