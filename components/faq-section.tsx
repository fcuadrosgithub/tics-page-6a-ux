"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const faqCategories = [
  {
    id: "costos",
    label: "Costos y becas",
    questions: [
      {
        question: "¿Cuál es el costo de la inscripción y colegiaturas?",
        answer:
          "La inscripción semestral tiene un costo de $1,500 MXN. Las colegiaturas mensuales son de $1,800 MXN, con descuentos por pronto pago del 10%.",
      },
      {
        question: "¿Qué tipos de becas ofrece la institución?",
        answer:
          "Ofrecemos becas académicas (por promedio), deportivas, culturales, y socioeconómicas. Los porcentajes van desde el 25% hasta el 100% dependiendo del tipo de beca y situación del estudiante.",
      },
      {
        question: "¿Existe algún plan de financiamiento para el pago de la carrera?",
        answer:
          "Sí, contamos con convenios con instituciones financieras que ofrecen créditos educativos con tasas preferenciales y planes de pago flexibles durante y después de la carrera.",
      },
      {
        question: "¿Cuáles son los requisitos para mantener una beca?",
        answer:
          "Para mantener las becas académicas se requiere un promedio mínimo de 8.5, no tener materias reprobadas y cumplir con el servicio becario (4-8 horas semanales dependiendo del porcentaje de beca).",
      },
    ],
  },
  {
    id: "requisitos",
    label: "Requisitos académicos",
    questions: [
      {
        question: "¿Qué promedio mínimo se requiere para ingresar?",
        answer:
          "El promedio mínimo requerido es de 7.0 en el bachillerato. Sin embargo, para aspirar a becas académicas se recomienda un promedio de 8.5 o superior.",
      },
      {
        question: "¿Qué áreas de bachillerato son compatibles con la carrera?",
        answer:
          "Son compatibles los bachilleratos en áreas físico-matemáticas, tecnológicas, computación y económico-administrativas. Otras áreas pueden requerir un curso propedéutico.",
      },
      {
        question: "¿Se requiere examen de admisión?",
        answer:
          "Sí, todos los aspirantes deben presentar un examen de conocimientos generales y específicos en matemáticas, física y comprensión lectora.",
      },
      {
        question: "¿Es necesario tener conocimientos previos de programación?",
        answer:
          "No es requisito, pero es recomendable tener nociones básicas. Ofrecemos cursos de nivelación para estudiantes sin experiencia previa en programación.",
      },
    ],
  },
  {
    id: "vida",
    label: "Vida estudiantil",
    questions: [
      {
        question: "¿Qué actividades extracurriculares ofrece la institución?",
        answer:
          "Contamos con clubes de robótica, desarrollo de videojuegos, ciberseguridad, deportes (fútbol, básquetbol, voleibol), actividades culturales y hackathones semestrales.",
      },
      {
        question: "¿Existen dormitorios o residencias estudiantiles?",
        answer:
          "La institución no cuenta con dormitorios propios, pero tenemos convenios con residencias cercanas que ofrecen tarifas especiales para nuestros estudiantes.",
      },
      {
        question: "¿Cuál es el horario de clases?",
        answer:
          "Las clases se imparten de lunes a viernes en horario matutino (7:00-14:00) o vespertino (14:00-21:00), dependiendo del semestre y disponibilidad de grupos.",
      },
      {
        question: "¿Se ofrecen servicios de alimentación en el campus?",
        answer:
          "Sí, contamos con una cafetería que ofrece desayunos y comidas a precios accesibles, además de áreas de comedor para estudiantes que traen su propio alimento.",
      },
    ],
  },
]

export function FaqSection() {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Preguntas Frecuentes</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Resolvemos tus dudas más comunes sobre la carrera y el proceso de admisión.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Tabs defaultValue="costos">
            <TabsList className="grid w-full grid-cols-3">
              {faqCategories.map((category) => (
                <TabsTrigger key={category.id} value={category.id}>
                  {category.label}
                </TabsTrigger>
              ))}
            </TabsList>

            {faqCategories.map((category) => (
              <TabsContent key={category.id} value={category.id} className="mt-6">
                <Accordion type="single" collapsible className="w-full">
                  {category.questions.map((faq, index) => (
                    <AccordionItem key={index} value={`item-${index}`}>
                      <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                      <AccordionContent>{faq.answer}</AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </div>
    </section>
  )
}
