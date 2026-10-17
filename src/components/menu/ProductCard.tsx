import Image from "next/image";
import { MenuItem, formatPrice } from "@/lib/data/menu";

export function ProductCard({ item, priority = false }: { item: MenuItem; priority?: boolean }) {
  return (
    <article className="group relative flex flex-col overflow-hidden rounded-2xl border border-cream/10 bg-charcoal-soft transition-all duration-300 hover:-translate-y-1.5 hover:border-gold/40 hover:shadow-[0_20px_50px_-20px_rgba(217,164,65,0.35)] focus-within:-translate-y-1.5">
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={item.image}
          alt={`${item.name} — ${item.description ?? "plato de Hamburguesería El Balcón"}`}
          fill
          loading={priority ? "eager" : "lazy"}
          priority={priority}
          sizes="(min-width: 1024px) 25vw, (min-width: 640px) 40vw, 90vw"
          className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.06]"
        />
        {item.tag && (
          <span className="absolute left-3 top-3 rounded-full bg-ember px-3 py-1 text-xs font-semibold uppercase tracking-wide text-cream">
            {item.tag}
          </span>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      </div>

      <div className="flex flex-1 flex-col gap-2 p-5">
        <div className="flex items-start justify-between gap-3">
          <h3 className="font-display text-lg uppercase leading-tight text-cream">{item.name}</h3>
          <span className="whitespace-nowrap font-display text-lg text-gold-bright">
            {formatPrice(item.price)}
          </span>
        </div>
        {item.description && (
          <p className="text-sm leading-relaxed text-cream/60">{item.description}</p>
        )}
      </div>
    </article>
  );
}
