export interface Product {
  id: number;
  nombre: string;
  descripcion: string;
  material: string;
  precio: string;
  imagen: string;
  categoria: string;
  etiqueta?: string;
  textoBoton?: string;
  tiempoEntrega?: string;
}

export const products: Product[] = [
  {
    id: 1,
    nombre: "Merchandising Corporativo: Soportes",
    descripcion:
      "El regalo empresarial ideal para posicionar tu marca. Diseños resistentes con logo personalizado.",
    material: "PLA",
    precio: "Consultar",
    imagen: "/soporte-amarillo.webp",
    categoria: "Ventas Mayoristas",
    etiqueta: "+50 unidades",
    textoBoton: "Pedir presupuesto",
    tiempoEntrega: "48-72hs",
  },
  {
    id: 2,
    nombre: "Premiaciones y Eventos Deportivos",
    descripcion:
      "Medallas personalizadas de alta fidelidad. Fabricación ágil para clubes, torneos y maratones.",
    material: "PLA",
    precio: "Consultar",
    imagen: "/medallas.webp",
    categoria: "Ventas Mayoristas",
    etiqueta: "Diseño bonificado",
    textoBoton: "Hablar con un asesor",
    tiempoEntrega: "5-7 días",
  },
  {
    id: 3,
    nombre: "Producción de Lotes a Pedido",
    descripcion:
      "¿Tenés un diseño propio? Escalamos tu idea con tecnología 3D para producciones en serie de bajo costo.",
    material: "PLA",
    precio: "Consultar",
    imagen: "/soporte-verde.webp",
    categoria: "Ventas Mayoristas",
    etiqueta: "Envío a todo el país",
    textoBoton: "Cotizar por lote",
    tiempoEntrega: "A convenir",
  },
  // {
  //   id: 4,
  //   nombre: "Soporte Celular",
  //   descripcion: "Soporte ergonómico para smartphone",
  //   material: "TPU Flexible",
  //   precio: "$3500",
  //   imagen: "/soporte-amarillo.webp",
  //   categoria: "Accesorios",
  //   textoBoton: "Ver catálogo",
  //   tiempoEntrega: "24-48hs",
  // },
  // {
  //   id: 5,
  //   nombre: "Organizador Escritorio",
  //   descripcion: "Múltiples compartimientos para útiles",
  //   material: "PLA",
  //   precio: "$280",
  //   imagen: "/images/products/desk-organizer.jpg",
  //   categoria: "Organización",
  // },
  // {
  //   id: 6,
  //   nombre: "Maceta Geométrica",
  //   descripcion: "Diseño moderno para plantas pequeñas",
  //   material: "PLA",
  //   precio: "$200",
  //   imagen: "/images/products/planter.jpg",
  //   categoria: "Decoración",
  // },
  // {
  //   id: 7,
  //   nombre: "Soporte Articulado",
  //   descripcion: "Brazos ajustables para cámaras y luces",
  //   material: "PETG",
  //   precio: "$400",
  //   imagen: "/images/products/articulated-arm.jpg",
  //   categoria: "Accesorios",
  // },
  // {
  //   id: 8,
  //   nombre: "Pieza Mecánica Custom",
  //   descripcion: "Repuesto personalizado para máquinas",
  //   material: "Nylon PA",
  //   precio: "$600",
  //   imagen: "/images/products/mechanical-part.jpg",
  //   categoria: "Industrial",
  // },
];

export const categorias = [
  "Todos",
  ...Array.from(new Set(products.map((p) => p.categoria))),
];
