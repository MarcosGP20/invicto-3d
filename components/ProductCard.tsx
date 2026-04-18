"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import type { Product } from "@/data/products";
import { getWhatsAppUrl } from "@/lib/utils";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const [imgError, setImgError] = useState(false);

  const wpMessage = `Hola, me interesa consultar por: ${product.nombre}.`;

  // If the image URL changes, reset the error state so it tries to load again
  useEffect(() => {
    setImgError(false);
  }, [product.imagen]);

  return (
    <>
      <div className="group flex flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg">
        {/* Image */}
        <div className="relative h-52 overflow-hidden bg-gray-100">
          {!imgError ? (
            <Image
              src={product.imagen}
              alt={product.nombre}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              onError={() => setImgError(true)}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          ) : (
            <div className="flex h-full items-center justify-center">
              <svg
                className="h-16 w-16 text-gray-300"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1}
                  d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5"
                />
              </svg>
            </div>
          )}
          {/* Categoria/Etiqueta badge */}
          <span className={`absolute left-3 top-3 rounded-full px-3 py-1 text-xs font-medium backdrop-blur-sm ${product.etiqueta ? 'bg-brand-500/90 text-white' : 'bg-white/90 text-gray-700'}`}>
            {product.etiqueta || product.categoria}
          </span>
        </div>

        {/* Content */}
        <div className="flex flex-1 flex-col p-5">
          <h3 className="text-base font-semibold text-gray-900">{product.nombre}</h3>
          <p className="mt-1 text-sm text-gray-500">{product.descripcion}</p>

          <div className="mt-4 flex flex-col gap-2 text-xs text-gray-500">
            <div className="flex items-center gap-2">
              <svg className="h-3.5 w-3.5 text-brand-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
              </svg>
              <span>Material: {product.material}</span>
            </div>
            {product.tiempoEntrega && (
              <div className="flex items-center gap-2">
                <svg className="h-3.5 w-3.5 text-brand-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Entrega: {product.tiempoEntrega}</span>
              </div>
            )}
          </div>

          <div className="mt-auto pt-4 border-t border-gray-100">
            {product.precio !== "Consultar" ? (
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs text-gray-400">Desde</p>
                  <p className="text-xl font-bold text-brand-600">{product.precio}</p>
                </div>
                <a
                  href={getWhatsAppUrl(wpMessage)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary text-xs px-4 py-2 text-center"
                >
                  {product.textoBoton || "Cotizar"}
                </a>
              </div>
            ) : (
              <a
                href={getWhatsAppUrl(wpMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary w-full text-sm px-4 py-2.5 flex items-center justify-center gap-2"
              >
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                {product.textoBoton || "Cotizar"}
              </a>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
