"use client"

import { FileText } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const steps = [
  {
    icon: <FileText className="h-10 w-10 text-[#232E8E]" />,
    title: "Requisitos",
    description: "Documentación y promedio mínimo necesarios para tu solicitud",
    action: "Ver requisitos",
    content: `
        <div class="p-4 bg-muted rounded-lg mt-4">
          <h4 class="font-bold mb-2">Para ingresar al ITSOEH, debes:</h4>
          <ol class="list-decimal pl-5 space-y-2">
            <li>Solicitar la ficha de evaluación diagnóstica (incluye realizar el pago correspondiente).</li>
          </ol>
          
          <h4 class="font-bold mt-4 mb-2">Documentos requeridos:</h4>
          <ul class="list-disc pl-5 space-y-1">
            <li>Certificado del Bachillerato: Original y legible.</li>
            <li>Acta de nacimiento: Original y legible.</li>
            <li>CURP: Original y legible.</li>
            <li>Comprobante de domicilio: Original y legible.</li>
          </ul>
          
          <p class="mt-4 text-sm italic">Es importante realizar el pago de la ficha de evaluación diagnóstica antes de presentar los documentos requeridos para la admisión.</p>
        </div>
      `,
  },
]

export function AdmissionProcess() {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Proceso de Admisión</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Conoce los pasos para formar parte de nuestra comunidad educativa y comenzar tu camino hacia el éxito
            profesional.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-6 max-w-md mx-auto">
          {steps.map((step, index) => (
            <Card key={index} className={step.highlight ? "border-[#B61023]" : ""}>
              <CardHeader className="text-center pb-2">
                <div className="mx-auto mb-2">{step.icon}</div>
                <CardTitle>{step.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="mb-4">{step.description}</CardDescription>
                {step.title === "Requisitos" ? (
                  <div>
                    <Button
                      variant="outline"
                      className="mb-2"
                      onClick={() => {
                        const content = document.getElementById(`content-${index}`)
                        if (content) {
                          content.classList.toggle("hidden")
                        }
                      }}
                    >
                      {step.action}
                    </Button>
                    <div
                      id={`content-${index}`}
                      className="hidden"
                      dangerouslySetInnerHTML={{ __html: step.content || "" }}
                    />
                  </div>
                ) : (
                  <Button
                    variant={step.highlight ? "default" : "outline"}
                    className={step.highlight ? "bg-[#B61023] hover:bg-[#B61023]/90" : ""}
                  >
                    {step.action}
                  </Button>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16">
          <h3 className="text-2xl font-bold mb-6 text-center">Cronograma del Proceso</h3>
          <div className="relative">
            {/* Timeline */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-[#1999D8] -translate-x-1/2" />

            <div className="space-y-12">
              <TimelineItem
                date="15 de Mayo"
                title="Apertura de convocatoria"
                description="Inicio del registro de aspirantes en línea"
                position="left"
              />
              <TimelineItem
                date="30 de Junio"
                title="Cierre de registros"
                description="Fecha límite para completar tu solicitud en línea"
                position="right"
                highlight={true}
              />
              <TimelineItem
                date="15 de Julio"
                title="Examen de admisión"
                description="Presentación del examen de conocimientos"
                position="left"
              />
              <TimelineItem
                date="1 de Agosto"
                title="Publicación de resultados"
                description="Consulta tu estatus en el portal de aspirantes"
                position="right"
              />
              <TimelineItem
                date="15-30 de Agosto"
                title="Inscripciones"
                description="Periodo de inscripción para aspirantes aceptados"
                position="left"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function TimelineItem({
  date,
  title,
  description,
  position,
  highlight = false,
}: {
  date: string
  title: string
  description: string
  position: "left" | "right"
  highlight?: boolean
}) {
  return (
    <div className={`flex flex-col ${position === "right" ? "md:flex-row-reverse" : "md:flex-row"} items-center`}>
      <div className="md:w-1/2 p-4">
        <div className={`p-4 rounded-lg border ${highlight ? "border-[#B61023] bg-[#B61023]/5" : "bg-card"}`}>
          <h4 className="font-bold text-lg">{title}</h4>
          <p className="text-muted-foreground">{description}</p>
        </div>
      </div>
      <div className="md:w-1/2 flex justify-center items-center">
        <div className="relative">
          <div
            className={`w-10 h-10 rounded-full ${highlight ? "bg-[#B61023]" : "bg-[#1999D8]"} flex items-center justify-center text-white font-bold z-10 relative`}
          >
            <span className="text-xs">{date.split(" ")[0]}</span>
          </div>
          <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 whitespace-nowrap text-xs font-medium">
            {date.split(" ")[1]} {date.split(" ")[2]}
          </div>
        </div>
      </div>
    </div>
  )
}
