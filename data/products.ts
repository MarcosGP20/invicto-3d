export interface Product {
  id: number;
  nombre: string;
  descripcion: string;
  material: string;
  precio: string;
  imagen: string;
  categoria: string;
}

export const products: Product[] = [
  {
    id: 1,
    nombre: "Llaveros personalizados",
    descripcion: "Llaveros personales o regalo",
    material: "PLA",
    precio: "$",
    imagen: "/images/products/airpods-holder.jpg",
    categoria: "Accesorios",
  },
  {
    id: 2,
    nombre: "Piezas a medida",
    descripcion: "Pieza personalizada para tu decoración",
    material: "Resina",
    precio: "$",
    imagen: "/pieza-batman.jpeg",
    categoria: "Figuras",
  },
  {
    id: 3,
    nombre: "Medallas deportivas",
    descripcion: "Medallas personalizadas para eventos deportivos",
    material: "PLA + LED",
    precio: "$",
    imagen: "/images/products/lamp.jpg",
    categoria: "Decoración",
  },
  {
    id: 4,
    nombre: "Soporte Celular",
    descripcion: "Soporte ergonómico para smartphone",
    material: "TPU Flexible",
    precio: "$",
    imagen: "/images/products/phone-stand.jpg",
    categoria: "Accesorios",
  },
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
