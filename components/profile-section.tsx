"use client"

import { useState } from "react"
import { Brain, Code, Users, Lightbulb, Languages, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const skills = [
  {
    icon: <Brain className="h-8 w-8 text-[#232E8E]" />,
    title: "Pensamiento Lógico",
    description: "Capacidad para resolver problemas de manera estructurada y metódica.",
  },
  {
    icon: <Code className="h-8 w-8 text-[#232E8E]" />,
    title: "Aptitud Tecnológica",
    description: "Interés y facilidad para aprender nuevas tecnologías y herramientas.",
  },
  {
    icon: <Users className="h-8 w-8 text-[#232E8E]" />,
    title: "Trabajo en Equipo",
    description: "Habilidad para colaborar efectivamente en proyectos grupales.",
  },
  {
    icon: <Lightbulb className="h-8 w-8 text-[#232E8E]" />,
    title: "Creatividad",
    description: "Capacidad para proponer soluciones innovadoras a problemas complejos.",
  },
  {
    icon: <Languages className="h-8 w-8 text-[#232E8E]" />,
    title: "Inglés Técnico",
    description: "Comprensión del idioma inglés para documentación y recursos técnicos.",
  },
  {
    icon: <CheckCircle2 className="h-8 w-8 text-[#232E8E]" />,
    title: "Perseverancia",
    description: "Constancia y dedicación para superar desafíos y lograr objetivos.",
  },
]

const quizQuestions = [
  {
    question: "Interés en la tecnología: ¿Cuánto disfrutas aprender sobre nuevas tecnologías y herramientas digitales?",
    options: [
      { text: "a) Mucho", value: 10 },
      { text: "b) Algo", value: 7 },
      { text: "c) Poco", value: 4 },
      { text: "d) Nada", value: 1 },
    ],
  },
  {
    question:
      "Resolución de problemas: Cuando enfrentas un problema técnico, ¿te sientes motivado a encontrar una solución?",
    options: [
      { text: "a) Muy motivado", value: 10 },
      { text: "b) Algo motivado", value: 7 },
      { text: "c) Poco motivado", value: 4 },
      { text: "d) No motivado", value: 1 },
    ],
  },
  {
    question: "Trabajo en equipo: ¿Te sientes cómodo trabajando en equipo para desarrollar proyectos tecnológicos?",
    options: [
      { text: "a) Muy cómodo", value: 10 },
      { text: "b) Algo cómodo", value: 7 },
      { text: "c) Poco cómodo", value: 4 },
      { text: "d) Nada cómodo", value: 1 },
    ],
  },
  {
    question: "Creatividad: ¿Te gusta crear y desarrollar tus propias ideas o proyectos tecnológicos?",
    options: [
      { text: "a) Mucho", value: 10 },
      { text: "b) Algo", value: 7 },
      { text: "c) Poco", value: 4 },
      { text: "d) Nada", value: 1 },
    ],
  },
  {
    question: "Adaptabilidad: ¿Te sientes capaz de adaptarte a cambios rápidos en el entorno tecnológico?",
    options: [
      { text: "a) Muy capaz", value: 10 },
      { text: "b) Algo capaz", value: 7 },
      { text: "c) Poco capaz", value: 4 },
      { text: "d) Nada capaz", value: 1 },
    ],
  },
]

export function ProfileSection() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState<number[]>([])
  const [showResults, setShowResults] = useState(false)
  const [quizStarted, setQuizStarted] = useState(false)

  const handleAnswer = (value: number) => {
    const newAnswers = [...answers, value]
    setAnswers(newAnswers)

    if (currentQuestion < quizQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
    } else {
      setShowResults(true)
    }
  }

  const resetQuiz = () => {
    setCurrentQuestion(0)
    setAnswers([])
    setShowResults(false)
    setQuizStarted(false)
  }

  const calculateScore = () => {
    const total = answers.reduce((sum, value) => sum + value, 0)
    return Math.round((total / (quizQuestions.length * 10)) * 100)
  }

  const getResultMessage = (score: number) => {
    if (score >= 80) {
      return "¡Excelente! Tienes un perfil muy compatible con la carrera de Ingeniería en TIC."
    } else if (score >= 60) {
      return "¡Buen resultado! Tienes potencial para la carrera, aunque podrías fortalecer algunas áreas."
    } else {
      return "Tu perfil muestra algunas áreas de oportunidad. Te recomendamos explorar más sobre la carrera."
    }
  }

  return (
    <section className="py-16 bg-muted/30">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Perfil del Aspirante Ideal</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Conoce las habilidades y aptitudes que buscamos en nuestros futuros ingenieros en TIC.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold mb-6">Habilidades Clave</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {skills.map((skill, index) => (
                <Card key={index}>
                  <CardHeader className="flex flex-row items-center gap-4 pb-2">
                    {skill.icon}
                    <CardTitle className="text-lg">{skill.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>{skill.description}</CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-6">¿Esta carrera es para mí?</h3>
            <Card className="p-6">
              {!quizStarted && !showResults ? (
                <div className="text-center">
                  <h4 className="text-xl font-semibold mb-4">Test de Compatibilidad</h4>
                  <p className="mb-6 text-muted-foreground">
                    Responde 5 preguntas rápidas para evaluar si tu perfil es compatible con la carrera de Ingeniería en
                    TIC.
                  </p>
                  <Button onClick={() => setQuizStarted(true)} className="bg-[#1999D8] hover:bg-[#1999D8]/90">
                    Iniciar Test
                  </Button>
                </div>
              ) : showResults ? (
                <div className="text-center">
                  <h4 className="text-xl font-semibold mb-4">Resultados</h4>
                  <div className="mb-6">
                    <p className="text-sm text-muted-foreground mb-2">Compatibilidad con la carrera</p>
                    <Progress value={calculateScore()} className="h-4 mb-2" />
                    <p className="font-bold text-2xl">{calculateScore()}%</p>
                  </div>
                  <p className="mb-6">{getResultMessage(calculateScore())}</p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button onClick={resetQuiz} variant="outline">
                      Reiniciar Test
                    </Button>
                  </div>
                </div>
              ) : (
                <div>
                  <div className="mb-4 flex justify-between text-sm">
                    <span>
                      Pregunta {currentQuestion + 1} de {quizQuestions.length}
                    </span>
                    <span>{Math.round(((currentQuestion + 1) / quizQuestions.length) * 100)}% completado</span>
                  </div>
                  <Progress value={((currentQuestion + 1) / quizQuestions.length) * 100} className="h-2 mb-6" />

                  <h4 className="text-xl font-semibold mb-4">{quizQuestions[currentQuestion].question}</h4>
                  <div className="space-y-3">
                    {quizQuestions[currentQuestion].options.map((option, index) => (
                      <Button
                        key={index}
                        variant="outline"
                        className="w-full justify-start text-left h-auto py-3 px-4"
                        onClick={() => handleAnswer(option.value)}
                      >
                        {option.text}
                      </Button>
                    ))}
                  </div>
                </div>
              )}
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
