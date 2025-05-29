import { Award, CheckCircle, Star, Globe } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const certifications = [
  {
    provider: "Cisco",
    logo: "🔗",
    certifications: [
      { name: "CCNA", level: "Asociado", included: true },
      { name: "CCNP", level: "Profesional", included: false },
      { name: "CCIE", level: "Experto", included: false },
    ],
    description: "Certificaciones en redes y ciberseguridad reconocidas mundialmente",
    benefits: ["Material oficial incluido", "Laboratorios virtuales", "Exámenes con descuento"],
  },
  {
    provider: "Microsoft",
    logo: "🪟",
    certifications: [
      { name: "Azure Fundamentals", level: "Fundamental", included: true },
      { name: "Azure Developer", level: "Asociado", included: false },
      { name: "Azure Solutions Architect", level: "Experto", included: false },
    ],
    description: "Certificaciones en cloud computing y desarrollo de aplicaciones",
    benefits: ["Acceso a Azure for Students", "Créditos gratuitos", "Capacitación oficial"],
  },
  {
    provider: "Oracle",
    logo: "🗄️",
    certifications: [
      { name: "Oracle Database SQL", level: "Asociado", included: true },
      { name: "Oracle PL/SQL", level: "Profesional", included: false },
      { name: "Oracle DBA", level: "Experto", included: false },
    ],
    description: "Certificaciones en bases de datos y desarrollo empresarial",
    benefits: ["Oracle Academy membership", "Software gratuito", "Recursos de aprendizaje"],
  },
  {
    provider: "CompTIA",
    logo: "🛡️",
    certifications: [
      { name: "A+", level: "Fundamental", included: true },
      { name: "Network+", level: "Asociado", included: false },
      { name: "Security+", level: "Profesional", included: false },
    ],
    description: "Certificaciones vendor-neutral en TI y ciberseguridad",
    benefits: ["Preparación integral", "Simuladores de examen", "Vouchers con descuento"],
  },
]

const stats = [
  { icon: <Award className="h-8 w-8 text-[#1999D8]" />, value: "15+", label: "Certificaciones disponibles" },
  { icon: <CheckCircle className="h-8 w-8 text-[#1999D8]" />, value: "85%", label: "Tasa de aprobación" },
  { icon: <Star className="h-8 w-8 text-[#1999D8]" />, value: "500+", label: "Estudiantes certificados" },
  { icon: <Globe className="h-8 w-8 text-[#1999D8]" />, value: "Global", label: "Reconocimiento mundial" },
]

export function CertificationsSection() {
  return (
    <section id="certificaciones" className="py-20">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-[#232E8E] to-[#1999D8] bg-clip-text text-transparent">
            🏅 Certificaciones Internacionales
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Obtén certificaciones reconocidas mundialmente que potenciarán tu perfil profesional y te abrirán puertas en
            el mercado laboral global.
          </p>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <Card key={index} className="text-center border-none shadow-lg">
              <CardContent className="pt-6">
                <div className="flex justify-center mb-4">{stat.icon}</div>
                <div className="text-3xl font-bold text-[#232E8E] mb-2">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Certifications */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {certifications.map((cert, index) => (
            <Card
              key={index}
              className="border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <CardHeader className="pb-4">
                <div className="flex items-center gap-4 mb-4">
                  <div className="text-4xl">{cert.logo}</div>
                  <div>
                    <CardTitle className="text-2xl">{cert.provider}</CardTitle>
                    <CardDescription className="text-base">{cert.description}</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h4 className="font-semibold text-[#232E8E] mb-3">📜 Certificaciones disponibles:</h4>
                  <div className="space-y-2">
                    {cert.certifications.map((certification, idx) => (
                      <div
                        key={idx}
                        className="flex items-center justify-between p-3 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900 dark:to-purple-900 rounded-lg"
                      >
                        <div>
                          <span className="font-medium">{certification.name}</span>
                          <Badge variant="outline" className="ml-2 text-xs">
                            {certification.level}
                          </Badge>
                        </div>
                        {certification.included ? (
                          <Badge className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
                            ✅ Incluida
                          </Badge>
                        ) : (
                          <Badge variant="outline" className="text-orange-600">
                            💰 Opcional
                          </Badge>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-[#232E8E] mb-2">🎁 Beneficios:</h4>
                  <ul className="space-y-1">
                    {cert.benefits.map((benefit, idx) => (
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

        {/* Call to Action */}
        <div className="mt-16 bg-gradient-to-r from-[#232E8E] to-[#1999D8] rounded-2xl p-8 text-white text-center">
          <h3 className="text-3xl font-bold mb-4">🚀 Impulsa tu carrera profesional</h3>
          <p className="text-xl mb-6 opacity-90">
            Las certificaciones internacionales son tu pasaporte al éxito en el mundo tecnológico global
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <div className="font-bold">💼 Mejor empleabilidad</div>
              <div className="opacity-80">Destaca en procesos de selección</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <div className="font-bold">💰 Mejores salarios</div>
              <div className="opacity-80">Hasta 40% más de ingresos</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <div className="font-bold">🌍 Oportunidades globales</div>
              <div className="opacity-80">Reconocimiento internacional</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
