"use client"

import { useAuth } from "@/lib/auth-context"
import { useRouter } from "next/navigation"
import { useEffect } from "react"

export default function ProfilePage() {
  const { user, isLoading } = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (!isLoading && !user) {
      router.push("/")
    }
  }, [user, isLoading, router])

  if (isLoading) {
    return <div className="min-h-screen flex items-center justify-center">Cargando...</div>
  }

  if (!user) {
    return null
  }

  return (
    <main className="min-h-screen bg-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-white rounded-lg shadow-md p-8">
          <h1 className="text-4xl font-bold mb-8">Mi Perfil</h1>

          <div className="space-y-6">
            <div>
              <label className="text-sm text-muted">Nombre</label>
              <p className="text-xl font-semibold">{user.name}</p>
            </div>

            <div>
              <label className="text-sm text-muted">Correo</label>
              <p className="text-xl font-semibold">{user.email}</p>
            </div>

            <div>
              <label className="text-sm text-muted">Rol</label>
              <p className="text-xl font-semibold">{user.isAdmin ? "Administrador" : "Cliente"}</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
