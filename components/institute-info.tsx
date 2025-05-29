import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const stats = []

const highlights = []

export function InstituteInfo() {
  return (
    <section
      id="instituto"
      className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-blue-900"
    >
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-[#232E8E] to-[#1999D8] bg-clip-text text-transparent">
            Instituto Tecnológico Superior del Occidente del Estado de Hidalgo
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Desde 1999, formamos profesionistas competentes y comprometidos con el desarrollo tecnológico y social de
            México. Somos una institución líder en educación tecnológica superior en el estado de Hidalgo.
          </p>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <Card
              key={index}
              className="text-center border-none shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <CardContent className="pt-6">
                <div className="flex justify-center mb-4">{stat.icon}</div>
                <div className="text-3xl font-bold text-[#232E8E] mb-2">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {highlights.map((highlight, index) => (
            <Card
              key={index}
              className="border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <CardHeader className="text-center pb-2">
                <div className="mx-auto mb-4 p-4 rounded-full bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900 dark:to-purple-900">
                  {highlight.icon}
                </div>
                <CardTitle className="text-xl">{highlight.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="text-base leading-relaxed">{highlight.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Mission and Vision */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card className="border-l-4 border-l-[#232E8E] shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl text-[#232E8E]">🎯 Misión</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed">
                Formar profesionistas competentes en ingeniería y tecnología, comprometidos con el desarrollo
                sustentable y la innovación, a través de programas educativos de calidad que contribuyan al progreso de
                la sociedad.
              </p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-[#1999D8] shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl text-[#1999D8]">🔮 Visión</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed">
                Ser una institución de educación superior tecnológica reconocida por la excelencia académica, la
                innovación y el impacto positivo en el desarrollo regional y nacional.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
