import type { ReactNode } from "react";

interface Props {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary";
  external?: boolean;
  download?: boolean;
  className?: string;
}

export default function ButtonLink({
  href,
  children,
  variant = "secondary",
  external,
  download,
  className = "",
}: Props) {
  const styles =
    variant === "primary"
      ? "bg-ink text-paper border-ink hover:bg-accent hover:border-accent"
      : "bg-transparent text-ink border-line hover:border-ink";
  return (
    <a
      href={href}
      download={download || undefined}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className={`inline-flex items-center gap-2 rounded-md border px-4 py-2.5 text-sm font-medium transition-colors duration-200 ${styles} ${className}`}
    >
      {children}
    </a>
  );
}
