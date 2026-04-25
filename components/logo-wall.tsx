import Image from "next/image"

// CSS keyframes for the infinite scroll animation
const scrollKeyframes = `
  @keyframes logo-scroll {
    from { transform: translateX(0); }
    to { transform: translateX(-50%); }
  }
`

const brands = [
  {
    name: "Fashion Nova",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Fashion_Nova_Logo.svg-OP6wxf4iKyoBzZmZqz0GANxzzDKYLc.png",
    needsBlendMode: false,
    maxHeight: 32,
  },
  {
    name: "Forever 21",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Forever_21_logo.svg-6XADpVHBqDNt6JKCputo93jy89wl3J.png",
    needsBlendMode: false,
    maxHeight: 32,
  },
  {
    name: "Netflix",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/netflix%20logo-yUgpcjcCxewFOnn4VyDJNXxkGUZrWU.png",
    needsBlendMode: false,
    maxHeight: 32,
  },
  {
    name: "Barbie",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Barbie_Logo.svg-BiKhr4jZyyoHP8igFC33t7NYI0sBO4.png",
    needsBlendMode: false,
    maxHeight: 32,
  },
  {
    name: "Sanrio",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/sanrio-Wv3O0WCC5GHN5JwZtBUYujzom8mzri.png",
    needsBlendMode: true,
    maxHeight: 56,
  },
  {
    name: "Atlantic Records",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Atlantic%20Logo-Q5c9Wzrimh0JChgrIFgrq4x3et9p7t.png",
    needsBlendMode: false,
    maxHeight: 56,
  },
  {
    name: "Rolling Loud",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/rollingLoud-4XoGPPvbPDofk9IwOCVtMVdnb2T43u.png",
    needsBlendMode: false,
    maxHeight: 56,
  },
  {
    name: "Reebok",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Reebok_International_logo.svg-rWoTO10t7t5zgZlNCujVLzAHMbzMAB.png",
    needsBlendMode: false,
    maxHeight: 56,
  },
  {
    name: "Roblox",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Roblox_Logo_2022.svg-2BuL4uE8bg9KP9f0TzVnHmdQ2fZpbh.png",
    needsBlendMode: false,
    maxHeight: 32,
  },
  {
    name: "Live Nation",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Live%20nation%20logo-WvNPZEw4lpfzTU8EeQWj4Ql0Cgkd91.webp",
    needsBlendMode: true,
    maxHeight: 32,
  },
  {
    name: "Juicy Couture",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Juicy_Couture_logo.svg-m21XjsCXpntTnatRZHFUzAFpIsU5dM.png",
    needsBlendMode: false,
    maxHeight: 32,
  },
  {
    name: "Barneys New York",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Barneys_New_York_Logo.svg-xuR71nkCVSBm1yM4e1bIGmdYLC2uRJ.png",
    needsBlendMode: false,
    maxHeight: 32,
  },
]

// Duplicate the array so the loop can scroll seamlessly from 0 to -50%
const loopBrands = [...brands, ...brands]

export function LogoWall({ showEyebrow = true }: { showEyebrow?: boolean }) {
  return (
    <section className="bg-lma-black py-24 md:py-32 lg:py-40">
      {/* Inject keyframes directly to guarantee they're available */}
      <style dangerouslySetInnerHTML={{ __html: scrollKeyframes }} />
      {/* Eyebrow — suppressed when consumer page already provides its own header */}
      {showEyebrow && (
        <p className="text-center text-lma-gold text-xs md:text-sm font-semibold tracking-[0.2em] uppercase mb-16 md:mb-20 px-6">
          Trusted by brands that moved culture
        </p>
      )}

      {/* Carousel - full-width, overflow hidden, with edge fade mask */}
      <div
        className="relative w-full overflow-hidden"
        style={{
          maskImage:
            "linear-gradient(to right, transparent 0, #0A0A0A 80px, #0A0A0A calc(100% - 80px), transparent 100%)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent 0, #0A0A0A 80px, #0A0A0A calc(100% - 80px), transparent 100%)",
        }}
      >
        <div
          className="flex w-max hover:[animation-play-state:paused]"
          style={{ animation: "logo-scroll 50s linear infinite" }}
        >
          {loopBrands.map((brand, index) => (
            <div
              key={`${brand.name}-${index}`}
              className="flex h-16 shrink-0 items-center justify-center px-10 md:px-14 lg:px-16"
            >
              <Image
                src={brand.logo || "/placeholder.svg"}
                alt={brand.name}
                width={200}
                height={64}
                className={`w-auto object-contain ${
                  brand.needsBlendMode ? "mix-blend-screen" : ""
                }`}
                style={{ 
                  filter: "brightness(0) invert(1)",
                  maxHeight: `${brand.maxHeight}px`
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
