export function ContactSuccess() {
  return (
    <div className="text-center">
      {/* Gold checkmark — large Anton-style glyph */}
      <div className="inline-flex items-center justify-center w-20 h-20 md:w-24 md:h-24 border border-lma-gold mb-10">
        <span
          aria-hidden="true"
          className="font-[family-name:var(--font-anton)] text-lma-gold text-5xl md:text-6xl leading-none translate-y-[2px]"
        >
          {"\u2713"}
        </span>
      </div>

      {/* Eyebrow */}
      <p className="mb-5 font-mono text-[11px] md:text-xs uppercase tracking-[0.25em] text-lma-gold">
        Message received.
      </p>

      {/* Headline */}
      <h2 className="font-[family-name:var(--font-anton)] text-lma-cream uppercase tracking-tight leading-[0.95] text-[clamp(2.75rem,7vw,5.5rem)] mb-4">
        Now let&apos;s talk.
      </h2>

      {/* Italic kicker */}
      <p className="font-[family-name:var(--font-instrument-serif)] italic text-lma-gold text-xl md:text-3xl mb-8">
        Lock in 30 minutes with Kim.
      </p>

      {/* Body */}
      <p className="mx-auto max-w-[540px] font-sans text-sm md:text-base text-lma-cream/80 leading-relaxed mb-12 md:mb-14">
        Your information is in. Now book a strategy call directly using the
        calendar below — or we&apos;ll reach out within 48 hours if you&apos;d
        rather connect that way.
      </p>

      {/* Booking embed placeholder */}
      <div className="relative aspect-[4/3] w-full border border-lma-cream/15 mb-8 overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center px-6">
          <span className="text-center font-mono text-[10px] md:text-xs uppercase tracking-[0.25em] text-lma-gold">
            Booking embed — Cal.com placeholder
          </span>
        </div>
      </div>

      {/* Async fallback line */}
      <p className="font-sans text-xs md:text-sm text-lma-cream/60">
        Prefer to talk async? Reply directly to the email we just sent.
      </p>
    </div>
  )
}
