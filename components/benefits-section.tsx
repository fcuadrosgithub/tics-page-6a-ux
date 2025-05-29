import { Award, Globe, Briefcase } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const benefits = [
  {
    icon: <Briefcase className="h-12 w-12 text-[#1999D8]" />,
    title: "Bolsa de Trabajo Exclusiva",
    description:
      "Acceso a oportunidades laborales en empresas líderes del sector tecnológico a nivel nacional e internacional.",
    features: [
      "Convenios con más de 50 empresas del sector",
      "Prácticas profesionales remuneradas",
      "Ferias de empleo semestrales",
      "Seguimiento personalizado de tu carrera",
    ],
  },
  {
    icon: <Award className="h-12 w-12 text-[#1999D8]" />,
    title: "Certificaciones Internacionales",
    description: "Prepárate y obtén certificaciones reconocidas globalmente que potenciarán tu perfil profesional.",
    features: [
      "Cisco Networking Academy",
      "Microsoft Certified Professional",
      "Oracle Database Administrator",
      "CompTIA Security+",
    ],
  },
  {
    icon: <Globe className="h-12 w-12 text-[#1999D8]" />,
    title: "Movilidad Estudiantil",
    description: "Amplía tus horizontes académicos y culturales con nuestros programas de intercambio internacional.",
    features: [
      "Convenios con universidades en España, EE.UU. y Canadá",
      "Becas de movilidad",
      "Programas de verano en Silicon Valley",
      "Congresos internacionales",
    ],
  },
]

export function BenefitsSection() {
  return (
    <section className="py-16">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Beneficios y Diferenciadores</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Descubre las ventajas que te ofrece nuestra carrera para impulsar tu desarrollo profesional.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <Card key={index} className="flex flex-col h-full">
              <CardHeader className="pb-2">
                <div className="mb-4">{benefit.icon}</div>
                <CardTitle className="text-xl">{benefit.title}</CardTitle>
                <CardDescription>{benefit.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-1">
                <ul className="space-y-2">
                  {benefit.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="text-[#232E8E] mr-2">•</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
