import Link from "next/link";

export function Breadcrumb({
  items,
}: {
  items: { label: string; href: string }[];
}) {
  return (
    <nav aria-label="Breadcrumb" className="text-sm">
      <ol className="flex flex-wrap items-center gap-2 text-muted">
        {items.map((item, i) => {
          const last = i === items.length - 1;
          return (
            <li key={item.href} className="flex items-center gap-2">
              {last ? (
                <span className="text-ink-soft">{item.label}</span>
              ) : (
                <Link href={item.href} className="hover:text-blue-700">
                  {item.label}
                </Link>
              )}
              {!last && <span className="text-line-strong">/</span>}
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
  items: { value: string; label: string }[];
}) {
  return (
    <dl className="grid grid-cols-2 gap-px overflow-hidden rounded-card border border-line bg-line sm:grid-cols-4">
      {items.map((it) => (
        <div key={it.label} className="bg-white p-5 text-center">
          <dt className="text-xl font-semibold tracking-tight text-ink">{it.value}</dt>
          <dd className="mt-1 text-xs text-muted">{it.label}</dd>
        </div>
      ))}
    </dl>
  );
}

export function ProofBadge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700">
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
        <div key={s.label} className="rounded-card border border-line bg-white p-5">
          <p className="text-2xl font-semibold tracking-tight text-ink">{s.value}</p>
          <p className="mt-1 text-sm text-muted">{s.label}</p>
        </div>
      ))}
    </div>
  );
}
