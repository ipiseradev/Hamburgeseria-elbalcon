import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/motion/Reveal";
import { site, branch } from "@/lib/data/site";
import { HeroVisual } from "./HeroVisual";

export function Hero() {
  return (
    <section className="relative flex min-h-[100vh] items-center overflow-hidden bg-charcoal pt-24">
      <div
        aria-hidden
        className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(217,164,65,0.12),transparent_55%),radial-gradient(circle_at_80%_70%,rgba(194,69,28,0.14),transparent_55%)]"
      />

      <Container className="relative grid items-center gap-12 lg:grid-cols-2">
        <div>
          <Reveal>
            <p className="font-display text-sm uppercase tracking-[0.3em] text-gold">
              {site.name}
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <h1 className="mt-4 text-balance font-display text-5xl uppercase leading-[0.95] text-cream sm:text-6xl lg:text-7xl">
              {site.slogan}
            </h1>
          </Reveal>

          <Reveal delay={0.2}>
            <p className="mt-6 max-w-md text-lg text-cream/70">{site.description}</p>
          </Reveal>

          <Reveal delay={0.3}>
            <div className="mt-10 flex flex-wrap gap-4">
              <Button href="/sucursales-y-precios">Click acá</Button>
              <Button href={branch.whatsapp} variant="ghost">
                Pedir por WhatsApp
              </Button>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.15}>
          <HeroVisual />
        </Reveal>
      </Container>

      <a
        href="#menu"
        aria-label="Ir al menú"
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-cream/50 transition-colors hover:text-gold-bright sm:flex"
      >
        <span className="text-xs uppercase tracking-widest">Menú</span>
        <span className="h-9 w-[1px] animate-pulse bg-current" />
      </a>
    </section>
  );
}
