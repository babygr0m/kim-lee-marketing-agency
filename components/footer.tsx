import Link from "next/link"

const exploreLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
]

const connectLinks = [
  { label: "Instagram", href: "https://instagram.com" },
  { label: "TikTok", href: "https://tiktok.com" },
  { label: "LinkedIn", href: "https://linkedin.com" },
  { label: "hello@leemarketingagency.com", href: "mailto:hello@leemarketingagency.com" },
]

export function Footer() {
  return (
    <footer className="border-t border-lma-cream/10 bg-lma-black px-6 py-16 md:py-20">
      <div className="mx-auto max-w-7xl">
        {/* Main Footer Grid */}
        <div className="grid gap-12 md:grid-cols-10 md:gap-8">
          {/* Column 1 - Brand (40%) */}
          <div className="md:col-span-4">
            <h2 className="font-[family-name:var(--font-anton)] text-4xl uppercase tracking-tight text-lma-cream md:text-5xl">
              LMA
            </h2>
            <p className="mt-2 font-sans text-xs uppercase tracking-[0.15em] text-lma-cream/80">
              Lee Marketing Agency
            </p>
            <p className="mt-4 font-sans text-sm leading-relaxed text-lma-cream/60">
              Full-service digital marketing, built from the inside.
            </p>
          </div>

          {/* Column 2 - Explore (30%) */}
          <div className="md:col-span-3">
            <p className="mb-4 font-sans text-xs uppercase tracking-[0.2em] text-lma-cream/60">
              Explore
            </p>
            <nav className="flex flex-col gap-3">
              {exploreLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="font-sans text-sm text-lma-cream/80 transition-colors duration-300 hover:text-lma-gold"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Column 3 - Connect (30%) */}
          <div className="md:col-span-3">
            <p className="mb-4 font-sans text-xs uppercase tracking-[0.2em] text-lma-cream/60">
              Connect
            </p>
            <nav className="flex flex-col gap-3">
              {connectLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="font-sans text-sm text-lma-cream/80 transition-colors duration-300 hover:text-lma-gold"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 flex flex-col items-start justify-between gap-4 border-t border-lma-cream/10 pt-8 md:flex-row md:items-center">
          <p className="font-sans text-xs text-lma-cream/50">
            © 2026 Lee Marketing Agency. All rights reserved.
          </p>
          <p className="font-sans text-xs text-lma-cream/50">
            Los Angeles
          </p>
        </div>
      </div>
    </footer>
  )
}
