import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { FileText, Users, BookOpen, GraduationCap, Briefcase, ExternalLink } from "lucide-react"
import CalendarioAcademico from "@/components/calendario-academico"
import BuscadorAsignaturas from "@/components/buscador-asignaturas"
import DirectorioDocentes from "@/components/directorio-docentes"
import EventosProximos from "@/components/eventos-proximos"

export default function EstudiantesPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="space-y-2 text-center mb-8">
        <Badge className="mb-2">Sección Estudiantes</Badge>
        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Portal Estudiantil ITSOEH 🎓</h1>
        <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
          Todo lo que necesitas para tu vida académica en un solo lugar
        </p>
      </div>

      <Tabs defaultValue="tramites" className="w-full">
        <TabsList className="grid w-full grid-cols-2 md:grid-cols-5">
          <TabsTrigger value="tramites">Trámites</TabsTrigger>
          <TabsTrigger value="perfil">Perfil de Egreso</TabsTrigger>
          <TabsTrigger value="calendario">Calendario</TabsTrigger>
          <TabsTrigger value="asignaturas">Asignaturas</TabsTrigger>
          <TabsTrigger value="docentes">Docentes</TabsTrigger>
        </TabsList>

        <TabsContent value="tramites" className="space-y-8 py-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader className="space-y-1">
                <CardTitle className="text-2xl flex items-center">
                  <FileText className="mr-2 h-5 w-5 text-blue-500" />
                  Reinscripción
                </CardTitle>
                <CardDescription>Proceso para inscribirte al siguiente semestre</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Completa tu proceso de reinscripción en línea siguiendo los pasos establecidos.
                </p>
              </CardContent>
              <CardFooter>
                <Link href="https://reinscripcion.itsoeh.edu.mx" target="_blank" rel="noopener noreferrer">
                  <Button className="w-full">
                    Iniciar proceso <ExternalLink className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardFooter>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader className="space-y-1">
                <CardTitle className="text-2xl flex items-center">
                  <FileText className="mr-2 h-5 w-5 text-orange-500" />
                  Segundas Oportunidades
                </CardTitle>
                <CardDescription>Solicita exámenes de recuperación</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Proceso para solicitar y programar exámenes de segunda oportunidad.
                </p>
              </CardContent>
              <CardFooter>
                <Link href="https://segundas.itsoeh.edu.mx" target="_blank" rel="noopener noreferrer">
                  <Button className="w-full">
                    Solicitar <ExternalLink className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardFooter>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader className="space-y-1">
                <CardTitle className="text-2xl flex items-center">
                  <Users className="mr-2 h-5 w-5 text-green-500" />
                  Evaluación Docente
                </CardTitle>
                <CardDescription>Evalúa a tus profesores</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Tu opinión es importante para mejorar la calidad educativa.
                </p>
              </CardContent>
              <CardFooter>
                <Link href="https://evaluacion.itsoeh.edu.mx" target="_blank" rel="noopener noreferrer">
                  <Button className="w-full">
                    Evaluar <ExternalLink className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardFooter>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader className="space-y-1">
                <CardTitle className="text-2xl flex items-center">
                  <BookOpen className="mr-2 h-5 w-5 text-purple-500" />
                  Carga de Materias
                </CardTitle>
                <CardDescription>Selecciona tus materias para el próximo semestre</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Sistema para elegir y registrar las asignaturas del siguiente periodo.
                </p>
              </CardContent>
              <CardFooter>
                <Link href="https://carga.itsoeh.edu.mx" target="_blank" rel="noopener noreferrer">
                  <Button className="w-full">
                    Cargar materias <ExternalLink className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardFooter>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader className="space-y-1">
                <CardTitle className="text-2xl flex items-center">
                  <FileText className="mr-2 h-5 w-5 text-red-500" />
                  Retícula
                </CardTitle>
                <CardDescription>Plan de estudios completo</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Consulta la retícula completa de la carrera de Ingeniería en TIC.
                </p>
              </CardContent>
              <CardFooter>
                <Link href="/reticula.pdf" target="_blank" rel="noopener noreferrer">
                  <Button className="w-full">
                    Ver PDF <ExternalLink className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardFooter>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader className="space-y-1">
                <CardTitle className="text-2xl flex items-center">
                  <FileText className="mr-2 h-5 w-5 text-blue-500" />
                  Cardex
                </CardTitle>
                <CardDescription>Consulta tu historial académico</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Accede a tu boleta de calificaciones y historial académico completo.
                </p>
              </CardContent>
              <CardFooter>
                <Link href="https://cardex.itsoeh.edu.mx" target="_blank" rel="noopener noreferrer">
                  <Button className="w-full">
                    Ver cardex <ExternalLink className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl flex items-center">
                  <GraduationCap className="mr-2 h-5 w-5 text-green-500" />
                  Servicio Social y Residencias
                </CardTitle>
                <CardDescription>Requisitos e información para realizar estos trámites</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-medium mb-2">Requisitos para Servicio Social:</h4>
                  <ul className="list-disc pl-5 space-y-1 text-sm">
                    <li>Haber cubierto el 70% de créditos del plan de estudios</li>
                    <li>Estar inscrito en el periodo actual</li>
                    <li>No tener adeudos con la institución</li>
                    <li>Presentar carta de presentación</li>
                    <li>Duración: 480 horas en un periodo de 6 meses a 2 años</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Requisitos para Residencias:</h4>
                  <ul className="list-disc pl-5 space-y-1 text-sm">
                    <li>Haber aprobado el 80% de créditos del plan de estudios</li>
                    <li>Estar inscrito en el periodo actual</li>
                    <li>Haber acreditado el servicio social</li>
                    <li>Presentar anteproyecto aprobado</li>
                    <li>Duración: 4 a 6 meses (mínimo 500 horas)</li>
                  </ul>
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Link href="https://servicio.itsoeh.edu.mx" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline">Servicio Social</Button>
                </Link>
                <Link href="https://residencias.itsoeh.edu.mx" target="_blank" rel="noopener noreferrer">
                  <Button>Residencias</Button>
                </Link>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-2xl flex items-center">
                  <Briefcase className="mr-2 h-5 w-5 text-purple-500" />
                  Bolsa de Trabajo
                </CardTitle>
                <CardDescription>Oportunidades laborales para estudiantes</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="border rounded-lg p-4 hover:bg-muted/50 transition-colors">
                    <div className="flex justify-between items-start">
                      <div>
                        <h4 className="font-medium">Desarrollador Web Junior</h4>
                        <p className="text-sm text-muted-foreground">Empresa XYZ</p>
                      </div>
                      <Badge>Nuevo</Badge>
                    </div>
                    <div className="mt-2 text-sm">
                      <p>💰 $12,000 - $15,000 MXN</p>
                      <p>📍 Remoto / Mixquiahuala</p>
                    </div>
                  </div>

                  <div className="border rounded-lg p-4 hover:bg-muted/50 transition-colors">
                    <div className="flex justify-between items-start">
                      <div>
                        <h4 className="font-medium">Soporte Técnico TI</h4>
                        <p className="text-sm text-muted-foreground">Empresa ABC</p>
                      </div>
                    </div>
                    <div className="mt-2 text-sm">
                      <p>💰 $8,000 - $10,000 MXN</p>
                      <p>📍 Pachuca, Hidalgo</p>
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Link href="https://bolsatrabajo.itsoeh.edu.mx" target="_blank" rel="noopener noreferrer">
                  <Button className="w-full">
                    Ver todas las ofertas <ExternalLink className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="perfil" className="py-4">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Perfil de Egreso</CardTitle>
              <CardDescription>
                Los 12 objetivos educacionales que representan el perfil de egreso de nuestros estudiantes
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {[
                  {
                    id: 1,
                    title: "Desarrollo de Software",
                    description:
                      "Capacidad para diseñar, desarrollar e implementar soluciones de software innovadoras utilizando metodologías ágiles y buenas prácticas de programación.",
                    icon: "💻",
                  },
                  {
                    id: 2,
                    title: "Administración de Redes",
                    description:
                      "Habilidad para diseñar, implementar y administrar infraestructuras de redes de comunicación seguras y eficientes.",
                    icon: "🌐",
                  },
                  {
                    id: 3,
                    title: "Gestión de Proyectos",
                    description:
                      "Competencia para planificar, ejecutar y evaluar proyectos de TI, considerando recursos, tiempos y calidad.",
                    icon: "📊",
                  },
                  {
                    id: 4,
                    title: "Seguridad Informática",
                    description:
                      "Capacidad para implementar estrategias de ciberseguridad que protejan la información y los sistemas informáticos.",
                    icon: "🔒",
                  },
                  {
                    id: 5,
                    title: "Inteligencia Artificial",
                    description:
                      "Habilidad para aplicar técnicas de IA y aprendizaje automático en la resolución de problemas complejos.",
                    icon: "🤖",
                  },
                  {
                    id: 6,
                    title: "Bases de Datos",
                    description:
                      "Competencia para diseñar, implementar y administrar bases de datos relacionales y no relacionales.",
                    icon: "🗄️",
                  },
                  {
                    id: 7,
                    title: "Desarrollo Web",
                    description:
                      "Capacidad para crear aplicaciones web responsivas, accesibles y con experiencias de usuario óptimas.",
                    icon: "🌍",
                  },
                  {
                    id: 8,
                    title: "Desarrollo Móvil",
                    description:
                      "Habilidad para desarrollar aplicaciones móviles nativas e híbridas para diferentes plataformas.",
                    icon: "📱",
                  },
                  {
                    id: 9,
                    title: "Innovación Tecnológica",
                    description:
                      "Competencia para identificar oportunidades de innovación y aplicar nuevas tecnologías en contextos diversos.",
                    icon: "💡",
                  },
                  {
                    id: 10,
                    title: "Comunicación Efectiva",
                    description:
                      "Capacidad para comunicar ideas técnicas de manera clara y efectiva a diferentes audiencias.",
                    icon: "🗣️",
                  },
                  {
                    id: 11,
                    title: "Trabajo Colaborativo",
                    description:
                      "Habilidad para trabajar en equipos multidisciplinarios, asumiendo diferentes roles según las necesidades del proyecto.",
                    icon: "👥",
                  },
                  {
                    id: 12,
                    title: "Ética Profesional",
                    description:
                      "Compromiso con los principios éticos y la responsabilidad social en el ejercicio de la profesión.",
                    icon: "⚖️",
                  },
                ].map((objetivo) => (
                  <div key={objetivo.id} className="border rounded-lg p-4 hover:bg-muted/50 transition-colors">
                    <div className="text-3xl mb-2">{objetivo.icon}</div>
                    <h3 className="font-medium text-lg">
                      {objetivo.id}. {objetivo.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mt-2">{objetivo.description}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="calendario" className="py-4">
          <CalendarioAcademico />
        </TabsContent>

        <TabsContent value="asignaturas" className="py-4">
          <BuscadorAsignaturas />
        </TabsContent>

        <TabsContent value="docentes" className="py-4">
          <DirectorioDocentes />
        </TabsContent>
      </Tabs>

      <section className="mt-12">
        <h2 className="text-2xl font-bold mb-6">Eventos Próximos</h2>
        <EventosProximos />
      </section>
    </div>
  )
}
