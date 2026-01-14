import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
// import { Analytics } from "@vercel/analytics/next"
import "../styles/globals.css"
import { AuthProvider } from "@/lib/auth-context"
import NavBar from "@/app/components/navbar/navbar"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Eco-Tech - Productos Electrónicos Sostenibles",
  description:
    "Compra dispositivos electrónicos refurbished con certificación de huella de carbono. Pequeñas acciones hacen un gran cambio.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <body className={`font-sans antialiased`}>
        <AuthProvider>
          <NavBar />
          {children}
        </AuthProvider>
        {/* <Analytics /> */}
      </body>
    </html>
  )
}
