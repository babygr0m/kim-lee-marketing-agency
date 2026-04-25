const steps = [
  {
    number: "01",
    name: "Discovery & Strategy",
    body: "Every engagement begins with deep brand immersion: understanding the audience, the category, the competitive set, and the cultural moment we're entering. The output is a strategic blueprint that maps every campaign and creator activation to a measurable business goal.",
  },
  {
    number: "02",
    name: "Creator Sourcing & Vetting",
    body: "We tap our network of 10,000+ active creators, from emerging micro-influencers to A-list talent, to build the right roster for the brand. Every creator is vetted for audience authenticity, brand alignment, and historical performance before they ever touch a contract.",
  },
  {
    number: "03",
    name: "Campaign Execution",
    body: "Negotiation, contracting, creative direction, content review, posting cadence, compliance: we run every layer of campaign execution end-to-end. Brands stay focused on product. We move at the speed of culture.",
  },
  {
    number: "04",
    name: "Paid Amplification",
    body: "When organic content hits, we boost it. Top-performing creator content is amplified across TikTok, Meta, and YouTube with a performance-first lens, optimizing toward ROAS targets from the moment a campaign goes live.",
  },
  {
    number: "05",
    name: "Measurement & Reporting",
    body: "Every campaign is tracked against the goals set in Step 01. We deliver transparent, data-rich reporting on reach, engagement, attribution, and revenue, and use the insights to sharpen the playbook for the next cycle.",
  },
]

export function AboutApproach() {
  return (
    <section className="px-6 py-24 md:px-12 md:py-32 lg:px-20 lg:py-40">
      <div className="mx-auto max-w-6xl">
        {/* Intro */}
        <div className="mb-16 text-center md:mb-20">
          <p className="mb-4 font-sans text-xs font-semibold uppercase tracking-[0.2em] text-lma-gold md:text-sm">
            Our Approach
          </p>
          <h2 className="font-[family-name:var(--font-anton)] text-4xl uppercase leading-[0.95] tracking-tight text-lma-cream md:text-6xl lg:text-7xl text-balance">
            Five steps. One playbook.
          </h2>
          <p className="mt-3 font-[family-name:var(--font-instrument-serif)] text-xl italic text-lma-gold/80 md:mt-4 md:text-2xl">
            The system behind every campaign we run.
          </p>
          <p className="mx-auto mt-6 max-w-xl font-sans text-base leading-relaxed text-lma-cream/75 md:mt-8 md:text-lg text-pretty">
            Every brand we work with moves through the same five-stage playbook, refined over a
            decade of building creator commerce engines for the biggest brands in culture.
          </p>
        </div>

        {/* Steps */}
        <div className="mx-auto max-w-5xl">
          {steps.map((step, index) => (
            <div
              key={step.number}
              className={`grid grid-cols-1 gap-6 py-12 md:grid-cols-12 md:gap-8 md:py-16 ${
                index !== 0 ? "border-t border-lma-cream/[0.08]" : ""
              }`}
            >
              {/* Number */}
              <div className="md:col-span-2">
                <span className="font-[family-name:var(--font-anton)] text-5xl text-lma-gold md:text-6xl lg:text-[88px] lg:leading-none">
                  {step.number}
                </span>
              </div>

              {/* Name */}
              <div className="md:col-span-5">
                <h3 className="font-[family-name:var(--font-anton)] text-3xl uppercase leading-tight tracking-tight text-lma-cream md:text-4xl lg:text-5xl">
                  {step.name}
                </h3>
              </div>

              {/* Body */}
              <div className="md:col-span-5">
                <p className="max-w-md font-sans text-base leading-relaxed text-lma-cream/75 md:text-[17px] text-pretty">
                  {step.body}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
