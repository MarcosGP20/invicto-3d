import { z } from "zod";

export const contactSchema = z.object({
  nombre: z.string().min(2, "El nombre debe tener al menos 2 caracteres"),
  email: z.string().email("Email inválido"),
  telefono: z.string().min(6, "Teléfono inválido"),
  tipo: z.enum(["consulta", "cotizacion"], {
    required_error: "Seleccioná un tipo de consulta",
  }),
  mensaje: z.string().min(10, "El mensaje debe tener al menos 10 caracteres"),
});

export type ContactFormData = z.infer<typeof contactSchema>;

export const quoteSchema = z.object({
  descripcion: z.string().min(10, "Describí el producto que necesitás"),
  cantidad: z.number().min(1, "La cantidad mínima es 1").max(10000),
  material: z.enum(["PLA", "PETG", "TPU", "Resina", "Nylon", "ABS", "No sé"]),
  presupuesto: z.string().optional(),
  nombre: z.string().min(2, "El nombre debe tener al menos 2 caracteres"),
  email: z.string().email("Email inválido"),
  telefono: z.string().min(6, "Teléfono inválido"),
});

export type QuoteFormData = z.infer<typeof quoteSchema>;
