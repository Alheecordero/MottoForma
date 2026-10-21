"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { siteConfig } from "@/lib/config/site";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-3 transition-all duration-500 sm:px-6">
      <div
        className={`motto-glass-header mx-auto flex h-[68px] w-full max-w-7xl items-center justify-between rounded-full px-5 text-paper transition-all duration-500 sm:px-7 ${
          scrolled ? "shadow-[0_24px_48px_-12px_rgb(16_29_48/0.28)]" : ""
        }`}
      >
        <Link
          href="/"
          className="flex items-center gap-3"
          aria-label={`${siteConfig.name} — inicio`}
        >
          <Image
            src="/brand/logo-mf-3d.png"
            alt="Logo MF de Mottoforma"
            width={1017}
            height={691}
            className="h-9 w-auto drop-shadow-sm"
            priority
          />
          <span className="hidden text-[22px] tracking-tight text-paper sm:inline">
            <span className="font-sans font-semibold">motto</span>
            <em className="font-display text-[1.05em] font-light italic text-lime">forma</em>
          </span>
        </Link>

        <nav aria-label="Principal" className="hidden items-center gap-1 lg:flex">
          {siteConfig.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={pathname === item.href ? "page" : undefined}
              className={`rounded-full px-4 py-2 text-[14.5px] font-medium transition-all ${
                pathname === item.href
                  ? "bg-paper text-ink shadow-sm"
                  : "text-paper/70 hover:bg-white/10 hover:text-paper"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="/contacto"
            className="motto-volume-button motto-volume-button-lime group hidden items-center gap-1.5 rounded-full px-5 py-2.5 text-sm font-medium shadow-sm transition-all duration-300 hover:-translate-y-0.5 sm:inline-flex"
          >
            Iniciar un proyecto
            <ArrowUpRight
              className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              aria-hidden
            />
          </Link>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
            className="inline-flex size-11 items-center justify-center rounded-full border border-paper/15 bg-white/10 text-paper shadow-sm lg:hidden"
          >
            {open ? <X className="size-5" aria-hidden /> : <Menu className="size-5" aria-hidden />}
          </button>
        </div>
      </div>

      {open && (
        <nav
          aria-label="Móvil"
          className="mx-auto mt-2 max-w-7xl rounded-3xl border border-paper/15 bg-ink px-5 pb-6 pt-3 text-paper shadow-xl lg:hidden"
        >
          {siteConfig.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="block rounded-2xl px-4 py-3.5 font-display text-2xl font-medium hover:bg-white/10"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/contacto"
            onClick={() => setOpen(false)}
            className="motto-volume-button motto-volume-button-lime mt-4 flex items-center justify-center gap-2 rounded-full px-5 py-4 font-medium"
          >
            Iniciar un proyecto <ArrowUpRight className="size-4" aria-hidden />
          </Link>
        </nav>
      )}
    </header>
  );
}
