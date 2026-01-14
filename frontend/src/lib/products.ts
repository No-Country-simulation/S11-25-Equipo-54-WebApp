export interface Product {
  id: string
  name: string
  category: string
  price: number
  description: string
  image: string
  carbonFootprint: string
  discount?: number
  originalPrice?: number
  isNew?: boolean
}

export const products: Product[] = [
  {
    id: "1",
    name: "Audífonos Premium",
    category: "Headsets",
    price: 89.99,
    description: "Audífonos inalámbricos con cancelación de ruido activa y batería de 30 horas.",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&h=500&fit=crop",
    carbonFootprint: "2.1 kg CO₂e",
    discount: 25,
    originalPrice: 119.99,
  },
  {
    id: "2",
    name: "Laptop Refurbished",
    category: "Notebooks",
    price: 599.99,
    description: "Laptop de alto rendimiento, procesador Intel i7, 16GB RAM, 512GB SSD.",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=500&h=500&fit=crop",
    carbonFootprint: "45.3 kg CO₂e",
    isNew: true,
  },
  {
    id: "3",
    name: "Ratón Inalámbrico",
    category: "Mice",
    price: 29.99,
    description: "Ratón ergonómico con precisión de 1600 DPI y duración de 2 meses.",
    image: "https://images.unsplash.com/photo-1527814050087-3793815479db?w=500&h=500&fit=crop",
    carbonFootprint: "0.8 kg CO₂e",
    discount: 25,
    originalPrice: 39.99,
  },
  {
    id: "4",
    name: "Cámara Web 1080p",
    category: "Webcam",
    price: 49.99,
    description: "Cámara web Full HD con micrófono integrado, perfecta para videollamadas.",
    image: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=500&h=500&fit=crop",
    carbonFootprint: "1.2 kg CO₂e",
    discount: 25,
    originalPrice: 65.99,
  },
  {
    id: "5",
    name: "Teclado Mecánico",
    category: "Keyboards",
    price: 79.99,
    description: "Teclado mecánico RGB con interruptores cherry MX brown de alta calidad.",
    image: "https://images.unsplash.com/photo-1587829191301-34d7b9e50a22?w=500&h=500&fit=crop",
    carbonFootprint: "3.5 kg CO₂e",
  },
  {
    id: "6",
    name: "Micrófono USB",
    category: "Headsets",
    price: 119.99,
    description: "Micrófono profesional con filtro de ruido para streaming y podcasts.",
    image: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=500&h=500&fit=crop",
    carbonFootprint: "1.5 kg CO₂e",
  },
  {
    id: "7",
    name: "Monitor Ultrawide",
    category: "Notebooks",
    price: 349.99,
    description: "Monitor 34 pulgadas ultrawide 3440x1440 con panel IPS color perfecto.",
    image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=500&h=500&fit=crop",
    carbonFootprint: "25.7 kg CO₂e",
  },
  {
    id: "8",
    name: "Hub USB-C",
    category: "Mice",
    price: 39.99,
    description: "Hub múltiple con 7 puertos USB 3.0, HDMI y lector de tarjetas SD.",
    image: "https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?w=500&h=500&fit=crop",
    carbonFootprint: "0.5 kg CO₂e",
  },
]

export const featuredProducts = products.filter((p) => p.discount || p.isNew).slice(0, 4)
