import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { principles, processSteps, studioIntro } from "@/features/services/data";

export const metadata: Metadata = {
  title: "El estudio",
  description:
    "Mottoforma es un estudio de marca, sitios web y presencia digital. Así pensamos y así trabajamos.",
};

export default function EstudioPage() {
  return (
    <div className="mx-auto max-w-7xl px-6 pb-24 pt-36">
      <p className="text-sm font-semibold text-electric">{studioIntro.kicker}</p>
      <p className="mt-2 text-xs font-bold uppercase tracking-[0.16em] text-ink/50">
        {studioIntro.role}
      </p>
      <h1 className="mt-5 max-w-4xl font-display text-4xl font-bold leading-[1.05] tracking-tight text-ink sm:text-6xl">
        {studioIntro.title}
      </h1>
      <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink/75">
        {studioIntro.body} Trabajamos con negocios que necesitan ordenar su
        mensaje, su imagen o su sitio, ya sea un encargo concreto o una
        presencia completa.
      </p>

      <section className="mt-16">
        <h2 className="font-display text-3xl font-bold text-ink sm:text-4xl">
          Cómo pensamos
        </h2>
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {principles.map((item) => (
            <article
              key={item.title}
              className="rounded-3xl border border-ink/10 bg-paper-soft p-7"
            >
              <h3 className="font-display text-2xl font-bold text-ink">
                {item.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-ink/75">
                {item.text}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-16">
        <h2 className="font-display text-3xl font-bold text-ink sm:text-4xl">
          Cómo avanzamos
        </h2>
        <p className="mt-3 max-w-2xl text-base text-ink/70">
          El proceso deja espacio para entender, decidir, construir y entregar.
          El calendario concreto se acuerda con el alcance de cada proyecto.
        </p>
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {processSteps.map((step) => (
            <article
              key={step.title}
              className="rounded-3xl border border-ink/10 bg-paper p-6"
            >
              <h3 className="font-display text-xl font-bold text-ink">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink/75">
                {step.text}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-16 rounded-[2rem] bg-ink px-8 py-12 text-paper sm:px-12">
        <h2 className="max-w-xl font-display text-3xl font-bold sm:text-4xl">
          Si hay un proyecto, el primer paso es una conversación.
        </h2>
        <Link
          href="/contacto"
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-paper px-6 py-3.5 text-sm font-bold text-ink"
        >
          Iniciar un proyecto
          <ArrowRight className="h-4 w-4" />
        </Link>
      </section>
    </div>
  );
}
