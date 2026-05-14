/**
 * ServiceVisual
 * -----------------------------------------------------------------------------
 * Right-column visual for the 4 image-based service tabs on /services
 * (Influencer / Creative / Social Media / Podcast). The 3 abstract services
 * (TikTok Shop / Affiliate / Paid Media) use the full-bleed centered text
 * layout with ambient gradient backgrounds instead and never call this.
 */

type ServiceVisualProps = {
  slug: string
  number: string
  shortLabel: string
}

type Tile = {
  src: string
  alt: string
  caption?: { primary: string; secondary?: string }
  objectPosition?: string
}

// Order matters — first item renders as the big hero tile in the 1+2 layout.
// Ty Dolla solo studio portrait is the most iconic single image; F21 stills
// fill the secondary stack with celebrity range.
const influencerGrid: Tile[] = [
  {
    src: "/influencer/ty-dolla-01.jpg",
    alt: "Ty Dolla $ign — Men's Health editorial",
    caption: { primary: "Ty Dolla $ign", secondary: "Men's Health" },
    objectPosition: "center top",
  },
  {
    src: "/case-studies/f21-rolling-loud-featured.jpg",
    alt: "Forever 21 x Rolling Loud — influencer campaign",
    caption: { primary: "Rolling Loud", secondary: "F21" },
    objectPosition: "center top",
  },
  {
    src: "/case-studies/f21-madison-beer.jpg",
    alt: "Madison Beer — Forever 21 holiday campaign",
    caption: { primary: "Madison Beer", secondary: "F21 Holiday" },
    objectPosition: "center top",
  },
]

const creativeGrid: Tile[] = [
  {
    src: "/creative/joe-read-bts.jpg",
    alt: "Joe Read campaign — studio BTS",
    caption: { primary: "Joe Read", secondary: "BTS" },
  },
  {
    src: "/creative/joe-read-editorial.jpg",
    alt: "Joe Read campaign — editorial",
    caption: { primary: "Joe Read", secondary: "Editorial" },
  },
  {
    src: "/creative/saint-hill-01.jpg",
    alt: "Saint Hill streetwear campaign",
    caption: { primary: "Saint Hill", secondary: "Campaign" },
  },
  {
    src: "/creative/flight-tribe-01.jpg",
    alt: "Flight Tribe streetwear editorial",
    caption: { primary: "Flight Tribe", secondary: "B&W" },
  },
]

const socialWall: Tile[] = [
  { src: "/creative/joe-read-editorial.jpg", alt: "Editorial campaign content" },
  { src: "/creative/saint-hill-01.jpg", alt: "Streetwear campaign content" },
  { src: "/creative/flight-tribe-01.jpg", alt: "B&W editorial content" },
  { src: "/influencer/ty-dolla-02.jpg", alt: "Celebrity editorial content" },
]

function Caption({ caption }: { caption?: Tile["caption"] }) {
  if (!caption) return null
  return (
    <p className="mt-2 font-mono text-[10px] tracking-[0.2em] uppercase">
      <span className="text-lma-gold">{caption.primary}</span>
      {caption.secondary && (
        <span className="text-lma-cream/60"> / {caption.secondary}</span>
      )}
    </p>
  )
}

function ImageTile({ tile, aspect = "aspect-[4/5]" }: { tile: Tile; aspect?: string }) {
  return (
    <div>
      <div className={`relative ${aspect} overflow-hidden border border-lma-cream/10 bg-lma-cream/[0.02]`}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={tile.src}
          alt={tile.alt}
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover"
          style={{ objectPosition: tile.objectPosition ?? "center" }}
        />
      </div>
      <Caption caption={tile.caption} />
    </div>
  )
}

function PhoneFrame({
  src,
  poster,
}: {
  src: string
  poster?: string
}) {
  return (
    <div className="rounded-[28px] bg-lma-cream/5 border border-lma-cream/15 p-2">
      <div className="rounded-[20px] overflow-hidden aspect-[9/16] bg-lma-black">
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster={poster}
          className="h-full w-full object-cover"
          aria-hidden="true"
        >
          <source src={src} type="video/mp4" />
        </video>
      </div>
    </div>
  )
}

export function ServiceVisual({ slug }: ServiceVisualProps) {
  if (slug === "influencer") {
    // 1 big hero tile on the left + 2 smaller tiles stacked on the right.
    // Bigger tiles than the previous 3-up so the celebrity proof reads at a
    // glance instead of feeling cramped. Hero tile fills the full column
    // height; right column tiles stay 4:5 portrait.
    const [hero, second, third] = influencerGrid
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
        {/* Hero tile — Ty Dolla full body. Spans both rows of the right
            column at desktop, stacks first at mobile. */}
        <div className="sm:row-span-2 flex flex-col">
          <div className="relative flex-1 overflow-hidden border border-lma-cream/10 bg-lma-cream/[0.02] aspect-[4/5] sm:aspect-auto sm:min-h-[460px]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={hero.src}
              alt={hero.alt}
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover"
              style={{ objectPosition: hero.objectPosition ?? "center" }}
            />
          </div>
          <Caption caption={hero.caption} />
        </div>

        {/* Right column tiles */}
        <ImageTile tile={second} />
        <ImageTile tile={third} />
      </div>
    )
  }

  if (slug === "creative") {
    return (
      <div className="grid grid-cols-2 gap-3 md:gap-4">
        {creativeGrid.map((tile, i) => (
          <ImageTile key={i} tile={tile} />
        ))}
      </div>
    )
  }

  if (slug === "social-media") {
    return (
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-4 md:gap-5 items-start">
        <PhoneFrame src="/social.mp4" poster="/creative/joe-read-editorial.jpg" />
        <div className="grid grid-cols-2 gap-3">
          {socialWall.map((tile, i) => (
            <ImageTile key={i} tile={tile} aspect="aspect-square" />
          ))}
        </div>
      </div>
    )
  }

  if (slug === "podcast") {
    return (
      <div className="flex flex-col gap-4 md:gap-5">
        {/* Landscape podcast clip — 1920x1080 source. Stacked on top of the
            cover so the video carries the visual weight and the cover stays
            as a brand-identity anchor below. */}
        <div className="relative aspect-video overflow-hidden border border-lma-cream/10 bg-lma-black">
          <video
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            poster="/me-and-who-els-cover.jpeg"
            className="absolute inset-0 h-full w-full object-cover"
            aria-hidden="true"
          >
            <source src="/podcast.mp4" type="video/mp4" />
          </video>
        </div>

        <div className="grid grid-cols-[0.5fr_1fr] gap-4 md:gap-5 items-center">
          <div className="relative aspect-square overflow-hidden border border-lma-cream/10">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/me-and-who-els-cover.jpeg"
              alt="Me and Who Els podcast cover art"
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>
          <p className="font-mono text-[10px] md:text-[11px] tracking-[0.2em] uppercase text-lma-cream/70">
            <span className="text-lma-gold">Me and Who Els</span>
            <span className="text-lma-cream/60"> / Hosted by Elsy Guevara</span>
          </p>
        </div>
      </div>
    )
  }

  return null
}
