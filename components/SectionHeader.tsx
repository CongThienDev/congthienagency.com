import { type ReactNode } from "react";

export function SectionHeader({
  eyebrow,
  title,
  sub,
  align = "left",
  children,
}: {
  eyebrow?: string;
  title: string;
  sub?: string;
  align?: "left" | "center";
  children?: ReactNode;
}) {
  const alignCls = align === "center" ? "text-center mx-auto" : "";
  return (
    <div className={`max-w-2xl ${alignCls}`}>
      {eyebrow && (
        <p className="label-mono text-blue-600">{eyebrow}</p>
      )}
      <h2 className="mt-3 text-3xl font-semibold tracking-tight text-ink sm:text-4xl text-balance">
        {title}
      </h2>
      {sub && <p className="mt-4 text-lg leading-relaxed text-muted">{sub}</p>}
      {children}
    </div>
  );
}
