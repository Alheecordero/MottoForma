/**
 * Configuración corporativa provisional (TEMP).
 * En la Fase 4/5 estos valores vendrán de `SiteSettings` en Django Admin.
 * Nada aquí es un dato real confirmado: nombre, dominio y contactos son
 * marcadores reemplazables sin tocar componentes.
 */
export const siteConfig = {
  name: "Mottoforma", // Nombre confirmado por el cliente (verificar registro legal/dominio)
  legalName: "Mottoforma", // TEMP: razón social pendiente de confirmar
  description:
    "Estudio de marca, sitios web y presencia digital. Unimos estrategia, identidad y tecnología para que un negocio se entienda y pueda operar con su propio nombre.",
  url: "https://example.com", // TEMP: reemplazar por el dominio definitivo
  email: "hola@example.com", // TEMP
  whatsapp: "", // TEMP: vacío a propósito — no inventar números. Formato intl: "5215500000000"
  socials: {
    instagram: "", // TEMP
    linkedin: "", // TEMP
    behance: "", // TEMP
  },
  nav: [
    { label: "Inicio", href: "/" },
    { label: "Servicios", href: "/servicios" },
    { label: "Proyectos", href: "/proyectos" },
    { label: "Estudio", href: "/estudio" },
    { label: "Ideas", href: "/ideas" },
  ],
} as const;

export type SiteConfig = typeof siteConfig;
