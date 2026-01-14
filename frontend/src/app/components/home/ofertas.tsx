"use client"

export default function Ofertas() {
  return (
    <section className="bg-background py-12 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <h2 className="text-3xl font-bold text-foreground mb-8">Ofertas</h2>

        {/* Promotional Banners Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Super Combo Banner */}
          <div className="relative overflow-hidden rounded-lg h-64 md:h-72 bg-gradient-to-r from-blue-500 via-teal-500 to-green-500 flex items-center justify-between p-8 shadow-lg">
            {/* Left Content */}
            <div className="flex-1 z-10">
              <div className="text-white">
                <h3 className="text-2xl md:text-3xl font-bold mb-2">¡SÚPER COMBO!</h3>
                <p className="text-lg md:text-xl mb-6 text-white/90">Mouse y Teclado</p>
                <div className="bg-lime-400 text-gray-900 px-6 py-3 rounded-lg inline-block font-bold text-lg md:text-xl">
                  30% DE DESCUENTO
                </div>
              </div>
            </div>

            {/* Right Product Image - Placeholder */}
            <div className="flex-1 flex justify-end items-center">
              <div className="w-48 h-48 bg-white/10 rounded-lg flex items-center justify-center">
                <img
                  src="/keyboard-and-mouse-combo.jpg"
                  alt="Mouse y Teclado"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
            </div>
          </div>

          {/* Cyber Monday Banner */}
          <div className="relative overflow-hidden rounded-lg h-64 md:h-72 bg-gradient-to-r from-green-600 to-green-500 flex items-center justify-between p-8 shadow-lg">
            {/* Left Product Image - Placeholder */}
            <div className="flex-1 flex justify-start items-center">
              <div className="w-48 h-48 bg-white/10 rounded-lg flex items-center justify-center">
                <img
                  src="/gaming-headphones.jpg"
                  alt="Headphones"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
            </div>

            {/* Right Content */}
            <div className="flex-1 z-10 text-right">
              <div className="text-white">
                <h3 className="text-3xl md:text-4xl font-bold mb-4 text-lime-300">CYBER MONDAY</h3>
                <div className="bg-lime-400 text-gray-900 px-6 py-3 rounded-lg inline-block font-bold text-lg mb-3">
                  25% OFF
                </div>
                <p className="text-white/90 text-sm">EN NOTEBOOKS Y HEADSETS</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
