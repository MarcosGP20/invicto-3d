"use client";

import { useState } from "react";
import Link from "next/link";
import { products, categorias } from "@/data/products";
import ProductCard from "./ProductCard";

export default function CatalogSection() {
  const [categoriaActiva, setCategoriaActiva] = useState("Todos");

  const filtrados =
    categoriaActiva === "Todos"
      ? products.slice(0, 8)
      : products.filter((p) => p.categoria === categoriaActiva).slice(0, 8);

  return (
    <section id="catalogo" className="py-24">
      <div className="container-section">
        <div className="text-center">
          <h2 className="section-title">Catálogo de Productos</h2>
          <p className="section-subtitle mx-auto max-w-2xl">
            Ejemplos de lo que podemos hacer. Cada producto puede personalizarse
            en material, color y dimensiones.
          </p>
        </div>

        {/* Filtros */}
        <div className="mt-10 flex flex-wrap justify-center gap-2">
          {categorias.map((cat) => (
            <button
              key={cat}
              onClick={() => setCategoriaActiva(cat)}
              className={`rounded-full px-5 py-2 text-sm font-medium transition-all ${
                categoriaActiva === cat
                  ? "bg-brand-500 text-white shadow-sm"
                  : "border border-gray-200 bg-white text-gray-600 hover:border-brand-300 hover:text-brand-600"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtrados.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* Ver todo CTA */}
        <div className="mt-12 text-center">
          <Link href="/catalogo" className="btn-secondary">
            Ver catálogo completo
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
