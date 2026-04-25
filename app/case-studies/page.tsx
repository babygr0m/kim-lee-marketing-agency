import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { CaseStudiesTabbed, type CaseStudyData } from "@/components/case-studies-tabbed"

export const metadata: Metadata = {
  title: "Case Studies / LMA",
  description:
    "A decade of building the digital marketing engine behind some of the internet's fastest-growing brands. Fashion Nova, Forever 21, Ivy City Co, Sol de Janeiro.",
}

const caseStudies: CaseStudyData[] = [
  {
    slug: "fashion-nova",
    shortLabel: "Fashion Nova",
    brand: "Fashion Nova",
    roleEyebrow: "Head of Social Media & Influencer Marketing · 8 Years",
    kicker: "The brand we built from zero to a billion.",
    metrics: [
      { value: "$1B+", label: "Revenue at Peak" },
      { value: "8 YRS", label: "Built From Zero" },
      { value: "100M+", label: "Combined Reach" },
    ],
    narrative: [
      "Developed Fashion Nova's Social Media Department and digital marketing infrastructure from the ground up, establishing strategy and scaling brand awareness through influencer partnerships and targeted social campaigns. Cultivated original concepts for celebrity partnerships, campaigns, and brand placements that defined the brand's cultural position.",
      "Facilitated every major celebrity campaign: sourcing talent, managing negotiations and contracts, coordinating editorial shoots, and spearheading brand events and music, TV, and film placements. Grew a following of millions, generated billions of impressions, and created hundreds of viral moments over eight years at the helm.",
    ],
    collaborators: ["Cardi B", "Megan Thee Stallion", "Amber Rose", "Cassie"],
    featuredEmbed: {
      src: "https://www.youtube.com/embed/RIUt8pmKMoY?autoplay=1&mute=1&loop=1&playlist=RIUt8pmKMoY&controls=0&showinfo=0&rel=0&modestbranding=1&playsinline=1",
      title: "Megan Thee Stallion x Fashion Nova",
    },
    thumbnails: [
      {
        videoId: "7hXhsXrlDhE",
        href: "https://www.youtube.com/watch?v=7hXhsXrlDhE",
        alt: "Cardi B x Fashion Nova editorial campaign",
        primaryLabel: "Cardi B",
        secondaryLabel: "Editorial",
      },
      {
        videoId: "RIUt8pmKMoY",
        href: "https://www.youtube.com/watch?v=RIUt8pmKMoY",
        alt: "Megan Thee Stallion x Fashion Nova",
        primaryLabel: "Megan Thee Stallion",
        secondaryLabel: "Campaign",
      },
      {
        videoId: "tLbMDAu16BM",
        href: "https://www.youtube.com/watch?v=tLbMDAu16BM",
        alt: "Amber Rose x Fashion Nova editorial",
        primaryLabel: "Amber Rose",
        secondaryLabel: "Editorial",
      },
      {
        videoId: "7wtQYjtn9S0",
        href: "https://www.youtube.com/watch?v=7wtQYjtn9S0",
        alt: "Cassie x Fashion Nova",
        primaryLabel: "Cassie",
        secondaryLabel: "Campaign",
      },
    ],
  },
  {
    slug: "forever-21",
    shortLabel: "Forever 21",
    brand: "Forever 21",
    roleEyebrow: "Influencer & Social Media Strategy",
    kicker: "Scaling culture across every division.",
    metrics: [
      { value: "100M+", label: "Combined Impressions" },
      { value: "Thousands", label: "Creators Activated" },
      { value: "All", label: "Brand Divisions" },
    ],
    narrative: [
      "Partnered with F21 to build out their full influencer marketing infrastructure, developing the Social Media Team and department from the ground up. Worked alongside the internal marketing team to cultivate original concepts for social media campaigns, influencer and ambassador strategies, and cross-divisional brand collaborations.",
      "Executed campaigns across every major F21 brand collaboration, from Juicy Couture and Baby Phat to Rolling Loud, Hello Kitty, Barbie, and Roblox, activating thousands of creators and generating over 100M combined impressions.",
    ],
    collaborators: [
      "Alix Earle",
      "Madison Beer",
      "Kimora Lee Simmons",
      "Rolling Loud",
      "Hello Kitty",
      "Barbie",
    ],
    featuredEmbed: {
      // Rendered as a static press still (display-only, non-clickable).
      // No forced aspect ratio — image renders at its natural size, full
      // column width, no surrounding container chrome.
      src: "https://www.youtube.com/watch?v=9N7WbMjozUk",
      title: "Forever 21 x Rolling Loud 2023",
      poster: {
        thumbnailSrc: "/case-studies/f21-rolling-loud-featured.jpg",
        watchHref: "https://www.youtube.com/watch?v=9N7WbMjozUk",
      },
    },
    // All four thumbnails share a tall portrait (3:4) frame for a uniform
    // row. Portrait stills (Alix, Madison) fit naturally without cropping
    // their faces; landscape stills (Kimora, XO Kitty) cover the frame and
    // crop horizontally — `objectPosition` keeps the key subject in view.
    thumbnails: [
      {
        videoId: "EicIufb-VxE",
        href: "https://www.youtube.com/watch?v=EicIufb-VxE",
        alt: "Forever 21 x Juicy Couture featuring Alix Earle",
        primaryLabel: "Alix Earle",
        secondaryLabel: "Juicy Couture",
        imageSrc: "/case-studies/f21-alix-earle.webp",
        aspectClass: "aspect-[3/4]",
        objectPosition: "center top",
      },
      {
        videoId: "bevSPXctLNA",
        href: "https://www.youtube.com/watch?v=bevSPXctLNA",
        alt: "Forever 21 Holiday Party Collection featuring Madison Beer",
        primaryLabel: "Madison Beer",
        secondaryLabel: "Holiday",
        imageSrc: "/case-studies/f21-madison-beer.jpg",
        aspectClass: "aspect-[3/4]",
        objectPosition: "center top",
      },
      {
        videoId: "SWuz2CRqoZ8",
        href: "https://www.youtube.com/watch?v=SWuz2CRqoZ8",
        alt: "Kimora Lee Simmons walking the Baby Phat runway with her daughters",
        primaryLabel: "Kimora",
        secondaryLabel: "Baby Phat",
        imageSrc: "/case-studies/f21-kimora-runway.jpg",
        aspectClass: "aspect-[3/4]",
        // Subjects (Kimora + her daughters) sit center-bottom of the original
        // — bias the crop downward so all three stay in the portrait frame.
        objectPosition: "center bottom",
      },
      {
        videoId: "C6t9M6IUO-c",
        href: "https://www.youtube.com/watch?v=C6t9M6IUO-c",
        alt: "Forever 21 x Hello Kitty x Sanrio XO Kitty",
        primaryLabel: "XO Kitty",
        secondaryLabel: "Hello Kitty",
        imageSrc: "/case-studies/f21-xo-kitty.webp",
        aspectClass: "aspect-[3/4]",
        // The Hello Kitty signage sits left, mascot sits right — center
        // crop keeps both partially visible inside the narrower frame.
        objectPosition: "center",
      },
    ],
    archiveLink: {
      href: "https://www.instagram.com/forever21/",
      label: "View campaign archive on Instagram",
    },
  },
  {
    slug: "ivy-city",
    shortLabel: "Ivy City Co",
    brand: "Ivy City Co",
    roleEyebrow: "Affiliate & TikTok Shop Strategy",
    kicker: "Built into a creator commerce engine.",
    metrics: [
      { value: "$1.5M+", label: "Gross Revenue" },
      { value: "450+", label: "Creators Activated" },
      { value: "84M+", label: "Combined Reach" },
    ],
    narrative: [
      "Partnered with Ivy City Co to scale their TikTok Shop and affiliate marketing program from the ground up. Built a creator network of over 450 active partners across micro-influencers to lifestyle creators, driving consistent inbound traffic and conversion.",
      "Drove $1.5M+ in gross revenue through full-lifecycle affiliate management — from creator sourcing and onboarding to content strategy, performance tracking, and reporting. The program now operates as a sustainable creator commerce channel for the brand.",
    ],
    collaborators: ["Micro Creators", "Lifestyle Influencers", "TikTok Shop Affiliates"],
    featuredEmbed: {
      // Static press still — same render path as Forever 21 (no iframe,
      // no clickable wrapper, image renders at its natural ratio).
      src: "/case-studies/ivy-city-featured.webp",
      title: "Ivy City Co holiday editorial — ivory shimmer puff-sleeve dress",
      poster: {
        thumbnailSrc: "/case-studies/ivy-city-featured.webp",
        watchHref: "/case-studies/ivy-city-featured.webp",
      },
    },
    // Uniform 3:4 portrait frames — matches Forever 21 row sizing.
    thumbnails: [
      {
        videoId: "ivy-thumb-1",
        href: "https://www.instagram.com/ivycityco/",
        alt: "Ivy City Co brand editorial — model in a pink and white tie-dye maxi dress",
        primaryLabel: "Editorial",
        secondaryLabel: "Brand",
        imageSrc: "/case-studies/ivy-city-thumb-1.jpg",
        aspectClass: "aspect-[3/4]",
        objectPosition: "center top",
      },
      {
        videoId: "ivy-thumb-2",
        href: "https://www.instagram.com/ivycityco/",
        alt: "Ivy City Co creator content — two women in autumn dresses walking past a brick building",
        primaryLabel: "Creator",
        secondaryLabel: "Content",
        imageSrc: "/case-studies/ivy-city-thumb-2.jpg",
        aspectClass: "aspect-[3/4]",
        objectPosition: "center",
      },
      {
        videoId: "ivy-thumb-3",
        href: "https://www.instagram.com/ivycityco/",
        alt: "Ivy City Co product range — three women in pastel formal gowns on stone steps",
        primaryLabel: "Product",
        secondaryLabel: "Range",
        imageSrc: "/case-studies/ivy-city-thumb-3.webp",
        aspectClass: "aspect-[3/4]",
        // Group shot is centered horizontally in the original — center crop
        // keeps all three subjects visible inside the narrower frame.
        objectPosition: "center",
      },
      {
        videoId: "ivy-thumb-4",
        href: "https://www.instagram.com/ivycityco/",
        alt: "Ivy City Co lifestyle content — three women in floral sundresses with sun hats",
        primaryLabel: "Lifestyle",
        secondaryLabel: "TikTok",
        imageSrc: "/case-studies/ivy-city-thumb-4.webp",
        aspectClass: "aspect-[3/4]",
        objectPosition: "center",
      },
    ],
    archiveLink: {
      href: "https://www.instagram.com/ivycityco/",
      label: "Visit Ivy City on Instagram",
    },
  },
  {
    slug: "sol-de-janeiro",
    shortLabel: "Sol de Janeiro",
    brand: "Sol de Janeiro",
    roleEyebrow: "TikTok Shop Management",
    kicker: "Active TikTok Shop partner.",
    metrics: [
      { value: "Active", label: "TikTok Shop Partner" },
      { value: "GMV", label: "Growth Engine" },
      { value: "Full", label: "Lifecycle Managed" },
    ],
    narrative: [
      "Active TikTok Shop partner managing affiliate strategy, creator activation, and performance optimization for one of the fastest-growing brands in beauty and body care.",
      "Full-lifecycle TikTok Shop program management — creator sourcing, GMV Max campaign architecture, Spark Code activations, and ongoing performance reporting. Specific results under partnership confidentiality.",
    ],
    collaborators: ["TikTok Shop", "Affiliate Network", "GMV Max"],
    featuredEmbed: {
      src: "/case-studies/sol-de-janeiro-featured.webp",
      title: "Sol de Janeiro Brazilian Bum Bum Cream — iconic fragrance editorial",
      poster: {
        thumbnailSrc: "/case-studies/sol-de-janeiro-featured.webp",
        watchHref: "/case-studies/sol-de-janeiro-featured.webp",
      },
    },
    // Sol assets are mostly square — 3:4 frames keep a uniform row with
    // F21 / Ivy and crop minimally.
    thumbnails: [
      {
        videoId: "sol-thumb-1",
        href: "https://www.instagram.com/soldejaneiro/",
        alt: "Sol de Janeiro Brazilian Bum Bum Cream — hero product still",
        primaryLabel: "Bum Bum Cream",
        secondaryLabel: "Hero",
        imageSrc: "/case-studies/sol-de-janeiro-thumb-1.webp",
        aspectClass: "aspect-[3/4]",
        objectPosition: "center",
      },
      {
        videoId: "sol-thumb-2",
        href: "https://www.instagram.com/soldejaneiro/",
        alt: "Sol de Janeiro Cheirosa 62 fragrance mist — signature scent editorial",
        primaryLabel: "Cheirosa 62",
        secondaryLabel: "Signature",
        imageSrc: "/case-studies/sol-de-janeiro-thumb-2.webp",
        aspectClass: "aspect-[3/4]",
        objectPosition: "center",
      },
      {
        videoId: "sol-thumb-3",
        href: "https://www.instagram.com/soldejaneiro/",
        alt: "Sol de Janeiro product portfolio — Cheirosa 62 fragrance mist outdoor lifestyle",
        primaryLabel: "Product",
        secondaryLabel: "Portfolio",
        imageSrc: "/case-studies/sol-de-janeiro-thumb-3.jpg",
        aspectClass: "aspect-[3/4]",
        objectPosition: "center",
      },
      {
        videoId: "sol-thumb-4",
        href: "https://www.instagram.com/soldejaneiro/",
        alt: "Sol de Janeiro brand TikTok Shop content — Cheirosa 62 application moment",
        primaryLabel: "Brand",
        secondaryLabel: "TikTok Shop",
        imageSrc: "/case-studies/sol-de-janeiro-thumb-4.webp",
        aspectClass: "aspect-[3/4]",
        // Subject's face/hand sits right of center — bias right so the
        // brand moment stays in the cropped portrait frame.
        objectPosition: "right center",
      },
    ],
    archiveLink: {
      href: "https://www.instagram.com/soldejaneiro/",
      label: "Visit Sol de Janeiro on Instagram",
    },
    ctaHref: "/contact?service=tiktok-shop",
  },
]

export default function CaseStudiesPage() {
  return (
    <main className="bg-lma-black min-h-screen">
      <Header />
      <CaseStudiesTabbed caseStudies={caseStudies} />
      <Footer />
    </main>
  )
}
