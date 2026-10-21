import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, Check } from "lucide-react";
import {
  services,
  getServiceBySlug,
  processSteps,
} from "@/features/services/data";

type Props = {
  params: Promise<{ slug: string }>;
};

export const instant = false;

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) {
    return { title: "Servicio no encontrado" };
  }
  return {
    title: service.name,
    description: service.benefit,
  };
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  const Icon = service.icon;
  const relatedServices = services
    .filter((s) => s.slug !== service.slug)
    .slice(0, 3);

  return (
    <div className="mx-auto max-w-7xl px-6 py-14 md:py-20">
      <Link
        href="/servicios"
        className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-ink/70 hover:text-electric"
      >
        <ArrowLeft className="h-4 w-4" />
        Volver a todos los servicios
      </Link>

      {/* Cabecera del servicio */}
      <div className="mt-8 grid gap-8 lg:grid-cols-12 lg:items-stretch">
        <div
          className={`motto-3d-card ${service.pastel} flex flex-col justify-between rounded-[2.25rem] p-8 sm:p-12 lg:col-span-7`}
        >
          <div>
            <div className="flex items-center justify-between gap-3">
              <div className="motto-icon-disc flex h-14 w-14 items-center justify-center rounded-2xl text-ink">
                <Icon className="h-6 w-6" strokeWidth={2.2} />
              </div>
              <span className="rounded-full bg-ink/12 px-3.5 py-1 text-xs font-bold text-ink">
                {service.name}
              </span>
            </div>

            <h1 className="mt-7 font-display text-3xl font-bold leading-[1.08] tracking-tight text-ink sm:text-5xl">
              {service.title}
            </h1>
            <p className="mt-4 text-base font-medium leading-relaxed text-ink/90 sm:text-lg">
              {service.tagline}
            </p>
          </div>

          <div className="mt-8 flex flex-wrap gap-3 pt-4">
            <Link
              href={`/contacto?servicio=${service.slug}`}
              className="inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3.5 text-sm font-bold text-paper transition-transform hover:-translate-y-0.5"
            >
              Conversar sobre este servicio
              <ArrowRight className="h-4 w-4 text-lime" />
            </Link>
          </div>
        </div>

        {/* Resumen ejecutivo al lado */}
        <div className="flex flex-col justify-between rounded-[2.25rem] bg-ink p-8 text-paper sm:p-10 lg:col-span-5">
          <div>
            <span className="inline-block rounded-full bg-lime px-3 py-1 text-xs font-bold text-ink">
              Para quién está pensado
            </span>
            <p className="mt-4 text-base leading-relaxed text-paper/90">
              {service.forWhom}
            </p>

            <div className="mt-8 border-t border-paper/15 pt-6">
              <span className="text-xs font-bold uppercase tracking-wider text-lime">
                Resultado esperado
              </span>
              <p className="mt-2 font-display text-xl font-bold leading-snug text-paper">
                {service.outcome}
              </p>
            </div>
          </div>

          <p className="mt-8 text-xs text-paper/65">
            ¿Dudas sobre si este es el paso correcto? Escríbenos y revisamos tu
            caso antes de cotizar.
          </p>
        </div>
      </div>

      {/* Qué problemas resuelve + Qué incluye */}
      <div className="mt-14 grid gap-8 lg:grid-cols-12">
        <div className="rounded-3xl border border-ink/10 bg-paper-soft p-8 lg:col-span-5">
          <h2 className="font-display text-2xl font-bold text-ink">
            Señales de que necesitas esto
          </h2>
          <ul className="mt-6 space-y-4">
            {service.solves.map((problem) => (
              <li
                key={problem}
                className="flex items-start gap-3 rounded-2xl bg-paper p-4 text-sm leading-relaxed text-ink/85"
              >
                <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-electric" />
                <span>{problem}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-3xl border border-ink/10 bg-paper-soft p-8 lg:col-span-7">
          <h2 className="font-display text-2xl font-bold text-ink">
            Qué incluye exactamente la entrega
          </h2>
          <p className="mt-2 text-sm text-ink/75">
            Todo lo que acordamos por escrito desde el primer día:
          </p>
          <ul className="mt-6 grid gap-3.5 sm:grid-cols-2">
            {service.includes.map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 rounded-2xl border border-ink/8 bg-paper p-4 text-sm font-medium text-ink"
              >
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-electric" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Cómo trabajamos */}
      <section className="mt-16 rounded-[2.25rem] border border-ink/10 bg-paper-soft p-8 sm:p-12">
        <h2 className="font-display text-2xl font-bold text-ink sm:text-3xl">
          Cómo lo llevamos a cabo
        </h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {processSteps.map((step) => (
            <div
              key={step.title}
              className="rounded-2xl border border-ink/10 bg-paper p-5"
            >
              <h3 className="font-display text-lg font-bold text-ink">
                {step.title}
              </h3>
              <p className="mt-1.5 text-xs leading-relaxed text-ink/75">
                {step.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQs del servicio */}
      {service.faqs.length > 0 && (
        <section className="mt-16">
          <h2 className="font-display text-2xl font-bold text-ink sm:text-3xl">
            Preguntas frecuentes sobre {service.name.toLowerCase()}
          </h2>
          <div className="mt-6 grid gap-5 md:grid-cols-2">
            {service.faqs.map((faq) => (
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
      )}

      {/* Otros servicios complementarios */}
      <section className="mt-20 border-t border-ink/10 pt-14">
        <h2 className="font-display text-2xl font-bold text-ink">
          Suele combinarse con
        </h2>
        <div className="mt-6 grid gap-5 md:grid-cols-3">
          {relatedServices.map((rel) => (
            <Link
              key={rel.slug}
              href={`/servicios/${rel.slug}`}
              className="group flex flex-col justify-between rounded-3xl border border-ink/10 bg-paper-soft p-6 transition-all hover:border-electric"
            >
              <div>
                <span className="text-xs font-bold text-electric">
                  {rel.name}
                </span>
                <h3 className="mt-2 font-display text-xl font-bold text-ink">
                  {rel.title}
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-ink/75">
                  {rel.benefit}
                </p>
              </div>
              <span className="mt-5 inline-flex items-center gap-1.5 text-xs font-bold text-ink group-hover:text-electric">
                Ver servicio
                <ArrowRight className="h-3.5 w-3.5" />
              </span>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
