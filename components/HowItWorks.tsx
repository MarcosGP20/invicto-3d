const steps = [
  {
    icon: (
      <svg
        className="h-8 w-8"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
        />
      </svg>
    ),
    numero: "01",
    titulo: "Contanos tu idea",
    descripcion:
      "Describinos qué querés imprimir: dimensiones, material, cantidad, uso. Podés enviarnos un archivo STL o simplemente una foto de referencia.",
  },
  {
    icon: (
      <svg
        className="h-8 w-8"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
        />
      </svg>
    ),
    numero: "02",
    titulo: "Recibís tu cotización",
    descripcion:
      "En menos de 24 horas te enviamos un presupuesto detallado con materiales, tiempo de entrega y precio final. Sin sorpresas.",
  },
  {
    icon: (
      <svg
        className="h-8 w-8"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
        />
      </svg>
    ),
    numero: "03",
    titulo: "Imprimimos",
    descripcion:
      "Contamos con tecnología FDM. Monitoreamos cada capa para garantizar calidad perfecta en cada pieza.",
  },
  {
    icon: (
      <svg
        className="h-8 w-8"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"
        />
      </svg>
    ),
    numero: "04",
    titulo: "Entrega con calidad",
    descripcion:
      "Enviamos tu pedido embalado con cuidado. Envío a domicilio en Córdoba Capital, o retiro en nuestro taller. ¡Garantía incluida!",
  },
];

export default function HowItWorks() {
  return (
    <section id="como-funciona" className="bg-gray-50 py-24">
      <div className="container-section">
        <div className="text-center">
          <h2 className="section-title">Cómo funciona</h2>
          <p className="section-subtitle mx-auto max-w-2xl">
            Desde tu idea hasta el producto en tus manos, en 4 pasos simples.
          </p>
        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <div key={step.numero} className="relative">
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="absolute left-1/2 top-10 hidden h-0.5 w-full -translate-y-1/2 translate-x-[calc(50%+1.25rem)] bg-brand-200 lg:block" />
              )}

              <div className="relative flex flex-col items-center text-center">
                {/* Icon circle */}
                <div className="relative flex h-20 w-20 items-center justify-center rounded-2xl bg-brand-500 text-white shadow-lg shadow-brand-500/30">
                  {step.icon}
                  <span className="absolute -right-2 -top-2 flex h-6 w-6 items-center justify-center rounded-full bg-gray-900 text-xs font-bold text-white">
                    {step.numero.replace("0", "")}
                  </span>
                </div>

                <h3 className="mt-6 text-lg font-semibold text-gray-900">
                  {step.titulo}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-gray-600">
                  {step.descripcion}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
