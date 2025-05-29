import { Building, Globe, Briefcase, Award } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const alliances = [
  {
    icon: <Building className="h-12 w-12 text-[#1999D8]" />,
    title: "Empresas Tecnológicas",
    description: "Convenios con líderes de la industria tech",
    partners: ["Microsoft", "Oracle", "Cisco", "IBM", "Google", "Amazon"],
    benefits: ["Prácticas profesionales", "Certificaciones gratuitas", "Ofertas laborales"],
  },
  {
    icon: <Globe className="h-12 w-12 text-[#1999D8]" />,
    title: "Universidades Internacionales",
    description: "Intercambios académicos y programas de movilidad",
    partners: ["Universidad de Valencia (España)", "TEC de Monterrey", "UNAM", "IPN"],
    benefits: ["Intercambios estudiantiles", "Doble titulación", "Investigación conjunta"],
  },
  {
    icon: <Briefcase className="h-12 w-12 text-[#1999D8]" />,
    title: "Sector Empresarial",
    description: "Alianzas con empresas para desarrollo profesional",
    partners: ["Grupo Bimbo", "Cemex", "Telmex", "CFE", "Pemex"],
    benefits: ["Bolsa de trabajo", "Proyectos reales", "Mentorías profesionales"],
  },
  {
    icon: <Award className="h-12 w-12 text-[#1999D8]" />,
    title: "Organismos Certificadores",
    description: "Validación internacional de competencias",
    partners: ["CompTIA", "Cisco Academy", "Microsoft Learn", "Oracle Academy"],
    benefits: ["Certificaciones reconocidas", "Exámenes con descuento", "Material oficial"],
  },
]

export function AlliancesSection() {
  return (
    <section id="convenios" className="py-20">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-[#232E8E] to-[#1999D8] bg-clip-text text-transparent">
            🤝 Convenios y Alianzas
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Colaboraciones estratégicas que amplían tus oportunidades académicas y profesionales a nivel nacional e
            internacional.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {alliances.map((alliance, index) => (
            <Card
              key={index}
              className="border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <CardHeader className="text-center pb-4">
                <div className="mx-auto mb-4 p-4 rounded-full bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900 dark:to-purple-900">
                  {alliance.icon}
                </div>
                <CardTitle className="text-xl">{alliance.title}</CardTitle>
                <CardDescription className="text-base">{alliance.description}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold text-[#232E8E] mb-2">🏢 Socios:</h4>
                  <div className="flex flex-wrap gap-2">
                    {alliance.partners.map((partner, idx) => (
                      <span key={idx} className="px-3 py-1 bg-[#1999D8]/10 text-[#232E8E] text-sm rounded-full">
                        {partner}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-[#232E8E] mb-2">✨ Beneficios:</h4>
                  <ul className="space-y-1">
                    {alliance.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center text-sm text-muted-foreground">
                        <span className="w-2 h-2 bg-[#1999D8] rounded-full mr-3" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
