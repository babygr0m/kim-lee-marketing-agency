"use client"

const services = [
  {
    number: "01",
    name: "TikTok Shop Management",
    description: "As a verified TikTok Shop Affiliate Partner, LMA builds and manages full creator commerce programs from shop setup and affiliate recruitment to GMV Max campaigns, Spark Code activations, and performance tracking."
  },
  {
    number: "02",
    name: "Affiliate Marketing",
    description: "Performance-driven affiliate programs that scale. We recruit brand-aligned ambassadors, structure tiered commission systems, and manage the full affiliate lifecycle from onboarding to reporting."
  },
  {
    number: "03",
    name: "Influencer Marketing",
    description: "From micro-creators to A-list celebrities, we source, negotiate, contract, and manage influencer partnerships from start to finish. Our network spans every major platform."
  },
  {
    number: "04",
    name: "Paid Media",
    description: "Paid strategy works directly alongside your influencer and affiliate campaigns, identifying top-performing content and boosting it across TikTok, Meta, and YouTube with a performance-first mindset."
  },
  {
    number: "05",
    name: "Creative & Campaign Production",
    description: "Our in-house creative team produces high-quality, culturally-driven campaign videos built to stop the scroll and convert."
  },
  {
    number: "06",
    name: "Content Creation & Social Media Management",
    description: "We manage your brand's social presence end-to-end from content strategy and creation to posting, community management, and performance reporting."
  },
  {
    number: "07",
    name: "Podcast Production & Management",
    description: "We produce Me and Who Els from the ground up and bring that same capability to brand partners, treating podcasts as a full brand channel."
  }
]

export function Services() {
  return (
    <section className="bg-lma-black py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        {/* Eyebrow */}
        <p className="text-center font-sans text-xs tracking-[0.25em] text-lma-cream/60 uppercase mb-8">
          What We Do
        </p>
        
        {/* Headline */}
        <div className="mb-16 md:mb-24">
          <h2 className="font-[family-name:var(--font-anton)] text-5xl md:text-7xl text-lma-cream uppercase tracking-tight">
            The full playbook.
          </h2>
          <p className="font-serif italic text-xl md:text-2xl text-lma-gold/80 mt-2">
            Under one roof.
          </p>
        </div>
        
        {/* Services List */}
        <div className="flex flex-col">
          {services.map((service, index) => (
            <div
              key={service.number}
              className="group flex flex-col md:flex-row md:items-start py-12 md:py-14 border-t border-lma-cream/15 last:border-b transition-colors duration-300 hover:bg-lma-cream/[0.03]"
            >
              {/* Number */}
              <div className="md:w-[15%] mb-4 md:mb-0">
                <span className="font-[family-name:var(--font-anton)] text-3xl md:text-4xl text-lma-gold">
                  {service.number}
                </span>
              </div>
              
              {/* Service Name */}
              <div className="md:w-[35%] mb-4 md:mb-0 md:pr-8">
                <h3 className="font-[family-name:var(--font-anton)] text-2xl md:text-[2.5rem] md:leading-tight text-lma-cream uppercase tracking-tight transition-colors duration-300 group-hover:text-lma-gold">
                  {service.name}
                </h3>
              </div>
              
              {/* Description */}
              <div className="md:w-[50%]">
                <p className="font-sans text-base text-lma-cream/80 leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
