import { ReactNode } from "react";
import { Container } from "./Container";

export function Section({
  children,
  id,
  className = "",
  tone = "dark",
}: {
  children: ReactNode;
  id?: string;
  className?: string;
  tone?: "dark" | "cream";
}) {
  const toneClasses =
    tone === "cream"
      ? "bg-cream text-charcoal"
      : "bg-charcoal text-cream";

  return (
    <section id={id} className={`py-20 sm:py-28 ${toneClasses} ${className}`}>
      <Container>{children}</Container>
    </section>
  );
}
