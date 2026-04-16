export interface FAQ {
  id: number;
  pregunta: string;
  respuesta: string;
}

export const faqs: FAQ[] = [
  {
    id: 1,
    pregunta: "¿Cuánto tarda la impresión?",
    respuesta:
      "Depende de la complejidad del modelo. En general, entre 2 y 7 días hábiles desde aprobada la cotización. Piezas simples pueden estar listas en 24-48 horas.",
  },
  {
    id: 2,
    pregunta: "¿Puedo elegir el color de mi producto?",
    respuesta:
      "Sí, tenemos más de 20 colores disponibles en PLA. En resina y otros materiales la paleta puede variar. Consultanos para ver opciones específicas.",
  },
  {
    id: 3,
    pregunta: "¿Aceptan archivos STL o 3MF?",
    respuesta:
      "Sí, aceptamos archivos STL, 3MF, OBJ y STEP. Si no tenés un archivo, podemos ayudarte a diseñar tu pieza desde cero o adaptar una idea.",
  },
  {
    id: 4,
    pregunta: "¿Cuál es el tamaño máximo de impresión?",
    respuesta:
      "Hasta 25x25x25 cm en una sola pieza para impresión FDM. Para piezas más grandes, podemos imprimirlas en secciones y ensamblarlas.",
  },
  {
    id: 5,
    pregunta: "¿Hacen entregas urgentes?",
    respuesta:
      "Sí, ofrecemos servicio urgente en 24-48 horas con un costo adicional. Disponible para piezas de mediana complejidad. Consultanos para confirmar disponibilidad.",
  },
  {
    id: 6,
    pregunta: "¿Los productos tienen garantía?",
    respuesta:
      "Sí, todos nuestros productos tienen 1 año de garantía contra defectos de fabricación. Si el producto llega dañado o no cumple las especificaciones acordadas, lo reimprimimos sin costo.",
  },
  {
    id: 7,
    pregunta: "¿Qué materiales utilizan?",
    respuesta:
      "Trabajamos con PLA, PETG, TPU (flexible), Resina, Nylon PA y ABS. Cada material tiene propiedades distintas: resistencia, flexibilidad, acabado. Te asesoramos según tu necesidad.",
  },
  {
    id: 8,
    pregunta: "¿Cómo es el proceso de pago?",
    respuesta:
      "Solicitamos un adelanto del 50% al aprobar la cotización y el resto contra entrega. Aceptamos transferencia bancaria y efectivo.",
  },
];
