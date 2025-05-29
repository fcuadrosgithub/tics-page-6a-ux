"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const menuItems = [
  { id: "inicio", label: "Inicio", href: "#hero" },
  { id: "instituto", label: "El Instituto", href: "#instituto" },
  { id: "admision", label: "Admisión", href: "#admision" },
  { id: "plan-estudios", label: "Plan de Estudios", href: "#plan-estudios" },
  { id: "perfil", label: "Perfil del Aspirante", href: "#perfil" },
  { id: "laboratorios", label: "Laboratorios", href: "#laboratorios" },
  { id: "vida-estudiantil", label: "Vida Estudiantil", href: "#vida-estudiantil" },
  { id: "becas", label: "Becas", href: "#becas" },
  { id: "convenios", label: "Convenios", href: "#convenios" },
  { id: "proyectos", label: "Proyectos", href: "#proyectos" },
  { id: "certificaciones", label: "Certificaciones", href: "#certificaciones" },
  { id: "contacto", label: "Contacto", href: "#contacto" },
]

export function NavigationMenu() {
  const [activeItem, setActiveItem] = useState("inicio")

  const scrollToSection = (href: string, id: string) => {
    setActiveItem(id)
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <nav className="sticky top-16 z-40 bg-gradient-to-r from-[#232E8E] to-[#1999D8] shadow-lg">
      <div className="container">
        <div className="flex overflow-x-auto scrollbar-hide py-2 gap-2">
          {menuItems.map((item) => (
            <Button
              key={item.id}
              variant="ghost"
              size="sm"
              className={cn(
                "whitespace-nowrap text-white hover:bg-white/20 transition-all duration-300",
                activeItem === item.id && "bg-white/30 font-bold",
              )}
              onClick={() => scrollToSection(item.href, item.id)}
            >
              {item.label}
            </Button>
          ))}
        </div>
      </div>
    </nav>
  )
}
