"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

export default function EcoNews() {
  const [expandedCard, setExpandedCard] = useState<number | null>(null)

  const toggleCard = (cardIndex: number) => {
    setExpandedCard(expandedCard === cardIndex ? null : cardIndex)
  }

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Title with leaf icon */}
        <div className="flex items-center gap-2 mb-8">
          <h2 className="text-3xl font-bold text-foreground">Eco-News</h2>
          <svg
            width="32"
            height="32"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="text-primary"
          >
            <path
              d="M17 8C8 10 5.9 16.17 3.82 21.34L2.77 21.89C2.35 22.11 2.01 22.5 1.84 22.96C1.67 23.43 1.68 23.94 1.88 24.4L2.06 24.8C2.39 25.54 3.18 25.93 3.96 25.76L4.39 25.66C10.05 24.32 15.15 19.88 17 14C17.95 10.87 18.43 7.61 18.43 4.33C18.43 3.6 17.84 3 17.11 3C13.33 3 9.67 4.47 7.11 7.03C5.45 8.69 4.29 10.78 3.82 13.06"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
            />
          </svg>
        </div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* Card 1: Survey Results */}
          <div className="bg-blue-50 rounded-lg p-6 border border-gray-200">
            <h3 className="text-xl font-bold text-foreground mb-4">
              Resumen de la Encuesta sobre Huella de Carbono y Productos Eco-amigables
            </h3>
            <p className="text-foreground/80 mb-4">
              La encuesta a hombres y mujeres de 20 a 40 años reveló tres conclusiones principales:
            </p>

            <div className="space-y-4">
              <div>
                <p className="font-semibold text-foreground mb-2">1. Falta de Conocimiento, pero Interés:</p>
                <ul className="list-disc list-inside text-foreground/80 space-y-1 pl-4">
                  <li>
                    Más del 65% no está familiarizado con el concepto de huella de carbono, pero la mayoría sí cree que
                    tendrá un impacto en sus vidas.
                  </li>
                  <li>
                    Esto resalta la necesidad de construir la cultura del uso de productos sostenibles y afianzar
                    conceptos básicos.
                  </li>
                </ul>
              </div>

              <div>
                <p className="font-semibold text-foreground mb-2">2. Disposición a Pagar un Diferencial:</p>
                <ul className="list-disc list-inside text-foreground/80 space-y-1 pl-4">
                  <li>
                    Un 75% de los encuestados está dispuesto a pagar un costo adicional para contribuir con el medio
                    ambiente.
                  </li>
                </ul>
                <p className="text-sm text-foreground/70 italic mt-2 pl-4">
                  (El porcentaje adicional más elegido fue el 10%, aunque el rango general de respuestas fue entre el 2%
                  y 5%).
                </p>
              </div>
            </div>

            {/* Expandable indicator */}
            <div className="mt-6 pt-4 border-t-2 border-primary flex justify-center">
              <button
                onClick={() => toggleCard(1)}
                className="text-primary hover:text-primary/80 transition-transform duration-300"
                style={{ transform: expandedCard === 1 ? "rotate(180deg)" : "rotate(0deg)" }}
              >
                <ChevronDown size={28} strokeWidth={3} />
              </button>
            </div>
          </div>

          {/* Card 2: Global Emissions */}
          <div className="bg-blue-50 rounded-lg p-6 border border-gray-200">
            <h3 className="text-xl font-bold text-foreground mb-4">
              Diez Países Concentran el 70% de las Emisiones Globales de Carbono
            </h3>
            <p className="text-foreground/80 mb-4">
              Un reciente análisis de Forbes, basado en datos del FMI y el Banco Mundial, pone en alerta a la comunidad
              internacional: solo diez naciones son responsables de casi el 70% del total mundial de emisiones de
              dióxido de carbono.
            </p>

            <div className="space-y-4">
              <div>
                <p className="font-semibold text-foreground mb-2">El Dominio de China y EE. UU.</p>
                <ul className="list-disc list-inside text-foreground/80 space-y-2 pl-4">
                  <li>
                    <strong>China a la cabeza:</strong> El gigante asiático encabeza el ranking global, emitiendo más
                    CO2e. A pesar de sus inversiones en energías renovables, su economía genera una modesta
                    productividad de $1,50 por cada kilogramo de CO2e emitido.
                  </li>
                  <li>
                    <strong>Estados Unidos y su Huella Individual:</strong> EE. UU. se posiciona en segundo lugar (12,5%
                    de las emisiones globales), pero destaca por su alto consumo per cápita de 15 toneladas anuales, más
                    del doble que China. No obstante, lidera en eficiencia, con
                  </li>
                </ul>
              </div>
            </div>

            {/* Expandable indicator */}
            <div className="mt-6 pt-4 border-t-2 border-primary flex justify-center">
              <button
                onClick={() => toggleCard(2)}
                className="text-primary hover:text-primary/80 transition-transform duration-300"
                style={{ transform: expandedCard === 2 ? "rotate(180deg)" : "rotate(0deg)" }}
              >
                <ChevronDown size={28} strokeWidth={3} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
