export function ContactHero() {
  return (
    <section className="bg-lma-black px-6 md:px-12 lg:px-20 pt-32 md:pt-40 pb-16 md:pb-24">
      <div className="mx-auto max-w-4xl text-center">
        {/* Eyebrow */}
        <p className="mb-5 font-sans text-[10px] md:text-xs uppercase tracking-[0.25em] text-lma-gold font-semibold">
          Get in touch
        </p>

        {/* Headline */}
        <h1 className="font-[family-name:var(--font-anton)] text-lma-cream uppercase tracking-tight leading-[0.95] text-[clamp(3rem,8vw,7rem)] text-balance mb-5">
          Let&apos;s build.
        </h1>

        {/* Italic Kicker */}
        <p className="font-[family-name:var(--font-instrument-serif)] italic text-lma-gold text-xl md:text-2xl lg:text-3xl mb-8">
          Your brand. Our playbook. One call away.
        </p>

        {/* Body */}
        <p className="mx-auto max-w-[640px] font-sans text-sm md:text-base leading-relaxed text-lma-cream/75">
          Tell us about your brand, your goals, and what you&apos;re trying to
          unlock. We respond to every inquiry within 48 hours.
        </p>
      </div>
    </section>
  )
}
