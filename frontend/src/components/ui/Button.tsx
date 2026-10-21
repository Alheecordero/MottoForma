import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { ComponentProps } from "react";

type Variant = "primary" | "secondary" | "ghost-light";

const styles: Record<Variant, string> = {
  primary:
    "bg-ink text-paper hover:bg-electric shadow-card hover:shadow-lift",
  secondary:
    "bg-transparent text-ink ring-1 ring-ink/25 hover:ring-ink hover:bg-ink hover:text-paper",
  "ghost-light":
    "bg-paper text-ink hover:bg-electric hover:text-white shadow-card hover:shadow-lift",
};

type ButtonLinkProps = ComponentProps<typeof Link> & {
  variant?: Variant;
  withArrow?: boolean;
};

/** Botón-enlace con microinteracción (flecha que se desplaza). */
export function ButtonLink({
  variant = "primary",
  withArrow = true,
  className = "",
  children,
  ...props
}: ButtonLinkProps) {
  return (
    <Link
      {...props}
      className={`group inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-[15px] font-medium transition-all duration-300 hover:-translate-y-0.5 ${styles[variant]} ${className}`}
    >
      {children}
      {withArrow && (
        <ArrowRight
          className="size-4 transition-transform duration-300 group-hover:translate-x-1"
          aria-hidden
        />
      )}
    </Link>
  );
}

/** Etiqueta editorial pequeña que precede a los titulares de sección. */
export function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="flex items-center gap-2.5 text-[13px] font-semibold uppercase tracking-[0.18em] text-electric">
      <span className="inline-block size-1.5 rounded-full bg-electric" aria-hidden />
      {children}
    </p>
  );
}
