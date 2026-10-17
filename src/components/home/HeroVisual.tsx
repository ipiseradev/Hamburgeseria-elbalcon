"use client";

import Image from "next/image";
import dynamic from "next/dynamic";
import { motion, useMotionValue, useReducedMotion, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";
import { useWebglSupported } from "@/lib/hooks/useWebglSupported";

const HeroScene = dynamic(() => import("./HeroScene"), { ssr: false });

export function HeroVisual() {
  const shouldReduceMotion = useReducedMotion();
  const webglSupported = useWebglSupported();
  const showScene = webglSupported && !shouldReduceMotion;

  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [6, -6]), { stiffness: 120, damping: 20 });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-6, 6]), { stiffness: 120, damping: 20 });

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    if (shouldReduceMotion || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative mx-auto aspect-square w-full max-w-md [perspective:1200px] sm:max-w-lg"
    >
      <div
        aria-hidden
        className="absolute left-1/2 top-1/2 h-[110%] w-[110%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold/20 blur-3xl"
      />
      <div
        aria-hidden
        className="absolute -right-6 top-6 h-40 w-40 rounded-full bg-ember/30 blur-3xl sm:h-56 sm:w-56"
      />

      {showScene && (
        <div className="absolute inset-[-20%] -z-0">
          <HeroScene />
        </div>
      )}

      <motion.div
        style={{ rotateX, rotateY }}
        className="relative z-10 h-full w-full rounded-[2.5rem] border border-cream/10 bg-charcoal-soft/60 p-3 shadow-2xl [transform-style:preserve-3d]"
      >
        <div className="relative h-full w-full overflow-hidden rounded-[2rem]">
          <Image
            src="/images/site/hero-home.webp"
            alt="Hamburguesa doble con cheddar, bacon y huevo frito de Hamburguesería El Balcón"
            fill
            priority
            sizes="(min-width: 640px) 32rem, 90vw"
            className="object-cover"
          />
        </div>
      </motion.div>
    </div>
  );
}
