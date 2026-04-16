export interface Testimonial {
  id: number;
  nombre: string;
  rol: string;
  texto: string;
  rating: number;
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    nombre: "Martina García",
    rol: "Diseñadora de interiores",
    texto:
      "Excelente calidad y entrega rápida. Las macetas geométricas que encargué quedaron perfectas para mi proyecto. Recomiendo 100%.",
    rating: 5,
  },
  {
    id: 2,
    nombre: "Federico López",
    rol: "Jugador de rol",
    texto:
      "Pedí figuras personalizadas para mi campaña de D&D y superaron mis expectativas. El nivel de detalle es increíble.",
    rating: 5,
  },
  {
    id: 3,
    nombre: "Empresa TechParts SA",
    rol: "Manufactura industrial",
    texto:
      "Muy profesionales. Nos fabricaron repuestos personalizados en tiempo récord y con precisión exacta. Los seguimos usando.",
    rating: 5,
  },
];
