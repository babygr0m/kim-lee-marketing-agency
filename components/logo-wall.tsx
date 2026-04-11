"use client"

const brands = [
  "Fashion Nova",
  "Forever 21",
  "Netflix",
  "Mattel",
  "Sanrio",
  "Sol de Janeiro",
  "Rolling Loud",
  "Reebok",
  "Roblox",
  "Live Nation",
  "Juicy Couture",
  "Barbie",
]

export function LogoWall() {
  return (
    <section className="bg-lma-black py-24 md:py-32 lg:py-40 px-6 md:px-12 lg:px-20">
      {/* Eyebrow */}
      <p className="text-center text-lma-cream/60 text-[10px] md:text-xs tracking-[0.2em] uppercase mb-16 md:mb-20">
        Trusted by brands that moved culture
      </p>

      {/* Logo Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 md:gap-12 lg:gap-16 max-w-6xl mx-auto">
        {brands.map((brand) => (
          <div
            key={brand}
            className="group flex items-center justify-center h-16 md:h-20 cursor-pointer transition-opacity duration-300"
          >
            {/* Logo Placeholder - Replace with SVG */}
            <span 
              className="font-display text-lma-cream/40 text-sm md:text-base tracking-[0.1em] uppercase text-center transition-all duration-300 group-hover:text-lma-cream"
              data-logo-placeholder={brand.toLowerCase().replace(/\s+/g, "-")}
            >
              {brand}
            </span>
          </div>
        ))}
      </div>
    </section>
  )
}
