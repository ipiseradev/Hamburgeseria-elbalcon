"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { nav, site, branch } from "@/lib/data/site";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-cream/10 bg-charcoal/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3 sm:px-8">
        <Link href="/" className="flex items-center gap-2" onClick={() => setOpen(false)}>
          <Image
            src={site.logo}
            alt={site.name}
            width={40}
            height={40}
            className="h-9 w-9"
            priority
          />
          <span className="font-display text-lg leading-none tracking-wide text-cream sm:text-xl">
            El Balcón
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium uppercase tracking-wide text-cream/80 transition-colors hover:text-gold-bright"
            >
              {item.label}
            </Link>
          ))}
          <a
            href={branch.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-gold px-5 py-2 text-sm font-semibold uppercase tracking-wide text-charcoal transition-colors hover:bg-gold-bright"
          >
            Pedir ahora
          </a>
        </nav>

        <button
          type="button"
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-cream/20 text-cream md:hidden"
        >
          <span className="relative block h-3.5 w-5">
            <span
              className={`absolute left-0 top-0 h-[2px] w-full bg-current transition-transform duration-300 ${open ? "translate-y-[6px] rotate-45" : ""}`}
            />
            <span
              className={`absolute left-0 top-1/2 h-[2px] w-full -translate-y-1/2 bg-current transition-opacity duration-300 ${open ? "opacity-0" : "opacity-100"}`}
            />
            <span
              className={`absolute bottom-0 left-0 h-[2px] w-full bg-current transition-transform duration-300 ${open ? "-translate-y-[6px] -rotate-45" : ""}`}
            />
          </span>
        </button>
      </div>

      <nav
        id="mobile-nav"
        className={`md:hidden ${open ? "block" : "hidden"} border-t border-cream/10 bg-charcoal px-5 pb-6 pt-4`}
      >
        <ul className="flex flex-col gap-4">
          {nav.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                onClick={() => setOpen(false)}
                className="block text-base font-medium uppercase tracking-wide text-cream/90 hover:text-gold-bright"
              >
                {item.label}
              </Link>
            </li>
          ))}
          <li>
            <a
              href={branch.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full items-center justify-center rounded-full bg-gold px-5 py-3 text-sm font-semibold uppercase tracking-wide text-charcoal"
            >
              Pedir por WhatsApp
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
