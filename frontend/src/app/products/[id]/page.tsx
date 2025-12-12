"use client"

import { products } from "@/lib/products"
import { notFound } from "next/navigation"
import Link from "next/link"

interface PageProps {
  params: Promise<{ id: string }>
}

export default async function ProductDetailPage({ params }: PageProps) {
  const { id } = await params
  const product = products.find((p) => p.id === id)

  if (!product) {
    notFound()
  }

  return (
    <main className="min-h-screen bg-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <Link href="/products" className="text-primary hover:underline mb-8 block">
          ← Volver a productos
        </Link>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Image */}
          <div className="relative h-96 md:h-full bg-white rounded-lg overflow-hidden">
            <img src={product.image || "/placeholder.svg"} alt={product.name} className="w-full h-full object-cover" />
          </div>

          {/* Details */}
          <div className="flex flex-col justify-center">
            <span className="text-sm text-muted mb-2">{product.category}</span>
            <h1 className="text-4xl font-bold mb-4">{product.name}</h1>

            <p className="text-xl text-muted mb-6">{product.description}</p>

            <div className="bg-white rounded-lg p-6 mb-6">
              <div className="mb-4">
                <span className="text-muted text-sm">Precio</span>
                <p className="text-4xl font-bold text-primary">${product.price}</p>
              </div>

              <div className="mb-6">
                <span className="text-muted text-sm">Huella de Carbono</span>
                <p className="text-lg font-semibold">{product.carbonFootprint}</p>
              </div>

              <button className="w-full bg-primary text-white py-3 rounded-lg font-semibold hover:opacity-90 transition">
                Agregar al carrito
              </button>
            </div>

            <div className="bg-primary-light/20 border border-primary-light rounded-lg p-4">
              <p className="text-sm text-foreground">
                Este producto es parte de nuestro compromiso con la sostenibilidad. Cada compra contribuye a reducir el
                impacto ambiental.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
