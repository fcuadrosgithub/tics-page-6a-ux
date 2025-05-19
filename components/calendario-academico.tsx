"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar } from "@/components/ui/calendar"
import { Badge } from "@/components/ui/badge"
import { Info } from "lucide-react"

type EventType =
  | "inicio"
  | "vacaciones"
  | "parcial"
  | "final"
  | "entrega"
  | "inscripcion"
  | "ceremonia"
  | "conferencia"
  | "taller"
  | "otro"

interface CalendarEvent {
  date: Date
  type: EventType
  title: string
  description: string
}

export default function CalendarioAcademico() {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date())

  // Eventos del calendario académico
  const events: CalendarEvent[] = [
    {
      date: new Date(2025, 0, 6), // 6 de enero de 2025
      type: "inicio",
      title: "Inicio de Semestre",
      description: "Primer día de clases del semestre Enero-Junio 2025",
    },
    {
      date: new Date(2025, 1, 3), // 3 de febrero de 2025
      type: "parcial",
      title: "Primera Evaluación Parcial",
      description: "Semana de exámenes del primer parcial",
    },
    {
      date: new Date(2025, 2, 17), // 17 de marzo de 2025
      type: "parcial",
      title: "Segunda Evaluación Parcial",
      description: "Semana de exámenes del segundo parcial",
    },
    {
      date: new Date(2025, 3, 14), // 14 de abril de 2025
      type: "vacaciones",
      title: "Vacaciones de Semana Santa",
      description: "Periodo vacacional de Semana Santa",
    },
    {
      date: new Date(2025, 4, 5), // 5 de mayo de 2025
      type: "parcial",
      title: "Tercera Evaluación Parcial",
      description: "Semana de exámenes del tercer parcial",
    },
    {
      date: new Date(2025, 5, 9), // 9 de junio de 2025
      type: "final",
      title: "Evaluación Final",
      description: "Semana de exámenes finales",
    },
    {
      date: new Date(2025, 5, 20), // 20 de junio de 2025
      type: "entrega",
      title: "Entrega de Calificaciones",
      description: "Fecha límite para la entrega de calificaciones finales",
    },
    {
      date: new Date(2025, 6, 1), // 1 de julio de 2025
      type: "inscripcion",
      title: "Inscripciones",
      description: "Periodo de inscripciones para el siguiente semestre",
    },
    {
      date: new Date(2025, 6, 15), // 15 de julio de 2025
      type: "ceremonia",
      title: "Ceremonia de Graduación",
      description: "Ceremonia de graduación para la generación 2020-2025",
    },
    {
      date: new Date(2025, 7, 10), // 10 de agosto de 2025
      type: "inicio",
      title: "Inicio de Semestre",
      description: "Primer día de clases del semestre Agosto-Diciembre 2025",
    },
  ]

  // Función para obtener eventos de una fecha específica
  const getEventsForDate = (date: Date | undefined): CalendarEvent[] => {
    if (!date) return []

    return events.filter(
      (event) =>
        event.date.getDate() === date.getDate() &&
        event.date.getMonth() === date.getMonth() &&
        event.date.getFullYear() === date.getFullYear(),
    )
  }

  // Función para obtener el color de la insignia según el tipo de evento
  const getBadgeColor = (type: EventType): string => {
    const colors: Record<EventType, string> = {
      inicio: "bg-green-500",
      vacaciones: "bg-blue-500",
      parcial: "bg-orange-500",
      final: "bg-red-500",
      entrega: "bg-purple-500",
      inscripcion: "bg-indigo-500",
      ceremonia: "bg-pink-500",
      conferencia: "bg-yellow-500",
      taller: "bg-teal-500",
      otro: "bg-gray-500",
    }

    return colors[type]
  }

  // Función para renderizar el día en el calendario
  const renderDay = (day: Date) => {
    const dayEvents = events.filter(
      (event) =>
        event.date.getDate() === day.getDate() &&
        event.date.getMonth() === day.getMonth() &&
        event.date.getFullYear() === day.getFullYear(),
    )

    if (dayEvents.length > 0) {
      return (
        <div className="relative">
          <div>{day.getDate()}</div>
          <div className="absolute bottom-0 left-0 right-0 flex justify-center">
            {dayEvents.map((event, index) => (
              <div key={index} className={`w-2 h-2 rounded-full mx-0.5 ${getBadgeColor(event.type)}`} />
            ))}
          </div>
        </div>
      )
    }

    return day.getDate()
  }

  const selectedEvents = getEventsForDate(selectedDate)

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <Card className="md:col-span-2">
        <CardHeader>
          <CardTitle>Calendario Académico 2025</CardTitle>
          <CardDescription>Fechas importantes para el año académico</CardDescription>
        </CardHeader>
        <CardContent>
          <Calendar
            mode="single"
            selected={selectedDate}
            onSelect={setSelectedDate}
            className="rounded-md border"
            components={{
              Day: ({ day, ...props }) => <button {...props}>{renderDay(day)}</button>,
            }}
          />

          <div className="mt-6 grid grid-cols-2 md:grid-cols-5 gap-2">
            <div className="flex items-center">
              <div className="w-3 h-3 rounded-full bg-green-500 mr-2"></div>
              <span className="text-xs">Inicio</span>
            </div>
            <div className="flex items-center">
              <div className="w-3 h-3 rounded-full bg-blue-500 mr-2"></div>
              <span className="text-xs">Vacaciones</span>
            </div>
            <div className="flex items-center">
              <div className="w-3 h-3 rounded-full bg-orange-500 mr-2"></div>
              <span className="text-xs">Parcial</span>
            </div>
            <div className="flex items-center">
              <div className="w-3 h-3 rounded-full bg-red-500 mr-2"></div>
              <span className="text-xs">Final</span>
            </div>
            <div className="flex items-center">
              <div className="w-3 h-3 rounded-full bg-purple-500 mr-2"></div>
              <span className="text-xs">Entrega</span>
            </div>
            <div className="flex items-center">
              <div className="w-3 h-3 rounded-full bg-indigo-500 mr-2"></div>
              <span className="text-xs">Inscripción</span>
            </div>
            <div className="flex items-center">
              <div className="w-3 h-3 rounded-full bg-pink-500 mr-2"></div>
              <span className="text-xs">Ceremonia</span>
            </div>
            <div className="flex items-center">
              <div className="w-3 h-3 rounded-full bg-yellow-500 mr-2"></div>
              <span className="text-xs">Conferencia</span>
            </div>
            <div className="flex items-center">
              <div className="w-3 h-3 rounded-full bg-teal-500 mr-2"></div>
              <span className="text-xs">Taller</span>
            </div>
            <div className="flex items-center">
              <div className="w-3 h-3 rounded-full bg-gray-500 mr-2"></div>
              <span className="text-xs">Otro</span>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Eventos del día</CardTitle>
          <CardDescription>
            {selectedDate
              ? selectedDate.toLocaleDateString("es-MX", {
                  weekday: "long",
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })
              : "Selecciona una fecha"}
          </CardDescription>
        </CardHeader>
        <CardContent>
          {selectedEvents.length > 0 ? (
            <div className="space-y-4">
              {selectedEvents.map((event, index) => (
                <div key={index} className="border rounded-lg p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Badge className={getBadgeColor(event.type)}>
                      {event.type.charAt(0).toUpperCase() + event.type.slice(1)}
                    </Badge>
                    <h3 className="font-medium">{event.title}</h3>
                  </div>
                  <p className="text-sm text-muted-foreground">{event.description}</p>
                </div>
              ))}
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center py-8 text-center text-muted-foreground">
              <Info className="h-10 w-10 mb-2" />
              <p>No hay eventos programados para esta fecha</p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
