import Image from "next/image";
import Link from "next/link";
import { site, branch, nav } from "@/lib/data/site";

export function Footer() {
  return (
    <footer className="border-t border-cream/10 bg-charcoal-soft text-cream">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-16 sm:px-8 md:grid-cols-3">
        <div>
          <Image
            src={site.logoFooter}
            alt={site.name}
            width={140}
            height={60}
            className="h-auto w-32"
          />
          <p className="mt-4 max-w-xs text-sm text-cream/60">{site.description}</p>
        </div>

        <div>
          <h3 className="font-display text-sm uppercase tracking-widest text-gold">
            Navegación
          </h3>
          <ul className="mt-4 space-y-2 text-sm text-cream/70">
            {nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="hover:text-gold-bright">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-display text-sm uppercase tracking-widest text-gold">
            {branch.name}
          </h3>
          <ul className="mt-4 space-y-2 text-sm text-cream/70">
            <li>{branch.address}</li>
            <li>{branch.hours}</li>
            <li>
              <a href={branch.whatsapp} target="_blank" rel="noopener noreferrer" className="hover:text-gold-bright">
                WhatsApp: {branch.whatsappDisplay}
              </a>
            </li>
            <li className="flex gap-4 pt-2">
              <a
                href={branch.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gold-bright"
                aria-label="Instagram de El Balcón VGB"
              >
                Instagram
              </a>
              <a
                href={branch.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gold-bright"
                aria-label="Facebook de El Balcón VGB"
              >
                Facebook
              </a>
              <a
                href={branch.maps}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gold-bright"
                aria-label="Ubicación en Google Maps"
              >
                Mapa
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-cream/10 py-6 text-center text-xs text-cream/40">
        © {new Date().getFullYear()} {site.name}. Desarrolló{" "}
        <a
          href={site.devCredit.url}
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:text-gold-bright"
        >
          {site.devCredit.name}
        </a>
      </div>
    </footer>
  );
}
