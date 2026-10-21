"use client";

import Link from "next/link";
import { useState, type CSSProperties } from "react";
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

type CardToneStyle = CSSProperties & {
  "--motto-card-bg": string;
  "--motto-card-border": string;
};

const tones: CardToneStyle[] = [
  {
    "--motto-card-bg": "linear-gradient(135deg, #ded6ff 0%, #fff 58%)",
    "--motto-card-border": "rgb(109 74 255 / 0.38)",
  },
  {
    "--motto-card-bg": "linear-gradient(135deg, #eaff9e 0%, #fff 56%)",
    "--motto-card-border": "rgb(126 211 33 / 0.32)",
  },
];

export function HomeFaqSection({ faqs }: { faqs: readonly FaqItem[] }) {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="mx-auto max-w-7xl px-6 py-16">
      <Reveal className="flex items-end justify-between gap-6">
        <div>
          <span className="inline-block rounded-full bg-electric px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider text-paper shadow-sm">
            FAQ
          </span>
          <h2 className="mt-4 font-display text-3xl font-bold text-ink sm:text-4xl">
            Preguntas frecuentes
          </h2>
        </div>
        <Link
          href="/contacto"
          className="hidden text-sm font-bold text-ink hover:text-electric sm:inline"
        >
          Hablar con Mottoforma
        </Link>
      </Reveal>

      <Reveal className="mt-8 grid gap-4 md:grid-cols-2">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;
          return (
            <article
              key={faq.q}
              className={`rounded-3xl border p-1 shadow-sm transition-colors ${
                isOpen
                  ? "border-electric/45 bg-[linear-gradient(135deg,#ded6ff_0%,#fff_62%)]"
                  : "border-ink/10 bg-paper-soft"
              }`}
            >
              <button
                type="button"
                aria-expanded={isOpen}
                onClick={() => setOpenIndex(isOpen ? -1 : index)}
                className="flex w-full items-start justify-between gap-5 rounded-[1.25rem] px-5 py-5 text-left"
              >
                <span className="font-display text-lg font-bold text-ink">
                  {faq.q}
                </span>
                <span
                  className={`mt-1 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-colors ${
                    isOpen ? "bg-electric text-paper" : "bg-paper text-ink"
                  }`}
                >
                  <ChevronDown
                    className={`h-4 w-4 transition-transform ${isOpen ? "rotate-180" : ""}`}
                    aria-hidden
                  />
                </span>
              </button>
              {isOpen && (
                <div className="px-5 pb-5 text-sm leading-relaxed text-ink/75">
                  {faq.a}
                </div>
              )}
            </article>
          );
        })}
      </Reveal>
    </section>
  );
}

export function HomeProjectsSection({ slots }: { slots: readonly ProjectSlot[] }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = slots[activeIndex];

  return (
    <section className="mx-auto max-w-7xl px-6 py-20">
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

      <Reveal className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
          {slots.map((slot, index) => {
            const isActive = activeIndex === index;
            return (
              <button
                key={slot.tag}
                type="button"
                onClick={() => setActiveIndex(index)}
                className={`motto-3d-card min-h-44 rounded-3xl p-6 text-left transition-transform hover:-translate-y-1 ${
                  isActive ? "ring-2 ring-electric" : ""
                }`}
                style={tones[index % tones.length]}
              >
                <span className="inline-block rounded-full bg-electric px-3.5 py-1 text-xs font-bold text-paper">
                  {slot.tag}
                </span>
                <h3 className="mt-6 font-display text-2xl font-bold text-ink">
                  {slot.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink/70">
                  Toca para ver el enfoque de documentación.
                </p>
              </button>
            );
          })}
        </div>

        <div className="relative overflow-hidden rounded-[2rem] bg-[radial-gradient(circle_at_88%_18%,rgb(109_74_255/0.35),transparent_30%),linear-gradient(135deg,#101d30_0%,#241d59_100%)] p-7 text-paper sm:p-9">
          <span className="inline-block rounded-full bg-lime px-3.5 py-1 text-xs font-bold text-ink">
            {active.tag}
          </span>
          <h3 className="mt-5 font-display text-3xl font-bold">
            {active.title}
          </h3>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-paper/80">
            {active.summary}
          </p>
          <div className="mt-8 rounded-2xl border border-paper/15 bg-paper/10 p-5">
            <p className="text-xs font-bold uppercase tracking-wider text-lime">
              Cómo se publicará
            </p>
            <p className="mt-2 text-sm leading-relaxed text-paper/80">
              Solo aparecerá cuando exista material real: contexto, decisión,
              proceso y resultado. Sin mockups inventados ni casos de relleno.
            </p>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
