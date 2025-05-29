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
      telefono: "771 702 4937",
      whatsapp: "7717024937",
      foto: "/fotocuadros.png?height=150&width=150",
      ubicacion: "Edificio 1, Cubículo 1",
      horarioPdf: "/cuadros.png",
      especialidad: "Desarrollo de Software",
      materias: ["Programación Orientada a Objetos", "Estructura de Datos", "Desarrollo Web"],
    },
    {
      id: "DOC002",
      nombre: "Mtra. Yadira Eufemia Gaspar Morales",
      correo: "yadiragaspar@itsoeh.edu.mx",
      telefono: "738 234 5678",
      foto: "/fotoyadi.png?height=150&width=150",
      ubicacion: "Edificio 1, Cubiculo 2",
      horarioPdf: "yadi.png",
      especialidad: "Contabilidad",
      materias: ["Bases de Datos", "Sistemas de Información", "Minería de Datos"],
    },
    {
      id: "DOC003",
      nombre: "José Matín Oropeza Méndez",
      correo: "martinoropeza@itsoeh.edu.mx",
      telefono: "773 226 9804",
      whatsapp: "7732269804",
      foto: "/fotomartin.png?height=150&width=150",
      ubicacion: "Edificio 1, Cubiculo 4",
      horarioPdf: "martin.png",
      especialidad: "Redes y Seguridad",
      materias: ["Redes de Computadoras", "Seguridad Informática", "Sistemas Operativos"],
    },
    {
      id: "DOC004",
      nombre: "Dra. Talhia Heidi Hernández Omaña",
      correo: "Talhiahernandez@itsoeh.edu.mx",
      telefono: "738 345 6789",
      foto: "/fotothali.png?height=150&width=150",
      ubicacion: "Edificio 1, Cubículo 6",
      horarioPdf: "/thali.png",
      especialidad: "Desarrollo de Bases de Datos",
      materias: ["Investigación", "Aprendizaje Automático", "Minería de Datos"],
    },
    {
      id: "DOC005",
      nombre: "Mtro. Saúl Isai Soto Ortíz",
      correo: "saulisai@itsoeh.edu.mx",
      whatsapp: "7387654321",
      foto: "/fotosaul.png?height=150&width=150",
      ubicacion: "Edificio 1, Cubiculo 3",
      horarioPdf: "saul.png",
      especialidad: "Redes",
      materias: ["Desarrollo Móvil", "Programación Avanzada", "Interfaces de Usuario"],
    },
    {
      id: "DOC006",
      nombre: "María Guadalupe Tolentino Cruz",
      correo: "mariaguadalupe@itsoeh.edu.mx",
      telefono: "738 456 7890",
      foto: "/fotolupis.png?height=150&width=150",
      ubicacion: "Edificio 1, Cubículo 5",
      horarioPdf: "lupis.png",
      especialidad: "Desarrollo Movil",
      materias: ["Desarrollo Movil", "Programación web", "Programación Orientada a Objetos"],
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
