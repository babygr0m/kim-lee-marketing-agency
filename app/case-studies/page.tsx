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
    // Thumbnail order alternates portrait / landscape for visual rhythm:
    // Alix (portrait) → Kimora (landscape) → Madison (portrait) → XO Kitty (landscape).
    thumbnails: [
      {
        videoId: "EicIufb-VxE",
        href: "https://www.youtube.com/watch?v=EicIufb-VxE",
        alt: "Forever 21 x Juicy Couture featuring Alix Earle",
        primaryLabel: "Alix Earle",
        secondaryLabel: "Juicy Couture",
        imageSrc: "/case-studies/f21-alix-earle.webp",
        // Portrait frame — fills naturally without letterbox bars.
        aspectClass: "aspect-[3/4]",
        objectPosition: "center top",
      },
      {
        videoId: "SWuz2CRqoZ8",
        href: "https://www.youtube.com/watch?v=SWuz2CRqoZ8",
        alt: "Forever 21 Holidays with Baby Phat featuring Kimora Lee Simmons",
        primaryLabel: "Kimora",
        secondaryLabel: "Baby Phat",
        imageSrc: "/case-studies/f21-kimora.jpeg",
      },
      {
        videoId: "bevSPXctLNA",
        href: "https://www.youtube.com/watch?v=bevSPXctLNA",
        alt: "Forever 21 Holiday Party Collection featuring Madison Beer",
        primaryLabel: "Madison Beer",
        secondaryLabel: "Holiday",
        imageSrc: "/case-studies/f21-madison-beer.jpg",
        // Portrait frame — keeps face + corset both in view.
        aspectClass: "aspect-[3/4]",
        objectPosition: "center top",
      },
      {
        videoId: "C6t9M6IUO-c",
        href: "https://www.youtube.com/watch?v=C6t9M6IUO-c",
        alt: "Forever 21 x Hello Kitty x Sanrio XO Kitty",
        primaryLabel: "XO Kitty",
        secondaryLabel: "Hello Kitty",
        imageSrc: "/case-studies/f21-xo-kitty.webp",
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
    roleEyebrow: "Affiliate Program & Social Media Strategy",
    kicker: "Affiliate built to scale a boutique brand.",
    metrics: [
      { value: "$1.5M", label: "Gross Revenue Generated" },
      { value: "450+", label: "Creators Activated" },
      { value: "84M+", label: "Combined Reach" },
    ],
    narrative: [
      "Partnered with Ivy City to build their social media team and ambassador program from the ground up, sourcing and onboarding 450+ creators posting for the brand on a monthly basis. Creators were carefully vetted and provided with creative direction to support every seasonal initiative and collection launch.",
      "Activated paid partnerships across collection launches, driving a 70% lift in gross campaign performance. The affiliate and ambassador infrastructure we built generated $1.5M in gross revenue and 84M in combined reach across the creator network.",
    ],
    collaborators: ["450+ Creators", "84M+ Reach", "70% Paid Lift"],
  },
  {
    slug: "sol-de-janeiro",
    shortLabel: "Sol de Janeiro",
    brand: "Sol de Janeiro",
    roleEyebrow: "TikTok Shop Affiliate & Campaign Strategy · Active",
    kicker: "Shop management at culture speed.",
    metrics: [
      { value: "TikTok Shop", label: "Active" },
      { value: "Full", label: "Lifecycle" },
      { value: "Attribution", label: "Led" },
    ],
    narrative: [
      "Active TikTok Shop affiliate and campaign strategy partnership with Sol de Janeiro, managing shop operations, paid amplification, and attribution strategy for one of the fastest-growing body care brands in the world. Engagement is ongoing.",
      "Program includes full shop management, creator recruitment and activation, paid amplification of top-performing content, and attribution tracking across the affiliate funnel.",
    ],
    collaborators: ["TikTok Shop", "Creator Commerce", "Paid Amplification"],
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
