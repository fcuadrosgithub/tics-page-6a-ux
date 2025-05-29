"use client"

import { useState } from "react"
import { FileText } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent } from "@/components/ui/card"
import { cn } from "@/lib/utils"

// Datos de ejemplo para la retícula
const semesters = [
  {
    number: 1,
    subjects: [
      { name: "Cálculo Diferencial", area: "Básicas" },
      { name: "Fundamentos de Programación", area: "Programación" },
      { name: "Taller de Ética", area: "Ética" },
      { name: "Matemáticas Discretas", area: "Básicas" },
      { name: "Introducción a las TIC", area: "Redes" },
    ],
  },
  {
    number: 2,
    subjects: [
      { name: "Cálculo Integral", area: "Básicas" },
      { name: "Programación Orientada a Objetos", area: "Programación" },
      { name: "Contabilidad y Costos", area: "Básicas" },
      { name: "Química", area: "Básicas" },
      { name: "Álgebra Lineal", area: "Básicas" },
    ],
  },
  {
    number: 3,
    subjects: [
      { name: "Estructura de Datos", area: "Programación" },
      { name: "Cultura Empresarial", area: "Ética" },
      { name: "Investigación de Operaciones", area: "Básicas" },
      { name: "Sistemas Operativos", area: "Redes" },
      { name: "Fundamentos de Base de Datos", area: "Programación" },
    ],
  },
  // Semestres 4-9 simplificados para el ejemplo
  {
    number: 4,
    subjects: [
      { name: "Tópicos Avanzados de Programación", area: "Programación" },
      { name: "Fundamentos de Redes", area: "Redes" },
      { name: "Administración de Base de Datos", area: "Programación" },
    ],
  },
  {
    number: 5,
    subjects: [
      { name: "Desarrollo de Aplicaciones Web", area: "Programación" },
      { name: "Redes de Computadoras", area: "Redes" },
      { name: "Ingeniería de Software", area: "Programación" },
    ],
  },
  {
    number: 6,
    subjects: [
      { name: "Desarrollo Móvil", area: "Programación" },
      { name: "Seguridad Informática", area: "Redes" },
      { name: "Gestión de Proyectos", area: "Ética" },
    ],
  },
  {
    number: 7,
    subjects: [
      { name: "Inteligencia Artificial", area: "Programación" },
      { name: "Sistemas Distribuidos", area: "Redes" },
      { name: "Ética Profesional", area: "Ética" },
    ],
  },
  {
    number: 8,
    subjects: [
      { name: "Big Data", area: "Programación" },
      { name: "Cloud Computing", area: "Redes" },
      { name: "Emprendimiento", area: "Ética" },
    ],
  },
  {
    number: 9,
    subjects: [
      { name: "Residencia Profesional", area: "Ética" },
      { name: "Proyecto Integrador", area: "Programación" },
    ],
  },
]

const areas = [
  { id: "all", name: "Todas las áreas" },
  { id: "Básicas", name: "Ciencias Básicas" },
  { id: "Programación", name: "Programación" },
  { id: "Redes", name: "Redes y Sistemas" },
  { id: "Ética", name: "Ética y Desarrollo Profesional" },
]

export function CurriculumSection() {
  const [selectedArea, setSelectedArea] = useState("all")

  const getAreaColor = (area: string) => {
    switch (area) {
      case "Básicas":
        return "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300"
      case "Programación":
        return "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300"
      case "Redes":
        return "bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300"
      case "Ética":
        return "bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-300"
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300"
    }
  }

  return (
    <section className="py-16">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Plan de Estudios</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explora nuestra retícula académica diseñada para formarte como un profesional integral en el campo de las
            TIC.
          </p>
        </div>

        <Tabs defaultValue="reticula" className="w-full">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-8">
            <TabsTrigger value="reticula">Retícula</TabsTrigger>
            <TabsTrigger value="consultar">Consultar</TabsTrigger>
          </TabsList>

          <TabsContent value="reticula" className="space-y-8">
            <div className="flex flex-wrap justify-center gap-2 mb-6">
              {areas.map((area) => (
                <Button
                  key={area.id}
                  variant="outline"
                  size="sm"
                  className={cn(
                    "rounded-full",
                    selectedArea === area.id && "bg-[#1999D8] text-white hover:bg-[#1999D8]/90 hover:text-white",
                  )}
                  onClick={() => setSelectedArea(area.id)}
                >
                  {area.name}
                </Button>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {semesters.map((semester) => (
                <Card key={semester.number} className="overflow-hidden">
                  <div className="bg-[#232E8E] text-white p-3 text-center font-bold">Semestre {semester.number}</div>
                  <CardContent className="p-4">
                    <ul className="space-y-2">
                      {semester.subjects
                        .filter((subject) => selectedArea === "all" || subject.area === selectedArea)
                        .map((subject, idx) => (
                          <li key={idx} className={cn("p-2 rounded-md text-sm", getAreaColor(subject.area))}>
                            {subject.name}
                          </li>
                        ))}
                      {semester.subjects.filter((subject) => selectedArea === "all" || subject.area === selectedArea)
                        .length === 0 && (
                        <li className="text-center text-muted-foreground text-sm p-4">
                          No hay materias de esta área en este semestre
                        </li>
                      )}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="consultar">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
              <Card>
                <CardContent className="pt-6 flex flex-col items-center text-center">
                  <FileText className="h-16 w-16 text-[#232E8E] mb-4" />
                  <h3 className="text-xl font-bold mb-2">Retícula Oficial</h3>
                  <p className="text-muted-foreground mb-4">
                    Descarga la retícula completa con todas las asignaturas, créditos y prerrequisitos.
                  </p>
                  <Button
                    className="bg-[#1999D8] hover:bg-[#1999D8]/90"
                    onClick={() => window.open("file:///C:/Users/luiss/Downloads/Profes/reticula-tic.pdf", "_blank")}
                  >
                    Mostrar
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6 flex flex-col items-center text-center">
                  <FileText className="h-16 w-16 text-[#232E8E] mb-4" />
                  <h3 className="text-xl font-bold mb-2">Malla Curricular</h3>
                  <p className="text-muted-foreground mb-4">
                    Visualiza la malla curricular interactiva con la relación entre asignaturas.
                  </p>
                  <Button
                    onClick={() =>
                      window.open("file:///C:/Users/luiss/Downloads/Profes/Malla-corricular.pdf", "_blank")
                    }
                  >
                    Mostrar
                  </Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  )
}
