import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FAQAccordion from "@/components/FAQAccordion";
import { faqs } from "@/data/faqs";
import { getWhatsAppUrl } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Preguntas Frecuentes | Invicto 3D",
  description:
    "Respondemos todas tus dudas sobre impresión 3D: materiales, plazos, precios, garantías y más.",
};

export default function FAQPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen pt-16">
        <div className="bg-gray-900 py-20">
          <div className="container-section text-center">
            <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
              Preguntas Frecuentes
            </h1>
            <p className="mt-4 text-lg text-gray-300">
              Todo lo que necesitás saber antes de hacer tu pedido.
            </p>
          </div>
        </div>

        <section className="py-16">
          <div className="container-section max-w-3xl">
            <FAQAccordion faqs={faqs} />

            <div className="mt-12 rounded-2xl bg-brand-50 p-8 text-center">
              <h2 className="text-xl font-semibold text-gray-900">¿Tenés otra pregunta?</h2>
              <p className="mt-2 text-gray-600">
                Nuestro equipo responde en menos de 24 horas.
              </p>
              <div className="mt-6 flex flex-wrap justify-center gap-4">
                <a
                  href={getWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                >
                  WhatsApp
                </a>
                <a href="/#contacto" className="btn-secondary">
                  Formulario de contacto
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
