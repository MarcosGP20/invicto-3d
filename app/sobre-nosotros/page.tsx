import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Sobre Nosotros | Invicto 3D",
  description:
    "Conocé el equipo detrás de Invicto 3D. Apasionados por la fabricación digital y la impresión 3D de calidad en Buenos Aires.",
};

export default function SobreNosotrosPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen pt-16">
        <div className="bg-gray-900 py-20">
          <div className="container-section text-center">
            <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
              Sobre Nosotros
            </h1>
            <p className="mt-4 text-lg text-gray-300">
              Apasionados por convertir ideas en objetos reales.
            </p>
          </div>
        </div>

        <section className="py-16">
          <div className="container-section max-w-4xl">
            <div className="grid gap-12 lg:grid-cols-2">
              <div className="space-y-6">
                <h2 className="text-3xl font-bold text-gray-900">Nuestra historia</h2>
                <p className="leading-relaxed text-gray-600">
                  Invicto 3D nació de la pasión por la tecnología de fabricación digital. Empezamos
                  imprimiendo piezas para proyectos personales y rápidamente nos dimos cuenta del
                  potencial que tiene la impresión 3D para transformar ideas en productos tangibles.
                </p>
                <p className="leading-relaxed text-gray-600">
                  Hoy contamos con un equipo de impresoras de última generación —tanto FDM como
                  resina— y atendemos clientes en todo Buenos Aires y el país. Desde piezas
                  industriales de precisión hasta figuras decorativas únicas.
                </p>
                <p className="leading-relaxed text-gray-600">
                  Nuestro compromiso es simple: calidad en cada capa, transparencia en cada
                  cotización y acompañamiento en todo el proceso.
                </p>
              </div>

              <div className="space-y-6">
                <h2 className="text-3xl font-bold text-gray-900">Nuestros valores</h2>
                {[
                  {
                    icon: "🎯",
                    titulo: "Precisión",
                    desc: "Cada pieza es monitoreada durante todo el proceso de impresión para garantizar la máxima calidad.",
                  },
                  {
                    icon: "🤝",
                    titulo: "Transparencia",
                    desc: "Cotizaciones claras, sin costos ocultos. Sabés exactamente qué vas a pagar antes de confirmar.",
                  },
                  {
                    icon: "⚡",
                    titulo: "Agilidad",
                    desc: "Respondemos cotizaciones en 24h y hacemos entregas express cuando lo necesitás.",
                  },
                  {
                    icon: "🌱",
                    titulo: "Sostenibilidad",
                    desc: "Usamos materiales certificados y minimizamos el desperdicio en cada impresión.",
                  },
                ].map((v) => (
                  <div key={v.titulo} className="flex gap-4">
                    <span className="text-2xl">{v.icon}</span>
                    <div>
                      <h3 className="font-semibold text-gray-900">{v.titulo}</h3>
                      <p className="mt-1 text-sm text-gray-600">{v.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Stats */}
            <div className="mt-16 grid grid-cols-2 gap-8 rounded-2xl bg-gray-50 p-8 sm:grid-cols-4">
              {[
                { value: "500+", label: "Productos entregados" },
                { value: "3", label: "Impresoras activas" },
                { value: "20+", label: "Colores disponibles" },
                { value: "100%", label: "Satisfacción garantizada" },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-3xl font-extrabold text-brand-600">{stat.value}</div>
                  <div className="mt-1 text-sm text-gray-500">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
