"use client";

import Link from "next/link";
import { useState } from "react";
import { ArrowRight, ChevronDown } from "lucide-react";
import { Reveal } from "@/components/animations/Reveal";

type FaqItem = {
  q: string;
  a: string;
};

type ProjectSlot = {
  tag: string;
  title: string;
  summary: string;
};

export function HomeFaqSection({ faqs }: { faqs: readonly FaqItem[] }) {
  const [openIndex, setOpenIndex] = useState(0);
  const activeFaq = faqs[openIndex] ?? faqs[0];

  return (
    <section className="mx-auto max-w-7xl px-6 py-16">
      <Reveal className="relative overflow-hidden rounded-[2.25rem] border border-ink/10 bg-[radial-gradient(circle_at_88%_12%,rgb(109_74_255/0.14),transparent_26%),radial-gradient(circle_at_12%_88%,rgb(166_255_0/0.16),transparent_24%),linear-gradient(135deg,#fbf9f5_0%,#ffffff_100%)] px-6 py-8 text-ink shadow-card sm:px-8 sm:py-10 lg:px-12">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <div className="lg:sticky lg:top-28">
            <span className="inline-block rounded-full border border-electric/20 bg-electric-soft px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider text-electric shadow-sm">
              FAQ
            </span>
            <h2 className="mt-4 max-w-lg font-display text-3xl font-bold tracking-tight text-ink sm:text-5xl">
              Preguntas frecuentes
            </h2>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-ink/68">
              Respuestas rápidas para entender alcance, tiempos, inversión y
              propiedad de los entregables antes de iniciar.
            </p>

            <div className="motto-mini-resource motto-mini-resource-purple motto-faq-active-resource mt-8 hidden min-h-[260px] rounded-3xl border border-paper/15 p-8 text-paper transition-transform duration-300 hover:-translate-y-1 hover:rotate-[0.35deg] lg:block">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-lime">
                Respuesta activa
              </p>
              <h3 className="mt-3 font-display text-2xl font-bold text-paper">
                {activeFaq.q}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-paper/76">
                {activeFaq.a}
              </p>
            </div>

            <Link
              href="/contacto"
              className="mt-7 inline-flex items-center gap-2 rounded-full bg-ink px-5 py-3 text-sm font-bold text-paper shadow-sm transition-all hover:-translate-y-0.5 hover:bg-electric"
            >
              Hablar con Mottoforma
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid gap-3">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <article
                  key={faq.q}
                  className={`rounded-3xl border bg-white/70 p-1 transition-all duration-300 hover:-translate-y-1 hover:scale-[1.01] hover:bg-white ${
                    isOpen
                      ? "border-lime/45 shadow-[0_20px_44px_-30px_rgb(126_211_33/0.45)]"
                      : "border-ink/10 hover:border-lime/35"
                  }`}
                >
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    onClick={() => setOpenIndex(index)}
                    className="flex w-full items-start justify-between gap-5 rounded-[1.35rem] px-5 py-5 text-left"
                  >
                    <span>
                      <span className="block text-[11px] font-bold uppercase tracking-[0.18em] text-lime-deep">
                        Pregunta
                      </span>
                      <span className="mt-1 block font-display text-xl font-bold leading-tight text-ink">
                        {faq.q}
                      </span>
                    </span>
                    <span
                      className={`mt-1 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full transition-colors ${
                        isOpen ? "bg-lime text-ink" : "bg-lime/15 text-ink"
                      }`}
                    >
                      <ChevronDown
                        className={`h-4 w-4 transition-transform ${isOpen ? "rotate-180" : ""}`}
                        aria-hidden
                      />
                    </span>
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-5 text-sm leading-relaxed text-ink/72 lg:hidden">
                      {faq.a}
                    </div>
                  )}
                </article>
              );
            })}
          </div>
        </div>
      </Reveal>
    </section>
  );
}

export function HomeProjectsSection({ slots }: { slots: readonly ProjectSlot[] }) {
  return (
    <section className="mx-auto max-w-7xl px-6 py-16">
      <Reveal className="mb-10 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
        <div>
          <span className="inline-block rounded-full bg-electric px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider text-paper shadow-sm">
            Proyectos
          </span>
          <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl">
            Trabajo que muestra cómo pensamos.
          </h2>
        </div>
        <Link
          href="/proyectos"
          className="inline-flex items-center gap-2 text-sm font-bold text-ink hover:text-electric"
        >
          Explorar proyectos
          <ArrowRight className="h-4 w-4" />
        </Link>
      </Reveal>

      <Reveal className="grid w-full gap-4 sm:grid-cols-2">
        {slots.map((slot) => (
          <article
            key={slot.tag}
            className="motto-balloon-pill motto-balloon-purple motto-project-pill rounded-[2rem] px-6 py-5"
          >
            <p
              className="inline-block rounded-full bg-paper/20 px-3 py-1 text-xs font-bold uppercase tracking-[0.16em] text-paper"
            >
              {slot.tag}
            </p>
            <h3 className="mt-1 font-display text-xl font-bold">
              {slot.title}
            </h3>
            <p className="mt-1 max-w-xl text-sm leading-relaxed">
              {slot.summary}
            </p>
          </article>
        ))}
      </Reveal>
    </section>
  );
}
