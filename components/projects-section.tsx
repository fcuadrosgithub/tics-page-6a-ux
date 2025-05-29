import { Rocket, Brain, Shield, Smartphone } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const projects = [
  {
    icon: <Brain className="h-12 w-12 text-[#1999D8]" />,
    title: "Sistema de IA para Diagnóstico Médico",
    description: "Aplicación de machine learning para asistir en diagnósticos médicos tempranos",
    technologies: ["Python", "TensorFlow", "React", "MongoDB"],
    team: "6 estudiantes de 8vo semestre",
    status: "En desarrollo",
    impact: "Colaboración con Hospital General de Pachuca",
  },
  {
    icon: <Smartphone className="h-12 w-12 text-[#1999D8]" />,
    title: "App de Movilidad Urbana",
    description: "Plataforma móvil para optimizar rutas de transporte público en Hidalgo",
    technologies: ["React Native", "Node.js", "PostgreSQL", "Google Maps API"],
    team: "4 estudiantes de 7mo semestre",
    status: "Prototipo funcional",
    impact: "Piloto en 3 municipios del estado",
  },
  {
    icon: <Shield className="h-12 w-12 text-[#1999D8]" />,
    title: "Sistema de Ciberseguridad IoT",
    description: "Framework de seguridad para dispositivos IoT en hogares inteligentes",
    technologies: ["C++", "Python", "Blockchain", "Arduino"],
    team: "5 estudiantes de 9no semestre",
    status: "Fase de pruebas",
    impact: "Patente en proceso",
  },
  {
    icon: <Rocket className="h-12 w-12 text-[#1999D8]" />,
    title: "Plataforma E-learning Adaptativa",
    description: "Sistema educativo que se adapta al estilo de aprendizaje de cada estudiante",
    technologies: ["Vue.js", "Laravel", "MySQL", "AI/ML"],
    team: "7 estudiantes de 8vo semestre",
    status: "Implementación piloto",
    impact: "Usado por 500+ estudiantes",
  },
]

const achievements = [
  { title: "1er Lugar", description: "Hackathon Nacional TecNM 2024", icon: "🥇" },
  { title: "Mención Honorífica", description: "Concurso de Innovación Tecnológica", icon: "🏆" },
  { title: "Proyecto Destacado", description: "Expo Ciencias Hidalgo 2024", icon: "🌟" },
  { title: "Reconocimiento", description: "Mejor Proyecto de Sustentabilidad", icon: "🌱" },
]

export function ProjectsSection() {
  return (
    <section
      id="proyectos"
      className="py-20 bg-gradient-to-br from-purple-50 to-blue-50 dark:from-purple-900 dark:to-blue-900"
    >
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-[#232E8E] to-[#1999D8] bg-clip-text text-transparent">
            🚀 Proyectos Estudiantiles
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Nuestros estudiantes desarrollan proyectos innovadores que impactan positivamente en la sociedad y la
            industria.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <CardHeader className="pb-4">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-full bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900 dark:to-purple-900">
                    {project.icon}
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-xl mb-2">{project.title}</CardTitle>
                    <CardDescription className="text-base">{project.description}</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold text-[#232E8E] mb-2">💻 Tecnologías:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, idx) => (
                      <Badge key={idx} variant="secondary" className="bg-[#1999D8]/10 text-[#232E8E]">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="font-semibold text-[#232E8E]">👥 Equipo:</span>
                    <p className="text-muted-foreground">{project.team}</p>
                  </div>
                  <div>
                    <span className="font-semibold text-[#232E8E]">📊 Estado:</span>
                    <p className="text-muted-foreground">{project.status}</p>
                  </div>
                </div>
                <div>
                  <span className="font-semibold text-[#232E8E]">🎯 Impacto:</span>
                  <p className="text-muted-foreground text-sm">{project.impact}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Achievements */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg">
          <h3 className="text-2xl font-bold text-center mb-8 text-[#232E8E]">🏆 Reconocimientos Recientes</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className="text-center p-4 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900 dark:to-purple-900 rounded-lg"
              >
                <div className="text-3xl mb-2">{achievement.icon}</div>
                <div className="font-bold text-[#232E8E] mb-1">{achievement.title}</div>
                <div className="text-sm text-muted-foreground">{achievement.description}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
