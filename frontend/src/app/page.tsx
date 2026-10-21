import Link from "next/link";
import type { CSSProperties } from "react";
import { ArrowRight, Check, ShieldCheck } from "lucide-react";
import { Reveal } from "@/components/animations/Reveal";
import { ProcessTrack } from "@/components/animations/ProcessTrack";
import { Hero } from "@/components/sections/Hero";
import {
  HomeFaqSection,
  HomeProjectsSection,
} from "@/components/sections/HomeInteractiveSections";
import { ServicesRoadmapCarousel } from "@/components/sections/ServicesRoadmapCarousel";
import {
  processSteps,
  commercialRoutes,
  studioIntro,
  principles,
  commercialFaqs,
} from "@/features/services/data";

const projectSlots = [
  {
    tag: "Marca + Web",
    title: "En preparación",
    summary:
      "Los primeros casos se publicarán cuando estén documentados: contexto, decisión y resultado.",
  },
  {
    tag: "Identidad visual",
    title: "En preparación",
    summary:
      "Esta sección muestra trabajo terminado. No la llenamos con ejemplos que no son del estudio.",
  },
] as const;

type CardToneStyle = CSSProperties & {
  "--motto-card-bg": string;
  "--motto-card-border": string;
};

const cardTones: CardToneStyle[] = [
  {
    "--motto-card-bg": "linear-gradient(135deg, #ded6ff 0%, #fff 58%)",
    "--motto-card-border": "rgb(109 74 255 / 0.38)",
  },
  {
    "--motto-card-bg": "linear-gradient(135deg, #eaff9e 0%, #fff 56%)",
    "--motto-card-border": "rgb(126 211 33 / 0.32)",
  },
  {
    "--motto-card-bg": "linear-gradient(135deg, rgb(109 74 255 / 0.16) 0%, #fff 58%)",
    "--motto-card-border": "rgb(109 74 255 / 0.3)",
  },
];

export default function HomePage() {
  return (
    <>
      <Hero />

      <section className="mx-auto max-w-7xl px-6 py-8">
        <Reveal className="motto-dark-panel grid items-end gap-8 rounded-[2.25rem] px-7 py-10 text-paper sm:px-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="text-sm font-semibold text-lime">{studioIntro.kicker}</p>
            <p className="mt-2 text-xs font-bold uppercase tracking-[0.16em] text-paper/55">
              {studioIntro.role}
            </p>
          </div>
          <div className="lg:col-span-7">
            <h2 className="font-display text-3xl font-bold tracking-tight text-paper sm:text-4xl">
              {studioIntro.title}
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-paper/72">
              {studioIntro.body}
            </p>
            <Link
              href="/estudio"
              className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-paper underline decoration-lime/70 underline-offset-4 hover:text-lime"
            >
              Conoce el estudio
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </Reveal>
      </section>

      {/* 1. Tres rutas según la etapa del negocio */}
      <section className="relative mx-auto max-w-7xl px-6 py-20">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute right-10 top-24 -z-10 h-72 w-72 rounded-full bg-electric/12 blur-3xl"
        />

        <Reveal className="mb-12 grid gap-6 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <span className="inline-block rounded-full bg-electric px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider text-paper shadow-sm">
              Cada proyecto es distinto
            </span>
            <h2 className="mt-4 font-display text-3xl font-bold leading-tight tracking-tight text-ink sm:text-5xl">
              Un modelo para cada etapa.
            </h2>
          </div>
          <p className="text-base leading-relaxed text-ink/70 lg:col-span-5">
            Una propuesta alrededor de lo que el negocio necesita ahora: solo
            la marca, solo la web, o las dos como una sola pieza. El alcance
            queda escrito antes de empezar.
          </p>
        </Reveal>

        <div className="grid gap-6 lg:grid-cols-3">
          {commercialRoutes.map((route, index) => (
            <Reveal key={route.id} delay={index * 0.08} className="h-full">
            <div
              className={`flex flex-col justify-between rounded-3xl p-7 sm:p-8 ${
                route.featured
                  ? "relative overflow-hidden bg-[linear-gradient(135deg,#101d30_0%,#241d59_62%,#101d30_100%)] text-paper shadow-xl"
                  : "motto-3d-card text-ink"
              }`}
              style={route.featured ? undefined : cardTones[index % cardTones.length]}
            >
              {route.featured && (
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute -right-12 -top-12 h-44 w-44 rounded-full bg-electric/35 blur-2xl"
                />
              )}

              <div className="relative">
                <span
                  className={`inline-block rounded-full px-3 py-1 text-xs font-bold ${
                    route.featured
                      ? "border border-paper/20 bg-paper/10 text-paper"
                      : "bg-electric text-paper"
                  }`}
                >
                  {route.badge}
                </span>
                <h3 className="mt-4 font-display text-2xl font-bold">
                  {route.name}
                </h3>
                <p
                  className={`mt-2 text-xs font-medium ${
                    route.featured ? "text-paper/70" : "text-ink/60"
                  }`}
                >
                  Ideal para: {route.idealFor}
                </p>
                <p
                  className={`mt-4 text-sm leading-relaxed ${
                    route.featured ? "text-paper/85" : "text-ink/80"
                  }`}
                >
                  {route.promise}
                </p>

                <div
                  className={`mt-6 border-t pt-5 ${
                    route.featured ? "border-paper/15" : "border-ink/10"
                  }`}
                >
                  <p
                    className={`text-xs font-bold uppercase tracking-wider ${
                      route.featured ? "text-paper/65" : "text-ink/60"
                    }`}
                  >
                    Qué te llevas:
                  </p>
                  <ul className="mt-3 space-y-2.5 text-sm">
                    {route.includes.map((item) => (
                      <li key={item} className="flex items-start gap-2.5">
                        <Check
                          className={`mt-0.5 h-4 w-4 shrink-0 ${
                            route.featured ? "text-lime" : "text-electric"
                          }`}
                        />
                        <span
                          className={`leading-snug ${
                            route.featured ? "text-paper/90" : "text-ink/85"
                          }`}
                        >
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <Link
                href={`/contacto?ruta=${route.id}`}
                className={`motto-volume-button relative mt-8 inline-flex items-center justify-center gap-2 rounded-full px-5 py-3.5 text-sm font-bold transition-transform hover:-translate-y-0.5 ${
                  route.featured
                    ? "motto-volume-button-lime"
                    : "motto-volume-button-purple"
                }`}
              >
                {route.cta}
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* 2. Roadmap limpio Problema → Solución */}
      <ServicesRoadmapCarousel />

      {/* 3. Cómo trabajamos — con entregable tangible por etapa */}
      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="rounded-[2.25rem] border border-ink/10 bg-paper-soft p-8 shadow-card sm:p-14">
          <Reveal className="max-w-2xl">
            <span className="inline-block rounded-full bg-electric px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider text-paper shadow-sm">
              Cómo trabajamos
            </span>
            <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-ink sm:text-5xl">
              El trabajo empieza con una conversación clara.
            </h2>
            <p className="mt-3 text-base leading-relaxed text-ink/70">
              Cada etapa convierte la incertidumbre en una decisión: qué se
              sabe, qué se va a hacer y qué se entrega.
            </p>
          </Reveal>

          <ProcessTrack>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((step, index) => (
              <Reveal key={step.title} delay={index * 0.08} className="h-full">
              <div
                className="motto-3d-card flex h-full flex-col justify-between rounded-3xl p-6"
                style={cardTones[index % cardTones.length]}
              >
                <div>
                  <h3 className="font-display text-xl font-bold text-ink">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink/75">
                    {step.text}
                  </p>
                </div>
                <div className="mt-5 border-t border-ink/10 pt-3">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-electric">
                    Cierre de etapa: {step.deliverable}
                  </span>
                </div>
              </div>
              </Reveal>
            ))}
          </div>
          </ProcessTrack>

          <Reveal className="motto-dark-panel mt-8 flex flex-col items-start justify-between gap-4 rounded-2xl px-6 py-5 text-paper sm:flex-row sm:items-center">
            <div className="flex items-center gap-3">
              <ShieldCheck className="h-6 w-6 shrink-0 text-lime" />
              <p className="text-sm text-paper/78">
                <strong className="font-bold text-paper">
                  Todo queda a tu nombre:
                </strong>{" "}
                dominio, cuentas, archivos editables y accesos son 100 %
                propiedad de tu negocio desde el día de entrega.
              </p>
            </div>
            <Link
              href="/servicios"
              className="shrink-0 text-xs font-bold text-lime underline underline-offset-4"
            >
              Ver preguntas frecuentes
            </Link>
          </Reveal>
        </div>
      </section>

      <section className="motto-dark-panel mx-auto max-w-7xl rounded-[2.25rem] px-6 py-12 text-paper sm:px-8">
        <Reveal className="max-w-2xl">
          <span className="inline-block rounded-full border border-lime/30 bg-lime/12 px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider text-lime">
            Nuestra perspectiva
          </span>
          <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-paper sm:text-5xl">
            Decisiones claras. Ejecución consistente.
          </h2>
        </Reveal>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {principles.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.08} className="h-full">
            <article className="h-full rounded-3xl border border-paper/12 bg-white/[0.06] p-7 shadow-[inset_0_1px_0_rgb(255_255_255/0.12)] transition-transform duration-300 hover:-translate-y-1">
              <h3 className="font-display text-2xl font-bold text-paper">
                {item.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-paper/72">{item.text}</p>
            </article>
            </Reveal>
          ))}
        </div>
      </section>

      <HomeFaqSection faqs={commercialFaqs} />

      {/* 4. Proyectos — slots honestos sin casos inventados */}
      <HomeProjectsSection slots={projectSlots} />
    </>
  );
}
