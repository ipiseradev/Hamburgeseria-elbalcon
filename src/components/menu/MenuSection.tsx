"use client";

import { KeyboardEvent, useRef, useState } from "react";
import { menu } from "@/lib/data/menu";
import { ProductCard } from "./ProductCard";
import { Reveal } from "@/components/motion/Reveal";

export function MenuSection() {
  const [active, setActive] = useState(menu[0].slug);
  const tabRefs = useRef<Array<HTMLButtonElement | null>>([]);

  function handleKeyDown(e: KeyboardEvent<HTMLButtonElement>, index: number) {
    let nextIndex: number | null = null;
    if (e.key === "ArrowRight") nextIndex = (index + 1) % menu.length;
    if (e.key === "ArrowLeft") nextIndex = (index - 1 + menu.length) % menu.length;
    if (nextIndex !== null) {
      e.preventDefault();
      setActive(menu[nextIndex].slug);
      tabRefs.current[nextIndex]?.focus();
    }
  }

  const activeCategory = menu.find((c) => c.slug === active) ?? menu[0];

  return (
    <div id="menu">
      <div
        role="tablist"
        aria-label="Categorías del menú"
        className="flex flex-wrap justify-center gap-3 sm:gap-4"
      >
        {menu.map((category, index) => {
          const isActive = category.slug === active;
          return (
            <button
              key={category.slug}
              ref={(el) => {
                tabRefs.current[index] = el;
              }}
              role="tab"
              id={`tab-${category.slug}`}
              aria-selected={isActive}
              aria-controls={`panel-${category.slug}`}
              tabIndex={isActive ? 0 : -1}
              onClick={() => setActive(category.slug)}
              onKeyDown={(e) => handleKeyDown(e, index)}
              className={`rounded-full px-5 py-2.5 text-sm font-semibold uppercase tracking-wide transition-colors duration-300 ${
                isActive
                  ? "bg-gold text-charcoal"
                  : "border border-cream/20 text-cream/70 hover:border-gold/50 hover:text-gold-bright"
              }`}
            >
              {category.label}
            </button>
          );
        })}
      </div>

      <div
        role="tabpanel"
        id={`panel-${activeCategory.slug}`}
        aria-labelledby={`tab-${activeCategory.slug}`}
        className="mt-12"
      >
        {activeCategory.note && (
          <p className="mb-6 text-center text-sm uppercase tracking-widest text-cream/40">
            {activeCategory.note}
          </p>
        )}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {activeCategory.items.map((item, i) => (
            <Reveal key={item.slug} delay={Math.min(i * 0.06, 0.3)}>
              <ProductCard item={item} priority={i < 3} />
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  );
}
