"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { ArrowRight, Menu, X } from "lucide-react"

const navLinks = [
  { label: "Services", href: "/services" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "About", href: "/about" },
]

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isCtaHovered, setIsCtaHovered] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      // Tight threshold so the header solid bg kicks in almost immediately
      // on scroll. With a 100px threshold there was a noticeable window
      // where page content scrolled visibly THROUGH a transparent nav,
      // most apparent on /services where centered abstract-service
      // headlines pass under the nav links.
      setIsScrolled(window.scrollY > 20)
    }

    handleScroll()
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => {
      document.body.style.overflow = ""
    }
  }, [isMobileMenuOpen])

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
          isScrolled
            ? "bg-lma-black border-b border-lma-cream/10"
            : "bg-transparent"
        }`}
      >
        <div className="flex items-center justify-between px-6 py-6 md:px-12">
          {/* Left - Wordmark — Next.js <Link> for client-side routing
              (native <a> would force a full page reload on every nav). */}
          <Link href="/" className="flex items-center gap-4">
            <span className="font-[family-name:var(--font-anton)] text-lma-cream text-2xl tracking-tight">
              LMA
            </span>
            <span className="hidden sm:block font-sans text-[10px] uppercase tracking-[0.2em] text-lma-cream/50 leading-none">
              Lee Marketing Agency
            </span>
          </Link>

          {/* Right - Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            <nav className="flex items-center gap-6">
              {navLinks.map((link) => {
                const isActive = pathname === link.href
                return (
                  <Link
                    key={link.label}
                    href={link.href}
                    className={`font-sans text-xs uppercase tracking-[0.15em] transition-colors duration-200 hover:text-lma-gold ${
                      isActive ? "text-lma-gold" : "text-lma-cream/80"
                    }`}
                  >
                    {link.label}
                  </Link>
                )
              })}
            </nav>

            {/* Divider */}
            <div className="h-4 w-px bg-lma-cream/20" />

            {/* CTA Button — single contact entry point.
                Uses Next.js <Link> so the click triggers proper client-side
                routing instead of a hard page reload (the previous native
                <a> sometimes appeared not to navigate at all). */}
            <Link
              href="/contact"
              onMouseEnter={() => setIsCtaHovered(true)}
              onMouseLeave={() => setIsCtaHovered(false)}
              className={`group flex items-center gap-2 border px-7 py-3 font-mono text-[11px] uppercase tracking-[0.2em] transition-colors duration-200 ${
                pathname === "/contact"
                  ? "border-lma-cream bg-lma-cream text-lma-black"
                  : "border-lma-cream/80 text-lma-cream hover:bg-lma-cream hover:text-lma-black"
              }`}
            >
              Contact
              <ArrowRight
                className={`h-3.5 w-3.5 transition-transform duration-300 ${
                  pathname === "/contact"
                    ? "text-lma-black"
                    : "text-lma-gold group-hover:text-lma-black"
                } ${isCtaHovered ? "translate-x-1" : "translate-x-0"}`}
              />
            </Link>
          </div>

          {/* Right - Mobile Hamburger */}
          <button
            onClick={() => setIsMobileMenuOpen(true)}
            className="md:hidden text-lma-cream"
            aria-label="Open menu"
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-[60] bg-lma-black/[0.98] flex flex-col items-center justify-center">
          {/* Close Button */}
          <button
            onClick={() => setIsMobileMenuOpen(false)}
            className="absolute top-6 right-6 text-lma-cream"
            aria-label="Close menu"
          >
            <X className="h-6 w-6" />
          </button>

          {/* Nav Links */}
          <nav className="flex flex-col items-center gap-8">
            {navLinks.map((link) => {
              const isActive = pathname === link.href
              return (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`font-[family-name:var(--font-anton)] text-3xl uppercase tracking-tight transition-colors duration-200 hover:text-lma-gold ${
                    isActive ? "text-lma-gold" : "text-lma-cream"
                  }`}
                >
                  {link.label}
                </Link>
              )
            })}
          </nav>

          {/* CTA Button — single contact entry point */}
          <Link
            href="/contact"
            onClick={() => setIsMobileMenuOpen(false)}
            className={`mt-12 flex items-center gap-3 border px-8 py-4 font-mono text-xs uppercase tracking-[0.2em] transition-colors duration-200 ${
              pathname === "/contact"
                ? "border-lma-cream bg-lma-cream text-lma-black"
                : "border-lma-cream/80 text-lma-cream hover:bg-lma-cream hover:text-lma-black"
            }`}
          >
            Contact
            <ArrowRight
              className={`h-4 w-4 ${
                pathname === "/contact" ? "text-lma-black" : "text-lma-gold"
              }`}
            />
          </Link>
        </div>
      )}
    </>
  )
}
