import { Suspense } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ContactHero } from "@/components/contact/contact-hero"
import { ContactForm } from "@/components/contact/contact-form"
import { ContactBooking } from "@/components/contact/contact-booking"

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

      <section className="bg-lma-black px-6 md:px-12 lg:px-20 pb-24 md:pb-32">
        <div className="mx-auto max-w-7xl grid gap-16 lg:gap-20 lg:grid-cols-[1.5fr_1fr]">
          {/* Left — Form (60%) */}
          <div>
            <Suspense
              fallback={
                <div className="font-sans text-sm text-lma-cream/40">
                  Loading form…
                </div>
              }
            >
              <ContactForm />
            </Suspense>
          </div>

          {/* Right — Booking (40%) */}
          <ContactBooking />
        </div>
      </section>

      <Footer />
    </main>
  )
}
