"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { toast } from "@/hooks/use-toast"

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulación de envío de formulario
    setTimeout(() => {
      setIsSubmitting(false)
      toast({
        title: "Solicitud enviada",
        description: "Nos pondremos en contacto contigo pronto.",
      })

      // Reset form
      const form = e.target as HTMLFormElement
      form.reset()
    }, 1500)
  }

  return (
    <section className="py-16">
      <div className="container">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Solicitud de Información</h2>
            <p className="text-lg text-muted-foreground">
              ¿Tienes dudas sobre la carrera? Completa el formulario y un asesor se pondrá en contacto contigo.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="nombre">Nombre completo</Label>
                <Input id="nombre" placeholder="Escribe tu nombre" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Correo electrónico</Label>
                <Input id="email" type="email" placeholder="tu@email.com" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="telefono">Teléfono</Label>
                <Input id="telefono" type="tel" placeholder="(123) 456-7890" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="interes">Área de interés</Label>
                <Select>
                  <SelectTrigger id="interes">
                    <SelectValue placeholder="Selecciona una opción" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="admision">Proceso de admisión</SelectItem>
                    <SelectItem value="becas">Becas y financiamiento</SelectItem>
                    <SelectItem value="plan">Plan de estudios</SelectItem>
                    <SelectItem value="certificaciones">Certificaciones</SelectItem>
                    <SelectItem value="otro">Otro</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="mensaje">Mensaje</Label>
              <Textarea id="mensaje" placeholder="Escribe tus dudas o comentarios aquí" className="min-h-[120px]" />
            </div>

            <div className="flex items-start space-x-2">
              <Checkbox id="newsletter" />
              <div className="grid gap-1.5 leading-none">
                <Label
                  htmlFor="newsletter"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Suscribirme al boletín informativo
                </Label>
                <p className="text-sm text-muted-foreground">
                  Recibe información sobre eventos, fechas importantes y noticias de la carrera.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-2">
              <Checkbox id="privacidad" required />
              <div className="grid gap-1.5 leading-none">
                <Label
                  htmlFor="privacidad"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Acepto la política de privacidad
                </Label>
                <p className="text-sm text-muted-foreground">
                  He leído y acepto el{" "}
                  <a href="#" className="underline text-[#1999D8]">
                    aviso de privacidad
                  </a>
                  .
                </p>
              </div>
            </div>

            <Button type="submit" className="w-full bg-[#1999D8] hover:bg-[#1999D8]/90" disabled={isSubmitting}>
              {isSubmitting ? "Enviando..." : "Enviar solicitud"}
            </Button>
          </form>
        </div>
      </div>
    </section>
  )
}
