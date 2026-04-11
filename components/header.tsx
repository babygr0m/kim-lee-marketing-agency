"use client"

import { useState, useEffect } from "react"
import { ArrowRight, Menu, X } from "lucide-react"

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Case Studies", href: "#case-studies" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
]

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isCtaHovered, setIsCtaHovered] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100)
    }

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
          {/* Left - Wordmark */}
          <a href="/" className="flex items-center gap-4 group">
            {/* Stylized LMA — tight condensed wordmark with notched L */}
            <svg
              viewBox="0 0 58 24"
              className="h-6 fill-lma-cream"
              aria-label="LMA"
            >
              {/* L with diagonal notch cut from top-right */}
              <polygon points="0,0 5,0 5,5 10,0 10,24 0,24" />
              {/* M - tight against L */}
              <polygon points="12,0 17,0 20,8 23,0 28,0 28,24 23,24 23,10 20,17 17,10 17,24 12,24" />
              {/* A - tight against M */}
              <path d="M31,24 L38,0 L42,0 L49,24 L44,24 L42.5,18 L37.5,18 L36,24 Z M38.5,14 L41.5,14 L40,7 Z" fillRule="evenodd" />
            </svg>
            {/* Tagline */}
            <span className="hidden sm:block font-sans text-[10px] uppercase tracking-[0.2em] text-lma-cream/50 leading-none">
              Lee Marketing Agency
            </span>
          </a>

          {/* Right - Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            <nav className="flex items-center gap-6">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="font-sans text-xs uppercase tracking-[0.15em] text-lma-cream/80 transition-colors duration-200 hover:text-lma-gold"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Divider */}
            <div className="h-4 w-px bg-lma-cream/20" />

            {/* CTA Button */}
            <a
              href="#contact"
              onMouseEnter={() => setIsCtaHovered(true)}
              onMouseLeave={() => setIsCtaHovered(false)}
              className="group flex items-center gap-2 border border-lma-cream/60 px-5 py-2.5 font-sans text-xs uppercase tracking-[0.15em] text-lma-cream transition-colors duration-200 hover:border-lma-gold hover:text-lma-gold"
            >
              Book a call
              <ArrowRight
                className={`h-3.5 w-3.5 transition-transform duration-300 ${
                  isCtaHovered ? "translate-x-1" : "translate-x-0"
                }`}
              />
            </a>
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
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="font-[family-name:var(--font-anton)] text-lma-cream text-3xl uppercase tracking-tight transition-colors duration-200 hover:text-lma-gold"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <a
            href="#contact"
            onClick={() => setIsMobileMenuOpen(false)}
            className="mt-12 flex items-center gap-3 border border-lma-cream/60 px-8 py-4 font-sans text-sm uppercase tracking-[0.15em] text-lma-cream transition-colors duration-200 hover:border-lma-gold hover:text-lma-gold"
          >
            Book a call
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      )}
    </>
  )
}
