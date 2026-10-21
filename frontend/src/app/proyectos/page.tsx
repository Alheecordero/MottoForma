import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Proyectos",
  description:
    "Casos de Mottoforma. Se publican cuando están documentados y autorizados.",
};

export default function ProyectosPage() {
  return (
    <div className="mx-auto max-w-7xl px-6 pb-24 pt-36">
      <p className="text-xs font-bold uppercase tracking-[0.16em] text-electric">
        Proyectos
      </p>
      <h1 className="mt-4 max-w-3xl font-display text-4xl font-bold leading-[1.05] tracking-tight text-ink sm:text-6xl">
        Trabajo que muestra cómo pensamos.
      </h1>
      <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink/75">
        Aquí irán marcas, sitios y presencias del estudio, con el contexto y
        la decisión de cada caso. Todavía no hay piezas publicadas: preferimos
        esperar a proyectos terminados y autorizados.
      </p>
      <Link
        href="/contacto"
        className="mt-10 inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3.5 text-sm font-bold text-paper"
      >
        Iniciar un proyecto
        <ArrowRight className="h-4 w-4" />
      </Link>
    </div>
  );
}
