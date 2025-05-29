"use client"

import { useState } from "react"
import { MessageSquare, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Input } from "@/components/ui/input"

export function FloatingWhatsApp() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleChat = () => {
    setIsOpen(!isOpen)
  }

  const openWhatsApp = () => {
    window.open(
      "https://wa.me/1234567890?text=Hola,%20me%20interesa%20obtener%20información%20sobre%20la%20carrera%20de%20Ingeniería%20en%20TIC",
      "_blank",
    )
  }

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {isOpen && (
        <Card className="w-80 mb-4 shadow-lg">
          <CardHeader className="bg-[#B61023] text-white p-4 flex flex-row justify-between items-center">
            <div>
              <h3 className="font-bold">Soporte ITIC</h3>
              <p className="text-xs">Respuesta en menos de 10 minutos</p>
            </div>
            <Button variant="ghost" size="icon" className="text-white hover:bg-white/20" onClick={toggleChat}>
              <X className="h-5 w-5" />
            </Button>
          </CardHeader>
          <CardContent className="p-4">
            <div className="bg-muted p-3 rounded-lg mb-3 text-sm">
              ¡Hola! 👋 ¿En qué podemos ayudarte? Nuestro equipo está listo para resolver tus dudas sobre la carrera.
            </div>
          </CardContent>
          <CardFooter className="p-4 pt-0">
            <div className="flex gap-2 w-full">
              <Input placeholder="Escribe tu mensaje..." className="flex-1" />
              <Button className="bg-[#B61023] hover:bg-[#B61023]/90" onClick={openWhatsApp}>
                Enviar
              </Button>
            </div>
          </CardFooter>
        </Card>
      )}

      <Button
        size="icon"
        className="h-14 w-14 rounded-full bg-[#B61023] hover:bg-[#B61023]/90 shadow-lg"
        onClick={toggleChat}
      >
        <MessageSquare className="h-6 w-6" />
      </Button>
    </div>
  )
}
