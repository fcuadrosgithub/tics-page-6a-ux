"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight, Play, Pause } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { cn } from "@/lib/utils"

const testimonials = [
  {
    id: 1,
    name: "Ana García",
    role: "Desarrolladora Full Stack en Microsoft",
    year: "Generación 2019",
    image: "/placeholder.svg?height=100&width=100",
    quote:
      "La formación que recibí en ITSOEH me dio las bases sólidas para desarrollarme profesionalmente en una empresa de clase mundial. Los proyectos prácticos y el enfoque en tecnologías actuales marcaron la diferencia.",
    videoThumbnail: "/placeholder.svg?height=300&width=500",
  },
  {
    id: 2,
    name: "Carlos Mendoza",
    role: "Ingeniero DevOps en Amazon",
    year: "Generación 2018",
    image: "/placeholder.svg?height=100&width=100",
    quote:
      "Las certificaciones que obtuve durante mi carrera fueron clave para destacar en los procesos de selección. La experiencia internacional que viví gracias al programa de movilidad amplió mi visión del mundo tecnológico.",
    videoThumbnail: "/placeholder.svg?height=300&width=500",
  },
  {
    id: 3,
    name: "Laura Sánchez",
    role: "Fundadora de TechSolutions",
    year: "Generación 2017",
    image: "/placeholder.svg?height=100&width=100",
    quote:
      "El enfoque emprendedor de la carrera me inspiró a crear mi propia empresa. Hoy tenemos presencia en tres estados y seguimos creciendo gracias a los valores y conocimientos que adquirí en ITSOEH.",
    videoThumbnail: "/placeholder.svg?height=300&width=500",
  },
]

const stats = [
  { value: "95%", label: "Empleabilidad" },
  { value: "85%", label: "Trabajan en su área" },
  { value: "40%", label: "Estudian posgrado" },
  { value: "25%", label: "Emprendedores" },
]

export function TestimonialsSection() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1))
    if (isPlaying) {
      setIsPlaying(false)
    }
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1))
    if (isPlaying) {
      setIsPlaying(false)
    }
  }

  const toggleVideo = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause()
      } else {
        videoRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  useEffect(() => {
    // Reset video state when changing slides
    setIsPlaying(false)
    if (videoRef.current) {
      videoRef.current.currentTime = 0
    }
  }, [currentSlide])

  return (
    <section className="py-16 bg-muted/30">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Testimonios y Casos de Éxito</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Conoce las historias de nuestros egresados y cómo la carrera transformó sus vidas profesionales.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mb-12">
          <div className="relative rounded-xl overflow-hidden aspect-video bg-black">
            {/* Video thumbnail with play button overlay */}
            <div className="relative w-full h-full">
              <Image
                src={testimonials[currentSlide].videoThumbnail || "/placeholder.svg"}
                alt={`Video de ${testimonials[currentSlide].name}`}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                <Button
                  variant="ghost"
                  size="icon"
                  className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm text-white hover:bg-white/30 hover:scale-110 transition-transform"
                  onClick={toggleVideo}
                >
                  {isPlaying ? <Pause className="h-8 w-8" /> : <Play className="h-8 w-8 ml-1" />}
                </Button>
              </div>
            </div>
            {/* Hidden video element that would be shown when playing */}
            <video
              ref={videoRef}
              className={cn("absolute inset-0 w-full h-full object-cover", isPlaying ? "opacity-100" : "opacity-0")}
              controls={false}
              onEnded={() => setIsPlaying(false)}
            >
              <source src="#" type="video/mp4" />
              Tu navegador no soporta videos HTML5.
            </video>
          </div>

          <div>
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <Image
                    src={testimonials[currentSlide].image || "/placeholder.svg"}
                    alt={testimonials[currentSlide].name}
                    width={60}
                    height={60}
                    className="rounded-full"
                  />
                  <div>
                    <h3 className="font-bold text-lg">{testimonials[currentSlide].name}</h3>
                    <p className="text-sm text-muted-foreground">{testimonials[currentSlide].role}</p>
                    <p className="text-xs text-muted-foreground">{testimonials[currentSlide].year}</p>
                  </div>
                </div>
                <blockquote className="border-l-4 border-[#1999D8] pl-4 italic mb-4">
                  "{testimonials[currentSlide].quote}"
                </blockquote>
                <div className="flex justify-between">
                  <Button variant="outline" size="icon" onClick={prevSlide} aria-label="Testimonio anterior">
                    <ChevronLeft className="h-4 w-4" />
                  </Button>
                  <div className="flex gap-1">
                    {testimonials.map((_, index) => (
                      <button
                        key={index}
                        className={cn(
                          "w-2 h-2 rounded-full transition-colors",
                          index === currentSlide ? "bg-[#1999D8]" : "bg-muted-foreground/30",
                        )}
                        onClick={() => setCurrentSlide(index)}
                        aria-label={`Ir al testimonio ${index + 1}`}
                      />
                    ))}
                  </div>
                  <Button variant="outline" size="icon" onClick={nextSlide} aria-label="Siguiente testimonio">
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="bg-[#232E8E] text-white rounded-xl p-8">
          <h3 className="text-2xl font-bold mb-6 text-center">Estadísticas de Empleabilidad</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold mb-2">{stat.value}</div>
                <div className="text-sm opacity-80">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
