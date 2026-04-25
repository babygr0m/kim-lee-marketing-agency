import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ContactHero } from "@/components/contact/contact-hero"
import { ContactFunnel } from "@/components/contact/contact-funnel"
import { AlternativeContact } from "@/components/contact/alternative-contact"

export const metadata = {
  title: "Contact / LMA — Lee Marketing Agency",
  description:
    "Tell us about your brand. We respond to every inquiry within 48 hours.",
}

export default function ContactPage() {
  return (
    <main className="bg-lma-black text-lma-cream">
      <Header />
      <ContactHero />
      <ContactFunnel />
      <AlternativeContact />
      <Footer />
    </main>
  )
}
