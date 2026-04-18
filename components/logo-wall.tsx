"use client"

import Image from "next/image"
import { useState } from "react"

const brands = [
  { 
    name: "Fashion Nova", 
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Fashion_Nova_Logo.svg-OP6wxf4iKyoBzZmZqz0GANxzzDKYLc.png",
    needsBlendMode: false,
    size: "normal"
  },
  { 
    name: "Forever 21", 
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Forever_21_logo.svg-6XADpVHBqDNt6JKCputo93jy89wl3J.png",
    needsBlendMode: false,
    size: "normal"
  },
  { 
    name: "Netflix", 
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/netflix%20logo-yUgpcjcCxewFOnn4VyDJNXxkGUZrWU.png",
    needsBlendMode: false,
    size: "large"
  },
  { 
    name: "Barbie", 
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Barbie_Logo.svg-BiKhr4jZyyoHP8igFC33t7NYI0sBO4.png",
    needsBlendMode: false,
    size: "large"
  },
  { 
    name: "Sanrio", 
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/sanrio-Wv3O0WCC5GHN5JwZtBUYujzom8mzri.png",
    needsBlendMode: true,
    size: "xlarge"
  },
  { 
    name: "Atlantic Records", 
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Atlantic%20Logo-Q5c9Wzrimh0JChgrIFgrq4x3et9p7t.png",
    needsBlendMode: false,
    size: "xlarge"
  },
  { 
    name: "Rolling Loud", 
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/rollingLoud-4XoGPPvbPDofk9IwOCVtMVdnb2T43u.png",
    needsBlendMode: false,
    size: "normal"
  },
  { 
    name: "Reebok", 
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Reebok_International_logo.svg-rWoTO10t7t5zgZlNCujVLzAHMbzMAB.png",
    needsBlendMode: false,
    size: "normal"
  },
  { 
    name: "Roblox", 
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Roblox_Logo_2022.svg-2BuL4uE8bg9KP9f0TzVnHmdQ2fZpbh.png",
    needsBlendMode: false,
    size: "normal"
  },
  { 
    name: "Live Nation", 
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Live%20nation%20logo-WvNPZEw4lpfzTU8EeQWj4Ql0Cgkd91.webp",
    needsBlendMode: true,
    size: "normal"
  },
  { 
    name: "Juicy Couture", 
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Juicy_Couture_logo.svg-m21XjsCXpntTnatRZHFUzAFpIsU5dM.png",
    needsBlendMode: false,
    size: "normal"
  },
  { 
    name: "Barneys New York", 
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Barneys_New_York_Logo.svg-xuR71nkCVSBm1yM4e1bIGmdYLC2uRJ.png",
    needsBlendMode: false,
    size: "normal"
  },
]

function LogoItem({ brand }: { brand: typeof brands[0] }) {
  const [isHovered, setIsHovered] = useState(false)
  
  // Size classes: normal = 32px, large = 40px, xlarge = 48px
  const sizeClass = brand.size === "xlarge" 
    ? "max-h-12" 
    : brand.size === "large" 
      ? "max-h-10" 
      : "max-h-8"
  
  return (
    <div
      className="flex items-center justify-center h-12 md:h-16"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Image
        src={brand.logo}
        alt={brand.name}
        width={200}
        height={48}
        className={`
          ${sizeClass} w-auto object-contain transition-all duration-300
          ${brand.needsBlendMode && !isHovered ? "mix-blend-screen" : ""}
        `}
        style={{
          filter: isHovered ? "none" : "brightness(0) invert(1)"
        }}
      />
    </div>
  )
}

export function LogoWall() {
  return (
    <section className="bg-lma-black py-24 md:py-32 lg:py-40 px-6 md:px-12 lg:px-20">
      {/* Eyebrow */}
      <p className="text-center text-lma-cream/60 text-[10px] md:text-xs tracking-[0.2em] uppercase mb-16 md:mb-20">
        Trusted by brands that moved culture
      </p>

      {/* Logo Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 md:gap-16 lg:gap-20 max-w-6xl mx-auto">
        {brands.map((brand) => (
          <LogoItem key={brand.name} brand={brand} />
        ))}
      </div>
    </section>
  )
}
