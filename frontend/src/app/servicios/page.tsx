import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Check, HelpCircle } from "lucide-react";
import {
  services,
  commercialRoutes,
  processSteps,
  commercialFaqs,
} from "@/features/services/data";

export const metadata: Metadata = {
  title: "Servicios",
  description:
    "Seis capacidades de marca, web y presencia digital, y tres rutas según la etapa del negocio.",
};

export default function ServiciosPage() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-16 md:py-24">
      {/* Encabezado comercial */}
      <div className="max-w-3xl">
        <span className="inline-block rounded-full bg-electric-soft px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider text-electric">
          Servicios
        </span>
        <h1 className="mt-5 font-display text-4xl font-bold leading-[1.05] tracking-tight text-ink sm:text-6xl">
          Seis capacidades. Tres formas de empezar.
        </h1>
        <p className="mt-5 text-lg leading-relaxed text-ink/80">
          Puedes contratar una capacidad concreta o una ruta completa. En ambos
          casos el alcance, los entregables y el punto de partida quedan
          definidos antes de diseñar.
        </p>
      </div>

      {/* Bloque 1: Las 3 rutas comerciales */}
      <section className="mt-16">
        <div className="rounded-[2.25rem] bg-ink px-7 py-12 text-paper sm:px-12 sm:py-16">
          <div className="max-w-2xl">
            <span className="inline-block rounded-full bg-lime px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-ink">
            Un modelo para cada etapa
          </span>
          <h2 className="mt-4 font-display text-3xl font-bold tracking-tight sm:text-4xl">
            Marca, web o las dos juntas
          </h2>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {commercialRoutes.map((route) => (
              <div
                key={route.id}
                className={`flex flex-col justify-between rounded-3xl p-7 ${
                  route.featured
                    ? "bg-electric text-paper ring-2 ring-lime"
                    : "border border-paper/15 bg-paper/6 text-paper"
                }`}
              >
                <div>
                  <span
                    className={`inline-block rounded-full px-3 py-1 text-xs font-bold ${
                      route.featured
                        ? "bg-lime text-ink"
                        : "bg-paper/12 text-paper/90"
                    }`}
                  >
                    {route.badge}
                  </span>
                  <h3 className="mt-4 font-display text-2xl font-bold">
                    {route.name}
                  </h3>
                  <p
                    className={`mt-2 text-xs font-semibold ${
                      route.featured ? "text-lime" : "text-paper/70"
                    }`}
                  >
                    Ideal para: {route.idealFor}
                  </p>
                  <p className="mt-4 text-sm leading-relaxed text-paper/90">
                    {route.promise}
                  </p>

                  <div className="mt-6 border-t border-paper/15 pt-5">
                    <p className="text-xs font-bold uppercase tracking-wider text-paper/70">
                      Entregables incluidos:
                    </p>
                    <ul className="mt-3 space-y-2.5 text-sm">
                      {route.includes.map((item) => (
                        <li key={item} className="flex items-start gap-2.5">
                          <Check
                            className={`mt-0.5 h-4 w-4 shrink-0 ${
                              route.featured ? "text-lime" : "text-electric"
                            }`}
                          />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <Link
                  href={`/contacto?ruta=${route.id}`}
                  className={`mt-8 inline-flex items-center justify-center gap-2 rounded-full px-5 py-3.5 text-sm font-bold transition-transform hover:-translate-y-0.5 ${
                    route.featured
                      ? "bg-lime text-ink"
                      : "bg-paper text-ink hover:bg-lime"
                  }`}
                >
                  {route.cta}
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bloque 2: Desglose completo de los 6 servicios */}
      <section className="mt-24">
        <div className="max-w-2xl">
          <span className="inline-block rounded-full bg-electric-soft px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider text-electric">
            Capacidades
          </span>
          <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-ink sm:text-5xl">
            Lo que hacemos, en detalle
          </h2>
          <p className="mt-3 text-base text-ink/75">
            Cada capacidad tiene un contexto, un alcance y un resultado
            concreto. Se pueden contratar por separado.
          </p>
        </div>

        <div className="mt-12 space-y-8">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <article
                key={service.slug}
                className="grid gap-8 rounded-[2rem] border border-ink/10 bg-paper-soft p-7 sm:p-10 lg:grid-cols-12"
              >
                {/* Columna izquierda: tarjeta con color vivo */}
                <div
                  className={`motto-3d-card ${service.pastel} flex flex-col justify-between rounded-3xl p-7 lg:col-span-5`}
                >
                  <div>
                    <div className="flex items-center justify-between gap-3">
                      <div className="motto-icon-disc flex h-12 w-12 items-center justify-center rounded-2xl text-ink">
                        <Icon className="h-5 w-5" strokeWidth={2.2} />
                      </div>
                      <span className="rounded-full bg-ink/10 px-3 py-1 text-xs font-bold text-ink">
                        {service.name}
                      </span>
                    </div>
                    <h3 className="mt-5 font-display text-2xl font-bold leading-snug text-ink sm:text-3xl">
                      {service.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-ink/85">
                      {service.benefit}
                    </p>
                  </div>

                  <div className="mt-6 rounded-2xl bg-ink/8 p-4">
                    <p className="text-xs font-bold uppercase tracking-wider text-ink/70">
                      Qué cambia al terminar:
                    </p>
                    <p className="mt-1 text-xs font-semibold leading-relaxed text-ink">
                      {service.outcome}
                    </p>
                  </div>
                </div>

                {/* Columna derecha: para quién es, qué resuelve y qué incluye */}
                <div className="flex flex-col justify-between lg:col-span-7">
                  <div className="grid gap-6 sm:grid-cols-2">
                    <div>
                      <h4 className="text-xs font-bold uppercase tracking-wider text-electric">
                        Cuándo tiene sentido
                      </h4>
                      <ul className="mt-3 space-y-2.5 text-sm text-ink/80">
                        {service.solves.map((s) => (
                          <li key={s} className="flex items-start gap-2">
                            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-electric" />
                            <span>{s}</span>
                          </li>
                        ))}
                      </ul>

                      <h4 className="mt-6 text-xs font-bold uppercase tracking-wider text-electric">
                        Cuándo elegirlo
                      </h4>
                      <p className="mt-2 text-sm leading-relaxed text-ink/80">
                        {service.forWhom}
                      </p>
                    </div>

                    <div>
                      <h4 className="text-xs font-bold uppercase tracking-wider text-electric">
                        Qué recibes exactamente
                      </h4>
                      <ul className="mt-3 space-y-2.5 text-sm font-medium text-ink">
                        {service.includes.map((inc) => (
                          <li key={inc} className="flex items-start gap-2.5">
                            <Check className="mt-0.5 h-4 w-4 shrink-0 text-electric" />
                            <span>{inc}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-ink/10 pt-5">
                    <Link
                      href={`/servicios/${service.slug}`}
                      className="inline-flex items-center gap-2 rounded-full bg-ink px-5 py-2.5 text-xs font-bold text-paper transition-colors hover:bg-electric"
                    >
                      Ver ficha completa del servicio
                      <ArrowRight className="h-3.5 w-3.5" />
                    </Link>
                    <Link
                      href={`/contacto?servicio=${service.slug}`}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-electric hover:underline"
                    >
                      Conversar sobre esto
                      <ArrowRight className="h-3.5 w-3.5" />
                    </Link>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* Bloque 3: Proceso */}
      <section className="mt-24 rounded-[2.25rem] border border-ink/10 bg-paper-soft p-8 sm:p-12">
        <h2 className="font-display text-3xl font-bold text-ink sm:text-4xl">
          Cómo avanzamos desde que nos escribes
        </h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {processSteps.map((step) => (
            <div
              key={step.title}
              className="rounded-3xl border border-ink/10 bg-paper p-6"
            >
              <h3 className="font-display text-lg font-bold text-ink">
                {step.title}
              </h3>
              <p className="mt-2 text-sm text-ink/75">{step.text}</p>
              <p className="mt-4 text-xs font-bold text-electric">
                Entregable: {step.deliverable}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Bloque 4: Preguntas frecuentes comerciales */}
      <section className="mt-20">
        <div className="flex items-center gap-2.5">
          <HelpCircle className="h-5 w-5 text-electric" />
          <h2 className="font-display text-2xl font-bold text-ink sm:text-3xl">
          Preguntas antes de empezar
        </h2>
        </div>
        <div className="mt-8 grid gap-5 md:grid-cols-2">
          {commercialFaqs.map((faq) => (
            <div
              key={faq.q}
              className="rounded-3xl border border-ink/10 bg-paper-soft p-6"
            >
              <h3 className="font-display text-lg font-bold text-ink">
                {faq.q}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink/75">
                {faq.a}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
