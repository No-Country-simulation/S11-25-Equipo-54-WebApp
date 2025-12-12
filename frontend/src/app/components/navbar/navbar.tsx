"use client"

import Link from "next/link"
import { useAuth } from "@/lib/auth-context"
import { useRouter } from "next/navigation"
import { useState } from "react"
import LoginModal from "../auth/login-modal"
import RegisterModal from "../auth/register-modal"

export default function NavBar() {
  const { user, logout } = useAuth()
  const router = useRouter()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [showLoginModal, setShowLoginModal] = useState(false)
  const [showRegisterModal, setShowRegisterModal] = useState(false)

  const handleLogout = () => {
    logout()
    router.push("/")
  }

  const handleSmoothScroll = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsMenuOpen(false)
  }

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
    setIsMenuOpen(false)
  }

  return (
    <>
      <nav className="sticky top-0 z-40 border-b border-border bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link href="/" className="font-bold text-xl text-primary">
              Eco-Tech
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-8">
              <button onClick={handleScrollToTop} className="text-foreground hover:text-primary cursor-pointer">
                Inicio
              </button>
              <button
                onClick={() => handleSmoothScroll("ofertas")}
                className="text-foreground hover:text-primary cursor-pointer"
              >
                Ofertas
              </button>
              <button
                onClick={() => handleSmoothScroll("populares")}
                className="text-foreground hover:text-primary cursor-pointer"
              >
                Populares
              </button>
              <button
                onClick={() => handleSmoothScroll("products")}
                className="text-foreground hover:text-primary cursor-pointer"
              >
                Productos
              </button>
              <button
                onClick={() => handleSmoothScroll("circularidad")}
                className="text-foreground hover:text-primary cursor-pointer"
              >
                Circularidad
              </button>
              <button
                onClick={() => handleSmoothScroll("eco-news")}
                className="text-foreground hover:text-primary cursor-pointer"
              >
                Eco-News
              </button>
              {user?.isAdmin && (
                <Link href="/admin" className="text-foreground hover:text-primary">
                  Admin
                </Link>
              )}
            </div>

            {/* Auth Section */}
            <div className="flex items-center gap-4">
              {!user ? (
                <>
                  <button
                    onClick={() => setShowLoginModal(true)}
                    className="hidden md:inline text-foreground hover:text-primary"
                  >
                    Iniciar sesión
                  </button>
                  <button
                    onClick={() => setShowRegisterModal(true)}
                    className="bg-primary text-white px-4 py-2 rounded hover:opacity-90"
                  >
                    Registrarse
                  </button>
                </>
              ) : (
                <>
                  <div className="hidden md:flex items-center gap-4">
                    <Link href="/profile" className="text-foreground hover:text-primary">
                      {user.name}
                    </Link>
                    <button onClick={handleLogout} className="bg-primary text-white px-4 py-2 rounded hover:opacity-90">
                      Cerrar sesión
                    </button>
                  </div>
                </>
              )}

              {/* Mobile menu toggle */}
              <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                ☰
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden pb-4 border-t border-border">
              <button
                onClick={handleScrollToTop}
                className="block w-full text-left py-2 text-foreground hover:text-primary cursor-pointer"
              >
                Inicio
              </button>
              <button
                onClick={() => handleSmoothScroll("ofertas")}
                className="block w-full text-left py-2 text-foreground hover:text-primary cursor-pointer"
              >
                Ofertas
              </button>
              <button
                onClick={() => handleSmoothScroll("populares")}
                className="block w-full text-left py-2 text-foreground hover:text-primary cursor-pointer"
              >
                Populares
              </button>
              <button
                onClick={() => handleSmoothScroll("products")}
                className="block w-full text-left py-2 text-foreground hover:text-primary cursor-pointer"
              >
                Productos
              </button>
              <button
                onClick={() => handleSmoothScroll("circularidad")}
                className="block w-full text-left py-2 text-foreground hover:text-primary cursor-pointer"
              >
                Circularidad
              </button>
              <button
                onClick={() => handleSmoothScroll("eco-news")}
                className="block w-full text-left py-2 text-foreground hover:text-primary cursor-pointer"
              >
                Eco-News
              </button>
              {user?.isAdmin && (
                <Link href="/admin" className="block py-2 text-foreground hover:text-primary">
                  Admin
                </Link>
              )}
              {!user && (
                <>
                  <button
                    onClick={() => {
                      setShowLoginModal(true)
                      setIsMenuOpen(false)
                    }}
                    className="block w-full text-left py-2 text-foreground hover:text-primary"
                  >
                    Iniciar sesión
                  </button>
                  <button
                    onClick={() => {
                      setShowRegisterModal(true)
                      setIsMenuOpen(false)
                    }}
                    className="block w-full text-left py-2 text-primary font-semibold"
                  >
                    Registrarse
                  </button>
                </>
              )}
              {user && (
                <button onClick={handleLogout} className="w-full text-left py-2 text-foreground hover:text-primary">
                  Cerrar sesión
                </button>
              )}
            </div>
          )}
        </div>
      </nav>

      <LoginModal isOpen={showLoginModal} onClose={() => setShowLoginModal(false)} />
      <RegisterModal isOpen={showRegisterModal} onClose={() => setShowRegisterModal(false)} />
    </>
  )
}
