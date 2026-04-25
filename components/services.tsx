"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { useInView } from "@/hooks/use-in-view"

const services = [
  {
    number: "01",
    name: "TikTok Shop Management",
    slug: "tiktok-shop",
    description:
      "As a verified TikTok Shop Affiliate Partner, LMA builds and manages full creator commerce programs from shop setup and affiliate recruitment to GMV Max campaigns, Spark Code activations, and performance tracking.",
  },
  {
    number: "02",
    name: "Meta & TikTok Shop Affiliate Marketing",
    slug: "affiliate-marketing",
    description:
      "Our core specialty. We build and scale affiliate programs across Meta and TikTok Shop, the two platforms driving the highest-converting creator commerce today. From creator recruitment and commission structuring to full lifecycle management and performance reporting, we run affiliate like a growth channel, not a line item.",
  },
  {
    number: "03",
    name: "Influencer Marketing",
    slug: "influencer",
    description:
      "From micro-creators to A-list celebrities, we source, negotiate, contract, and manage influencer partnerships from start to finish. Our network spans every major platform.",
  },
  {
    number: "04",
    name: "Paid Media",
    slug: "paid-media",
    description:
      "Paid strategy works directly alongside your influencer and affiliate campaigns, identifying top-performing content and boosting it across TikTok, Meta, and YouTube with a performance-first mindset.",
  },
  {
    number: "05",
    name: "Creative & Campaign Production",
    slug: "creative",
    description:
      "Our in-house creative team produces high-quality, culturally-driven campaign videos built to stop the scroll and convert.",
  },
  {
    number: "06",
    name: "Content Creation & Social Media Management",
    slug: "social-media",
    description:
      "We manage your brand's social presence end-to-end from content strategy and creation to posting, community management, and performance reporting.",
  },
  {
    number: "07",
    name: "Podcast Production & Management",
    slug: "podcast",
    description:
      "We produce Me and Who Els from the ground up and bring that same capability to brand partners, treating podcasts as a full brand channel.",
  },
]

type ServiceRowProps = {
  number: string
  name: string
  slug: string
  description: string
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
function ServiceRow({ number, name, slug, description }: ServiceRowProps) {
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
      // Note: the hover-bg + colors transition that used to live on this
      // <Link> was dropped because `[data-reveal]` sets a transition
      // shorthand limited to opacity/transform — keeping it here would
      // be overridden anyway. The hover affordances now live on inner
      // child elements (title color + underline draw, arrow circle), so
      // the row still reads as interactive without losing the row-bg
      // tint isn't critical to the design.
      className="group relative flex flex-col md:flex-row md:items-center py-12 md:py-14 border-t border-lma-cream/15 last:border-b cursor-pointer"
    >
      {/* Number */}
      <div className="md:w-[10%] mb-4 md:mb-0">
        <span className="font-[family-name:var(--font-anton)] text-3xl md:text-4xl text-lma-gold">
          {number}
        </span>
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
      <div className="md:w-[43%] md:pr-8 mb-6 md:mb-0">
        <p className="font-sans text-base text-lma-cream/80 leading-relaxed">
          {description}
        </p>
      </div>

      {/* Explore CTA — persistent, clearly clickable */}
      <div className="md:w-[15%] flex items-center justify-start md:justify-end gap-3 pr-2 md:pr-4">
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
            />
          ))}
        </div>
      </div>
    </section>
  )
}
