import type { Metadata } from "next";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/motion/Reveal";
import { Button } from "@/components/ui/Button";
import { MenuSection } from "@/components/menu/MenuSection";
import { branch, site } from "@/lib/data/site";

export const metadata: Metadata = {
  title: `${branch.name} — Menú y Precios`,
  description: `Menú completo con precios actualizados de ${branch.name}, ${branch.address}.`,
  alternates: { canonical: "/el-balcon-vgb" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FastFoodRestaurant",
  name: branch.name,
  image: `${site.url}/images/site/hero-home.webp`,
  url: `${site.url}/el-balcon-vgb`,
  address: {
    "@type": "PostalAddress",
    streetAddress: "Av. San Martín 311",
    addressLocality: "Villa General Belgrano",
    addressRegion: "Córdoba",
    addressCountry: "AR",
  },
  servesCuisine: "Hamburguesas, Lomitos",
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
    opens: "19:00",
    closes: "00:00",
  },
  sameAs: [branch.instagram, branch.facebook],
};

export default function ElBalconVgbPage() {
  return (
    <>
      <Section tone="dark" className="pt-32 pb-10">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="font-display text-sm uppercase tracking-[0.3em] text-gold">
            Sucursal
          </p>
          <h1 className="mt-4 font-display text-4xl uppercase text-cream sm:text-5xl">
            {branch.name}
          </h1>
          <p className="mt-4 text-cream/60">{branch.address}</p>
          <p className="text-cream/60">{branch.hours}</p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button href={branch.whatsapp}>Pedir por WhatsApp</Button>
            <Button href={branch.maps} variant="ghost">
              Cómo llegar
            </Button>
          </div>
        </Reveal>
      </Section>

      <Section tone="dark" className="pt-0">
        <MenuSection />
      </Section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </>
  );
}
