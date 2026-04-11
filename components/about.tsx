export function About() {
  const founderStats = [
    { value: "$1B+", label: "REVENUE BRAND BUILT AT FASHION NOVA" },
    { value: "100M+", label: "COMBINED REACH ACROSS CLIENT ROSTER" },
    { value: "10+ YRS", label: "PIONEERING INFLUENCER MARKETING" },
  ]

  const teamMembers = [
    { name: "Team Member Name", role: "ROLE TITLE", label: "TEAM MEMBER 01" },
    { name: "Team Member Name", role: "ROLE TITLE", label: "TEAM MEMBER 02" },
    { name: "Team Member Name", role: "ROLE TITLE", label: "TEAM MEMBER 03" },
  ]

  return (
    <section className="bg-lma-black px-6 py-24 md:px-12 md:py-32 lg:px-20">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <p className="mb-4 font-sans text-xs uppercase tracking-[0.2em] text-lma-cream/60">
          ABOUT
        </p>
        <h2 className="font-[family-name:var(--font-anton)] text-4xl uppercase leading-[0.9] tracking-tight text-lma-cream md:text-6xl lg:text-7xl">
          Built from the inside.
        </h2>
        <p className="mt-2 font-serif text-xl italic text-lma-gold/70 md:text-2xl">
          Proven at scale.
        </p>

        {/* Founder Block */}
        <div className="mt-16 grid gap-10 md:mt-20 md:grid-cols-2 md:gap-16">
          {/* Portrait */}
          <div 
            className="flex aspect-[3/4] items-center justify-center border border-lma-cream/10 bg-lma-cream/5"
          >
            <span className="font-sans text-xs uppercase tracking-[0.2em] text-lma-cream/40">
              KIM LEE PORTRAIT
            </span>
          </div>

          {/* Bio */}
          <div className="flex flex-col justify-center">
            <p className="mb-2 font-sans text-xs uppercase tracking-[0.2em] text-lma-cream/60">
              FOUNDER & CEO
            </p>
            <h3 className="font-[family-name:var(--font-anton)] text-4xl uppercase tracking-tight text-lma-cream md:text-5xl">
              Kim Lee
            </h3>
            
            <p className="mt-6 font-sans text-base leading-relaxed text-lma-cream/80">
              Kim Lee is the founder and CEO of LMA — a full-service digital marketing agency 
              specializing in social commerce and affiliate marketing. She is one of the original 
              architects of modern influencer marketing, having spent eight years at Fashion Nova 
              building the brand&apos;s entire marketing operation from the ground up — the viral strategy 
              that turned a local boutique into one of the fastest-growing fashion brands in the 
              world, generating over $1B+ in annual revenue.
            </p>
            
            <p className="mt-4 font-sans text-base leading-relaxed text-lma-cream/80">
              Today, from culturally-driven influencer campaigns and high-performing TikTok Shop 
              affiliate programs to paid media and viral campaign creatives, she builds the digital 
              marketing engine behind some of the most-watched brands in culture. Current and past 
              clients include Forever 21, Netflix, Mattel, Sanrio, Sol de Janeiro, Rolling Loud, and more.
            </p>

            {/* Founder Stats */}
            <div className="mt-8 flex flex-wrap gap-6 md:gap-8">
              {founderStats.map((stat, index) => (
                <div key={index} className="flex items-baseline gap-6 md:gap-8">
                  <div>
                    <span className="font-[family-name:var(--font-anton)] text-2xl text-lma-cream md:text-3xl">
                      {stat.value}
                    </span>
                    <p className="mt-1 font-sans text-[10px] uppercase tracking-[0.15em] text-lma-cream/50">
                      {stat.label}
                    </p>
                  </div>
                  {index < founderStats.length - 1 && (
                    <div className="hidden h-12 w-px bg-lma-cream/15 md:block" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Team Block */}
        <div className="mt-24 md:mt-32">
          <p className="mb-4 font-sans text-xs uppercase tracking-[0.2em] text-lma-cream/60">
            THE TEAM
          </p>
          <h3 className="font-[family-name:var(--font-anton)] text-3xl uppercase tracking-tight text-lma-cream md:text-4xl">
            The operators behind the work.
          </h3>

          <div className="mt-12 grid gap-10 md:grid-cols-3 md:gap-8">
            {teamMembers.map((member, index) => (
              <div key={index}>
                {/* Team Member Image */}
                <div className="flex aspect-square items-center justify-center bg-lma-cream/5">
                  <span className="font-sans text-xs uppercase tracking-[0.2em] text-lma-cream/40">
                    {member.label}
                  </span>
                </div>
                
                {/* Name & Role */}
                <h4 className="mt-4 font-[family-name:var(--font-anton)] text-xl uppercase tracking-tight text-lma-cream md:text-2xl">
                  {member.name}
                </h4>
                <p className="mt-1 font-sans text-xs uppercase tracking-[0.15em] text-lma-gold/70">
                  {member.role}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
