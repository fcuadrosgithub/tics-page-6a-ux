import Link from "next/link"
import { Facebook, Twitter, Instagram, Mail, MapPin, Phone } from "lucide-react"

export default function Footer() {
  return (
    <footer className="w-full border-t bg-background py-6">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div className="space-y-3">
            <h3 className="text-lg font-medium">ITSOEH</h3>
            <p className="text-sm text-muted-foreground">
              Instituto Tecnológico Superior del Occidente del Estado de Hidalgo
            </p>
            <div className="flex space-x-3">
              <Link href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <Facebook className="h-5 w-5 text-muted-foreground hover:text-primary" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <Twitter className="h-5 w-5 text-muted-foreground hover:text-primary" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <Instagram className="h-5 w-5 text-muted-foreground hover:text-primary" />
                <span className="sr-only">Instagram</span>
              </Link>
            </div>
          </div>
          <div className="space-y-3">
            <h3 className="text-lg font-medium">Enlaces rápidos</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/estudiantes" className="text-muted-foreground hover:text-primary">
                  Estudiantes
                </Link>
              </li>
              <li>
                <Link href="/egresados" className="text-muted-foreground hover:text-primary">
                  Egresados
                </Link>
              </li>
              <li>
                <Link href="/aspirantes" className="text-muted-foreground hover:text-primary">
                  Aspirantes
                </Link>
              </li>
              <li>
                <Link href="/publico" className="text-muted-foreground hover:text-primary">
                  Público General
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-3">
            <h3 className="text-lg font-medium">Contacto</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start">
                <MapPin className="mr-2 h-5 w-5 text-muted-foreground" />
                <span className="text-muted-foreground">Mixquiahuala de Juárez, Hidalgo, México</span>
              </li>
              <li className="flex items-center">
                <Phone className="mr-2 h-5 w-5 text-muted-foreground" />
                <span className="text-muted-foreground">(+52) 738 123 4567</span>
              </li>
              <li className="flex items-center">
                <Mail className="mr-2 h-5 w-5 text-muted-foreground" />
                <span className="text-muted-foreground">contacto@itsoeh.edu.mx</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t pt-6 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} ITSOEH. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
