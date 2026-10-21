import type { Metadata } from "next";
import { siteConfig } from "@/lib/config/site";

export const metadata: Metadata = {
  title: "Contacto",
  description:
    "Cuéntanos qué estás creando o qué necesitas ordenar. Revisamos el contexto y proponemos un punto de partida.",
};

const prompts = [
  "Qué hace el negocio y a quién le habla.",
  "Si ya existe marca, sitio, dominio o ficha de Google.",
  "Qué quieres resolver ahora: marca, web o las dos.",
  "Si hay una fecha o una restricción que debamos conocer.",
] as const;

export default function ContactoPage() {
  return (
    <div className="mx-auto max-w-7xl px-6 pb-24 pt-36">
      <p className="text-xs font-bold uppercase tracking-[0.16em] text-electric">
        Contacto
      </p>
      <h1 className="mt-4 max-w-3xl font-display text-4xl font-bold leading-[1.05] tracking-tight text-ink sm:text-6xl">
        Cuéntanos el proyecto. Definimos el punto de partida.
      </h1>
      <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink/75">
        Escríbenos con una descripción inicial. Revisamos la información y
        coordinamos una conversación para entender el alcance antes de enviar
        una propuesta.
      </p>

      <div className="mt-12 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="rounded-[2rem] border border-ink/10 bg-paper-soft p-8">
          <h2 className="font-display text-2xl font-bold text-ink">
            Qué nos ayuda leer
          </h2>
          <ul className="mt-5 space-y-3 text-sm leading-relaxed text-ink/80">
            {prompts.map((item) => (
              <li key={item} className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-electric" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col justify-between rounded-[2rem] bg-ink p-8 text-paper">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-paper/55">
              Escríbenos
            </p>
            <a
              href={`mailto:${siteConfig.email}`}
              className="mt-3 block font-display text-3xl font-bold hover:text-lime"
            >
              {siteConfig.email}
            </a>
            <p className="mt-4 text-sm leading-relaxed text-paper/70">
              El correo de esta página es provisional hasta confirmar el
              dominio del estudio. La conversación y la propuesta se hacen por
              escrito, con alcance y tiempos claros.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
