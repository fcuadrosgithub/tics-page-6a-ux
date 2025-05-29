import { Users, Trophy, Music, Gamepad2, Coffee, Heart } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const activities = [
  {
    icon: <Trophy className="h-10 w-10 text-[#1999D8]" />,
    title: "Deportes",
    description: "Equipos representativos en fútbol, básquetbol, voleibol y más",
    details: ["Torneos interinstitucionales", "Instalaciones deportivas", "Entrenadores certificados"],
  },
  {
    icon: <Gamepad2 className="h-10 w-10 text-[#1999D8]" />,
    title: "Esports y Gaming",
    description: "Competencias de videojuegos y desarrollo de juegos",
    details: ["Torneos de League of Legends", "Desarrollo de videojuegos", "Streaming y contenido"],
  },
  {
    icon: <Music className="h-10 w-10 text-[#1999D8]" />,
    title: "Actividades Culturales",
    description: "Expresión artística y cultural para el desarrollo integral",
    details: ["Grupo de danza", "Banda de guerra", "Festivales culturales"],
  },
  {
    icon: <Users className="h-10 w-10 text-[#1999D8]" />,
    title: "Clubes Estudiantiles",
    description: "Organizaciones dirigidas por estudiantes",
    details: ["Club de Robótica", "Sociedad de Alumnos", "Voluntariado social"],
  },
  {
    icon: <Coffee className="h-10 w-10 text-[#1999D8]" />,
    title: "Espacios de Convivencia",
    description: "Áreas diseñadas para el descanso y socialización",
    details: ["Cafetería estudiantil", "Áreas verdes", "Salas de estudio"],
  },
  {
    icon: <Heart className="h-10 w-10 text-[#1999D8]" />,
    title: "Bienestar Estudiantil",
    description: "Servicios de apoyo para el desarrollo personal",
    details: ["Orientación psicológica", "Servicios médicos", "Programas de tutoría"],
  },
]

export function StudentLifeSection() {
  return (
    <section id="vida-estudiantil" className="py-20">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-[#232E8E] to-[#1999D8] bg-clip-text text-transparent">
            🎓 Vida Estudiantil
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Una experiencia universitaria completa que va más allá del aula, fomentando el crecimiento personal y
            profesional.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {activities.map((activity, index) => (
            <Card
              key={index}
              className="border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <CardHeader className="text-center pb-4">
                <div className="mx-auto mb-4 p-3 rounded-full bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900 dark:to-purple-900">
                  {activity.icon}
                </div>
                <CardTitle className="text-xl">{activity.title}</CardTitle>
                <CardDescription className="text-base">{activity.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {activity.details.map((detail, idx) => (
                    <li key={idx} className="flex items-center text-sm text-muted-foreground">
                      <span className="w-2 h-2 bg-[#1999D8] rounded-full mr-3" />
                      {detail}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Events Calendar Preview */}
        <div className="mt-16 bg-gradient-to-r from-[#232E8E] to-[#1999D8] rounded-2xl p-8 text-white">
          <h3 className="text-3xl font-bold mb-6 text-center">📅 Próximos Eventos</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <div className="text-sm opacity-80">15 Marzo</div>
              <div className="font-bold">Hackathon ITSOEH 2025</div>
              <div className="text-sm opacity-80">48 horas de programación intensiva</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <div className="text-sm opacity-80">22 Marzo</div>
              <div className="font-bold">Feria de Empleo Tech</div>
              <div className="text-sm opacity-80">Empresas líderes en tecnología</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <div className="text-sm opacity-80">5 Abril</div>
              <div className="font-bold">Conferencia de IA</div>
              <div className="text-sm opacity-80">Expertos internacionales</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
