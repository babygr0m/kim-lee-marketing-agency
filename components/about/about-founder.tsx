import { AnimatedStat } from "@/components/animated-stat"

const founderStats = [
  { value: "$1B+", label: "Revenue built at Fashion Nova" },
  { value: "100M+", label: "Combined reach across clients" },
  { value: "10+ YRS", label: "Pioneering influencer marketing" },
]

const team = [
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202026-04-17%20at%205.13.47%E2%80%AFPM-FWvU564UFJVC0celrWGwpVHHmmhf3y.png",
    name: "Kim Lee",
    role: "Founder & CEO",
  },
  { src: "/placeholder-user.jpg", name: "Coming Soon", role: "Team" },
  { src: "/placeholder-user.jpg", name: "Coming Soon", role: "Team" },
  { src: "/placeholder-user.jpg", name: "Coming Soon", role: "Team" },
]

export function AboutFounder() {
  return (
    <section className="px-6 py-24 md:px-12 md:py-32 lg:px-20 lg:py-40">
      <div className="mx-auto max-w-7xl">
        {/* Centered intro: eyebrow + name + kicker + tightened bio */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-4 font-mono font-semibold text-xs uppercase tracking-[0.2em] text-lma-gold">
            Founder &amp; CEO
          </p>

          <h2 className="font-[family-name:var(--font-anton)] text-5xl uppercase leading-[0.9] tracking-tight text-lma-cream md:text-6xl lg:text-7xl">
            Kim Lee
          </h2>

          <p className="mt-4 font-[family-name:var(--font-instrument-serif)] text-xl italic text-lma-gold/80 md:text-2xl">
            Eight years at Fashion Nova. A billion-dollar playbook.
          </p>

          <div className="mx-auto mt-8 max-w-2xl space-y-5 font-sans text-base leading-relaxed text-lma-cream/80 md:text-[17px] text-pretty">
            <p>
              Kim spent eight years at Fashion Nova building the brand&apos;s entire marketing
              operation from the ground up &mdash; the viral strategy, celebrity campaign engine, and
              influencer infrastructure that scaled the company from local boutique to over $1B in
              annual revenue.
            </p>
            <p>
              Today, she builds the digital marketing engine behind some of the most-watched brands
              in culture. Past and present clients include Forever 21, Netflix, Mattel, Sanrio, Sol
              de Janeiro, Rolling Loud, Reebok, and more.
            </p>
          </div>
        </div>

        {/* Team grid — Kim + 3 teammates */}
        <div className="mt-16 md:mt-20">
          <p className="mb-8 text-center font-mono font-semibold text-xs uppercase tracking-[0.2em] text-lma-gold/80">
            The Team
          </p>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-5">
            {team.map((member, i) => (
              <div key={i} className="group flex flex-col">
                <div className="relative aspect-[4/5] overflow-hidden border border-lma-cream/10 bg-lma-cream/[0.02]">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={member.src}
                    alt={`${member.name}, ${member.role}`}
                    loading="lazy"
                    className="absolute inset-0 h-full w-full object-cover object-top"
                  />
                </div>
                <p className="mt-3 font-mono text-[10px] uppercase tracking-[0.2em]">
                  <span className="text-lma-cream">{member.name}</span>
                  <span className="text-lma-cream/60"> &middot; {member.role}</span>
                </p>
              </div>
            ))}
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
