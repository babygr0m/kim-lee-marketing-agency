"use client"

import Image from "next/image"

const brands = [
  { 
    name: "Fashion Nova", 
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Fashion_Nova_Logo.svg-OP6wxf4iKyoBzZmZqz0GANxzzDKYLc.png",
    needsBlendMode: false
  },
  { 
    name: "Forever 21", 
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Forever_21_logo.svg-6XADpVHBqDNt6JKCputo93jy89wl3J.png",
    needsBlendMode: false
  },
  { 
    name: "Netflix", 
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Netflix_2016_N_logo.svg-OndIG5wopguyJ8fSo2ObF3FQWsWm4l.png",
    needsBlendMode: false
  },
  { 
    name: "Barbie", 
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Barbie_Logo.svg-BiKhr4jZyyoHP8igFC33t7NYI0sBO4.png",
    needsBlendMode: false
  },
  { 
    name: "Sanrio", 
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/sanrio-Wv3O0WCC5GHN5JwZtBUYujzom8mzri.png",
    needsBlendMode: true
  },
  { 
    name: "Atlantic Records", 
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Atlantic_Records_fan_logo.svg-pyrhIKgJDt4cwOQ9tdqclhs6bqPTk8.png",
    needsBlendMode: false
  },
  { 
    name: "Rolling Loud", 
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/rollingLoud-4XoGPPvbPDofk9IwOCVtMVdnb2T43u.png",
    needsBlendMode: false
  },
  { 
    name: "Reebok", 
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Reebok_International_logo.svg-rWoTO10t7t5zgZlNCujVLzAHMbzMAB.png",
    needsBlendMode: false
  },
  { 
    name: "Roblox", 
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Roblox_Logo_2022.svg-2BuL4uE8bg9KP9f0TzVnHmdQ2fZpbh.png",
    needsBlendMode: false
  },
  { 
    name: "Live Nation", 
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/live-nation-logo.png-RQfyNza1yOGgIdj1YGaTRPqLyfoiyc.jpeg",
    needsBlendMode: true
  },
  { 
    name: "Juicy Couture", 
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Juicy_Couture_logo.svg-m21XjsCXpntTnatRZHFUzAFpIsU5dM.png",
    needsBlendMode: false
  },
  { 
    name: "Barneys New York", 
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Barneys_New_York_Logo.svg-xuR71nkCVSBm1yM4e1bIGmdYLC2uRJ.png",
    needsBlendMode: false
  },
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
            key={brand.name}
            className="group flex items-center justify-center h-12 md:h-16 cursor-pointer transition-opacity duration-300"
          >
            <Image
              src={brand.logo}
              alt={brand.name}
              width={160}
              height={64}
              className={`
                h-8 md:h-10 w-auto object-contain 
                opacity-40 transition-opacity duration-300 group-hover:opacity-100
                ${brand.needsBlendMode ? "mix-blend-screen" : ""}
              `}
              style={{
                filter: "brightness(0) invert(1)"
              }}
            />
          </div>
        ))}
      </div>
    </section>
  )
}
