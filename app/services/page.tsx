import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ServicesTabbed } from "@/components/services-tabbed"
import type { ServiceSectionData } from "@/components/service-section"

export const metadata: Metadata = {
  title: "Services / LMA",
  description:
    "The full playbook, under one roof. TikTok Shop Management, affiliate marketing, influencer programs, paid media, creative, social, and podcast production.",
}

type ServiceTabData = ServiceSectionData & { shortLabel: string }

const services: ServiceTabData[] = [
  {
    number: "01",
    slug: "tiktok-shop",
    shortLabel: "TikTok Shop",
    name: "TikTok Shop Management",
    kicker: "Verified partner. Full lifecycle.",
    body: "As a verified TikTok Shop Affiliate Partner, LMA builds and manages full creator commerce programs, from shop setup and affiliate recruitment to GMV Max campaigns, Spark Code activations, and performance tracking. We handle every layer so your brand is set up to convert from day one.",
    campaigns: ["CAMPAIGN-01-A", "CAMPAIGN-01-B", "CAMPAIGN-01-C"],
    stats: [
      { value: "$15M+", label: "GMV Driven" },
      { value: "Verified", label: "Affiliate Partner" },
      { value: "10K+", label: "Active Creators" },
    ],
  },
  {
    number: "02",
    slug: "affiliate-marketing",
    shortLabel: "Affiliate Marketing",
    name: "Meta & TikTok Shop Affiliate Marketing",
    kicker: "Our core specialty.",
    body: "LMA builds performance-driven affiliate programs that scale across Meta and TikTok Shop, the two platforms driving the highest-converting creator commerce today. We recruit brand-aligned ambassadors, structure tiered commission systems, and manage the full affiliate lifecycle from onboarding and content strategy to compliance and reporting. Every program is built around measurable ROI, not vanity metrics.",
    campaigns: ["CAMPAIGN-02-A", "CAMPAIGN-02-B", "CAMPAIGN-02-C"],
    stats: [
      { value: "2", label: "Core Platforms" },
      { value: "$1.5M+", label: "Affiliate Revenue Generated" },
      { value: "450+", label: "Creator Network" },
    ],
  },
  {
    number: "03",
    slug: "influencer",
    shortLabel: "Influencer",
    name: "Influencer Marketing",
    kicker: "Micro to A-list.",
    body: "Micro to A-list. Sourced, negotiated, contracted, and managed from start to finish. A decade of relationship-building means we move at the speed of culture.",
    campaigns: ["CAMPAIGN-03-A", "CAMPAIGN-03-B", "CAMPAIGN-03-C"],
    stats: [
      { value: "10+ YRS", label: "Relationships" },
      { value: "A-List", label: "To Micro" },
      { value: "All", label: "Major Platforms" },
    ],
  },
  {
    number: "04",
    slug: "paid-media",
    shortLabel: "Paid Media",
    name: "Paid Media",
    kicker: "Performance first.",
    body: "LMA's paid media strategy works directly alongside your influencer and affiliate campaigns, identifying top-performing content and boosting it strategically across TikTok, Meta, and YouTube. We manage spend with a performance-first mindset, optimizing toward your ROAS targets from day one.",
    campaigns: ["CAMPAIGN-04-A", "CAMPAIGN-04-B", "CAMPAIGN-04-C"],
    stats: [
      { value: "3", label: "Platforms Managed" },
      { value: "ROAS", label: "First Approach" },
      { value: "Day 1", label: "Optimization" },
    ],
  },
  {
    number: "05",
    slug: "creative",
    shortLabel: "Creative",
    name: "Creative & Campaign Production",
    kicker: "Built to stop the scroll.",
    body: "An in-house team that produces culturally-driven campaign content built to stop the scroll and convert. From concept and scripting to production and delivery.",
    campaigns: ["CAMPAIGN-05-A", "CAMPAIGN-05-B", "CAMPAIGN-05-C"],
    stats: [
      { value: "In-House", label: "Creative Team" },
      { value: "Concept", label: "To Delivery" },
      { value: "Multi-Format", label: "Native" },
    ],
  },
  {
    number: "06",
    slug: "social-media",
    shortLabel: "Social Media",
    name: "Content Creation & Social Media Management",
    kicker: "End-to-end social presence.",
    body: "End-to-end brand-presence management. Content, calendar, community, and reporting. Built to stay culturally relevant and on-brand at the speed of the platform.",
    campaigns: ["CAMPAIGN-06-A", "CAMPAIGN-06-B", "CAMPAIGN-06-C"],
    stats: [
      { value: "Always", label: "On-Brand" },
      { value: "Full", label: "Lifecycle" },
      { value: "Culturally", label: "Relevant" },
    ],
  },
  {
    number: "07",
    slug: "podcast",
    shortLabel: "Podcast",
    name: "Podcast Production & Management",
    kicker: "A full brand channel.",
    body: "We produce Me and Who Els from the ground up, and bring that same capability to brand partners. Treated as a full brand channel, not an afterthought.",
    campaigns: ["CAMPAIGN-07-A", "CAMPAIGN-07-B", "CAMPAIGN-07-C"],
    stats: [
      { value: "In-House", label: "Production" },
      { value: "Full", label: "Distribution" },
      { value: "Brand", label: "Channel" },
    ],
  },
]

export default function ServicesPage() {
  return (
    <main className="bg-lma-black min-h-screen">
      <Header />
      <ServicesTabbed services={services} />
      <Footer />
    </main>
  )
}
