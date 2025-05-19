import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import Image from "next/image"

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <section className="py-12 md:py-20">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                Ingeniería en Tecnologías de la Información y Comunicaciones
              </h1>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                Instituto Tecnológico Superior del Occidente del Estado de Hidalgo
              </p>
            </div>
            <div className="space-x-4">
              <Link href="/estudiantes">
                <Button className="bg-blue-600 hover:bg-blue-700">
                  Estudiantes <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/egresados">
                <Button variant="outline">Egresados</Button>
              </Link>
              <Link href="/aspirantes">
                <Button variant="outline">Aspirantes</Button>
              </Link>
              <Link href="/publico">
                <Button variant="outline">Público General</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-20 bg-muted/50 rounded-xl">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Formando profesionales en TIC</h2>
                <p className="text-muted-foreground md:text-xl">
                  Preparamos a nuestros estudiantes con las habilidades y conocimientos necesarios para destacar en el
                  mundo digital actual.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link href="/estudiantes">
                  <Button>Conoce más</Button>
                </Link>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <Image
                src="/placeholder.svg?height=400&width=600"
                width={600}
                height={400}
                alt="Estudiantes de TIC"
                className="rounded-lg object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
