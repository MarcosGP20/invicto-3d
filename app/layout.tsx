import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://invicto3d.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Invicto 3D | Impresiones 3D Personalizadas",
    template: "%s | Invicto 3D",
  },
  description:
    "Impresiones 3D de calidad en Buenos Aires. Productos personalizados, figuras, accesorios, piezas industriales. Cotizá gratis y recibí en 2-7 días.",
  keywords: [
    "impresión 3D",
    "impresiones 3D Buenos Aires",
    "figuras personalizadas",
    "piezas 3D",
    "PLA",
    "resina",
    "cotizar impresión 3D",
  ],
  authors: [{ name: "Invicto 3D" }],
  creator: "Invicto 3D",
  openGraph: {
    type: "website",
    locale: "es_AR",
    url: siteUrl,
    siteName: "Invicto 3D",
    title: "Invicto 3D | Impresiones 3D Personalizadas",
    description:
      "Impresiones 3D de calidad en Buenos Aires. Productos personalizados, cotizá gratis.",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Invicto 3D - Impresiones 3D Personalizadas",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Invicto 3D | Impresiones 3D Personalizadas",
    description:
      "Impresiones 3D de calidad en Buenos Aires. Cotizá gratis.",
    images: ["/images/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="font-sans">{children}</body>
    </html>
  );
}
