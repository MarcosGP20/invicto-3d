import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Política de Privacidad | Invicto 3D",
};

export default function PoliticaPrivacidadPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen pt-16">
        <div className="bg-gray-900 py-20">
          <div className="container-section">
            <h1 className="text-4xl font-extrabold tracking-tight text-white">
              Política de Privacidad
            </h1>
            <p className="mt-2 text-gray-400">Última actualización: Abril 2026</p>
          </div>
        </div>

        <section className="py-16">
          <div className="container-section max-w-3xl">
            <div className="prose prose-gray max-w-none space-y-8 text-gray-700">
              <div>
                <h2 className="text-xl font-bold text-gray-900">1. Información que recopilamos</h2>
                <p className="mt-3 leading-relaxed">
                  Cuando usás nuestro sitio web o completás nuestros formularios, podemos recopilar
                  la siguiente información: nombre completo, dirección de correo electrónico,
                  número de teléfono, descripción de tu proyecto y presupuesto estimado.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-gray-900">2. Cómo usamos tu información</h2>
                <p className="mt-3 leading-relaxed">
                  Usamos tus datos exclusivamente para: responder a tus consultas y cotizaciones,
                  enviar presupuestos y confirmaciones de pedido, y mejorar nuestros servicios.
                  No vendemos ni compartimos tu información con terceros sin tu consentimiento.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-gray-900">3. Almacenamiento de datos</h2>
                <p className="mt-3 leading-relaxed">
                  Tus datos se almacenan de forma segura y solo durante el tiempo necesario para
                  cumplir con los fines descritos en esta política o según lo requiera la ley.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-gray-900">4. Tus derechos</h2>
                <p className="mt-3 leading-relaxed">
                  Tenés derecho a acceder, corregir o eliminar tus datos personales en cualquier
                  momento. Para ejercer estos derechos, escribinos a contacto@invicto3d.com.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-gray-900">5. Cookies</h2>
                <p className="mt-3 leading-relaxed">
                  Utilizamos cookies de analytics (Google Analytics) para entender cómo los
                  usuarios interactúan con nuestro sitio. Podés deshabilitar las cookies desde
                  la configuración de tu navegador.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-gray-900">6. Contacto</h2>
                <p className="mt-3 leading-relaxed">
                  Para cualquier consulta sobre esta política, contactanos en:{" "}
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
