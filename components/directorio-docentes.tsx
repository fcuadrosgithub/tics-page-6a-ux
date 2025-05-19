"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Search, Mail, Phone, FileText, MapPin } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

interface Docente {
  id: string
  nombre: string
  correo: string
  telefono?: string
  whatsapp?: string
  foto: string
  ubicacion: string
  horarioPdf: string
  especialidad: string
  materias: string[]
}

export default function DirectorioDocentes() {
  const [busqueda, setBusqueda] = useState("")
  const [filtroActivo, setFiltroActivo] = useState<string>("todos")

  // Lista de docentes (ejemplo)
  const docentes: Docente[] = [
    {
      id: "DOC001",
      nombre: "Dr. Francisco Javier Cuadros Romero",
      correo: "javier@itsoeh.edu.mx",
      telefono: "738 123 4567",
      whatsapp: "7381234567",
      foto: "/placeholder.svg?height=150&width=150",
      ubicacion: "Edificio 1, Cubículo 1",
      horarioPdf: "/horarios/juan-perez.pdf",
      especialidad: "Desarrollo de Software",
      materias: ["Programación Orientada a Objetos", "Estructura de Datos", "Desarrollo Web"],
    },
    {
      id: "DOC002",
      nombre: "Mtra. Yadira Eufemia Gaspar Morales",
      correo: "yadiragaspar@itsoeh.edu.mx",
      telefono: "738 234 5678",
      foto: "/placeholder.svg?height=150&width=150",
      ubicacion: "Edificio B, Laboratorio 3",
      horarioPdf: "/horarios/maria-gonzalez.pdf",
      especialidad: "Contabilidad",
      materias: ["Bases de Datos", "Sistemas de Información", "Minería de Datos"],
    },
    {
      id: "DOC003",
      nombre: "Dr. Roberto Sánchez Vega",
      correo: "roberto.sanchez@itsoeh.edu.mx",
      whatsapp: "7389876543",
      foto: "/placeholder.svg?height=150&width=150",
      ubicacion: "Edificio C, Oficina 5",
      horarioPdf: "/horarios/roberto-sanchez.pdf",
      especialidad: "Redes y Seguridad",
      materias: ["Redes de Computadoras", "Seguridad Informática", "Sistemas Operativos"],
    },
    {
      id: "DOC004",
      nombre: "Dra. Ana Martínez Flores",
      correo: "ana.martinez@itsoeh.edu.mx",
      telefono: "738 345 6789",
      foto: "/placeholder.svg?height=150&width=150",
      ubicacion: "Edificio A, Cubículo 8",
      horarioPdf: "/horarios/ana-martinez.pdf",
      especialidad: "Inteligencia Artificial",
      materias: ["Inteligencia Artificial", "Aprendizaje Automático", "Minería de Datos"],
    },
    {
      id: "DOC005",
      nombre: "Mtro. Carlos Ramírez Ortiz",
      correo: "carlos.ramirez@itsoeh.edu.mx",
      whatsapp: "7387654321",
      foto: "/placeholder.svg?height=150&width=150",
      ubicacion: "Edificio B, Laboratorio 5",
      horarioPdf: "/horarios/carlos-ramirez.pdf",
      especialidad: "Desarrollo Móvil",
      materias: ["Desarrollo Móvil", "Programación Avanzada", "Interfaces de Usuario"],
    },
    {
      id: "DOC006",
      nombre: "Dra. Laura Torres Mendoza",
      correo: "laura.torres@itsoeh.edu.mx",
      telefono: "738 456 7890",
      foto: "/placeholder.svg?height=150&width=150",
      ubicacion: "Edificio C, Cubículo 3",
      horarioPdf: "/horarios/laura-torres.pdf",
      especialidad: "Matemáticas",
      materias: ["Cálculo Diferencial", "Cálculo Integral", "Matemáticas Discretas"],
    },
  ]

  // Filtrar docentes por búsqueda y especialidad
  const docentesFiltrados = docentes.filter((docente) => {
    const coincideBusqueda =
      docente.nombre.toLowerCase().includes(busqueda.toLowerCase()) ||
      docente.correo.toLowerCase().includes(busqueda.toLowerCase()) ||
      docente.especialidad.toLowerCase().includes(busqueda.toLowerCase()) ||
      docente.materias.some((materia) => materia.toLowerCase().includes(busqueda.toLowerCase()))

    const coincideEspecialidad =
      filtroActivo === "todos" || docente.especialidad.toLowerCase().includes(filtroActivo.toLowerCase())

    return coincideBusqueda && coincideEspecialidad
  })

  // Obtener especialidades únicas para el filtro
  const especialidades = Array.from(new Set(docentes.map((docente) => docente.especialidad)))

  return (
    <Card>
      <CardHeader>
        <CardTitle>Directorio de Docentes</CardTitle>
        <CardDescription>Información de contacto y horarios de los profesores</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Buscar por nombre, correo o materia..."
              className="pl-8"
              value={busqueda}
              onChange={(e) => setBusqueda(e.target.value)}
            />
          </div>
          <Button variant="outline" onClick={() => setBusqueda("")}>
            Limpiar
          </Button>
        </div>

        <Tabs defaultValue="todos" value={filtroActivo} onValueChange={setFiltroActivo}>
          <TabsList className="flex flex-wrap">
            <TabsTrigger value="todos">Todos</TabsTrigger>
            {especialidades.map((especialidad) => (
              <TabsTrigger key={especialidad} value={especialidad}>
                {especialidad}
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {docentesFiltrados.length > 0 ? (
            docentesFiltrados.map((docente) => (
              <Card key={docente.id} className="overflow-hidden hover:shadow-md transition-shadow">
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-4">
                    <Image
                      src={docente.foto || "/placeholder.svg"}
                      alt={docente.nombre}
                      width={70}
                      height={70}
                      className="rounded-full object-cover"
                    />
                    <div>
                      <CardTitle className="text-lg">{docente.nombre}</CardTitle>
                      <Badge variant="outline" className="mt-1">
                        {docente.especialidad}
                      </Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-3 pt-2">
                  <div className="flex items-center text-sm">
                    <Mail className="mr-2 h-4 w-4 text-muted-foreground" />
                    <a href={`mailto:${docente.correo}`} className="text-blue-500 hover:underline">
                      {docente.correo}
                    </a>
                  </div>

                  {docente.telefono && (
                    <div className="flex items-center text-sm">
                      <Phone className="mr-2 h-4 w-4 text-muted-foreground" />
                      <span>{docente.telefono}</span>
                    </div>
                  )}

                  {docente.whatsapp && (
                    <div className="flex items-center text-sm">
                      <span className="mr-2">📱</span>
                      <a
                        href={`https://wa.me/${docente.whatsapp}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-green-500 hover:underline"
                      >
                        WhatsApp
                      </a>
                    </div>
                  )}

                  <div className="flex items-center text-sm">
                    <MapPin className="mr-2 h-4 w-4 text-muted-foreground" />
                    <span>{docente.ubicacion}</span>
                  </div>

                  <div className="pt-2">
                    <p className="text-sm font-medium mb-1">Materias:</p>
                    <div className="flex flex-wrap gap-1">
                      {docente.materias.map((materia, index) => (
                        <Badge key={index} variant="secondary" className="text-xs">
                          {materia}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Link href={docente.horarioPdf} target="_blank" rel="noopener noreferrer" className="w-full">
                    <Button variant="outline" className="w-full">
                      <FileText className="mr-2 h-4 w-4" />
                      Ver horario
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            ))
          ) : (
            <div className="col-span-full flex flex-col items-center justify-center py-12 text-center text-muted-foreground">
              <Search className="h-12 w-12 mb-4" />
              <p className="mb-2">No se encontraron docentes que coincidan con tu búsqueda</p>
              <Button
                variant="outline"
                onClick={() => {
                  setBusqueda("")
                  setFiltroActivo("todos")
                }}
              >
                Mostrar todos los docentes
              </Button>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  )
}
