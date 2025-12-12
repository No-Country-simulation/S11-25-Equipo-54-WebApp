"use client"

import { useState } from "react"
import { Heart, ShoppingCart, ChevronLeft, ChevronRight } from "lucide-react"
import { featuredProducts } from "@/lib/products"

export default function PopularProducts() {
  const [scrollPosition, setScrollPosition] = useState(0)

  const scroll = (direction: "left" | "right") => {
    const container = document.getElementById("products-carousel")
    if (container) {
      const scrollAmount = 320
      const newPosition =
        direction === "left" ? Math.max(0, scrollPosition - scrollAmount) : scrollPosition + scrollAmount
      container.scrollLeft = newPosition
      setScrollPosition(newPosition)
    }
  }

  return (
    <section className="py-12 px-4 bg-background">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl font-bold text-foreground mb-8">Productos Populares</h2>

        <div className="relative">
          <div
            id="products-carousel"
            className="flex gap-6 overflow-x-auto scroll-smooth pb-4"
            style={{ scrollBehavior: "smooth" }}
          >
            {featuredProducts.map((product) => (
              <div
                key={product.id}
                className="flex-shrink-0 w-80 bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
              >
                {/* Product Image Container */}
                <div className="relative h-48 bg-gray-100 overflow-hidden">
                  <img
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />

                  {/* Discount Badge */}
                  {product.discount && (
                    <div className="absolute top-3 left-3 bg-green-600 text-white text-xs font-bold px-2 py-1 rounded">
                      -{product.discount}%
                    </div>
                  )}

                  {/* New Badge */}
                  {product.isNew && (
                    <div className="absolute top-3 left-3 bg-green-600 text-white text-xs font-bold px-2 py-1 rounded">
                      Nuevo
                    </div>
                  )}

                  {/* Wishlist Button */}
                  <button className="absolute top-3 right-3 bg-white rounded-full p-2 hover:bg-gray-100 transition-colors">
                    <Heart className="w-5 h-5 text-gray-400" />
                  </button>
                </div>

                {/* Product Info */}
                <div className="p-4">
                  <p className="text-sm text-gray-500 mb-1">{product.category}</p>
                  <h3 className="font-semibold text-foreground mb-3 line-clamp-2">{product.name}</h3>

                  {/* Pricing */}
                  <div className="mb-4">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-lg font-bold text-green-600">${product.price.toFixed(2)}</span>
                      {product.originalPrice && (
                        <span className="text-sm text-gray-400 line-through">${product.originalPrice.toFixed(2)}</span>
                      )}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-2">
                    <button className="flex-1 bg-lime-400 hover:bg-lime-500 text-black font-semibold py-2 px-4 rounded transition-colors text-sm">
                      Ver más
                    </button>
                    <button className="bg-lime-400 hover:bg-lime-500 text-black font-semibold py-2 px-4 rounded transition-colors">
                      <ShoppingCart className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={() => scroll("left")}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white rounded-full p-2 shadow-md hover:bg-gray-50 transition-colors z-10"
            aria-label="Scroll left"
          >
            <ChevronLeft className="w-6 h-6 text-green-600" />
          </button>
          <button
            onClick={() => scroll("right")}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white rounded-full p-2 shadow-md hover:bg-gray-50 transition-colors z-10"
            aria-label="Scroll right"
          >
            <ChevronRight className="w-6 h-6 text-green-600" />
          </button>
        </div>
      </div>
    </section>
  )
}
