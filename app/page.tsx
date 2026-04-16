import type { Metadata } from "next";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import ProductionVideo from "@/components/ProductionVideo";
import CatalogSection from "@/components/CatalogSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FAQSection from "@/components/FAQSection";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Invicto 3D | Impresiones 3D Personalizadas en Cordoba",
  description:
    "Impresiones 3D personalizadas de calidad. Figuras, accesorios, repuestos, decoración. Cotizá gratis, entrega en 2-7 días. Cordoba.",
};

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <HowItWorks />
        <ProductionVideo />
        <CatalogSection />
        <TestimonialsSection />
        <FAQSection />
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}
