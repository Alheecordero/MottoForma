import { Eyebrow } from "@/components/ui/Button";

/** TEMP (Fase 2): marcador de página en construcción. Se reemplaza en Fase 3. */
export function PagePlaceholder({
  eyebrow,
  title,
  text,
}: {
  eyebrow: string;
  title: React.ReactNode;
  text: string;
}) {
  return (
    <section className="mx-auto w-full max-w-7xl px-5 pb-28 pt-[152px] sm:px-8">
      <Eyebrow>{eyebrow}</Eyebrow>
      <h1 className="mt-6 max-w-3xl font-display text-5xl font-medium leading-[1.05] tracking-tight sm:text-6xl">
        {title}
      </h1>
      <p className="mt-7 max-w-xl text-lg leading-relaxed text-ink/70">{text}</p>
      <p className="mt-10 inline-block rounded-full bg-mist px-4 py-2 text-sm font-medium text-ink/60">
        Página en construcción — Fase 3
      </p>
    </section>
  );
}
