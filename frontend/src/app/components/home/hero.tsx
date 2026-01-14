import Link from "next/link"

export default function Hero() {
  return (
    <section
      className="relative h-96 bg-cover bg-center flex items-center justify-center"
      style={{
        backgroundImage: `linear-gradient(rgba(27, 94, 63, 0.7), rgba(27, 94, 63, 0.7)), url('https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1200&h=500&fit=crop')`,
      }}
    >
      <div className="text-center text-white max-w-2xl px-4">
        <h1 className="text-5xl font-bold mb-4 text-balance">
          Pequeñas acciones hacen un gran cambio... y nosotros somos parte de él...sumate!
        </h1>
        <p className="text-lg mb-6 leading-relaxed">
          Somos Eco-Tech, una empresa que comercializa dispositivos electrónicos con un valor agregado... todos tienen
          certificaciones de huella de carbono. Acá te explicamos un poco del tema.
        </p>
        <Link
          href="#products"
          className="inline-block bg-primary-light text-primary font-semibold px-6 py-3 rounded hover:opacity-90 transition"
        >
          Circularidad
        </Link>
      </div>
    </section>
  )
}
