"use client"

import { useEffect, useState, type FormEvent } from "react"
import { useSearchParams } from "next/navigation"
import { ArrowRight, Plus, X } from "lucide-react"

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

export function ContactForm({ onSubmitted }: { onSubmitted: () => void }) {
  const searchParams = useSearchParams()
  const [serviceValue, setServiceValue] = useState<string>("not-sure")
  const [socials, setSocials] = useState<
    { id: number; platform: (typeof SOCIAL_PLATFORMS)[number]["value"]; handle: string }[]
  >([{ id: 0, platform: "instagram", handle: "" }])

  const addSocial = () => {
    // Suggest the next un-used platform if available, otherwise default to "other"
    const used = new Set(socials.map((s) => s.platform))
    const next =
      SOCIAL_PLATFORMS.find((p) => !used.has(p.value))?.value ?? "other"
    setSocials((prev) => [
      ...prev,
      { id: Date.now() + Math.random(), platform: next, handle: "" },
    ])
  }

  const removeSocial = (id: number) => {
    setSocials((prev) => (prev.length === 1 ? prev : prev.filter((s) => s.id !== id)))
  }

  const updateSocial = (
    id: number,
    field: "platform" | "handle",
    value: string,
  ) => {
    setSocials((prev) =>
      prev.map((s) =>
        s.id === id
          ? {
              ...s,
              [field]:
                field === "platform"
                  ? (value as (typeof SOCIAL_PLATFORMS)[number]["value"])
                  : value,
            }
          : s,
      ),
    )
  }

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
    onSubmitted()
  }

  return (
    <>
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

        {/* Social channels — dynamic list */}
        <div>
          <label className={labelClass}>Social channels</label>

          <div className="flex flex-col gap-3">
            {socials.map((row, index) => {
              const platform = SOCIAL_PLATFORMS.find((p) => p.value === row.platform)
              const canRemove = socials.length > 1
              return (
                <div
                  key={row.id}
                  className="flex flex-col sm:flex-row gap-3 items-stretch"
                >
                  {/* Platform select */}
                  <div className="sm:w-[42%] relative">
                    <select
                      name={`socialPlatform-${index}`}
                      value={row.platform}
                      onChange={(e) =>
                        updateSocial(row.id, "platform", e.target.value)
                      }
                      className={`${fieldClass} appearance-none cursor-pointer pr-10`}
                      aria-label={`Social platform ${index + 1}`}
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
                      <path
                        d="M1 1l5 5 5-5"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        fill="none"
                        strokeLinecap="square"
                      />
                    </svg>
                  </div>

                  {/* Handle input + optional remove */}
                  <div className="sm:flex-1 flex gap-3">
                    <div className="flex-1 flex items-stretch border border-lma-cream/15 focus-within:border-lma-gold transition-colors">
                      {platform?.prefix && (
                        <span className="flex items-center px-4 font-mono text-sm text-lma-gold border-r border-lma-cream/15 select-none">
                          {platform.prefix}
                        </span>
                      )}
                      <input
                        name={`socialHandle-${index}`}
                        type="text"
                        value={row.handle}
                        onChange={(e) =>
                          updateSocial(row.id, "handle", e.target.value)
                        }
                        placeholder={
                          platform?.prefix
                            ? "yourbrand"
                            : "Profile URL or handle"
                        }
                        aria-label={`${platform?.label ?? "Social"} handle`}
                        className="flex-1 bg-transparent text-lma-cream placeholder:text-lma-cream/30 px-4 py-3.5 font-sans text-sm md:text-base focus:outline-none"
                      />
                    </div>

                    {canRemove && (
                      <button
                        type="button"
                        onClick={() => removeSocial(row.id)}
                        aria-label={`Remove ${platform?.label ?? "social"} channel`}
                        className="shrink-0 flex items-center justify-center w-12 border border-lma-cream/15 text-lma-cream/60 hover:text-lma-gold hover:border-lma-gold transition-colors"
                      >
                        <X className="w-4 h-4" strokeWidth={1.5} />
                      </button>
                    )}
                  </div>
                </div>
              )
            })}

            {/* Add another channel */}
            <button
              type="button"
              onClick={addSocial}
              className="group mt-1 inline-flex items-center gap-2 self-start font-mono text-[11px] uppercase tracking-[0.15em] text-lma-cream/70 hover:text-lma-gold transition-colors"
            >
              <span className="flex items-center justify-center w-6 h-6 border border-lma-cream/40 group-hover:border-lma-gold transition-colors">
                <Plus className="w-3 h-3" strokeWidth={2} />
              </span>
              Add another channel
            </button>
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

        {/* Next — advances to the booking step */}
        <button
          type="submit"
          className="group flex w-full items-center justify-center gap-3 border border-lma-cream bg-transparent text-lma-cream font-mono text-xs uppercase tracking-[0.2em] py-[18px] hover:bg-lma-cream hover:text-lma-black transition-colors"
        >
          Next: Book your call
          <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
        </button>

        <p className="text-center font-sans text-xs md:text-sm text-lma-cream/60 leading-relaxed">
          Step 1 of 2. After this we&apos;ll lock in 30 minutes with Kim on the calendar.
        </p>
      </form>
    </>
  )
}
