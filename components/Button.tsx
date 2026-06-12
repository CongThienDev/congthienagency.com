import Link from "next/link";
import { type ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost" | "inverse";

const VARIANTS: Record<Variant, string> = {
  primary:
    "bg-blue-600 text-white shadow-blue hover:bg-blue-500 hover:-translate-y-0.5 hover:shadow-float active:translate-y-0",
  secondary:
    "bg-white text-ink border border-line-strong shadow-soft hover:border-blue-300 hover:text-blue-700 hover:-translate-y-0.5",
  ghost: "text-ink-soft hover:text-blue-700",
  inverse:
    "bg-white text-ink hover:bg-blue-50 hover:-translate-y-0.5 shadow-soft",
};

export function Button({
  href,
  children,
  variant = "primary",
  size = "md",
  className = "",
  external = false,
}: {
  href: string;
  children: ReactNode;
  variant?: Variant;
  size?: "md" | "lg";
  className?: string;
  external?: boolean;
}) {
  const sizeCls =
    size === "lg" ? "px-7 py-3.5 text-base" : "px-6 py-3 text-sm";
  const cls = `inline-flex shrink-0 items-center justify-center gap-2 whitespace-nowrap rounded-full font-semibold transition-all duration-200 ${sizeCls} ${VARIANTS[variant]} ${className}`;

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={cls}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={cls}>
      {children}
    </Link>
  );
}
