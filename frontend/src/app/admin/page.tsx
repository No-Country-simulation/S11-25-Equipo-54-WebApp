"use client"

import { useAuth } from "@/lib/auth-context"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import { products as defaultProducts, type Product } from "@/lib/products"

export default function AdminPage() {
  const { user, isLoading } = useAuth()
  const router = useRouter()
  const [products, setProducts] = useState<Product[]>(defaultProducts)
  const [editingId, setEditingId] = useState<string | null>(null)
  const [showForm, setShowForm] = useState(false)
  const [formData, setFormData] = useState<Partial<Product>>({})

  useEffect(() => {
    if (!isLoading && (!user || !user.isAdmin)) {
      router.push("/")
    }
  }, [user, isLoading, router])

  if (isLoading) {
    return <div className="min-h-screen flex items-center justify-center">Cargando...</div>
  }

  if (!user || !user.isAdmin) {
    return null
  }

  const handleAddProduct = () => {
    setFormData({
      id: Date.now().toString(),
      name: "",
      category: "",
      price: 0,
      description: "",
      image: "",
      carbonFootprint: "",
    })
    setEditingId(null)
    setShowForm(true)
  }

  const handleEditProduct = (product: Product) => {
    setFormData(product)
    setEditingId(product.id)
    setShowForm(true)
  }

  const handleSaveProduct = () => {
    if (!formData.name || !formData.category || !formData.price) {
      alert("Por favor completa todos los campos requeridos")
      return
    }

    if (editingId) {
      setProducts(products.map((p) => (p.id === editingId ? (formData as Product) : p)))
    } else {
      setProducts([...products, formData as Product])
    }

    setShowForm(false)
    setFormData({})
  }

  const handleDeleteProduct = (id: string) => {
    if (confirm("¿Estás seguro de que deseas eliminar este producto?")) {
      setProducts(products.filter((p) => p.id !== id))
    }
  }

  return (
    <main className="min-h-screen bg-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold">Panel de Administración</h1>
          <button
            onClick={handleAddProduct}
            className="bg-primary text-white px-6 py-2 rounded-lg font-semibold hover:opacity-90"
          >
            + Agregar Producto
          </button>
        </div>

        {showForm && (
          <div className="bg-white rounded-lg shadow-md p-8 mb-8">
            <h2 className="text-2xl font-bold mb-6">{editingId ? "Editar Producto" : "Nuevo Producto"}</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Nombre"
                value={formData.name || ""}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="px-4 py-2 border border-border rounded-lg"
              />
              <input
                type="text"
                placeholder="Categoría"
                value={formData.category || ""}
                onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                className="px-4 py-2 border border-border rounded-lg"
              />
              <input
                type="number"
                placeholder="Precio"
                value={formData.price || 0}
                onChange={(e) => setFormData({ ...formData, price: Number.parseFloat(e.target.value) })}
                className="px-4 py-2 border border-border rounded-lg"
              />
              <input
                type="text"
                placeholder="URL de Imagen"
                value={formData.image || ""}
                onChange={(e) => setFormData({ ...formData, image: e.target.value })}
                className="px-4 py-2 border border-border rounded-lg"
              />
              <textarea
                placeholder="Descripción"
                value={formData.description || ""}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                className="px-4 py-2 border border-border rounded-lg md:col-span-2"
              />
              <input
                type="text"
                placeholder="Huella de Carbono (ej: 2.1 kg CO₂e)"
                value={formData.carbonFootprint || ""}
                onChange={(e) => setFormData({ ...formData, carbonFootprint: e.target.value })}
                className="px-4 py-2 border border-border rounded-lg"
              />
            </div>

            <div className="flex gap-4 mt-6">
              <button
                onClick={handleSaveProduct}
                className="bg-primary text-white px-6 py-2 rounded-lg font-semibold hover:opacity-90"
              >
                Guardar
              </button>
              <button
                onClick={() => setShowForm(false)}
                className="bg-neutral-200 text-foreground px-6 py-2 rounded-lg font-semibold hover:opacity-90"
              >
                Cancelar
              </button>
            </div>
          </div>
        )}

        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <table className="w-full">
            <thead className="bg-neutral-100 border-b border-border">
              <tr>
                <th className="px-6 py-3 text-left font-semibold">Nombre</th>
                <th className="px-6 py-3 text-left font-semibold">Categoría</th>
                <th className="px-6 py-3 text-left font-semibold">Precio</th>
                <th className="px-6 py-3 text-left font-semibold">Acciones</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => (
                <tr key={product.id} className="border-b border-border hover:bg-neutral-50">
                  <td className="px-6 py-4">{product.name}</td>
                  <td className="px-6 py-4">{product.category}</td>
                  <td className="px-6 py-4">${product.price}</td>
                  <td className="px-6 py-4">
                    <button
                      onClick={() => handleEditProduct(product)}
                      className="text-primary hover:underline mr-4 font-semibold"
                    >
                      Editar
                    </button>
                    <button
                      onClick={() => handleDeleteProduct(product.id)}
                      className="text-red-600 hover:underline font-semibold"
                    >
                      Eliminar
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </main>
  )
}
