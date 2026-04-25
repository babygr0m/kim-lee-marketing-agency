"use client"

import { Suspense, useEffect, useRef, useState } from "react"
import { ContactForm } from "@/components/contact/contact-form"
import { ContactSuccess } from "@/components/contact/contact-success"

export function ContactFunnel() {
  const [submitted, setSubmitted] = useState(false)
  const successRef = useRef<HTMLDivElement | null>(null)

  // Smooth scroll the success block into view once it mounts
  useEffect(() => {
    if (submitted && successRef.current) {
      successRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    }
  }, [submitted])

  return (
    <section className="bg-lma-black px-6 md:px-12 lg:px-20 pb-20 md:pb-28">
      <div className="mx-auto w-full max-w-[720px]">
        {/* STATE 1 — Form */}
        <div
          aria-hidden={submitted}
          className={`transition-opacity duration-500 ease-out ${
            submitted
              ? "pointer-events-none absolute -z-10 opacity-0"
              : "relative opacity-100"
          }`}
        >
          <Suspense
            fallback={
              <div className="font-sans text-sm text-lma-cream/40">
                Loading form…
              </div>
            }
          >
            <ContactForm onSubmitted={() => setSubmitted(true)} />
          </Suspense>
        </div>

        {/* STATE 2 — Success + booking embed */}
        {submitted && (
          <div
            ref={successRef}
            className="animate-in fade-in duration-700 ease-out"
          >
            <ContactSuccess />
          </div>
        )}
      </div>
    </section>
  )
}
