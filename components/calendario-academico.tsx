"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar } from "@/components/ui/calendar"
import { Badge } from "@/components/ui/badge"
import { Info } from "lucide-react"
import Link from "next/link"

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
  const renderDay = (day: Date | undefined) => {
    if (!day || !(day instanceof Date) || isNaN(day.getTime())) {
      return null
    }

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
          <div className="w-full">
            <Calendar
              mode="single"
              selected={selectedDate}
              onSelect={setSelectedDate}
              className="rounded-md border w-full"
              classNames={{
                months: "flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0",
                month: "space-y-4 w-full",
                caption: "flex justify-center pt-1 relative items-center",
                caption_label: "text-lg font-medium",
                nav: "space-x-1 flex items-center",
                nav_button: "h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100",
                nav_button_previous: "absolute left-1",
                nav_button_next: "absolute right-1",
                table: "w-full border-collapse space-y-1",
                head_row: "flex w-full",
                head_cell: "text-muted-foreground rounded-md w-full font-normal text-[0.8rem] flex-1 text-center py-2",
                row: "flex w-full mt-2",
                cell: "relative p-0 text-center text-sm focus-within:relative focus-within:z-20 flex-1 h-12",
                day: "h-12 w-full p-0 font-normal aria-selected:opacity-100 hover:opacity-80 focus:opacity-80 relative flex items-center justify-center rounded-md transition-all",
                day_selected: "ring-2 ring-primary ring-offset-2 font-bold",
                day_today: "ring-2 ring-accent font-semibold",
                day_outside: "text-muted-foreground opacity-50",
                day_disabled: "text-muted-foreground opacity-50",
                day_range_middle: "aria-selected:bg-accent aria-selected:text-accent-foreground",
                day_hidden: "invisible",
              }}
              components={{
                Day: ({ date, ...props }) => {
                  if (!date) return null

                  const dayEvents = events.filter(
                    (event) =>
                      event.date.getDate() === date.getDate() &&
                      event.date.getMonth() === date.getMonth() &&
                      event.date.getFullYear() === date.getFullYear(),
                  )

                  // Determinar el color de fondo basado en el evento más importante
                  let backgroundColor = ""
                  let textColor = "text-foreground"

                  if (dayEvents.length > 0) {
                    const primaryEvent = dayEvents[0] // Tomar el primer evento como principal
                    switch (primaryEvent.type) {
                      case "inicio":
                        backgroundColor = "bg-green-500"
                        textColor = "text-white"
                        break
                      case "vacaciones":
                        backgroundColor = "bg-blue-500"
                        textColor = "text-white"
                        break
                      case "parcial":
                        backgroundColor = "bg-orange-500"
                        textColor = "text-white"
                        break
                      case "final":
                        backgroundColor = "bg-red-500"
                        textColor = "text-white"
                        break
                      case "entrega":
                        backgroundColor = "bg-purple-500"
                        textColor = "text-white"
                        break
                      case "inscripcion":
                        backgroundColor = "bg-indigo-500"
                        textColor = "text-white"
                        break
                      case "ceremonia":
                        backgroundColor = "bg-pink-500"
                        textColor = "text-white"
                        break
                      case "conferencia":
                        backgroundColor = "bg-yellow-500"
                        textColor = "text-black"
                        break
                      case "taller":
                        backgroundColor = "bg-teal-500"
                        textColor = "text-white"
                        break
                      case "otro":
                        backgroundColor = "bg-gray-500"
                        textColor = "text-white"
                        break
                    }
                  }

                  return (
                    <button
                      {...props}
                      className={`${props.className} ${backgroundColor} ${textColor}`}
                      title={dayEvents.length > 0 ? dayEvents.map((e) => e.title).join(", ") : ""}
                    >
                      <div className="relative w-full h-full flex flex-col items-center justify-center">
                        <span className="text-sm font-medium">{date.getDate()}</span>
                        {dayEvents.length > 1 && (
                          <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 flex gap-0.5">
                            {dayEvents.slice(1, 4).map((event, index) => (
                              <div
                                key={index}
                                className={`w-1.5 h-1.5 rounded-full ${getBadgeColor(event.type)} ring-1 ring-white`}
                                title={event.title}
                              />
                            ))}
                            {dayEvents.length > 4 && (
                              <div
                                className="w-1.5 h-1.5 rounded-full bg-white ring-1 ring-gray-400"
                                title={`+${dayEvents.length - 4} más`}
                              />
                            )}
                          </div>
                        )}
                      </div>
                    </button>
                  )
                },
              }}
            />

            <div className="mt-6 flex justify-center">
              <Link href="/calendario.png" target="_blank" rel="noopener noreferrer">
                <button
                  className="px-6 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors font-medium"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Mostrar calendario Detallado
                </button>
              </Link>
            </div>

            <div className="mt-8 p-4 bg-muted/30 rounded-lg">
              <h4 className="font-semibold mb-4 text-center">Leyenda de Eventos</h4>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
                <div className="flex items-center space-x-2">
                  <div className="w-4 h-4 rounded-full bg-green-500"></div>
                  <span className="text-sm font-medium">Inicio</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-4 h-4 rounded-full bg-blue-500"></div>
                  <span className="text-sm font-medium">Vacaciones</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-4 h-4 rounded-full bg-orange-500"></div>
                  <span className="text-sm font-medium">Parcial</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-4 h-4 rounded-full bg-red-500"></div>
                  <span className="text-sm font-medium">Final</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-4 h-4 rounded-full bg-purple-500"></div>
                  <span className="text-sm font-medium">Entrega</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-4 h-4 rounded-full bg-indigo-500"></div>
                  <span className="text-sm font-medium">Inscripción</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-4 h-4 rounded-full bg-pink-500"></div>
                  <span className="text-sm font-medium">Ceremonia</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-4 h-4 rounded-full bg-yellow-500"></div>
                  <span className="text-sm font-medium">Conferencia</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-4 h-4 rounded-full bg-teal-500"></div>
                  <span className="text-sm font-medium">Taller</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-4 h-4 rounded-full bg-gray-500"></div>
                  <span className="text-sm font-medium">Otro</span>
                </div>
              </div>
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
