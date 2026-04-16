"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactSchema, type ContactFormData } from "@/lib/schemas";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setStatus("loading");
    try {
      // Integración con EmailJS o Formspree
      // Configurar NEXT_PUBLIC_EMAILJS_* en .env.local
      await new Promise((resolve) => setTimeout(resolve, 1000)); // Simula envío
      console.log("Contact form data:", data);
      setStatus("success");
      reset();
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contacto" className="bg-gray-50 py-24">
      <div className="container-section">
        <div className="mx-auto max-w-3xl">
          <div className="text-center">
            <h2 className="section-title">Contáctanos</h2>
            <p className="section-subtitle">
              Contanos tu proyecto y te respondemos en menos de 24 horas.
            </p>
          </div>

          <div className="mt-12 rounded-3xl bg-white p-8 shadow-sm sm:p-12">
            {status === "success" ? (
              <div className="flex flex-col items-center py-8 text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
                  <svg className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="mt-4 text-xl font-semibold text-gray-900">¡Mensaje enviado!</h3>
                <p className="mt-2 text-gray-600">
                  Recibiremos tu consulta y te responderemos en menos de 24 horas.
                </p>
                <button
                  onClick={() => setStatus("idle")}
                  className="mt-6 btn-secondary"
                >
                  Enviar otro mensaje
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6" noValidate>
                <div className="grid gap-6 sm:grid-cols-2">
                  <div>
                    <label htmlFor="nombre" className="label-field">
                      Nombre completo *
                    </label>
                    <input
                      id="nombre"
                      type="text"
                      autoComplete="name"
                      placeholder="Juan García"
                      className="input-field"
                      {...register("nombre")}
                    />
                    {errors.nombre && (
                      <p className="error-message">{errors.nombre.message}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="email" className="label-field">
                      Email *
                    </label>
                    <input
                      id="email"
                      type="email"
                      autoComplete="email"
                      placeholder="juan@ejemplo.com"
                      className="input-field"
                      {...register("email")}
                    />
                    {errors.email && (
                      <p className="error-message">{errors.email.message}</p>
                    )}
                  </div>
                </div>

                <div className="grid gap-6 sm:grid-cols-2">
                  <div>
                    <label htmlFor="telefono" className="label-field">
                      Teléfono *
                    </label>
                    <input
                      id="telefono"
                      type="tel"
                      autoComplete="tel"
                      placeholder="+54 9 11 1234-5678"
                      className="input-field"
                      {...register("telefono")}
                    />
                    {errors.telefono && (
                      <p className="error-message">{errors.telefono.message}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="tipo" className="label-field">
                      Tipo de consulta *
                    </label>
                    <select id="tipo" className="input-field" {...register("tipo")}>
                      <option value="">Seleccioná una opción</option>
                      <option value="consulta">Consulta general</option>
                      <option value="cotizacion">Solicitar cotización</option>
                    </select>
                    {errors.tipo && (
                      <p className="error-message">{errors.tipo.message}</p>
                    )}
                  </div>
                </div>

                <div>
                  <label htmlFor="mensaje" className="label-field">
                    Mensaje *
                  </label>
                  <textarea
                    id="mensaje"
                    rows={4}
                    placeholder="Contanos tu proyecto o consulta..."
                    className="input-field resize-none"
                    {...register("mensaje")}
                  />
                  {errors.mensaje && (
                    <p className="error-message">{errors.mensaje.message}</p>
                  )}
                </div>

                {status === "error" && (
                  <p className="rounded-lg bg-red-50 px-4 py-3 text-sm text-red-600">
                    Ocurrió un error al enviar. Intentá nuevamente o escribinos por WhatsApp.
                  </p>
                )}

                <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                  <p className="text-xs text-gray-400">
                    Al enviar aceptás nuestra{" "}
                    <a href="/politica-privacidad" className="underline hover:text-gray-600">
                      política de privacidad
                    </a>
                    .
                  </p>
                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="btn-primary"
                  >
                    {status === "loading" ? (
                      <>
                        <svg className="h-4 w-4 animate-spin" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                        </svg>
                        Enviando...
                      </>
                    ) : (
                      <>
                        Enviar mensaje
                        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                        </svg>
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
