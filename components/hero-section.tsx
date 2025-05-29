"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight, Code, Cpu, Wifi, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const slides = [
  {
    image: "/images/tics.jpeg",
    title: "Transforma tu futuro con la ingeniería del siglo XXI",
    description: "Forma parte de la revolución tecnológica con nuestra carrera de Ingeniería en TIC",
    icon: <Code className="h-8 w-8" />,
  },
  {
    image: "/images/adolfo.jpeg",
    title: "¡Sé Parte del Orgullo ITSOEH!",
    description: "Estudia en el Tecnológico Nacional de México Campus Occidente del Estado de Hidalgo",
    icon: <Cpu className="h-8 w-8" />,
  },
  {
    image: "/images/jj_y_su_pandilla.jpeg",
    title: "Desarrolla soluciones innovadoras",
    description: "Aprende a crear tecnologías que cambien el mundo",
    icon: <Wifi className="h-8 w-8" />,
  },
]

const techIcons = [
  { icon: <Code className="h-6 w-6" />, label: "Programación" },
  { icon: <Cpu className="h-6 w-6" />, label: "Hardware" },
  { icon: <Wifi className="h-6 w-6" />, label: "Redes" },
  { icon: <Zap className="h-6 w-6" />, label: "Innovación" },
]

export function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1))
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1))
  }

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section id="hero" className="relative w-full h-[600px] md:h-[700px] overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#232E8E]/20 to-[#1999D8]/20 z-10" />

      {/* Floating tech icons */}
      <div className="absolute inset-0 z-20 pointer-events-none">
        {techIcons.map((tech, index) => (
          <div
            key={index}
            className={cn(
              "absolute text-white/30 animate-pulse",
              index === 0 && "top-20 left-10 animate-bounce",
              index === 1 && "top-32 right-20 animate-pulse",
              index === 2 && "bottom-32 left-20 animate-bounce",
              index === 3 && "bottom-20 right-10 animate-pulse",
            )}
            style={{ animationDelay: `${index * 0.5}s` }}
          >
            {tech.icon}
          </div>
        ))}
      </div>

      {/* Carousel */}
      <div className="relative h-full">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={cn(
              "absolute inset-0 transition-opacity duration-1000",
              index === currentSlide ? "opacity-100" : "opacity-0 pointer-events-none",
            )}
          >
            <Image
              src={slide.image || "/placeholder.svg"}
              alt={slide.title}
              fill
              priority={index === 0}
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/40 z-30" />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-4 text-center z-40">
              <div className="mb-4 p-4 rounded-full bg-white/20 backdrop-blur-sm">{slide.icon}</div>
              <h2 className="text-4xl md:text-6xl font-bold max-w-4xl mb-6 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
                {slide.title}
              </h2>
              <p className="text-xl md:text-2xl max-w-3xl mb-8 text-blue-100">{slide.description}</p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-[#1999D8] to-[#232E8E] hover:from-[#1999D8]/90 hover:to-[#232E8E]/90 text-white shadow-lg transform hover:scale-105 transition-all duration-300"
                  onClick={() =>
                    window.open("file:///C:/Users/luiss/Downloads/Profes/CONVOCATORIA%202025-2026%20(2).pdf", "_blank")
                  }
                >
                  📋 Convocatoria 2025-2026
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-[#232E8E] transition-all duration-300"
                  onClick={() => document.getElementById("instituto")?.scrollIntoView({ behavior: "smooth" })}
                >
                  🏫 Conoce el Instituto
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <Button
        variant="ghost"
        size="icon"
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/30 text-white hover:bg-black/50 rounded-full z-50"
        onClick={prevSlide}
        aria-label="Slide anterior"
      >
        <ChevronLeft className="h-6 w-6" />
      </Button>
      <Button
        variant="ghost"
        size="icon"
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/30 text-white hover:bg-black/50 rounded-full z-50"
        onClick={nextSlide}
        aria-label="Siguiente slide"
      >
        <ChevronRight className="h-6 w-6" />
      </Button>

      {/* Indicators */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-2 z-50">
        {slides.map((_, index) => (
          <button
            key={index}
            className={cn(
              "w-3 h-3 rounded-full transition-all duration-300",
              index === currentSlide ? "bg-white scale-125" : "bg-white/50",
            )}
            onClick={() => setCurrentSlide(index)}
            aria-label={`Ir al slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  )
}
