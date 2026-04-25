"use client"

import { useEffect, useState, type FormEvent } from "react"
import { useSearchParams } from "next/navigation"
import { ArrowRight, Check } from "lucide-react"

const SERVICE_OPTIONS = [
  { value: "not-sure", label: "Not sure yet — let's discuss" },
  { value: "tiktok-shop", label: "TikTok Shop Management" },
  { value: "affiliate-marketing", label: "Meta & TikTok Shop Affiliate Marketing" },
  { value: "influencer", label: "Influencer Marketing" },
  { value: "paid-media", label: "Paid Media" },
  { value: "creative", label: "Creative & Campaign Production" },
  { value: "social-media", label: "Content Creation & Social Media Management" },
  { value: "podcast", label: "Podcast Production & Management" },
  { value: "full-service", label: "Full-service partnership" },
] as const

const BUDGET_OPTIONS = [
  "$2K – $5K / month",
  "$5K – $10K / month",
  "$10K – $25K / month",
  "$25K+ / month",
  "Let's discuss",
]

const TIMELINE_OPTIONS = [
  "Ready to start ASAP",
  "1–3 months out",
  "3–6 months out",
  "Just exploring",
]

const SOCIAL_PLATFORMS = [
  { value: "instagram", label: "Instagram", prefix: "@" },
  { value: "tiktok", label: "TikTok", prefix: "@" },
  { value: "youtube", label: "YouTube", prefix: "@" },
  { value: "x", label: "X / Twitter", prefix: "@" },
  { value: "facebook", label: "Facebook", prefix: "/" },
  { value: "linkedin", label: "LinkedIn", prefix: "/" },
  { value: "other", label: "Other", prefix: "" },
] as const

const labelClass =
  "block font-mono text-[11px] uppercase tracking-[0.1em] text-lma-gold mb-2"
const fieldClass =
  "w-full bg-transparent border border-lma-cream/15 text-lma-cream placeholder:text-lma-cream/30 px-4 py-3.5 font-sans text-sm md:text-base focus:border-lma-gold focus:outline-none transition-colors"

const Required = () => <span className="text-lma-gold">*</span>

export function ContactForm() {
  const searchParams = useSearchParams()
  const [serviceValue, setServiceValue] = useState<string>("not-sure")
  const [socialPlatform, setSocialPlatform] =
    useState<(typeof SOCIAL_PLATFORMS)[number]["value"]>("instagram")
  const [submitted, setSubmitted] = useState(false)

  const activePlatform = SOCIAL_PLATFORMS.find((p) => p.value === socialPlatform)

  // Pre-fill from ?service= query param
  useEffect(() => {
    const param = searchParams.get("service")
    if (!param) return
    const match = SERVICE_OPTIONS.find((opt) => opt.value === param)
    if (match) {
      setServiceValue(match.value)
    }
  }, [searchParams])

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // UI behavior only — API wiring lands in a follow-up
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="border border-lma-cream/15 px-8 py-16 md:py-20 text-center">
        <div className="inline-flex items-center justify-center w-16 h-16 border border-lma-gold mb-8">
          <Check className="w-7 h-7 text-lma-gold" strokeWidth={2} />
        </div>
        <h3 className="font-[family-name:var(--font-anton)] text-lma-cream uppercase tracking-tight leading-[0.95] text-3xl md:text-5xl mb-4">
          Message received.
        </h3>
        <p className="font-[family-name:var(--font-instrument-serif)] italic text-lma-gold text-lg md:text-2xl mb-6">
          We&apos;ll be in touch within 48 hours.
        </p>
        <p className="mx-auto max-w-[480px] font-sans text-sm md:text-base text-lma-cream/70 leading-relaxed">
          In the meantime, you can also book a strategy call directly using the
          calendar.
        </p>
      </div>
    )
  }

  return (
    <>
      <p className="mb-8 md:mb-10 font-sans text-[10px] md:text-xs uppercase tracking-[0.25em] text-lma-gold font-semibold">
        Send us a message
      </p>

      <form onSubmit={handleSubmit} className="flex flex-col gap-7 md:gap-8">
        {/* Name */}
        <div>
          <label htmlFor="name" className={labelClass}>
            Name <Required />
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            placeholder="Your full name"
            className={fieldClass}
          />
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className={labelClass}>
            Email <Required />
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            placeholder="you@brand.com"
            className={fieldClass}
          />
        </div>

        {/* Company */}
        <div>
          <label htmlFor="company" className={labelClass}>
            Company <Required />
          </label>
          <input
            id="company"
            name="company"
            type="text"
            required
            placeholder="Brand name"
            className={fieldClass}
          />
        </div>

        {/* Website */}
        <div>
          <label htmlFor="website" className={labelClass}>
            Website
          </label>
          <input
            id="website"
            name="website"
            type="url"
            placeholder="https://yourbrand.com"
            className={fieldClass}
          />
        </div>

        {/* Primary social channel */}
        <div>
          <label htmlFor="social-handle" className={labelClass}>
            Primary social channel
          </label>
          <div className="flex flex-col sm:flex-row gap-3">
            <div className="sm:w-[42%] relative">
              <select
                id="social-platform"
                name="socialPlatform"
                value={socialPlatform}
                onChange={(e) =>
                  setSocialPlatform(
                    e.target.value as (typeof SOCIAL_PLATFORMS)[number]["value"],
                  )
                }
                className={`${fieldClass} appearance-none cursor-pointer pr-10`}
                aria-label="Social platform"
              >
                {SOCIAL_PLATFORMS.map((opt) => (
                  <option
                    key={opt.value}
                    value={opt.value}
                    className="bg-lma-black text-lma-cream"
                  >
                    {opt.label}
                  </option>
                ))}
              </select>
              <svg
                aria-hidden="true"
                viewBox="0 0 12 8"
                className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 w-3 h-2 text-lma-gold"
              >
                <path d="M1 1l5 5 5-5" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="square" />
              </svg>
            </div>
            <div className="sm:flex-1 flex items-stretch border border-lma-cream/15 focus-within:border-lma-gold transition-colors">
              {activePlatform?.prefix && (
                <span className="flex items-center px-4 font-mono text-sm text-lma-gold border-r border-lma-cream/15 select-none">
                  {activePlatform.prefix}
                </span>
              )}
              <input
                id="social-handle"
                name="socialHandle"
                type="text"
                placeholder={
                  activePlatform?.prefix
                    ? "yourbrand"
                    : "Profile URL or handle"
                }
                className="flex-1 bg-transparent text-lma-cream placeholder:text-lma-cream/30 px-4 py-3.5 font-sans text-sm md:text-base focus:outline-none"
              />
            </div>
          </div>
        </div>

        {/* Service */}
        <div>
          <label htmlFor="service" className={labelClass}>
            What are you interested in? <Required />
          </label>
          <select
            id="service"
            name="service"
            required
            value={serviceValue}
            onChange={(e) => setServiceValue(e.target.value)}
            className={`${fieldClass} appearance-none cursor-pointer`}
          >
            {SERVICE_OPTIONS.map((opt) => (
              <option
                key={opt.value}
                value={opt.value}
                className="bg-lma-black text-lma-cream"
              >
                {opt.label}
              </option>
            ))}
          </select>
        </div>

        {/* Budget */}
        <div>
          <label htmlFor="budget" className={labelClass}>
            Budget <Required />
          </label>
          <select
            id="budget"
            name="budget"
            required
            defaultValue=""
            className={`${fieldClass} appearance-none cursor-pointer`}
          >
            <option value="" disabled className="bg-lma-black text-lma-cream/50">
              Select a range
            </option>
            {BUDGET_OPTIONS.map((opt) => (
              <option key={opt} value={opt} className="bg-lma-black text-lma-cream">
                {opt}
              </option>
            ))}
          </select>
        </div>

        {/* Timeline */}
        <div>
          <label htmlFor="timeline" className={labelClass}>
            Timeline <Required />
          </label>
          <select
            id="timeline"
            name="timeline"
            required
            defaultValue=""
            className={`${fieldClass} appearance-none cursor-pointer`}
          >
            <option value="" disabled className="bg-lma-black text-lma-cream/50">
              Select a timeline
            </option>
            {TIMELINE_OPTIONS.map((opt) => (
              <option key={opt} value={opt} className="bg-lma-black text-lma-cream">
                {opt}
              </option>
            ))}
          </select>
        </div>

        {/* Brand details textarea */}
        <div>
          <label htmlFor="message" className={labelClass}>
            Tell us about your brand <Required />
          </label>
          <textarea
            id="message"
            name="message"
            required
            placeholder="Where you are, what you've tried, what you're trying to unlock"
            className={`${fieldClass} min-h-[140px] resize-y`}
          />
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="group flex w-full items-center justify-center gap-3 border border-lma-cream bg-transparent text-lma-cream font-mono text-xs uppercase tracking-[0.2em] py-[18px] hover:bg-lma-cream hover:text-lma-black transition-colors"
        >
          Send message
          <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
        </button>

        <p className="text-center font-sans text-xs md:text-sm text-lma-cream/60 leading-relaxed">
          We respond to every inquiry within 48 hours. All information stays
          confidential.
        </p>
      </form>
    </>
  )
}
