import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { products, categorias } from "@/data/products";
import ProductCard from "@/components/ProductCard";

export const metadata: Metadata = {
  title: "Catálogo de Productos | Invicto 3D",
  description:
    "Explorá nuestro catálogo completo de impresiones 3D personalizadas. Figuras, accesorios, decoración, piezas industriales y más.",
};

export default function CatalogoPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen pt-16">
        {/* Page Header */}
        <div className="bg-gray-900 py-20">
          <div className="container-section text-center">
            <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
              Catálogo de Productos
            </h1>
            <p className="mt-4 text-lg text-gray-300">
              Ejemplos de lo que hacemos. Todo es personalizable en material, color y tamaño.
            </p>
          </div>
        </div>

        {/* Grid completo */}
        <section className="py-16">
          <div className="container-section">
            <div className="mb-8 flex items-center justify-between">
              <p className="text-sm text-gray-500">
                {products.length} productos disponibles
              </p>
              <p className="text-sm text-gray-500">
                {categorias.length - 1} categorías
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>

            {/* CTA al final */}
            <div className="mt-20 rounded-3xl bg-brand-50 p-12 text-center">
              <h2 className="text-2xl font-bold text-gray-900">
                ¿No encontrás lo que buscás?
              </h2>
              <p className="mt-3 text-gray-600">
                Podemos imprimir prácticamente cualquier diseño. Contactanos y lo hacemos realidad.
              </p>
              <a
                href="/#contacto"
                className="mt-6 btn-primary inline-flex"
              >
                Consultar proyecto personalizado
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
