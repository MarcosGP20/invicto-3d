"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import type { Product } from "@/data/products";
import QuoteModal from "./QuoteModal";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const [quoteOpen, setQuoteOpen] = useState(false);
  const [imgError, setImgError] = useState(false);

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
          {/* Categoria badge */}
          <span className="absolute left-3 top-3 rounded-full bg-white/90 px-3 py-1 text-xs font-medium text-gray-700 backdrop-blur-sm">
            {product.categoria}
          </span>
        </div>

        {/* Content */}
        <div className="flex flex-1 flex-col p-5">
          <h3 className="text-base font-semibold text-gray-900">{product.nombre}</h3>
          <p className="mt-1 text-sm text-gray-500">{product.descripcion}</p>

          <div className="mt-4 flex items-center gap-2 text-xs text-gray-500">
            <svg className="h-3.5 w-3.5 text-brand-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
            </svg>
            <span>Material: {product.material}</span>
          </div>

          <div className="mt-auto flex items-center justify-between pt-4">
            <div>
              <p className="text-xs text-gray-400">Desde</p>
              <p className="text-xl font-bold text-brand-600">{product.precio}</p>
            </div>
            <button
              onClick={() => setQuoteOpen(true)}
              className="btn-primary text-xs px-4 py-2"
            >
              Cotizar
            </button>
          </div>
        </div>
      </div>

      <QuoteModal
        open={quoteOpen}
        onClose={() => setQuoteOpen(false)}
        productoInicial={product.nombre}
      />
    </>
  );
}
