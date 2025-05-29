import { Monitor, Wifi, Database, Shield, Cpu, Code } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const labs = [
  {
    icon: <Code className="h-12 w-12 text-[#1999D8]" />,
    name: "Laboratorio de Programación",
    description: "Equipado con las últimas tecnologías para desarrollo de software",
    equipment: ["30 computadoras de alto rendimiento", "IDEs profesionales", "Servidores de desarrollo"],
    software: ["Visual Studio", "IntelliJ IDEA", "Eclipse", "Git", "Docker"],
  },
  {
    icon: <Wifi className="h-12 w-12 text-[#1999D8]" />,
    name: "Laboratorio de Redes",
    description: "Infraestructura completa para configuración y administración de redes",
    equipment: ["Switches Cisco", "Routers empresariales", "Analizadores de red"],
    software: ["Packet Tracer", "Wireshark", "GNS3", "VMware"],
  },
  {
    icon: <Database className="h-12 w-12 text-[#1999D8]" />,
    name: "Laboratorio de Bases de Datos",
    description: "Servidores dedicados para gestión de grandes volúmenes de datos",
    equipment: ["Servidores Oracle", "Clusters de bases de datos", "Sistemas de respaldo"],
    software: ["Oracle Database", "MySQL", "PostgreSQL", "MongoDB"],
  },
  {
    icon: <Shield className="h-12 w-12 text-[#1999D8]" />,
    name: "Laboratorio de Ciberseguridad",
    description: "Entorno controlado para pruebas de penetración y análisis forense",
    equipment: ["Sistemas aislados", "Herramientas forenses", "Simuladores de ataques"],
    software: ["Kali Linux", "Metasploit", "Nmap", "Burp Suite"],
  },
  {
    icon: <Monitor className="h-12 w-12 text-[#1999D8]" />,
    name: "Laboratorio de Desarrollo Web",
    description: "Espacio dedicado al desarrollo de aplicaciones web modernas",
    equipment: ["Estaciones de trabajo", "Servidores web", "Dispositivos móviles"],
    software: ["Node.js", "React", "Angular", "Vue.js", "PHP"],
  },
  {
    icon: <Cpu className="h-12 w-12 text-[#1999D8]" />,
    name: "Laboratorio de Hardware",
    description: "Taller para ensamble, reparación y diagnóstico de equipos",
    equipment: ["Componentes electrónicos", "Herramientas especializadas", "Multímetros"],
    software: ["Simuladores de circuitos", "CAD electrónico", "Proteus"],
  },
]

export function LabsSection() {
  return (
    <section
      id="laboratorios"
      className="py-20 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900 dark:to-purple-900"
    >
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-[#232E8E] to-[#1999D8] bg-clip-text text-transparent">
            🔬 Laboratorios de Vanguardia
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Instalaciones equipadas con tecnología de última generación para una formación práctica y profesional.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {labs.map((lab, index) => (
            <Card
              key={index}
              className="border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <CardHeader className="text-center pb-4">
                <div className="mx-auto mb-4 p-4 rounded-full bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900 dark:to-purple-900">
                  {lab.icon}
                </div>
                <CardTitle className="text-xl">{lab.name}</CardTitle>
                <CardDescription className="text-base">{lab.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-[#232E8E] mb-2">🔧 Equipamiento:</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      {lab.equipment.map((item, idx) => (
                        <li key={idx} className="flex items-center">
                          <span className="w-2 h-2 bg-[#1999D8] rounded-full mr-2" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#232E8E] mb-2">💻 Software:</h4>
                    <div className="flex flex-wrap gap-1">
                      {lab.software.map((software, idx) => (
                        <span key={idx} className="px-2 py-1 bg-[#1999D8]/10 text-[#232E8E] text-xs rounded-full">
                          {software}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
