import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Términos de Servicio | Invicto 3D",
};

export default function TerminosServicioPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen pt-16">
        <div className="bg-gray-900 py-20">
          <div className="container-section">
            <h1 className="text-4xl font-extrabold tracking-tight text-white">
              Términos de Servicio
            </h1>
            <p className="mt-2 text-gray-400">Última actualización: Abril 2026</p>
          </div>
        </div>

        <section className="py-16">
          <div className="container-section max-w-3xl">
            <div className="space-y-8 text-gray-700">
              <div>
                <h2 className="text-xl font-bold text-gray-900">1. Aceptación de términos</h2>
                <p className="mt-3 leading-relaxed">
                  Al utilizar nuestros servicios, aceptás estos términos de servicio en su
                  totalidad. Si no estás de acuerdo, no uses nuestro sitio ni servicios.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-gray-900">2. Servicio de impresión 3D</h2>
                <p className="mt-3 leading-relaxed">
                  Nos comprometemos a fabricar los productos según las especificaciones acordadas
                  en la cotización aprobada. Cualquier modificación posterior puede implicar
                  cambios en el precio y plazo de entrega.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-gray-900">3. Cotizaciones y pagos</h2>
                <p className="mt-3 leading-relaxed">
                  Las cotizaciones son válidas por 15 días hábiles. Para iniciar la producción
                  se requiere un adelanto del 50% del total. El saldo se abona contra entrega.
                  Aceptamos transferencia bancaria y efectivo.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-gray-900">4. Plazos de entrega</h2>
                <p className="mt-3 leading-relaxed">
                  Los plazos indicados en la cotización son estimativos y pueden variar según
                  la complejidad de la pieza, disponibilidad de materiales y carga de trabajo.
                  En caso de demoras significativas te avisaremos con anticipación.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-gray-900">5. Garantía</h2>
                <p className="mt-3 leading-relaxed">
                  Ofrecemos garantía de 1 año contra defectos de fabricación. Esta garantía
                  no cubre daños por mal uso, caídas o modificaciones realizadas por el cliente.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-gray-900">6. Propiedad intelectual</h2>
                <p className="mt-3 leading-relaxed">
                  El cliente es responsable de tener los derechos necesarios sobre los diseños
                  que nos envía para imprimir. Invicto 3D no se responsabiliza por el uso de
                  archivos con derechos de autor de terceros.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-gray-900">7. Contacto</h2>
                <p className="mt-3 leading-relaxed">
                  Para consultas sobre estos términos:{" "}
                  <a href="mailto:contacto@invicto3d.com" className="text-brand-600 hover:underline">
                    contacto@invicto3d.com
                  </a>
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
