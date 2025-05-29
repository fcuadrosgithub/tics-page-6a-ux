"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Search, FileText } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

interface Asignatura {
  id: string
  nombre: string
  semestre: number
  creditos: number
  tipo: "Ciencias Básicas" | "Ingeniería Aplicada" | "Especialidad" | "Ciencias Sociales" | "Complementaria"
  imagen: string
  pdf: string
}

export default function BuscadorAsignaturas() {
  const [busqueda, setBusqueda] = useState("")
  const [semestreActivo, setSemestreActivo] = useState<string>("todos")

  // Lista de asignaturas (ejemplo)
  const asignaturas: Asignatura[] = [
    {
      id: "CB001",
      nombre: "Cálculo Diferencial",
      semestre: 1,
      creditos: 5,
      tipo: "Ciencias Básicas",
      imagen: "https://cdn-icons-png.flaticon.com/512/1603/1603002.png",
      pdf: "https://www.cdguzman.tecnm.mx/wp-content/uploads/2023/08/Calculo-Diferencial-6.pdf",
    },
    {
      id: "CB002",
      nombre: "Fundamentos de Programación",
      semestre: 1,
      creditos: 5,
      tipo: "Ciencias Básicas",
      imagen: "/Fundamentos de Programación.webp?height=100&width=100",
      pdf: "https://www.iztapalapa.tecnm.mx/Carreras/ISC/PDFS-ISC/AED-1285-Fundamentos%20de%20programacion.pdf",
    },
    {
      id: "CB003",
      nombre: "Matemáticas Discretas",
      semestre: 1,
      creditos: 4,
      tipo: "Ciencias Básicas",
      imagen: "/Matemáticas Discretas.png?height=100&width=100",
      pdf: "http://www.ith.mx/documentos/reticulas/sistemas/Semestre%201/AE041%20Matematicas%20Discretas.pdf",
    },
    {
      id: "CB004",
      nombre: "Introducción a las TIC",
      semestre: 1,
      creditos: 3,
      tipo: "Ciencias Básicas",
      imagen: "/Introducción a las TIC.png?height=100&width=100",
      pdf: "https://www.apizaco.tecnm.mx/wp-content/uploads/2021/12/TIP1017.pdf",
    },
    {
      id: "CB005",
      nombre: "Taller de Ética",
      semestre: 1,
      creditos: 3,
      tipo: "Ciencias Sociales",
      imagen: "/Taller Etica.png?height=100&width=100",
      pdf: "https://acapulco.tecnm.mx/wp-content/uploads/carreras/ingenieria_en_gestion_empresarial/2/TALLER_DE_eTICA.pdf",
    },
    {
      id: "CB006",
      nombre: "Cálculo Integral",
      semestre: 2,
      creditos: 5,
      tipo: "Ciencias Básicas",
      imagen: "/Cálculo Integral.png?height=100&width=100",
      pdf: "https://acapulco.tecnm.mx/wp-content/uploads/carreras/ingenieria_en_gestion_empresarial/2/CaLCULO_INTEGRAL.pdf",
    },
    {
      id: "CB007",
      nombre: "Programación Orientada a Objetos",
      semestre: 2,
      creditos: 5,
      tipo: "Ciencias Básicas",
      imagen: "/Programación Orientada a Objetos.jpg?height=100&width=100",
      pdf: "https://www.iztapalapa.tecnm.mx/Carreras/ISC/PDFS-ISC/AED-1286-Programacion%20orientada%20a%20objetos.pdf",
    },
    {
      id: "IA001",
      nombre: "Bases de Datos",
      semestre: 3,
      creditos: 5,
      tipo: "Ingeniería Aplicada",
      imagen: "/Bases de Datos.webp?height=100&width=100",
      pdf: "http://www.ith.mx/documentos/reticulas/sistemas/Semestre%206/Administraci%C3%B3n%20de%20Base%20de%20Datos.pdf",
    },
    {
      id: "IA002",
      nombre: "Estructura de Datos",
      semestre: 3,
      creditos: 5,
      tipo: "Ingeniería Aplicada",
      imagen: "/Estructura de Datos.jpg?height=100&width=100",
      pdf: "https://www.iztapalapa.tecnm.mx/Carreras/ISC/PDFS-ISC/AED-1026-Estructura%20de%20datos.pdf",
    },
    {
      id: "IA003",
      nombre: "Sistemas Operativos",
      semestre: 4,
      creditos: 4,
      tipo: "Ingeniería Aplicada",
      imagen: "/Sistemas Operativos.webp?height=100&width=100",
      pdf: "https://www.iztapalapa.tecnm.mx/Carreras/ISC/PDFS-ISC/AEC-1061-Sistemas%20operativos.pdf",
    },
    {
      id: "IA004",
      nombre: "Redes de Computadoras",
      semestre: 4,
      creditos: 5,
      tipo: "Ingeniería Aplicada",
      imagen: "/Redes de Computadoras.jpg?height=100&width=100",
      pdf: "https://iztapalapa3.tecnm.mx/ofertaedu/temariosInformatica/Redes%20de%20computadoras..pdf",
    },
    {
      id: "ES001",
      nombre: "Desarrollo Web",
      semestre: 5,
      creditos: 5,
      tipo: "Especialidad",
      imagen: "/Desarrollo Web.webp?height=100&width=100",
      pdf: "https://www.iztapalapa.tecnm.mx/Carreras/ISC/PDFS-ISC/AEB-1055-Programacion%20web.pdf",
    },
    {
      id: "ES002",
      nombre: "Inteligencia Artificial",
      semestre: 6,
      creditos: 5,
      tipo: "Especialidad",
      imagen: "/Inteligencia Artificial.jpg?height=100&width=100",
      pdf: "http://www.piedrasnegras.tecnm.mx/temarios/isc/inteligencia-artificial-scc-1012.pdf",
    },
    {
      id: "ES003",
      nombre: "Desarrollo Móvil",
      semestre: 7,
      creditos: 5,
      tipo: "Especialidad",
      imagen: "/Desarrollo Móvil.jpg?height=100&width=100",
      pdf: "http://www.zacatepec.tecnm.mx/archivos/licenciatura/ISC/Especialidad_AWM_2018-2020/AWB_1805_Desarr_Aplica_Moviles.pdf",
    },
  
    {
      id: "CO001",
      nombre: "Gestión de Proyectos",
      semestre: 8,
      creditos: 4,
      tipo: "Complementaria",
      imagen: "/Gestión de Proyectos.avif?height=100&width=100",
      pdf: "https://aguascalientes.tecnm.mx/carreras/mecanica/pdf/GestioneProyectos.pdf",
    },
  ]

  // Filtrar asignaturas por búsqueda y semestre
  const asignaturasFiltradas = asignaturas.filter((asignatura) => {
    const coincideBusqueda =
      asignatura.nombre.toLowerCase().includes(busqueda.toLowerCase()) ||
      asignatura.id.toLowerCase().includes(busqueda.toLowerCase()) ||
      asignatura.tipo.toLowerCase().includes(busqueda.toLowerCase())

    const coincideSemestre = semestreActivo === "todos" || asignatura.semestre.toString() === semestreActivo

    return coincideBusqueda && coincideSemestre
  })

  // Obtener el color de la insignia según el tipo de asignatura
  const getBadgeColor = (tipo: string): string => {
    switch (tipo) {
      case "Ciencias Básicas":
        return "bg-blue-500 hover:bg-blue-600"
      case "Ingeniería Aplicada":
        return "bg-green-500 hover:bg-green-600"
      case "Especialidad":
        return "bg-purple-500 hover:bg-purple-600"
      case "Ciencias Sociales":
        return "bg-orange-500 hover:bg-orange-600"
      case "Complementaria":
        return "bg-teal-500 hover:bg-teal-600"
      default:
        return "bg-gray-500 hover:bg-gray-600"
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Asignaturas de la Carrera</CardTitle>
        <CardDescription>Consulta los programas de estudio de todas las asignaturas</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Buscar por nombre, clave o tipo..."
              className="pl-8"
              value={busqueda}
              onChange={(e) => setBusqueda(e.target.value)}
            />
          </div>
          <Button variant="outline" onClick={() => setBusqueda("")}>
            Limpiar
          </Button>
        </div>

        <Tabs defaultValue="todos" value={semestreActivo} onValueChange={setSemestreActivo}>
          <TabsList className="grid grid-cols-5 md:grid-cols-10">
            <TabsTrigger value="todos">Todos</TabsTrigger>
            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((semestre) => (
              <TabsTrigger key={semestre} value={semestre.toString()}>
                {semestre}º
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {asignaturasFiltradas.length > 0 ? (
            asignaturasFiltradas.map((asignatura) => (
              <Card key={asignatura.id} className="overflow-hidden hover:shadow-md transition-shadow">
                <div className="flex items-center p-4 border-b">
                  <Image
                    src={asignatura.imagen || "/placeholder.svg"}
                    alt={asignatura.nombre}
                    width={50}
                    height={50}
                    className="rounded-md mr-3"
                  />
                  <div>
                    <h3 className="font-medium text-sm">{asignatura.nombre}</h3>
                    <p className="text-xs text-muted-foreground">Clave: {asignatura.id}</p>
                  </div>
                </div>
                <CardContent className="p-4 pt-3">
                  <div className="flex flex-wrap gap-2 mb-2">
                    <Badge variant="secondary">Semestre {asignatura.semestre}</Badge>
                    <Badge variant="secondary">{asignatura.creditos} créditos</Badge>
                    <Badge className={getBadgeColor(asignatura.tipo)}>{asignatura.tipo}</Badge>
                  </div>
                </CardContent>
                <CardFooter className="p-4 pt-0">
                  <Link href={asignatura.pdf} target="_blank" rel="noopener noreferrer" className="w-full">
                    <Button variant="outline" className="w-full">
                      <FileText className="mr-2 h-4 w-4" />
                      Ver programa
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            ))
          ) : (
            <div className="col-span-full flex flex-col items-center justify-center py-12 text-center text-muted-foreground">
              <Search className="h-12 w-12 mb-4" />
              <p className="mb-2">No se encontraron asignaturas que coincidan con tu búsqueda</p>
              <Button
                variant="outline"
                onClick={() => {
                  setBusqueda("")
                  setSemestreActivo("todos")
                }}
              >
                Mostrar todas las asignaturas
              </Button>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  )
}
