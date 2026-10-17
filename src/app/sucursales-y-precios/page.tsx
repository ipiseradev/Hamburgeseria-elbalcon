import type { Metadata } from "next";
import Image from "next/image";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/motion/Reveal";
import { Button } from "@/components/ui/Button";
import { branch, about } from "@/lib/data/site";

export const metadata: Metadata = {
  title: "Sucursales y Precios",
  description: `Encontrá ${branch.name}: dirección, horarios y el menú con precios actualizados.`,
  alternates: { canonical: "/sucursales-y-precios" },
};

export default function SucursalesPage() {
  return (
    <Section tone="dark" className="pt-32">
      <Reveal className="mx-auto max-w-2xl text-center">
        <p className="font-display text-sm uppercase tracking-[0.3em] text-gold">
          Sucursales
        </p>
        <h1 className="mt-4 font-display text-4xl uppercase text-cream sm:text-5xl">
          Encontranos
        </h1>
        <p className="mt-4 text-cream/60">
          Por ahora tenemos una sucursal. Elegí cómo querés disfrutar de El Balcón.
        </p>
      </Reveal>

      <Reveal delay={0.1} className="mx-auto mt-14 max-w-3xl overflow-hidden rounded-3xl border border-cream/10 bg-charcoal-soft">
        <div className="relative aspect-video">
          <Image
            src={about.gallery[2]}
            alt={`Interior de ${branch.name}`}
            fill
            sizes="(min-width: 768px) 48rem, 90vw"
            className="object-cover"
          />
        </div>
        <div className="p-8 sm:p-10">
          <h2 className="font-display text-2xl uppercase text-cream">{branch.name}</h2>
          <dl className="mt-4 grid gap-3 text-sm text-cream/70 sm:grid-cols-2">
            <div>
              <dt className="font-semibold text-cream/90">Dirección</dt>
              <dd>{branch.address}</dd>
            </div>
            <div>
              <dt className="font-semibold text-cream/90">Horario</dt>
              <dd>{branch.hours}</dd>
            </div>
            <div>
              <dt className="font-semibold text-cream/90">Servicios</dt>
              <dd>{branch.services.join(" · ")}</dd>
            </div>
            <div>
              <dt className="font-semibold text-cream/90">WhatsApp</dt>
              <dd>{branch.whatsappDisplay}</dd>
            </div>
          </dl>

          <div className="mt-8 flex flex-wrap gap-4">
            <Button href={branch.menuHref}>Ver menú y precios</Button>
            <Button href={branch.whatsapp} variant="ghost">
              Pedir por WhatsApp
            </Button>
            <Button href={branch.maps} variant="ghost">
              Cómo llegar
            </Button>
          </div>

          <p className="mt-6 text-xs text-cream/40">{branch.hoursNote}</p>
        </div>
      </Reveal>
    </Section>
  );
}
