"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { useInView } from "@/hooks/use-in-view"

type Visual =
  | { type: "image"; src: string; alt: string; objectPosition?: string; aspectClass?: string }
  | { type: "video"; src: string; poster?: string; objectFit?: "cover" | "contain"; aspectClass?: string }
  | { type: "gradient"; gradient: string; aspectClass?: string }

const services: Array<{
  number: string
  name: string
  slug: string
  description: string
  visual: Visual
}> = [
  // Asset-driven services lead — celebrity stills + campaign videos carry the
  // visual weight at the top of the list. Gradient services follow at the
  // bottom since they're abstract by design.
  {
    number: "01",
    name: "Influencer Marketing",
    slug: "influencer",
    description: "Micro to A-list. Sourced, contracted, and managed end-to-end.",
    visual: {
      type: "image",
      src: "/influencer/ty-dolla-01.jpg",
      alt: "Ty Dolla $ign — Men's Health editorial",
      objectPosition: "center top",
    },
  },
  {
    number: "02",
    name: "Creative & Campaign Production",
    slug: "creative",
    description: "In-house creative team built to stop the scroll and convert.",
    visual: {
      type: "video",
      src: "/creative.mp4",
      poster: "/creative/joe-read-bts.jpg",
    },
  },
  {
    number: "03",
    name: "Content Creation & Social Media Management",
    slug: "social-media",
    description: "End-to-end social management. Built around your brand calendar.",
    visual: {
      type: "video",
      src: "/social.mp4",
      poster: "/creative/joe-read-editorial.jpg",
    },
  },
  {
    number: "04",
    name: "Podcast Production & Management",
    slug: "podcast",
    description: "Podcasts treated as a full brand channel, not an afterthought.",
    visual: {
      type: "video",
      src: "/podcast.mp4",
      poster: "/me-and-who-els-cover.jpeg",
      // 1920x1080 landscape source — render at native landscape aspect so
      // the video fills the tile edge-to-edge (no letterbox bars). The row
      // uses items-center, so this tile sitting shorter than the others is
      // vertically centered and reads cleanly.
      aspectClass: "aspect-video",
    },
  },
  {
    number: "05",
    name: "TikTok Shop Management",
    slug: "tiktok-shop",
    description: "Verified TikTok Shop Affiliate Partner. We run the full creator commerce stack.",
    visual: {
      type: "gradient",
      gradient:
        "radial-gradient(circle at 30% 30%, rgba(255,107,107,0.55), transparent 60%), radial-gradient(circle at 70% 70%, rgba(201,169,97,0.5), transparent 65%), linear-gradient(135deg, #1a0f0a, #0a0a0a)",
    },
  },
  {
    number: "06",
    name: "Meta & TikTok Shop Affiliate Marketing",
    slug: "affiliate-marketing",
    description: "Performance-driven affiliate programs across Meta and TikTok Shop. Our core specialty.",
    visual: {
      type: "gradient",
      gradient:
        "radial-gradient(circle at 25% 75%, rgba(110,180,255,0.45), transparent 60%), radial-gradient(circle at 75% 25%, rgba(201,169,97,0.45), transparent 60%), linear-gradient(135deg, #0a1220, #0a0a0a)",
    },
  },
  {
    number: "07",
    name: "Paid Media",
    slug: "paid-media",
    description: "ROAS-first paid strategy across TikTok, Meta, and YouTube.",
    visual: {
      type: "gradient",
      gradient:
        "radial-gradient(circle at 40% 40%, rgba(180,120,255,0.45), transparent 60%), radial-gradient(circle at 60% 80%, rgba(201,169,97,0.45), transparent 55%), linear-gradient(135deg, #14091a, #0a0a0a)",
    },
  },
]

function ServiceVisualTile({ visual }: { visual: Visual }) {
  const aspect = visual.aspectClass ?? "aspect-[4/5]"
  if (visual.type === "image") {
    return (
      <div className={`relative ${aspect} overflow-hidden border border-lma-cream/10`}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={visual.src}
          alt={visual.alt}
          loading="lazy"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ objectPosition: visual.objectPosition ?? "center" }}
        />
      </div>
    )
  }
  if (visual.type === "video") {
    const fit = visual.objectFit ?? "cover"
    return (
      <div className={`relative ${aspect} overflow-hidden border border-lma-cream/10 bg-lma-black`}>
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster={visual.poster}
          className={`absolute inset-0 w-full h-full ${fit === "contain" ? "object-contain" : "object-cover"}`}
          aria-hidden="true"
        >
          <source src={visual.src} type="video/mp4" />
        </video>
      </div>
    )
  }
  return (
    <div
      className={`relative ${aspect} overflow-hidden border border-lma-cream/10`}
      style={{ background: visual.gradient }}
      aria-hidden="true"
    />
  )
}

type ServiceRowProps = {
  number: string
  name: string
  slug: string
  description: string
  visual: Visual
}

/**
 * Single service row with its own scroll observer. Each row reveals the
 * moment IT crosses 25% visibility — independently of the rows above and
 * below — so the section feels like it's unfolding as the user scrolls
 * through it instead of all 7 firing at once.
 *
 * Reveal is the entire row as a single unit (no internal stagger): fade
 * + translateX(-12px → 0) over 450ms ease-out, applied to the <Link>
 * wrapper directly. The inner hover behaviors (gold underline draw, gold
 * text shift, arrow circle treatment) all live on child elements with
 * their own transitions, so they stay intact.
 */
function ServiceRow({ number, name, slug, description, visual }: ServiceRowProps) {
  const { ref, inView } = useInView<HTMLAnchorElement>({ threshold: 0.25 })

  return (
    <Link
      ref={ref}
      key={number}
      href={`/services#${slug}`}
      aria-label={`Learn more about ${name}`}
      data-reveal="slide-x-12"
      data-revealed={inView ? "true" : "false"}
      style={{ transitionDuration: "450ms" }}
      className="group relative flex flex-col md:flex-row md:items-center py-8 md:py-10 border-t border-lma-cream/15 last:border-b cursor-pointer gap-6 md:gap-8"
    >
      {/* Number */}
      <div className="md:w-[7%] mb-2 md:mb-0">
        <span className="font-[family-name:var(--font-anton)] text-3xl md:text-4xl text-lma-gold">
          {number}
        </span>
      </div>

      {/* Visual tile — 4:5 portrait. Image / autoplay-loop video / animated gradient,
          chosen per service. The 3 abstract services (TikTok Shop / Affiliate / Paid)
          get gradient swatches; the 4 image services get celebrity stills or campaign
          autoplay loops. */}
      <div className="md:w-[18%]">
        <ServiceVisualTile visual={visual} />
      </div>

      {/* Service Name — wraps the title in a relative inline-block so
          the underline can absolute-position itself directly beneath
          the text. Line draws 0 → 100% width over 300ms on hover via
          `group-hover:duration-300`, retracts back at the base 200ms
          duration on unhover. Sits 4px below the title. */}
      <div className="md:w-[32%] mb-4 md:mb-0 md:pr-8">
        <h3 className="font-[family-name:var(--font-anton)] text-2xl md:text-[2.5rem] md:leading-tight text-lma-cream uppercase tracking-tight transition-colors duration-300 group-hover:text-lma-gold">
          <span className="relative inline-block">
            {name}
            <span
              aria-hidden="true"
              className="pointer-events-none absolute left-0 top-[calc(100%+4px)] block h-px w-0 bg-lma-gold transition-[width] duration-200 ease-out group-hover:w-full group-hover:duration-300"
            />
          </span>
        </h3>
      </div>

      {/* Description */}
      <div className="md:w-[28%] md:pr-8 mb-2 md:mb-0">
        <p className="font-sans text-base text-lma-cream/80 leading-relaxed">
          {description}
        </p>
      </div>

      {/* Explore CTA — persistent, clearly clickable */}
      <div className="md:w-[12%] flex items-center justify-start md:justify-end gap-3 pr-2 md:pr-4">
        <span className="font-sans text-xs tracking-[0.2em] uppercase text-lma-cream/60 transition-colors duration-300 group-hover:text-lma-gold">
          Explore
        </span>
        <span className="flex h-10 w-10 items-center justify-center rounded-full border border-lma-cream/30 text-lma-cream transition-all duration-300 group-hover:border-lma-gold group-hover:bg-lma-gold group-hover:text-lma-black group-hover:translate-x-1">
          <ArrowRight aria-hidden="true" className="h-4 w-4" />
        </span>
      </div>
    </Link>
  )
}

export function Services() {
  return (
    <section className="bg-lma-black py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        {/* Eyebrow */}
        <p className="text-center font-sans text-xs tracking-[0.25em] text-lma-cream/60 uppercase mb-8">
          What We Do
        </p>

        {/* Headline */}
        <div className="mb-16 md:mb-24">
          <h2 className="font-[family-name:var(--font-anton)] text-5xl md:text-7xl text-lma-cream uppercase tracking-tight">
            The full playbook.
          </h2>
          <p className="font-serif italic text-xl md:text-2xl text-lma-gold/80 mt-2">
            Under one roof.
          </p>
        </div>

        {/* Services List — each row owns its own observer + reveal so
            they animate independently as the user scrolls past them. */}
        <div className="flex flex-col">
          {services.map((service) => (
            <ServiceRow
              key={service.number}
              number={service.number}
              name={service.name}
              slug={service.slug}
              description={service.description}
              visual={service.visual}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
