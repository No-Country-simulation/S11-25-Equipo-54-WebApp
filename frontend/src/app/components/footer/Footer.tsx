"use client"

import { Phone, Mail, Instagram } from "lucide-react"

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const productCategories = [
    { name: "Notebooks", href: "#productos" },
    { name: "Headsets", href: "#productos" },
    { name: "Mices", href: "#productos" },
    { name: "WebCam", href: "#productos" },
    { name: "Keyboard", href: "#productos" },
  ]

  return (
    <footer className="bg-primary text-white py-12 px-6 relative">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Left Section - Branding */}
        <div className="flex flex-col justify-between">
          <h2 className="text-2xl font-bold mb-4">Eco-Tech</h2>
          <p className="text-sm text-white/80 mt-auto">© 2025 All Rights Reserved</p>
        </div>

        {/* Center Section - Product Categories */}
        <div>
          <h3 className="text-lg font-semibold mb-6">Tienda en productos</h3>
          <ul className="space-y-3">
            {productCategories.map((category) => (
              <li key={category.name}>
                <a href={category.href} className="text-white/90 hover:text-accent transition-colors">
                  {category.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Right Section - Contact & Social */}
        <div className="flex flex-col gap-6">
          <div className="flex items-center gap-3">
            <Phone className="w-5 h-5" />
            <span>+00 000 0000000</span>
          </div>
          <div className="flex items-center gap-3">
            <Mail className="w-5 h-5" />
            <span>info@info.com</span>
          </div>

          {/* Social Media Icons */}
          <div className="flex gap-4 mt-2">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="w-6 h-6" />
            </a>
            <a href="#" className="hover:text-accent transition-colors" aria-label="Podcast">
              <svg
                className="w-6 h-6"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="10" />
                <circle cx="12" cy="12" r="3" />
                <path d="M12 2v3" />
                <path d="M12 19v3" />
                <path d="m4.93 4.93 2.12 2.12" />
                <path d="m16.95 16.95 2.12 2.12" />
                <path d="M2 12h3" />
                <path d="M19 12h3" />
                <path d="m4.93 19.07 2.12-2.12" />
                <path d="m16.95 7.05 2.12-2.12" />
              </svg>
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent transition-colors"
              aria-label="X (Twitter)"
            >
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className="absolute bottom-8 right-8 w-12 h-12 rounded-full border-2 border-accent bg-transparent hover:bg-accent/10 transition-colors flex items-center justify-center"
        aria-label="Scroll to top"
      >
        <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
        </svg>
      </button>
    </footer>
  )
}
