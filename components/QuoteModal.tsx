"use client";

import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { quoteSchema, type QuoteFormData } from "@/lib/schemas";
import { getWhatsAppUrl } from "@/lib/utils";

interface QuoteModalProps {
  open: boolean;
  onClose: () => void;
  productoInicial?: string;
}

const materiales: QuoteFormData["material"][] = ["PLA", "PETG", "ABS", "No sé"];

const presupuestos = [
  "Menos de $500",
  "$500 - $1.000",
  "$1.000 - $3.000",
  "$3.000 - $5.000",
  "Más de $5.000",
  "No tengo referencia",
];

export default function QuoteModal({
  open,
  onClose,
  productoInicial,
}: QuoteModalProps) {
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<QuoteFormData>({
    resolver: zodResolver(quoteSchema),
    defaultValues: {
      descripcion: productoInicial ? `Quiero cotizar: ${productoInicial}` : "",
      cantidad: 1,
      material: "PLA",
    },
  });

  // Close on Escape
  useEffect(() => {
    if (!open) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  if (!open) return null;

  const onSubmit = async (data: QuoteFormData) => {
    setStatus("loading");
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      console.log("Quote form data:", data);
      setStatus("success");
      reset();
    } catch {
      setStatus("error");
    }
  };

  const whatsappMsg = `Hola! Quiero cotizar un producto de impresión 3D. ¿Pueden ayudarme?`;

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center sm:items-center">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal */}
      <div className="relative z-10 w-full max-w-lg overflow-y-auto rounded-t-3xl bg-white sm:rounded-3xl">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-gray-100 px-6 py-5">
          <h2 className="text-lg font-semibold text-gray-900">
            Solicitar cotización
          </h2>
          <button
            onClick={onClose}
            className="rounded-lg p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-600"
            aria-label="Cerrar"
          >
            <svg
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        <div className="max-h-[80vh] overflow-y-auto px-6 py-6">
          {status === "success" ? (
            <div className="flex flex-col items-center py-8 text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
                <svg
                  className="h-8 w-8 text-green-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <h3 className="mt-4 text-xl font-semibold text-gray-900">
                ¡Cotización enviada!
              </h3>
              <p className="mt-2 text-sm text-gray-600">
                Te respondemos con un presupuesto detallado en menos de 24
                horas.
              </p>
              <button onClick={onClose} className="mt-6 btn-primary">
                Cerrar
              </button>
            </div>
          ) : (
            <>
              {/* WhatsApp option */}
              <div className="mb-6 rounded-xl border border-green-200 bg-green-50 p-4">
                <p className="text-sm font-medium text-green-800">
                  ¿Querés respuesta inmediata?
                </p>
                <a
                  href={getWhatsAppUrl(whatsappMsg)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-flex items-center gap-2 text-sm font-semibold text-green-700 hover:text-green-900"
                >
                  <svg
                    className="h-4 w-4"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  Escribir por WhatsApp ahora →
                </a>
              </div>

              <p className="mb-6 text-center text-xs text-gray-400">
                — o completá el formulario —
              </p>

              <form
                onSubmit={handleSubmit(onSubmit)}
                className="space-y-5"
                noValidate
              >
                <div>
                  <label className="label-field">¿Qué querés imprimir? *</label>
                  <textarea
                    rows={3}
                    placeholder="Describí tu producto: dimensiones, uso, referencias de diseño..."
                    className="input-field resize-none"
                    {...register("descripcion")}
                  />
                  {errors.descripcion && (
                    <p className="error-message">
                      {errors.descripcion.message}
                    </p>
                  )}
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className="label-field">Cantidad *</label>
                    <input
                      type="number"
                      min={1}
                      className="input-field"
                      {...register("cantidad", { valueAsNumber: true })}
                    />
                    {errors.cantidad && (
                      <p className="error-message">{errors.cantidad.message}</p>
                    )}
                  </div>

                  <div>
                    <label className="label-field">Material</label>
                    <select className="input-field" {...register("material")}>
                      {materiales.map((m) => (
                        <option key={m} value={m}>
                          {m}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="label-field">Presupuesto estimado</label>
                  <select className="input-field" {...register("presupuesto")}>
                    <option value="">Sin preferencia</option>
                    {presupuestos.map((p) => (
                      <option key={p} value={p}>
                        {p}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="border-t border-gray-100 pt-5">
                  <p className="mb-4 text-sm font-medium text-gray-700">
                    Tus datos de contacto
                  </p>
                  <div className="space-y-4">
                    <div>
                      <label className="label-field">Nombre *</label>
                      <input
                        type="text"
                        autoComplete="name"
                        placeholder="Tu nombre"
                        className="input-field"
                        {...register("nombre")}
                      />
                      {errors.nombre && (
                        <p className="error-message">{errors.nombre.message}</p>
                      )}
                    </div>

                    <div className="grid gap-4 sm:grid-cols-2">
                      <div>
                        <label className="label-field">Email *</label>
                        <input
                          type="email"
                          autoComplete="email"
                          placeholder="tu@email.com"
                          className="input-field"
                          {...register("email")}
                        />
                        {errors.email && (
                          <p className="error-message">
                            {errors.email.message}
                          </p>
                        )}
                      </div>
                      <div>
                        <label className="label-field">Teléfono *</label>
                        <input
                          type="tel"
                          autoComplete="tel"
                          placeholder="+54 9 11..."
                          className="input-field"
                          {...register("telefono")}
                        />
                        {errors.telefono && (
                          <p className="error-message">
                            {errors.telefono.message}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                </div>

                {status === "error" && (
                  <p className="rounded-lg bg-red-50 px-4 py-3 text-sm text-red-600">
                    Error al enviar. Intentá de nuevo o usá WhatsApp.
                  </p>
                )}

                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="btn-primary w-full justify-center py-4"
                >
                  {status === "loading" ? (
                    <>
                      <svg
                        className="h-4 w-4 animate-spin"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        />
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        />
                      </svg>
                      Enviando...
                    </>
                  ) : (
                    "Solicitar cotización gratuita"
                  )}
                </button>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
