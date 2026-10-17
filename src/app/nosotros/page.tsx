import type { Metadata } from "next";
import Image from "next/image";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/motion/Reveal";
import { about, site } from "@/lib/data/site";

export const metadata: Metadata = {
  title: "Nosotros",
  description: about.tagline,
  alternates: { canonical: "/nosotros" },
};

export default function NosotrosPage() {
  return (
    <>
      <Section tone="dark" className="pt-32">
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="font-display text-sm uppercase tracking-[0.3em] text-gold">
            {site.name}
          </p>
          <h1 className="mt-4 text-balance font-display text-4xl uppercase text-cream sm:text-5xl">
            {about.tagline}
          </h1>
        </Reveal>
      </Section>

      <Section tone="cream">
        <div className="space-y-20">
          {about.sections.map((s, i) => (
            <div
              key={s.heading}
              className={`grid items-center gap-10 lg:grid-cols-2 ${i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""}`}
            >
              <Reveal className="relative aspect-[4/3] overflow-hidden rounded-3xl">
                <Image
                  src={about.gallery[i] ?? about.gallery[0]}
                  alt={s.heading}
                  fill
                  sizes="(min-width: 1024px) 45vw, 90vw"
                  className="object-cover"
                />
              </Reveal>
              <Reveal delay={0.1}>
                <h2 className="text-balance font-display text-3xl uppercase text-charcoal sm:text-4xl">
                  {s.heading}
                </h2>
                <p className="mt-5 text-lg text-charcoal/70">{s.body}</p>
              </Reveal>
            </div>
          ))}
        </div>
      </Section>

      <Section tone="dark">
        <Reveal className="mb-10 text-center">
          <h2 className="font-display text-3xl uppercase text-cream sm:text-4xl">Galería</h2>
        </Reveal>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
          {about.gallery.map((src, i) => (
            <Reveal key={src} delay={i * 0.05} className="relative aspect-square overflow-hidden rounded-2xl">
              <Image
                src={src}
                alt={`Hamburguesería El Balcón — foto ${i + 1}`}
                fill
                sizes="(min-width: 640px) 25vw, 45vw"
                className="object-cover transition-transform duration-500 hover:scale-110"
              />
            </Reveal>
          ))}
        </div>
      </Section>
    </>
  );
}
