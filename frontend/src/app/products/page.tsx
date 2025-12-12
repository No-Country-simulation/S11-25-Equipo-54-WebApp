import { products } from "@/lib/products"
import Link from "next/link"

export default function ProductsPage() {
  return (
    <main className="min-h-screen bg-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl font-bold mb-12">Todos los Productos</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <Link
              key={product.id}
              href={`/products/${product.id}`}
              className="bg-white rounded-lg shadow-md hover:shadow-lg transition overflow-hidden"
            >
              <div className="relative w-full h-64 bg-neutral-200">
                <img
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="font-bold text-lg mb-2">{product.name}</h3>
                <p className="text-muted text-sm mb-4">{product.category}</p>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-primary">${product.price}</span>
                  <span className="text-xs text-muted">{product.carbonFootprint}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  )
}
