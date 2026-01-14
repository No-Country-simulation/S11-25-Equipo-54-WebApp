"use client"

import type React from "react"
import { createContext, useContext, useEffect, useState } from "react"

interface User {
  id: string
  email: string
  name: string
  isAdmin: boolean
}

interface AuthContextType {
  user: User | null
  isLoading: boolean
  login: (email: string, password: string) => Promise<void>
  logout: () => void
  signup: (email: string, password: string, name: string) => Promise<void>
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Check if user is logged in from localStorage
    const storedUser = localStorage.getItem("eco-tech-user")
    if (storedUser) {
      try {
        setUser(JSON.parse(storedUser))
      } catch (e) {
        console.error("Failed to parse stored user")
      }
    }
    setIsLoading(false)
  }, [])

  const login = async (email: string, password: string) => {
    // Simulate login with hardcoded users
    const users = JSON.parse(localStorage.getItem("eco-tech-users") || "[]")
    const foundUser = users.find((u: User & { password: string }) => u.email === email && u.password === password)

    if (!foundUser) {
      throw new Error("Invalid email or password")
    }

    const { password: _, ...userWithoutPassword } = foundUser
    setUser(userWithoutPassword)
    localStorage.setItem("eco-tech-user", JSON.stringify(userWithoutPassword))
  }

  const signup = async (email: string, password: string, name: string) => {
    const users = JSON.parse(localStorage.getItem("eco-tech-users") || "[]")

    if (users.some((u: User) => u.email === email)) {
      throw new Error("Email already exists")
    }

    const newUser: User & { password: string } = {
      id: Date.now().toString(),
      email,
      password,
      name,
      isAdmin: false,
    }

    users.push(newUser)
    localStorage.setItem("eco-tech-users", JSON.stringify(users))

    const { password: _, ...userWithoutPassword } = newUser
    setUser(userWithoutPassword)
    localStorage.setItem("eco-tech-user", JSON.stringify(userWithoutPassword))
  }

  const logout = () => {
    setUser(null)
    localStorage.removeItem("eco-tech-user")
  }

  return <AuthContext.Provider value={{ user, isLoading, login, logout, signup }}>{children}</AuthContext.Provider>
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error("useAuth must be used within AuthProvider")
  }
  return context
}
