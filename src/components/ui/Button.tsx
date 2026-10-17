import Link from "next/link";
import { AnchorHTMLAttributes, ReactNode } from "react";

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "ghost";
  className?: string;
} & AnchorHTMLAttributes<HTMLAnchorElement>;

export function Button({
  href,
  children,
  variant = "primary",
  className = "",
  ...rest
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold uppercase tracking-wide transition-transform duration-300 ease-out hover:-translate-y-0.5 active:translate-y-0";

  const variants = {
    primary: "bg-gold text-charcoal hover:bg-gold-bright shadow-[0_8px_30px_-8px_rgba(217,164,65,0.6)]",
    ghost: "border border-cream/30 text-cream hover:border-gold hover:text-gold",
  };

  const isExternal = href.startsWith("http");

  if (isExternal) {
    return (
      <a
        href={href}
        className={`${base} ${variants[variant]} ${className}`}
        target="_blank"
        rel="noopener noreferrer"
        {...rest}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={`${base} ${variants[variant]} ${className}`}>
      {children}
    </Link>
  );
}
