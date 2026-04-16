import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function NotFound() {
  return (
    <>
      <Header />
      <main className="flex min-h-screen flex-col items-center justify-center py-32 text-center">
        <div className="container-section max-w-lg">
          <div className="flex h-24 w-24 items-center justify-center rounded-3xl bg-brand-100 mx-auto">
            <span className="text-5xl">🔍</span>
          </div>
          <h1 className="mt-8 text-4xl font-extrabold text-gray-900">404</h1>
          <p className="mt-2 text-xl font-semibold text-gray-700">Página no encontrada</p>
          <p className="mt-4 text-gray-500">
            La página que buscás no existe o fue movida. Volvé al inicio y seguí explorando.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link href="/" className="btn-primary">
              Ir al inicio
            </Link>
            <Link href="/catalogo" className="btn-secondary">
              Ver catálogo
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
