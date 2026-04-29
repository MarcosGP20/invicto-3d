export interface Testimonial {
  id: number;
  nombre: string;
  rol: string;
  texto: string;
  rating: number;
  avatarBg: string;
  avatarText: string;
  initials: string;
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    nombre: "Expreso Calcabrini",
    rol: "Empresa de transporte",
    texto:
      "Excelente calidad y entrega rápida. Los vasos choperos personalizados superaron nuestras expectativas! Recomendamos 100%.",
    rating: 5,
    avatarBg: "bg-blue-100",
    avatarText: "text-blue-700",
    initials: "EC",
  },
  {
    id: 2,
    nombre: "Himalaya Viajes Cofico",
    rol: "Agencia de viajes",
    texto:
      "Pedí portalápices personalizados para mi negocio como regalos para mis clientes, todos se van muy contentos. El nivel de detalle es increíble.",
    rating: 5,
    avatarBg: "bg-emerald-100",
    avatarText: "text-emerald-700",
    initials: "HV",
  },
  {
    id: 3,
    nombre: "Destefanis Travel",
    rol: "Agencia de viajes",
    texto:
      "Muy profesionales. Nos personalizaron porta celulares para entregar en nuestros eventos y la verdad que estamos satisfechos. Siempre cumplen con los tiempos establecidos.",
    rating: 5,
    avatarBg: "bg-violet-100",
    avatarText: "text-violet-700",
    initials: "DT",
  },
];
