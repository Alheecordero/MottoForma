import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { siteConfig } from "@/lib/config/site";
import { FooterYear } from "./FooterYear";

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-ink text-paper">
      {/* Halo sutil de fondo para que el glassmorphism oscuro tenga refracción */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 right-12 h-64 w-64 rounded-full bg-electric/25 blur-3xl"
      />

      <div className="relative mx-auto w-full max-w-7xl px-5 py-16 sm:px-8">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <div className="inline-flex items-center gap-3.5">
              <Image
                src="/brand/logo-mf-3d.png"
                alt="Monograma MF de Mottoforma"
                width={1017}
                height={691}
                className="h-10 w-auto"
              />
              <span className="text-3xl tracking-tight">
                <span className="font-sans font-semibold">motto</span>
                <em className="font-display font-light italic text-lime">forma</em>
              </span>
            </div>
            <p className="mt-4 max-w-xs text-[15px] leading-relaxed text-paper/65">
              Estudio de marca, sitios web y presencia digital. Estrategia,
              identidad y tecnología en la misma dirección.
            </p>
          </div>

          <nav aria-label="Explorar">
            <p className="text-[12px] font-semibold uppercase tracking-[0.2em] text-paper/45">
              Explorar
            </p>
            <ul className="mt-4 space-y-2.5 text-[15px]">
              {siteConfig.nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-paper/80 transition-colors hover:text-white"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <p className="text-[12px] font-semibold uppercase tracking-[0.2em] text-paper/45">
              Contacto
            </p>
            <ul className="mt-4 space-y-2.5 text-[15px] text-paper/80">
              <li>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="transition-colors hover:text-white"
                >
                  {siteConfig.email}
                </a>
              </li>
              <li>
                <Link
                  href="/contacto"
                  className="inline-flex items-center gap-1 transition-colors hover:text-white"
                >
                  Pide tu propuesta <ArrowUpRight className="size-3.5" aria-hidden />
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-[12px] font-semibold uppercase tracking-[0.2em] text-paper/45">
              Legal
            </p>
            <ul className="mt-4 space-y-2.5 text-[15px] text-paper/80">
              <li>
                <Link href="/privacidad" className="hover:text-white">
                  Aviso de privacidad
                </Link>
              </li>
              <li>
                <Link href="/terminos" className="hover:text-white">
                  Términos
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-paper/15 pt-7 text-[13px] text-paper/50 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © <FooterYear /> {siteConfig.legalName}. Todos los derechos
            reservados.
          </p>
          <p>Marca, web y presencia pensadas para sostenerse.</p>
        </div>
      </div>
    </footer>
  );
}
