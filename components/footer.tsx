"use client"

import Link from "next/link"
import { Facebook, Instagram, Youtube } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t bg-muted/40">
      <div className="container py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Enlaces Institucionales</h3>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() =>
                    window.open("file:///C:/Users/luiss/Downloads/Profes/Calendario%202024-2025.pdf", "_blank")
                  }
                  className="text-sm text-muted-foreground hover:text-foreground cursor-pointer"
                >
                  Calendario Académico
                </button>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contacto</h3>
            <address className="not-italic text-sm text-muted-foreground space-y-2">
              <p>Paseo del Agrarismo 2000, Mixquiahuala de Juárez</p>
              <p>Hidalgo, México, C.P. 42700</p>
              <p>Tel: (738) 123-4567</p>
              <p>Email: itic@itsoeh.edu.mx</p>
            </address>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Síguenos</h3>
            <div className="flex space-x-4">
              <Link
                href="https://www.facebook.com/people/Tecnol%C3%B3gico-Nacional-de-M%C3%A9xico-Campus-Occidente-del-Estado-de-Hidalgo/100069473374138/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-[#1999D8]"
              >
                <Facebook className="h-6 w-6" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link
                href="https://www.instagram.com/itsoeh_oficial?igsh=MW1sanFsMWJlYjJlYg%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-[#1999D8]"
              >
                <Instagram className="h-6 w-6" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link
                href="https://www.youtube.com/user/ITSOEHoficial"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-[#1999D8]"
              >
                <Youtube className="h-6 w-6" />
                <span className="sr-only">YouTube</span>
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
          <p>
            © {new Date().getFullYear()} Instituto Tecnológico Superior del Occidente del Estado de Hidalgo. Todos los
            derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}
