import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ideas",
  description:
    "Notas de Mottoforma sobre marca, sitios web y presencia digital. Se publican cuando hay una idea terminada.",
};

export default function IdeasPage() {
  return (
    <div className="mx-auto max-w-7xl px-6 pb-24 pt-36">
      <p className="text-xs font-bold uppercase tracking-[0.16em] text-electric">
        Ideas
      </p>
      <h1 className="mt-4 max-w-3xl font-display text-4xl font-bold leading-[1.05] tracking-tight text-ink sm:text-6xl">
        Observaciones sobre marca, web y presencia.
      </h1>
      <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink/75">
        Este espacio reunirá notas del estudio: cómo nombrar una oferta, qué
        debe explicar un sitio y cómo dejar una presencia a nombre del negocio.
        Las primeras piezas se publican cuando estén escritas. No hay artículos
        de relleno.
      </p>
    </div>
  );
}
