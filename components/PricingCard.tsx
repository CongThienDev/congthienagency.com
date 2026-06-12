import { Button } from "./Button";
import { IconCheck } from "./Icons";
import { SERVICE_BRAND, type ServiceBrand } from "./serviceBrand";

type Cluster = "website" | "naver" | "maps" | "social";

const CLUSTER_BRAND: Record<Cluster, ServiceBrand> = {
  website: "website",
  naver: "naver",
  maps: "maps",
  social: "facebook",
};

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
  cluster,
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
  cluster?: Cluster;
}) {
  const brand = cluster ? SERVICE_BRAND[CLUSTER_BRAND[cluster]] : undefined;
  if (highlight) {
    return (
      <div className="card-gradient-border-dark card-hover relative flex flex-col overflow-hidden rounded-card p-6 text-white shadow-lift sm:p-7">
        <div aria-hidden className="bg-glow-dark absolute inset-0 opacity-90" />
        <div className="relative flex flex-1 flex-col">
          <div className="flex items-center justify-between gap-3">
            <div className="flex items-center gap-2.5">
              {brand && (
                <span className={`grid h-9 w-9 place-items-center rounded-xl ${brand.badgeDark}`}>
                  {brand.icon}
                </span>
              )}
              <h3 className="text-lg font-bold tracking-tight text-white">{name}</h3>
            </div>
            <span className="rounded-full bg-blue-600 px-3 py-1 font-mono text-[10px] font-semibold uppercase tracking-wider text-white shadow-blue">
              Phổ biến
            </span>
          </div>
          {tagline && <p className="mt-1.5 text-sm text-blue-100/70">{tagline}</p>}
          <div className="mt-5 flex items-baseline gap-1.5">
            <span className="text-[1.7rem] font-bold tracking-tight text-white">{priceLabel}</span>
            {priceUnit && <span className="text-sm text-blue-100/60">{priceUnit}</span>}
          </div>
          <ul className="mt-6 flex flex-1 flex-col gap-3">
            {features.map((f) => (
              <li key={f} className="flex gap-2.5 text-sm text-blue-100/85">
                <IconCheck className="mt-0.5 h-4 w-4 shrink-0 text-blue-400" />
                <span>{f}</span>
              </li>
            ))}
          </ul>
          {disclaimer && (
            <p className="mt-5 rounded-xl bg-white/8 px-3.5 py-2.5 text-xs leading-relaxed text-blue-100/70 ring-1 ring-white/10">
              {disclaimer}
            </p>
          )}
          <Button href={ctaHref} variant="primary" className="mt-7 w-full">
            {ctaLabel}
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="card-gradient-border card-hover flex flex-col rounded-card p-6 shadow-soft sm:p-7">
      <div className="flex items-center gap-2.5">
        {brand && (
          <span className={`grid h-9 w-9 shrink-0 place-items-center rounded-xl ${brand.badge}`}>
            {brand.icon}
          </span>
        )}
        <h3 className="text-lg font-bold tracking-tight text-ink">{name}</h3>
      </div>
      {tagline && <p className="mt-2 text-sm text-muted">{tagline}</p>}
      <div className="mt-5 flex items-baseline gap-1.5">
        <span className="text-[1.7rem] font-bold tracking-tight text-ink">{priceLabel}</span>
        {priceUnit && <span className="text-sm text-muted">{priceUnit}</span>}
      </div>
      <ul className="mt-6 flex flex-1 flex-col gap-3">
        {features.map((f) => (
          <li key={f} className="flex gap-2.5 text-sm text-ink-soft">
            <IconCheck className="mt-0.5 h-4 w-4 shrink-0 text-blue-600" />
            <span>{f}</span>
          </li>
        ))}
      </ul>
      {disclaimer && (
        <p className="mt-5 rounded-xl bg-blue-50 px-3.5 py-2.5 text-xs leading-relaxed text-ink-soft ring-1 ring-blue-100">
          {disclaimer}
        </p>
      )}
      <Button href={ctaHref} variant="secondary" className="mt-7 w-full">
        {ctaLabel}
      </Button>
    </div>
  );
}
