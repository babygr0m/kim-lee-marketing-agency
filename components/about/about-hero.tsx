export function AboutHero() {
  return (
    <section className="bg-lma-black px-6 pb-24 pt-40 md:px-12 md:pb-32 md:pt-48 lg:px-20 lg:pt-56">
      <div className="mx-auto max-w-4xl text-center">
        {/* Eyebrow */}
        <p className="mb-6 font-sans text-xs font-semibold uppercase tracking-[0.2em] text-lma-gold md:text-sm">
          About
        </p>

        {/* Headline */}
        <h1 className="font-[family-name:var(--font-anton)] text-5xl uppercase leading-[0.9] tracking-tight text-lma-cream sm:text-6xl md:text-7xl lg:text-8xl text-balance">
          Built from the inside.
        </h1>

        {/* Italic gold kicker */}
        <p className="mt-4 font-[family-name:var(--font-instrument-serif)] text-2xl italic text-lma-gold/80 md:mt-6 md:text-3xl lg:text-4xl text-balance">
          A decade of building the brands that built the playbook.
        </p>

        {/* Body paragraph */}
        <p className="mx-auto mt-8 max-w-2xl font-sans text-base leading-relaxed text-lma-cream/75 md:mt-10 md:text-lg text-pretty">
          LMA isn&apos;t a marketing agency that learned about social commerce. We are the people
          who built it. The strategies, the creator playbooks, the celebrity campaigns, the
          affiliate programs that defined the modern era of brand growth came from inside the
          rooms where it all happened.
        </p>
      </div>
    </section>
  )
}
