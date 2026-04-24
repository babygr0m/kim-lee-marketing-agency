export function ServicesHero() {
  return (
    <section className="bg-lma-black pt-40 md:pt-48 pb-20 md:pb-28 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto">
        {/* Eyebrow */}
        <p className="font-sans text-xs md:text-sm tracking-[0.25em] uppercase text-lma-cream/60 mb-8 md:mb-10">
          What We Do
        </p>

        {/* Headline */}
        <h1 className="font-[family-name:var(--font-anton)] text-lma-cream uppercase tracking-tight leading-[0.9] text-[clamp(3.5rem,10vw,9rem)]">
          The full playbook.
        </h1>

        {/* Italic Kicker */}
        <p className="font-serif italic text-lma-gold text-[clamp(1.5rem,3vw,2.25rem)] mt-4 md:mt-6">
          Under one roof.
        </p>

        {/* Body Paragraph */}
        <p className="font-sans text-lma-cream/75 text-base md:text-lg leading-relaxed max-w-[680px] mt-10 md:mt-14">
          LMA offers a complete suite of digital marketing services built around one goal: turning social audiences into brand revenue. Every service we offer is informed by over a decade of hands-on experience building some of the fastest-growing brands in the world.
        </p>
      </div>

      {/* Hairline Divider */}
      <div className="max-w-7xl mx-auto mt-20 md:mt-28">
        <div className="h-px w-full bg-lma-cream/[0.08]" />
      </div>
    </section>
  )
}
