export default function Circularity() {
  return (
    <section className="py-12 px-4 bg-background">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl font-bold text-foreground mb-8">Circularidad</h2>

        <div className="bg-gray-200 rounded-lg p-8 md:p-12">
          {/* Main Heading */}
          <h3 className="text-2xl md:text-3xl font-bold text-green-700 mb-6">
            Compromiso Eco-Tech: Tecnología con Huella Positiva
          </h3>

          {/* Description */}
          <p className="text-foreground mb-6 leading-relaxed">
            En Eco-Tech nos comprometemos con la economía circular y la sostenibilidad. Comercializamos productos
            tecnológicos que reducen el impacto ambiental. Cada artículo lleva un etiquetado de kg CO₂e que indica
            cuánto reduce su huella de carbono total.
          </p>

          {/* Classification Title */}
          <p className="font-semibold text-foreground mb-6">Clasificamos los productos para tu fácil elección:</p>

          {/* Impact Levels */}
          <div className="space-y-6 mb-8">
            {/* High Impact */}
            <div className="flex items-center gap-4">
              <div className="flex gap-1">
                <span className="text-2xl">🌱</span>
                <span className="text-2xl">🌱</span>
                <span className="text-2xl">🌱</span>
              </div>
              <span className="text-foreground font-medium">Alto Impacto (Huella Alta)</span>
            </div>

            {/* Medium Impact */}
            <div className="flex items-center gap-4">
              <div className="flex gap-1">
                <span className="text-2xl">🌱</span>
                <span className="text-2xl">🌱</span>
              </div>
              <span className="text-foreground font-medium">Medio Impacto (Huella Media)</span>
            </div>

            {/* Low Impact */}
            <div className="flex items-center gap-4">
              <div className="flex gap-1">
                <span className="text-2xl">🌱</span>
              </div>
              <span className="text-foreground font-medium">Bajo Impacto (Huella Baja)</span>
            </div>
          </div>

          {/* Bottom Tagline */}
          <div className="text-center pt-6 border-t border-gray-300">
            <p className="text-lg md:text-xl font-semibold text-green-700">
              Elige Eco-Tech y contribuye al planeta. 🌍
            </p>
          </div>
        </div>

        <div className="mt-16">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-foreground mb-10">Nuestro aporte</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {/* Card 1: Recycling */}
            <div className="border-4 border-primary rounded-lg p-6 bg-white">
              <div className="flex justify-center mb-4">
                <svg className="w-16 h-16 text-primary" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M21.82 15.42l-2.5-4.33-1.73 1-1.73-3 .69-.4c.39-.23.53-.75.3-1.14-.23-.39-.75-.53-1.14-.3l-3.46 2c-.39.23-.53.75-.3 1.14l3 5.2c.15.26.43.41.72.41.14 0 .29-.04.42-.11.39-.23.53-.75.3-1.14l-.69-.4 1.73-1 2.5 4.33c.15.26.43.41.72.41.14 0 .29-.04.42-.11.39-.22.53-.74.3-1.13zM10.5 6.5l-1.73 3 .69.4c.13.07.28.11.42.11.29 0 .57-.15.72-.41l3-5.2c.23-.39.09-.91-.3-1.14l-3.46-2c-.39-.23-.91-.09-1.14.3-.23.39-.09.91.3 1.14l.69.4-1.73 3-1.73-1-2.5-4.33c-.23-.39-.75-.53-1.14-.3-.39.23-.53.75-.3 1.14l2.5 4.33 1.73-1zm.5 12l-3-5.2c-.15-.26-.43-.41-.72-.41-.14 0-.29.04-.42.11-.39.23-.53.75-.3 1.14l.69.4-1.73 1-2.5-4.33c-.15-.26-.43-.41-.72-.41-.14 0-.29.04-.42.11-.39.23-.53.75-.3 1.14l2.5 4.33 1.73-1 1.73 3-.69.4c-.39.23-.53.75-.3 1.14.15.26.43.41.72.41.14 0 .29-.04.42-.11l3.46-2c.39-.23.53-.75.3-1.14z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-primary text-center mb-3">
                Promover la reutilización
                <br />y el reciclaje
              </h3>
              <p className="text-sm text-foreground text-center leading-relaxed">
                Mediante productos que priorizan el uso de plásticos reciclados posconsumo (PCR), metales reciclados, o
                materiales orgánicos y biodegradables en el diseño y packaging.
              </p>
            </div>

            {/* Card 2: Awareness */}
            <div className="border-4 border-primary rounded-lg p-6 bg-white">
              <div className="flex justify-center mb-4">
                <svg className="w-16 h-16 text-primary" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18 11v2h4v-2h-4zm-2 6.61c.96.71 2.21 1.65 3.2 2.39.4-.53.8-1.07 1.2-1.6-.99-.74-2.24-1.68-3.2-2.4-.4.54-.8 1.08-1.2 1.61zM20.4 5.6c-.4-.53-.8-1.07-1.2-1.6-.99.74-2.24 1.68-3.2 2.4.4.53.8 1.07 1.2 1.6.96-.72 2.21-1.65 3.2-2.4zM4 9c0-3.87 3.13-7 7-7h1v2h-1c-2.76 0-5 2.24-5 5s2.24 5 5 5v2c-3.87 0-7-3.13-7-7zm7 4c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm0-6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm7 13h-6v2h6v-2z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-primary text-center mb-3">
                Crear valor y conciencia
                <br />
                en la comunidad
              </h3>
              <p className="text-sm text-foreground text-center leading-relaxed">
                Ofrecer al cliente información verificable sobre el origen de los materiales, los procesos de
                fabricación éticos y el impacto ambiental de cada producto.
              </p>
            </div>

            {/* Card 3: Community */}
            <div className="border-4 border-primary rounded-lg p-6 bg-white">
              <div className="flex justify-center mb-4">
                <svg className="w-16 h-16 text-primary" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-5.5-2.5l7.51-3.49L17.5 6.5 9.99 9.99 6.5 17.5zm5.5-6.6c.61 0 1.1.49 1.1 1.1s-.49 1.1-1.1 1.1-1.1-.49-1.1-1.1.49-1.1 1.1-1.1z" />
                  <circle cx="9" cy="8" r="2" />
                  <circle cx="15" cy="8" r="2" />
                  <circle cx="12" cy="14" r="2" />
                  <circle cx="18" cy="14" r="2" />
                  <circle cx="6" cy="14" r="2" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-primary text-center mb-3">
                Crear una comunidad
                <br />
                Eco-Technologos
              </h3>
              <p className="text-sm text-foreground text-center leading-relaxed">
                Fidelizamos a nuestros clientes a través de puntajes otorgados con cada compra que se irán sumando en
                una Eco-Wallet
              </p>
            </div>
          </div>
        </div>

        <div className="mt-16">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-foreground mb-10">
            Impacto generado por las marcas
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Quote from Hanneke Faber */}
            <div className="bg-primary text-white p-6 rounded-lg md:col-span-2 lg:col-span-1 flex flex-col justify-between">
              <p className="text-base md:text-lg leading-relaxed mb-4">
                "Diseñar de forma más inteligente significa encontrar formas de mejorar el rendimiento con la innovación
                de procesos y materiales alternativos."
              </p>
              <p className="text-sm font-semibold text-right">Hanneke Faber, Ceo Logintech</p>
            </div>

            {/* Dell ESG Strategy */}
            <div className="bg-gray-300 p-6 rounded-lg">
              <p className="text-sm text-foreground mb-4 leading-relaxed">
                La estrategia de Dell de Sostenibilidad Ambiental (ESG) se basa en 4 pilares:
              </p>
              <ul className="text-sm text-foreground space-y-2">
                <li>· Avance de la Sostenibilidad</li>
                <li>· Cultivo de la Inclusión</li>
                <li>· Transformación de Vidas</li>
                <li>· Mantenimiento de la Confianza</li>
              </ul>
            </div>

            {/* 2050 Goal */}
            <div className="bg-gray-300 p-6 rounded-lg flex flex-col justify-center">
              <p className="text-6xl md:text-7xl font-bold text-foreground text-center mb-4">2050</p>
              <p className="text-sm text-foreground text-center leading-relaxed">
                Es el año propuesto por Dell Technologies a llegar a cero emisiones netas de gases de efecto invernadero
                (GEI) en los alcances 1, 2 y 3.
              </p>
            </div>

            {/* 73% Recycled Plastics - Logitech */}
            <div className="bg-primary text-white p-6 rounded-lg flex flex-col justify-center md:row-span-2">
              <p className="text-7xl md:text-8xl font-bold text-center mb-4">73%</p>
              <p className="text-base md:text-lg leading-relaxed text-center">
                De los productos utiliza Plásticos Next Life (plástico reciclado) en lugar de plástico virgen.
              </p>
              <p className="text-sm font-semibold text-right mt-4">Logintech</p>
            </div>

            {/* Logitech Emissions Reduction */}
            <div className="bg-primary text-white p-6 rounded-lg">
              <p className="text-4xl font-bold mb-2">58%</p>
              <p className="text-sm leading-relaxed mb-4">Reducción de huella de carbono (Alcance 1 y 2)</p>
              <p className="text-4xl font-bold mb-2">24%</p>
              <p className="text-sm leading-relaxed mb-4">Disminución en emisiones en la cadena de valor (Alcance 3)</p>
              <p className="text-xs font-semibold text-right">Logintech</p>
            </div>

            {/* Dell Circular Design */}
            <div className="bg-gray-300 p-6 rounded-lg">
              <p className="text-sm text-foreground leading-relaxed">
                Diseño circular: Nuestro objetivo es mantener los productos y materiales la mayor parte del tiempo en
                uso, implementamos diseños más sencillos de reparar, restaurar, reutilizar y reciclar.
              </p>
              <p className="text-xs font-semibold text-right mt-4 text-foreground">Dell Technologies</p>
            </div>

            {/* 30% Ocean Plastics - Lenovo */}
            <div className="bg-primary text-white p-6 rounded-lg flex flex-col justify-center">
              <p className="text-5xl md:text-6xl font-bold text-center mb-4">30%</p>
              <p className="text-sm leading-relaxed text-center">
                De OBP (plásticos recuperados del océano) y 7D % de otros plásticos reciclado conforme al embalaje de
                varios productos de Lenovo.
              </p>
            </div>

            {/* David Carroll Quote - Lenovo */}
            <div className="bg-primary text-white p-6 rounded-lg md:col-span-2 lg:col-span-2 flex flex-col justify-between">
              <p className="text-base md:text-lg leading-relaxed mb-4">
                Nuestro enfoque en asuntos ambientales, impacto social y gobernanza (ESG) se basa en la credibilidad, la
                colaboración y el compromiso con la mejora continua.
              </p>
              <p className="text-sm font-semibold text-right">David Carroll, vicepresidente sr Lenovo</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
