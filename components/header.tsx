"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { useTheme } from "next-themes"
import { Menu, X, Sun, Moon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { theme, setTheme } = useTheme()

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)
  const toggleTheme = () => setTheme(theme === "dark" ? "light" : "dark")

  const sections = [
    { name: "Estudiantes", href: "#", disabled: true },
    { name: "Egresados", href: "#", disabled: true },
    { name: "Aspirantes", href: "/", disabled: false },
    { name: "Público General", href: "#", disabled: true },
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center gap-2">
            <Image src="/images/logo_itsoeh.png" alt="Logo ITSOEH" width={40} height={40} className="h-10 w-auto" />
            <div className="hidden md:block">
              <h1 className="text-lg font-bold">Ingeniería en TIC</h1>
              <p className="text-xs text-muted-foreground">ITSOEH - Transformando el futuro</p>
            </div>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          {sections.map((section) => (
            <Link
              key={section.name}
              href={section.href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-primary",
                section.disabled ? "text-muted-foreground pointer-events-none" : "",
                section.name === "Aspirantes" ? "text-[#1999D8] font-bold" : "",
              )}
            >
              {section.name}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" aria-label="Cambiar tema" onClick={toggleTheme}>
            {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </Button>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
            onClick={toggleMenu}
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden border-t p-4 bg-background">
          <nav className="flex flex-col space-y-4">
            {sections.map((section) => (
              <Link
                key={section.name}
                href={section.href}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-primary p-2 rounded-md",
                  section.disabled ? "text-muted-foreground pointer-events-none" : "",
                  section.name === "Aspirantes" ? "bg-accent text-[#1999D8] font-bold" : "",
                )}
                onClick={() => setIsMenuOpen(false)}
              >
                {section.name}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  )
}
