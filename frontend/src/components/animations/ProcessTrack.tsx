"use client";

import { useRef, type ReactNode } from "react";
import { gsap, useGSAP } from "@/lib/gsap";

/** Línea que crece mientras los pasos cruzan el centro de la ventana. */
export function ProcessTrack({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const root = ref.current;
    const line = root?.querySelector<HTMLElement>("[data-process-line]");
    if (!root || !line) return;

    const motion = gsap.matchMedia();
    motion.add("(prefers-reduced-motion: no-preference)", () => {
      gsap.fromTo(
        line,
        { scaleX: 0 },
        {
          scaleX: 1,
          ease: "none",
          scrollTrigger: {
            trigger: root,
            start: "top 85%",
            end: "center 45%",
            scrub: true,
            invalidateOnRefresh: true,
          },
        },
      );
    });
    return () => motion.revert();
  }, { scope: ref });

  return (
    <div ref={ref} className="mt-12">
      <div className="mb-8 h-2 overflow-hidden rounded-full bg-ink/10">
        <div
          data-process-line
          className="h-full w-full origin-left rounded-full bg-electric"
        />
      </div>
      {children}
    </div>
  );
}
