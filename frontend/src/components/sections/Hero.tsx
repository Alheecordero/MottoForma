"use client";

import { useRef } from "react";
import { ButtonLink } from "@/components/ui/Button";
import { gsap, useGSAP } from "@/lib/gsap";

/**
 * Hueco reservado para el avatar 3D animado (Blender).
 * El modelo reemplaza el contenido de #avatar-3d sin cambiar el marco.
 */
function MottoStage() {
  const frameRef = useRef<HTMLDivElement>(null);
  const tiltX = useRef<gsap.QuickToFunc | null>(null);
  const tiltY = useRef<gsap.QuickToFunc | null>(null);

  useGSAP(() => {
    const frame = frameRef.current;
    if (!frame) return;

    const motion = gsap.matchMedia();
    motion.add("(prefers-reduced-motion: no-preference)", () => {
      tiltX.current = gsap.quickTo(frame, "rotateX", {
        duration: 0.55,
        ease: "power3.out",
      });
      tiltY.current = gsap.quickTo(frame, "rotateY", {
        duration: 0.55,
        ease: "power3.out",
      });
      return () => {
        tiltX.current = null;
        tiltY.current = null;
      };
    });
    return () => motion.revert();
  }, { scope: frameRef });

  return (
    <div
      className="relative mx-auto flex h-[430px] w-full max-w-[460px] items-center justify-center"
      style={{ perspective: "1200px" }}
      onMouseMove={(event) => {
        if (!tiltX.current || !tiltY.current) return;
        const rect = event.currentTarget.getBoundingClientRect();
        const x = (event.clientX - rect.left) / rect.width - 0.5;
        const y = (event.clientY - rect.top) / rect.height - 0.5;
        tiltX.current(-y * 10);
        tiltY.current(x * 12);
      }}
      onMouseLeave={() => {
        tiltX.current?.(0);
        tiltY.current?.(0);
      }}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-4 top-6 h-44 w-44 rounded-full bg-lime/40 blur-2xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-6 right-4 h-52 w-52 rounded-full bg-electric/30 blur-2xl"
      />

      <div
        ref={frameRef}
        id="avatar-3d"
        role="img"
        aria-label="Espacio reservado para el avatar 3D de Mottoforma"
        className="motto-glass relative flex h-[370px] w-full items-end justify-center rounded-[2.5rem] p-6"
      >
        <div
          aria-hidden="true"
          className="mb-8 h-8 w-40 rounded-[100%] bg-ink/10 blur-md"
        />
      </div>
    </div>
  );
}

const promises = [
  [
    "Estrategia",
    "Dirección clara antes de diseñar",
    "border-electric/35 bg-[linear-gradient(135deg,#ded6ff_0%,#fff_58%)]",
    "bg-electric",
  ],
  [
    "Identidad",
    "Un sistema visual que se puede usar",
    "border-lime/45 bg-[linear-gradient(135deg,#eaff9e_0%,#fff_58%)]",
    "bg-lime",
  ],
  [
    "Presencia",
    "Web, Google y canales a tu nombre",
    "border-electric/30 bg-[linear-gradient(135deg,rgb(109_74_255/0.16)_0%,#fff_58%)]",
    "bg-ink",
  ],
] as const;

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    const root = sectionRef.current;
    if (!root) return;

    const motion = gsap.matchMedia();
    motion.add("(prefers-reduced-motion: no-preference)", () => {
      const pick = gsap.utils.selector(root);
      const entrance = [
        pick("[data-hero='kicker']"),
        pick("[data-hero='title']"),
        pick("[data-hero='copy']"),
        pick("[data-hero='actions']"),
        pick("[data-hero='stage-in']"),
      ];
      const heroText = entrance.slice(0, 4).flat();
      const pills = pick("[data-hero='pill']");

      const intro = gsap.timeline({
        defaults: { duration: 1.05, ease: "power3.out" },
      });
      intro
        .from(entrance[0], { opacity: 0, y: 48 })
        .from(entrance[1], { opacity: 0, y: 56 }, 0.12)
        .from(entrance[2], { opacity: 0, y: 48 }, 0.24)
        .from(entrance[3], { opacity: 0, y: 40 }, 0.36)
        .from(entrance[4], { opacity: 0, y: 64, duration: 1.15 }, 0.2)
        .from(pills, { opacity: 0, y: 48, stagger: 0.12 }, 0.48)
        .eventCallback("onComplete", () => {
          gsap.set([...entrance.flat(), ...pills], {
            clearProps: "opacity,transform",
          });
        });

      const stage = pick("[data-hero='stage']");
      gsap.to(heroText, {
        opacity: 0,
        y: -120,
        scale: 0.94,
        stagger: 0.04,
        ease: "none",
        scrollTrigger: {
          trigger: root,
          start: "top top",
          end: "44% top",
          scrub: true,
          invalidateOnRefresh: true,
        },
      });

      gsap.to(pills, {
        opacity: 0,
        y: -90,
        scale: 0.95,
        stagger: 0.05,
        ease: "none",
        scrollTrigger: {
          trigger: root,
          start: "16% top",
          end: "58% top",
          scrub: true,
          invalidateOnRefresh: true,
        },
      });

      gsap.set(stage, { transformPerspective: 1200, transformOrigin: "center center" });
      gsap.fromTo(
        stage,
        { opacity: 1, y: 0, rotateX: 0 },
        {
          opacity: 0,
          y: -72,
          rotateX: 18,
          ease: "none",
          immediateRender: false,
          scrollTrigger: {
            trigger: stage,
            start: "top 18%",
            end: "bottom 42%",
            scrub: true,
            invalidateOnRefresh: true,
          },
        },
      );
    });
    return () => motion.revert();
  }, { scope: sectionRef });

  return (
    <section
      ref={sectionRef}
      className="relative overflow-x-hidden bg-paper pt-[112px] sm:pt-[128px]"
    >
      <div className="mx-auto grid w-full max-w-7xl items-center gap-10 px-5 pb-10 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:pb-8">
        <div>
          <p
            data-hero="kicker"
            className="inline-flex rounded-full border border-ink/10 bg-paper-soft px-4 py-2 text-[12px] font-bold uppercase tracking-[0.18em] text-ink shadow-sm"
          >
            Marca · Web · Presencia digital
          </p>

          <h1
            data-hero="title"
            className="mt-6 max-w-3xl font-display text-[clamp(2.7rem,5.4vw,4.6rem)] font-semibold leading-[0.98] tracking-[-0.04em] [text-wrap:balance]"
          >
            Marca, web y presencia digital para negocios que quieren{" "}
            <em className="font-light italic text-electric">crecer con claridad</em>
          </h1>

          <p
            data-hero="copy"
            className="mt-6 max-w-xl text-lg leading-relaxed text-ink/75 sm:text-xl"
          >
            Unimos estrategia, identidad y tecnología para construir marcas
            reconocibles, sitios claros y una presencia lista para operar.
          </p>

          <div data-hero="actions" className="mt-8 flex flex-wrap items-center gap-3">
            <ButtonLink href="/contacto">Iniciar un proyecto</ButtonLink>
            <ButtonLink href="/proyectos" variant="secondary" withArrow={false}>
              Ver proyectos
            </ButtonLink>
          </div>
        </div>

        <div data-hero="stage">
          <div data-hero="stage-in">
            <MottoStage />
          </div>
        </div>
      </div>

      <div className="mx-auto grid w-full max-w-7xl gap-4 px-5 pb-14 sm:grid-cols-3 sm:px-8">
        {promises.map(([title, text, tone, accent]) => (
          <div
            key={title}
            data-hero="pill"
            className={`relative overflow-hidden rounded-3xl border px-6 py-5 shadow-card ${tone}`}
          >
            <span className={`absolute inset-x-6 top-0 h-1.5 rounded-b-full ${accent}`} aria-hidden="true" />
            <p className="font-display text-xl font-bold text-ink">{title}</p>
            <p className="mt-1 text-sm text-ink/70">{text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
