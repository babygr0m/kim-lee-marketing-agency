import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { AboutApproach } from "@/components/about/about-approach"

export const metadata: Metadata = {
  title: "Our Approach / LMA",
  description:
    "Five steps. One playbook. The system behind every campaign we run, refined over a decade of building creator commerce engines for the biggest brands in culture.",
}

export default function ApproachPage() {
  return (
    <main className="bg-lma-black min-h-screen">
      <Header />
      <div className="pt-24 md:pt-28">
        <AboutApproach />
      </div>
      <Footer />
    </main>
  )
}
