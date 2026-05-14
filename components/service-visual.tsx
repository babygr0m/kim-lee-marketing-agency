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

const influencerGrid: Tile[] = [
  {
    src: "/case-studies/f21-rolling-loud-featured.jpg",
    alt: "Forever 21 x Rolling Loud — influencer campaign",
    caption: { primary: "Rolling Loud", secondary: "F21" },
    objectPosition: "center top",
  },
  {
    src: "/influencer/ty-dolla-01.jpg",
    alt: "Ty Dolla $ign — Men's Health editorial",
    caption: { primary: "Ty Dolla $ign", secondary: "Men's Health" },
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
    return (
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 md:gap-4">
        {influencerGrid.map((tile, i) => (
          <ImageTile key={i} tile={tile} />
        ))}
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
      <div className="grid grid-cols-1 sm:grid-cols-[1fr_0.7fr] gap-4 md:gap-5 items-start">
        <div className="relative aspect-square overflow-hidden border border-lma-cream/10">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/me-and-who-els-cover.jpeg"
            alt="Me and Who Els podcast cover art"
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover"
          />
        </div>
        <div className="flex flex-col gap-3">
          <PhoneFrame src="/podcast.mp4" poster="/me-and-who-els-cover.jpeg" />
        </div>
      </div>
    )
  }

  return null
}
