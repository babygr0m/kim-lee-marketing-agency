const socials = [
  { label: "Instagram", href: "https://instagram.com" },
  { label: "TikTok", href: "https://tiktok.com" },
  { label: "LinkedIn", href: "https://linkedin.com" },
]

export function AlternativeContact() {
  return (
    <section className="bg-lma-black px-6 md:px-12 lg:px-20 py-20 md:py-28">
      <div className="mx-auto max-w-7xl">
        {/* Hairline divider above */}
        <div className="h-px w-full bg-lma-cream/10 mb-20 md:mb-24" />

        <div className="text-center">
          {/* Eyebrow */}
          <p className="mb-8 font-mono text-[11px] md:text-xs uppercase tracking-[0.25em] text-lma-gold">
            Or reach out directly
          </p>

          {/* Email — Anton ~32px */}
          <a
            href="mailto:hello@leemarketingagency.com"
            className="inline-block font-[family-name:var(--font-anton)] text-lma-cream uppercase tracking-tight text-2xl md:text-[32px] leading-none transition-colors duration-300 hover:text-lma-gold"
          >
            hello@leemarketingagency.com
          </a>

          {/* Social row with dot separators */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-x-2 gap-y-3 font-mono text-[11px] md:text-xs uppercase tracking-[0.2em]">
            {socials.map((s, idx) => (
              <span key={s.label} className="inline-flex items-center gap-2">
                <a
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  className="text-lma-cream/60 hover:text-lma-gold transition-colors"
                >
                  {s.label}
                </a>
                {idx < socials.length - 1 && (
                  <span aria-hidden="true" className="text-lma-cream/30">
                    {"\u00B7"}
                  </span>
                )}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
