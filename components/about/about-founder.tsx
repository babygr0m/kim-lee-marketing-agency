import { AnimatedStat } from "@/components/animated-stat"

const founderStats = [
  { value: "$1B+", label: "Revenue built at Fashion Nova" },
  { value: "100M+", label: "Combined reach across clients" },
  { value: "10+ YRS", label: "Pioneering influencer marketing" },
]

export function AboutFounder() {
  return (
    <section className="bg-lma-black px-6 py-24 md:px-12 md:py-32 lg:px-20 lg:py-40">
      <div className="mx-auto max-w-7xl">
        {/* Two-column block */}
        <div className="grid gap-12 md:grid-cols-2 md:gap-16 lg:gap-20 items-center">
          {/* Portrait */}
          <div className="relative aspect-[4/5] overflow-hidden border border-lma-cream/10">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202026-04-17%20at%205.13.47%E2%80%AFPM-FWvU564UFJVC0celrWGwpVHHmmhf3y.png"
              alt="Kim Lee, Founder & CEO of LMA"
              className="absolute inset-0 h-full w-full object-cover object-top"
            />
          </div>

          {/* Content */}
          <div className="flex flex-col justify-center">
            <p className="mb-4 font-mono font-semibold text-xs uppercase tracking-[0.2em] text-lma-gold">
              Founder &amp; CEO
            </p>

            <h2 className="font-[family-name:var(--font-anton)] text-5xl uppercase leading-[0.9] tracking-tight text-lma-cream md:text-6xl lg:text-7xl">
              Kim Lee
            </h2>

            <p className="mt-4 font-[family-name:var(--font-instrument-serif)] text-xl italic text-lma-gold/80 md:text-2xl">
              Eight years at Fashion Nova. A billion-dollar playbook.
            </p>

            <div className="mt-8 space-y-5 font-sans text-base leading-relaxed text-lma-cream/80 md:text-[17px]">
              <p>
                Kim Lee is the founder and CEO of LMA, a full-service digital marketing agency
                specializing in social commerce and affiliate marketing. She is one of the original
                architects of modern influencer marketing, having spent eight years at Fashion Nova
                building the brand&apos;s entire marketing operation from the ground up.
              </p>
              <p>
                What started as a local boutique became one of the fastest-growing fashion brands
                in the world, generating over $1 billion in annual revenue. The viral strategy that
                made it happen, the celebrity partnerships, the influencer infrastructure, the
                social-first content engine, was the strategy Kim built and ran.
              </p>
              <p>
                Today, from culturally-driven influencer campaigns and high-performing TikTok Shop
                affiliate programs to paid media and viral campaign creatives, Kim builds the
                digital marketing engine behind some of the most-watched brands in culture. Past
                and present clients include Forever 21, Netflix, Mattel, Sanrio, Sol de Janeiro,
                Rolling Loud, Reebok, and more.
              </p>
            </div>
          </div>
        </div>

        {/* Stats row */}
        <div className="mt-16 flex flex-col md:mt-20 md:flex-row md:items-stretch">
          {founderStats.map((stat, index) => (
            <div
              key={stat.value}
              className={`flex flex-1 flex-col gap-2 py-6 md:py-4 ${
                index !== 0
                  ? "border-t border-lma-cream/15 md:border-l md:border-t-0 md:pl-8 lg:pl-12"
                  : "md:pr-8 lg:pr-12"
              } ${
                index !== founderStats.length - 1 ? "md:pr-8 lg:pr-12" : ""
              }`}
            >
              <AnimatedStat
                value={stat.value}
                className="font-[family-name:var(--font-anton)] text-3xl uppercase tracking-tight text-lma-cream md:text-4xl lg:text-5xl"
              />
              <span className="font-sans text-[10px] uppercase tracking-[0.2em] text-lma-cream/60 md:text-xs">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
