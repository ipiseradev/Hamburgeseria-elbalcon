import type { Metadata } from "next";
import Image from "next/image";
import { Hero } from "@/components/home/Hero";
import { MenuSection } from "@/components/menu/MenuSection";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/motion/Reveal";
import { about, branch } from "@/lib/data/site";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

export default function Home() {
  return (
    <>
      <Hero />

      <Section tone="dark">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-4xl uppercase text-cream sm:text-5xl">Nuestro Menú</h2>
          <p className="mt-4 text-cream/60">
            Hamburguesas, lomitos, papas y entradas, con los ingredientes y precios de
            siempre.
          </p>
        </Reveal>
        <div className="mt-14">
          <MenuSection />
        </div>
      </Section>

      <Section tone="cream">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <Reveal className="relative aspect-[4/3] overflow-hidden rounded-3xl">
            <Image
              src={about.gallery[0]}
              alt="Elaboración artesanal del pan en Hamburguesería El Balcón"
              fill
              sizes="(min-width: 1024px) 45vw, 90vw"
              className="object-cover"
            />
          </Reveal>
          <Reveal delay={0.1}>
            <p className="font-display text-sm uppercase tracking-[0.3em] text-ember">
              Nosotros
            </p>
            <h2 className="mt-3 text-balance font-display text-3xl uppercase text-charcoal sm:text-4xl">
              {about.tagline}
            </h2>
            <p className="mt-5 text-charcoal/70">{about.sections[1].body}</p>
            <div className="mt-8">
              <Button href="/nosotros" variant="ghost" className="border-charcoal/30 text-charcoal hover:border-ember hover:text-ember">
                Conocer más
              </Button>
            </div>
          </Reveal>
        </div>
      </Section>

      <Section tone="dark">
        <div className="grid items-center gap-10 rounded-3xl border border-cream/10 bg-charcoal-soft p-8 sm:p-12 lg:grid-cols-2">
          <Reveal>
            <p className="font-display text-sm uppercase tracking-[0.3em] text-gold">
              {branch.name}
            </p>
            <h2 className="mt-3 font-display text-3xl uppercase text-cream sm:text-4xl">
              Visitanos o pedí a domicilio
            </h2>
            <p className="mt-4 text-cream/60">{branch.address}</p>
            <p className="text-cream/60">{branch.hours}</p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button href={branch.whatsapp}>Pedir por WhatsApp</Button>
              <Button href="/sucursales-y-precios" variant="ghost">
                Ver sucursales y precios
              </Button>
            </div>
          </Reveal>
          <Reveal delay={0.1} className="relative aspect-video overflow-hidden rounded-2xl">
            <Image
              src={about.gallery[2]}
              alt="Salón de Hamburguesería El Balcón VGB"
              fill
              sizes="(min-width: 1024px) 45vw, 90vw"
              className="object-cover"
            />
          </Reveal>
        </div>
      </Section>
    </>
  );
}
