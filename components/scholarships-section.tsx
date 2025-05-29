"use client"

import { GraduationCap, DollarSign, Trophy, Heart } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const scholarships = [
  {
    icon: <GraduationCap className="h-12 w-12 text-[#1999D8]" />,
    title: "Beca de Excelencia Académica",
    percentage: "50% - 100%",
    requirements: ["Promedio mínimo de 9.0", "Sin materias reprobadas", "Servicio becario"],
    description: "Para estudiantes con alto rendimiento académico",
    color: "from-green-400 to-green-600",
  },
  {
    icon: <Heart className="h-12 w-12 text-[#1999D8]" />,
    title: "Beca Socioeconómica",
    percentage: "25% - 75%",
    requirements: ["Estudio socioeconómico", "Promedio mínimo de 8.0", "Comprobantes de ingresos"],
    description: "Apoyo para estudiantes con necesidades económicas",
    color: "from-blue-400 to-blue-600",
  },
  {
    icon: <Trophy className="h-12 w-12 text-[#1999D8]" />,
    title: "Beca Deportiva y Cultural",
    percentage: "30% - 60%",
    requirements: ["Participación en equipos representativos", "Promedio mínimo de 8.5", "Compromiso de participación"],
    description: "Para atletas y artistas destacados",
    color: "from-purple-400 to-purple-600",
  },
  {
    icon: <DollarSign className="h-12 w-12 text-[#1999D8]" />,
    title: "Financiamiento Educativo",
    percentage: "Crédito",
    requirements: ["Aval solidario", "Historial crediticio", "Comprobantes de ingresos"],
    description: "Créditos educativos con tasas preferenciales",
    color: "from-orange-400 to-orange-600",
  },
]

const benefits = [
  "📚 Reducción en colegiaturas mensuales",
  "🎓 Apoyo para materiales de estudio",
  "💻 Acceso prioritario a laboratorios",
  "🌟 Reconocimiento institucional",
  "🤝 Programas de mentoría",
  "🎯 Orientación profesional",
]

export function ScholarshipsSection() {
  return (
    <section
      id="becas"
      className="py-20 bg-gradient-to-br from-green-50 to-blue-50 dark:from-green-900 dark:to-blue-900"
    >
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-[#232E8E] to-[#1999D8] bg-clip-text text-transparent">
            💰 Becas y Financiamiento
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Múltiples opciones de apoyo económico para que puedas enfocarte en tu formación profesional sin
            preocupaciones financieras.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {scholarships.map((scholarship, index) => (
            <Card
              key={index}
              className="border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <CardHeader className="text-center pb-4">
                <div className="mx-auto mb-4 p-4 rounded-full bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900 dark:to-purple-900">
                  {scholarship.icon}
                </div>
                <CardTitle className="text-xl">{scholarship.title}</CardTitle>
                <div
                  className={`text-2xl font-bold bg-gradient-to-r ${scholarship.color} bg-clip-text text-transparent`}
                >
                  {scholarship.percentage}
                </div>
                <CardDescription className="text-base">{scholarship.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-[#232E8E] mb-2">📋 Requisitos:</h4>
                    <ul className="space-y-1">
                      {scholarship.requirements.map((req, idx) => (
                        <li key={idx} className="flex items-center text-sm text-muted-foreground">
                          <span className="w-2 h-2 bg-[#1999D8] rounded-full mr-3" />
                          {req}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Benefits Section */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg">
          <h3 className="text-2xl font-bold text-center mb-8 text-[#232E8E]">🎁 Beneficios Adicionales</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="flex items-center p-3 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900 dark:to-purple-900 rounded-lg"
              >
                <span className="text-sm">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
