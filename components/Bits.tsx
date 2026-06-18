import Link from "next/link";
import { type ReactNode } from "react";

export function Breadcrumb({
  items,
}: {
  items: { label: string; href: string }[];
}) {
  return (
    <nav aria-label="Breadcrumb" className="text-[13px]">
      <ol className="flex flex-wrap items-center gap-2 text-muted">
        {items.map((item, i) => {
          const last = i === items.length - 1;
          return (
            <li key={item.href} className="flex items-center gap-2">
              {last ? (
                <span className="font-medium text-ink-soft">{item.label}</span>
              ) : (
                <Link href={item.href} className="transition-colors hover:text-blue-700">
                  {item.label}
                </Link>
              )}
              {!last && (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-3 w-3 text-line-strong">
                  <path d="m9 6 6 6-6 6" />
                </svg>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}

export function TrustStrip({
  items,
}: {
  items: { value: string; label: string; icon?: ReactNode }[];
}) {
  return (
    <div className="card-gradient-border overflow-hidden rounded-card shadow-soft">
      <dl className="grid grid-cols-2 divide-line max-sm:divide-y sm:grid-cols-4 sm:divide-x">
        {items.map((it) => (
          <div
            key={it.label}
            className="group px-5 py-5 transition-colors hover:bg-blue-50/40 sm:px-6"
          >
            <dt className="flex items-center gap-3.5 text-lg font-bold tracking-tight text-ink sm:text-xl">
              {it.icon && (
                <span aria-hidden className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-blue-50 text-blue-600 ring-1 ring-blue-100 transition-transform duration-300 group-hover:scale-110">
                  {it.icon}
                </span>
              )}
              {it.value}
            </dt>
            <dd className={`mt-1 truncate text-[11px] font-medium text-muted sm:text-xs${it.icon ? " pl-[3.375rem]" : ""}`}>
              {it.label}
            </dd>
          </div>
        ))}
      </dl>
    </div>
  );
}

export function ProofBadge({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700">
      <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-blue-500" />
      {children}
    </span>
  );
}

export function CaseStudyStats({
  stats,
}: {
  stats: { label: string; value: string }[];
}) {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
      {stats.map((s) => (
        <div
          key={s.label}
          className="card-gradient-border rounded-card p-5 shadow-soft"
        >
          <p className="text-2xl font-bold tracking-tight text-ink">{s.value}</p>
          <p className="mt-1 text-sm text-muted">{s.label}</p>
        </div>
      ))}
    </div>
  );
}
