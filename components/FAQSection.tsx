import Link from "next/link";
import { faqs } from "@/data/faqs";
import FAQAccordion from "./FAQAccordion";

export default function FAQSection() {
  const featuredFaqs = faqs.slice(0, 5);

  return (
    <section id="faq" className="py-24">
      <div className="container-section">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <h2 className="section-title">Preguntas frecuentes</h2>
            <p className="section-subtitle">
              Respondemos las dudas más comunes sobre nuestro servicio.
            </p>
            <div className="mt-8 flex flex-col gap-4">
              <div className="flex items-start gap-3">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-brand-100">
                  <svg className="h-4 w-4 text-brand-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-900">¿Tenés otra pregunta?</p>
                  <p className="text-sm text-gray-500">Contactanos por WhatsApp o email</p>
                </div>
              </div>
            </div>
            <div className="mt-8">
              <Link href="/faq" className="btn-secondary inline-flex">
                Ver todas las preguntas
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>

          <div className="px-0 lg:px-0">
            <FAQAccordion faqs={featuredFaqs} />
          </div>
        </div>
      </div>
    </section>
  );
}
