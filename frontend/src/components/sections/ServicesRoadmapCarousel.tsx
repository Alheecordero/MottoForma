"use client";

import { useCallback, useState } from "react";
import Link from "next/link";
import { motion } from "motion/react";
import { ArrowLeft, ArrowRight, Check } from "lucide-react";
import { services } from "@/features/services/data";
import { Reveal } from "@/components/animations/Reveal";

function getCircularOffset(index: number, active: number, total: number) {
  let diff = index - active;
  if (diff > total / 2) diff -= total;
  if (diff < -total / 2) diff += total;
  return diff;
}

export function ServicesRoadmapCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const total = services.length;

  const goPrev = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + total) % total);
  }, [total]);

  const goNext = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % total);
  }, [total]);

  return (
    <section
      id="servicios"
      aria-label="Capacidades en carrusel"
      aria-roledescription="carrusel"
      tabIndex={0}
      className="relative mx-auto max-w-7xl overflow-hidden px-6 py-24"
      onKeyDown={(event) => {
        if (event.key === "ArrowLeft") {
          event.preventDefault();
          goPrev();
        }
        if (event.key === "ArrowRight") {
          event.preventDefault();
          goNext();
        }
      }}
    >
      <Reveal className="mb-10 flex flex-col justify-between gap-6 md:flex-row md:items-end">
        <div>
          <span className="inline-block rounded-full bg-electric-soft px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider text-electric">
            Lo que hacemos
          </span>
          <h2 className="mt-4 max-w-2xl font-display text-3xl font-bold tracking-tight text-ink sm:text-5xl">
            Seis capacidades. La misma dirección.
          </h2>
          <p className="mt-3 max-w-xl text-base leading-relaxed text-ink/70">
            Recorre el punto de partida y lo que construimos en cada una.
            Desliza la tarjeta o usa las flechas.
          </p>
        </div>
        <Link
          href="/servicios"
          className="inline-flex items-center gap-2 self-start rounded-full border border-ink/10 bg-paper-soft px-5 py-2.5 text-sm font-bold text-ink shadow-sm transition-transform hover:-translate-y-0.5 md:self-auto"
        >
          Ver los servicios
          <ArrowRight className="h-4 w-4 text-electric" />
        </Link>
      </Reveal>

      <div className="relative">
        <button
          type="button"
          onClick={goPrev}
          aria-label="Capacidad anterior"
          className="absolute left-0 top-1/2 z-30 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-ink text-paper shadow-lg transition-colors hover:bg-electric md:inline-flex"
        >
          <ArrowLeft className="h-4 w-4" />
        </button>
        <button
          type="button"
          onClick={goNext}
          aria-label="Capacidad siguiente"
          className="absolute right-0 top-1/2 z-30 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-ink text-paper shadow-lg transition-colors hover:bg-electric md:inline-flex"
        >
          <ArrowRight className="h-4 w-4" />
        </button>

        <div
          className="relative mx-auto h-[700px] w-full select-none"
          style={{ perspective: "1500px" }}
        >
          {services.map((service, index) => {
            const offset = getCircularOffset(index, activeIndex, total);
            const absOffset = Math.abs(offset);
            const isCenter = offset === 0;
            if (absOffset > 2) return null;

            const Icon = service.icon;

            return (
              <motion.article
                key={service.slug}
                drag={isCenter ? "x" : false}
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.18}
                onDragEnd={(_, info) => {
                  if (info.offset.x < -60) goNext();
                  else if (info.offset.x > 60) goPrev();
                }}
                onClick={() => {
                  if (!isCenter) setActiveIndex(index);
                }}
                animate={{
                  x: `calc(-50% + ${offset * 48}%)`,
                  y: "-50%",
                  scale: isCenter ? 1 : absOffset === 1 ? 0.84 : 0.7,
                  rotateY: offset * -26,
                  z: isCenter ? 0 : absOffset === 1 ? -160 : -310,
                  opacity: isCenter ? 1 : absOffset === 1 ? 0.72 : 0.28,
                }}
                transition={{ type: "spring", stiffness: 240, damping: 26 }}
                style={{
                  position: "absolute",
                  left: "50%",
                  top: "50%",
                  transformStyle: "preserve-3d",
                  zIndex: 20 - absOffset * 5,
                }}
                className={`w-[min(100%,820px)] rounded-[2rem] border-2 border-ink/20 bg-white p-7 shadow-[0_28px_60px_-20px_rgb(16_29_48/0.55)] sm:p-9 ${
                  isCenter ? "cursor-grab active:cursor-grabbing" : "cursor-pointer"
                }`}
              >
                <div className="flex items-center gap-4">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-electric text-paper">
                    <Icon className="h-6 w-6" strokeWidth={2.2} />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-electric">
                      {service.name}
                    </p>
                    <h3 className="mt-1 font-display text-3xl font-bold leading-tight text-ink">
                      {service.title}
                    </h3>
                  </div>
                </div>

                <div className="mt-7 grid items-stretch gap-4 md:grid-cols-12">
                  <div className="flex flex-col rounded-3xl bg-electric-soft p-6 md:col-span-5">
                    <p className="text-xs font-bold uppercase tracking-wider text-electric">
                      El punto de partida
                    </p>
                    <ul className="mt-4 space-y-3 text-[15px] leading-relaxed text-ink">
                      {service.solves.map((problem) => (
                        <li key={problem} className="flex items-start gap-2.5">
                          <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-electric" />
                          <span>{problem}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-col justify-between rounded-3xl bg-ink p-6 text-paper md:col-span-7">
                    <div>
                      <p className="text-xs font-bold uppercase tracking-wider text-lime">
                        Lo que construimos
                      </p>
                      <p className="mt-3 text-base leading-relaxed text-paper">
                        {service.benefit}
                      </p>
                      <ul className="mt-5 grid gap-2.5 sm:grid-cols-2">
                        {service.includes.slice(0, 4).map((item) => (
                          <li key={item} className="flex items-start gap-2 text-sm leading-snug text-paper/95">
                            <Check className="mt-0.5 h-4 w-4 shrink-0 text-lime" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="mt-5 flex flex-wrap items-center justify-between gap-3 border-t border-paper/15 pt-4">
                      <Link
                        href={`/servicios/${service.slug}`}
                        onClick={(event) => event.stopPropagation()}
                        className="inline-flex items-center gap-1.5 rounded-full bg-paper px-4 py-2 text-xs font-bold text-ink"
                      >
                        Ver detalle
                        <ArrowRight className="h-3.5 w-3.5" />
                      </Link>
                      <Link
                        href={`/contacto?servicio=${service.slug}`}
                        onClick={(event) => event.stopPropagation()}
                        className="text-xs font-bold text-paper underline decoration-lime underline-offset-4"
                      >
                        Conversar sobre este paso
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>

        <div className="mt-2 flex items-center justify-center gap-3 md:hidden">
          <button
            type="button"
            onClick={goPrev}
            aria-label="Capacidad anterior"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-ink text-paper"
          >
            <ArrowLeft className="h-4 w-4" />
          </button>
          <button
            type="button"
            onClick={goNext}
            aria-label="Capacidad siguiente"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-ink text-paper"
          >
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
