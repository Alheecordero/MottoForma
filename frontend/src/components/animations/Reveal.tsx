"use client";

import { useRef, type ReactNode } from "react";
import { gsap, useGSAP } from "@/lib/gsap";

type RevealFrom = "up" | "left" | "scale";

type RevealProps = {
  children: ReactNode;
  delay?: number;
  className?: string;
  from?: RevealFrom;
};

const hidden: Record<RevealFrom, gsap.TweenVars> = {
  up: { opacity: 0, y: 190, scale: 0.9, rotateX: 22 },
  left: { opacity: 0, x: -180, scale: 0.92, rotateY: -18 },
  scale: { opacity: 0, y: 150, scale: 0.82, rotateX: 18 },
};

/**
 * Entrada y salida ligadas al scroll: el bloque sube, se endereza y luego se va.
 * prefers-reduced-motion lo deja visible y quieto.
 */
export function Reveal({ children, delay = 0, className, from = "up" }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const el = ref.current;
    if (!el) return;

    const motion = gsap.matchMedia();
    motion.add("(prefers-reduced-motion: no-preference)", () => {
      const shift = Math.round(delay * 480);
      gsap.set(el, { transformPerspective: 1200, transformOrigin: "center top" });
      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: el,
          start: `top+=${shift} 96%`,
          end: `bottom+=${shift} 8%`,
          scrub: 0.7,
          invalidateOnRefresh: true,
        },
      });

      timeline
        .fromTo(
          el,
          hidden[from],
          {
            opacity: 1,
            x: 0,
            y: 0,
            scale: 1,
            rotateX: 0,
            rotateY: 0,
            ease: "power2.out",
            immediateRender: true,
          },
          0,
        )
        .to(el, { opacity: 1, duration: 0.28 })
        .to(el, {
          opacity: 0,
          y: -150,
          scale: 0.96,
          rotateX: -14,
          ease: "power2.in",
          duration: 0.28,
        });
    });
    return () => motion.revert();
  }, { scope: ref, dependencies: [delay, from] });

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
