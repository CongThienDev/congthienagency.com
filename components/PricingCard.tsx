import { Button } from "./Button";

export function PricingCard({
  name,
  priceLabel,
  priceUnit,
  tagline,
  features,
  ctaHref,
  ctaLabel,
  highlight = false,
  disclaimer,
}: {
  name: string;
  priceLabel: string;
  priceUnit?: string;
  tagline?: string;
  features: string[];
  ctaHref: string;
  ctaLabel: string;
  highlight?: boolean;
  disclaimer?: string;
}) {
  return (
    <div
      className={`flex flex-col rounded-card border p-6 transition-all ${
        highlight
          ? "border-blue-300 bg-white shadow-lift ring-1 ring-blue-200"
          : "border-line bg-white shadow-soft"
      }`}
    >
      <h3 className="text-lg font-semibold tracking-tight text-ink">{name}</h3>
      {tagline && <p className="mt-1 text-sm text-muted">{tagline}</p>}
      <div className="mt-4 flex items-baseline gap-1">
        <span className="text-2xl font-semibold tracking-tight text-ink">{priceLabel}</span>
        {priceUnit && <span className="text-sm text-muted">{priceUnit}</span>}
      </div>
      <ul className="mt-5 flex flex-1 flex-col gap-2.5">
        {features.map((f) => (
          <li key={f} className="flex gap-2.5 text-sm text-ink-soft">
            <span aria-hidden className="mt-1 text-blue-600">✓</span>
            <span>{f}</span>
          </li>
        ))}
      </ul>
      {disclaimer && (
        <p className="mt-4 rounded-xl bg-blue-50 px-3 py-2 text-xs leading-relaxed text-ink-soft">
          {disclaimer}
        </p>
      )}
      <Button
        href={ctaHref}
        variant={highlight ? "primary" : "secondary"}
        className="mt-6 w-full"
      >
        {ctaLabel}
      </Button>
    </div>
  );
}
