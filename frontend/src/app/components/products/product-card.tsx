import Link from "next/link"

interface ProductCardProps {
  product: {
    id: string
    name: string
    category: string
    price: number
    image: string
    carbonFootprint: string
  }
  index: number
}

export default function ProductCard({ product, index }: ProductCardProps) {
  // Stagger the grid for masonry effect
  const span = index === 1 || index === 6 ? "md:col-span-2 md:row-span-2" : ""

  return (
    <Link href={`/products/${product.id}`}>
      <div
        className={`bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition cursor-pointer ${span} h-full`}
      >
        <div className="relative w-full h-64 bg-neutral-200">
          <img src={product.image || "/placeholder.svg"} alt={product.name} className="w-full h-full object-cover" />
        </div>

        {/* Card content */}
        <div className={`p-6 ${span.includes("col-span-2") ? "bg-primary text-white" : "bg-white"}`}>
          <h3 className="text-xl font-bold mb-2">{product.name}</h3>
          <p className={`text-sm mb-4 ${span.includes("col-span-2") ? "text-white/90" : "text-muted"}`}>
            {product.category}
          </p>

          <div className="flex justify-between items-center">
            <span className="text-2xl font-bold">${product.price}</span>
            <button
              className={`px-4 py-2 rounded text-sm font-semibold border transition ${
                span.includes("col-span-2")
                  ? "bg-white text-primary border-white hover:bg-primary hover:text-white"
                  : "bg-white text-primary border-primary hover:bg-primary hover:text-white"
              }`}
            >
              Comprar →
            </button>
          </div>

          <p className={`text-xs mt-4 ${span.includes("col-span-2") ? "text-white/80" : "text-muted"}`}>
            Huella de carbono: {product.carbonFootprint}
          </p>
        </div>
      </div>
    </Link>
  )
}
