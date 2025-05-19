"use client"

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, MapPin, Users } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

interface Evento {
  id: string
  titulo: string
  descripcion: string
  fecha: string
  hora: string
  lugar: string
  tipo: "conferencia" | "taller" | "cultural" | "academico" | "deportivo"
  imagen: string
  enlace?: string
}

export default function EventosProximos() {
  // Lista de eventos próximos (ejemplo)
  const eventos: Evento[] = [
    {
      id: "EVT001",
      titulo: "Conferencia: Inteligencia Artificial en la Industria",
      descripcion:
        "Conferencia impartida por expertos de Google sobre las aplicaciones de la IA en la industria actual.",
      fecha: "15 de mayo, 2025",
      hora: "10:00 - 12:00",
      lugar: "Auditorio Principal",
      tipo: "conferencia",
      imagen: "https://images.theconversation.com/files/639088/original/file-20241217-15-leuwp4.jpg?ixlib=rb-4.1.0&rect=0%2C862%2C5829%2C2910&q=45&auto=format&w=1356&h=668&fit=crop",
      enlace: "https://eventos.itsoeh.edu.mx/ia-industria",
    },
    {
      id: "EVT002",
      titulo: "Taller de Desarrollo Web con React",
      descripcion: "Aprende a crear aplicaciones web modernas con React y Next.js en este taller práctico.",
      fecha: "20 de mayo, 2025",
      hora: "16:00 - 19:00",
      lugar: "Laboratorio de Cómputo 3",
      tipo: "taller",
      imagen: "https://codigoencasa.com/content/images/2022/04/Captura-de-Pantalla-2022-04-26-a-las-9.42.16.png",
      enlace: "https://eventos.itsoeh.edu.mx/taller-react",
    },
    {
      id: "EVT003",
      titulo: "Torneo de Programación ITSOEH 2025",
      descripcion: "Demuestra tus habilidades de programación en este torneo competitivo con grandes premios.",
      fecha: "1 de junio, 2025",
      hora: "09:00 - 18:00",
      lugar: "Centro de Cómputo",
      tipo: "academico",
      imagen: "https://www.famaf.unc.edu.ar/media/images/code-1076536_1920.2e16d0ba.fill-1255x526.jpg",
      enlace: "https://eventos.itsoeh.edu.mx/torneo-programacion",
    },
    {
      id: "EVT004",
      titulo: "Festival Cultural de Primavera",
      descripcion: "Disfruta de presentaciones artísticas, música en vivo y exposiciones de arte.",
      fecha: "10 de junio, 2025",
      hora: "12:00 - 20:00",
      lugar: "Plaza Central",
      tipo: "cultural",
      imagen: "https://content.nationalgeographic.com.es/medio/2024/03/19/primavera_e056ce17_240319213843_1200x630.jpg",
    },
  ]

  // Obtener el color de la insignia según el tipo de evento
  const getBadgeColor = (tipo: string): string => {
    switch (tipo) {
      case "conferencia":
        return "bg-blue-500 hover:bg-blue-600"
      case "taller":
        return "bg-green-500 hover:bg-green-600"
      case "cultural":
        return "bg-purple-500 hover:bg-purple-600"
      case "academico":
        return "bg-orange-500 hover:bg-orange-600"
      case "deportivo":
        return "bg-red-500 hover:bg-red-600"
      default:
        return "bg-gray-500 hover:bg-gray-600"
    }
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {eventos.map((evento) => (
        <Card key={evento.id} className="overflow-hidden hover:shadow-lg transition-shadow">
          <div className="relative h-48 w-full">
            <Image src={evento.imagen || "/placeholder.svg"} alt={evento.titulo} fill className="object-cover" />
            <div className="absolute top-2 right-2">
              <Badge className={getBadgeColor(evento.tipo)}>
                {evento.tipo.charAt(0).toUpperCase() + evento.tipo.slice(1)}
              </Badge>
            </div>
          </div>
          <CardHeader className="pb-2">
            <CardTitle className="text-xl">{evento.titulo}</CardTitle>
            <CardDescription>{evento.descripcion}</CardDescription>
          </CardHeader>
          <CardContent className="space-y-2 pt-0">
            <div className="flex items-center text-sm">
              <Calendar className="mr-2 h-4 w-4 text-muted-foreground" />
              <span>{evento.fecha}</span>
            </div>
            <div className="flex items-center text-sm">
              <Clock className="mr-2 h-4 w-4 text-muted-foreground" />
              <span>{evento.hora}</span>
            </div>
            <div className="flex items-center text-sm">
              <MapPin className="mr-2 h-4 w-4 text-muted-foreground" />
              <span>{evento.lugar}</span>
            </div>
          </CardContent>
          <CardFooter>
            {evento.enlace ? (
              <Link href={evento.enlace} target="_blank" rel="noopener noreferrer" className="w-full">
                <Button className="w-full">Más información</Button>
              </Link>
            ) : (
              <Button variant="outline" className="w-full">
                <Users className="mr-2 h-4 w-4" />
                Asistencia libre
              </Button>
            )}
          </CardFooter>
        </Card>
      ))}
    </div>
  )
}
