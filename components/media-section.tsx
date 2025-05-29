"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const galleryImages = [
  {
    src: "/images/adolfin.jpeg",
    alt: "Evento TIC's Racing Cup",
    category: "eventos",
  },
  {
    src: "/images/cofe.jpeg",
    alt: "Conferencia de la carrera",
    category: "eventos",
  },
  {
    src: "/images/deport.jpeg",
    alt: "Jornada deportiva",
    category: "eventos",
  },
  {
    src: "/images/jj_y_su_pandilla.jpeg",
    alt: "Equipo de robótica",
    category: "eventos",
  },
  {
    src: "/images/tics.jpeg",
    alt: "Promoción de la carrera",
    category: "instalaciones",
  },
  {
    src: "/images/adolfo.jpeg",
    alt: "Estudiantes del ITSOEH",
    category: "instalaciones",
  },
  {
    src: "/placeholder.svg?height=300&width=400",
    alt: "Laboratorio de redes",
    category: "instalaciones",
  },
  {
    src: "/placeholder.svg?height=300&width=400",
    alt: "Biblioteca",
    category: "instalaciones",
  },
]

export function MediaSection() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  return (
    <section className="py-16">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Galería de Fotos</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explora nuestras instalaciones y conoce los eventos que realizamos a lo largo del año.
          </p>
        </div>

        <div className="mb-6">
          <div className="flex justify-center gap-4 mb-6">
            <Button
              variant="outline"
              size="sm"
              className={cn(
                "rounded-full",
                !selectedImage && "bg-[#1999D8] text-white hover:bg-[#1999D8]/90 hover:text-white",
              )}
              onClick={() => setSelectedImage(null)}
            >
              Todas
            </Button>
            <Button
              variant="outline"
              size="sm"
              className={cn(
                "rounded-full",
                selectedImage === "instalaciones" && "bg-[#1999D8] text-white hover:bg-[#1999D8]/90 hover:text-white",
              )}
              onClick={() => setSelectedImage("instalaciones")}
            >
              Instalaciones
            </Button>
            <Button
              variant="outline"
              size="sm"
              className={cn(
                "rounded-full",
                selectedImage === "eventos" && "bg-[#1999D8] text-white hover:bg-[#1999D8]/90 hover:text-white",
              )}
              onClick={() => setSelectedImage("eventos")}
            >
              Eventos
            </Button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {galleryImages
              .filter((img) => !selectedImage || img.category === selectedImage)
              .map((image, index) => (
                <div key={index} className="relative aspect-[4/3] overflow-hidden rounded-lg group">
                  <Image
                    src={image.src || "/placeholder.svg"}
                    alt={image.alt}
                    fill
                    className="object-cover transition-transform group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                    <p className="text-white text-sm">{image.alt}</p>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </section>
  )
}
