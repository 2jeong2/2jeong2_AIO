
import type { ReactNode } from "react";

interface SectionCardProps {
  id?: string;
  children: ReactNode;
  className?: string;
}

export default function SectionCard({
  id,
  children,
  className = "",
}: SectionCardProps) {
  return (
    <section
      id={id}
      className={`section-card ${className}`}
    >
      {children}
    </section>
  );
}
