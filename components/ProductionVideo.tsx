import { getWhatsAppUrl } from "@/lib/utils";

export default function ProductionVideo() {
  return (
    <section className="relative overflow-hidden bg-gray-900 py-24 sm:py-32">
      {/* Decorative gradient blur */}
      <div className="absolute left-1/2 top-0 -translate-x-1/2 -mt-24 h-48 w-full max-w-4xl bg-brand-500/20 blur-3xl rounded-full mix-blend-screen" />

      <div className="container-section relative z-10">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-brand-500">
            Nuestro Proceso
          </h2>
          <p className="mt-2 text-3xl font-extrabold tracking-tight text-white sm:text-4xl text-balance">
            Precisión y calidad en cada capa
          </p>
          <p className="mt-4 text-lg text-gray-400">
            Utilizamos tecnología de impresión 3D de última generación para
            convertir tus conceptos en piezas tangibles y funcionales.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Video Container */}
          <div className="relative rounded-2xl overflow-hidden shadow-2xl ring-1 ring-white/10 group aspect-[9/16] w-full max-w-sm mx-auto lg:ml-auto">
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent opacity-60 z-10 pointer-events-none" />
            <video
              src="/video_optimizado_v2.mp4"
              autoPlay
              muted
              loop
              playsInline
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            {/* Glowing effect behind video */}
            <div className="absolute -inset-1 bg-brand-500/30 blur-2xl -z-10" />
          </div>

          {/* Text and Features */}
          <div className="flex flex-col justify-center">
            <div className="flex items-start gap-4 mb-8">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-brand-500/10 text-brand-500 ring-1 ring-brand-500/30">
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">
                  Producción Rápida
                </h3>
                <p className="mt-2 text-gray-400">
                  Desde el prototipado al producto final con tiempos de entrega
                  de entre 2 a 7 días hábiles.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 mb-8">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-brand-500/10 text-brand-500 ring-1 ring-brand-500/30">
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                  />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">
                  Acabados Premium
                </h3>
                <p className="mt-2 text-gray-400">
                  Materiales resistentes (PLA, PETG, ABS) en más de 20 colores
                  disponibles logrando resoluciones increíbles.
                </p>
              </div>
            </div>

            <div className="pt-4">
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary w-fit text-sm"
              >
                Solicitar Cotización de Prototipos
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
