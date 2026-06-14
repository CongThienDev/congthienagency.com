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

const CLUSTER_ACCENT: Record<Cluster, string> = {
  website: "from-blue-600 via-blue-500 to-indigo-500",
  naver: "from-[#03cf5d] to-emerald-500",
  maps: "from-blue-500 to-cyan-400",
  social: "from-[#1877F2] to-blue-400",
};

const CLUSTER_CHECK: Record<Cluster, string> = {
  website: "text-blue-500",
  naver: "text-emerald-500",
  maps: "text-blue-400",
  social: "text-blue-500",
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
  const accent = cluster
    ? CLUSTER_ACCENT[cluster]
    : "from-slate-300 to-slate-200";
  const checkColor = cluster ? CLUSTER_CHECK[cluster] : "text-slate-400";

  const hasTuPrefix = priceLabel.startsWith("Từ ");
  const isPriceNegotiation = priceLabel.startsWith("Báo giá");
  const priceDisplay = hasTuPrefix ? priceLabel.slice(3) : priceLabel;

  return (
    <div
      className={[
        "group relative flex flex-col overflow-hidden rounded-2xl transition-all duration-300",
        highlight
          ? "bg-gradient-to-b from-blue-50/70 to-white ring-2 ring-blue-400/30 shadow-[0_4px_6px_-2px_rgba(59,130,246,0.08),0_20px_48px_-4px_rgba(59,130,246,0.18)] hover:-translate-y-2 hover:shadow-[0_8px_16px_-2px_rgba(59,130,246,0.14),0_36px_64px_-4px_rgba(59,130,246,0.24)]"
          : "bg-white ring-1 ring-slate-900/[0.07] shadow-[0_1px_3px_rgba(0,0,0,0.04),0_8px_24px_rgba(0,0,0,0.06)] hover:-translate-y-1.5 hover:shadow-[0_4px_12px_rgba(0,0,0,0.06),0_20px_40px_rgba(0,0,0,0.1)] hover:ring-slate-900/10",
      ].join(" ")}
    >
      {/* Cluster accent stripe */}
      <div className={`h-[3px] w-full bg-gradient-to-r ${accent}`} />

      <div className="flex flex-1 flex-col px-6 pb-7 pt-5 sm:px-7">
        {/* Header */}
        <div className="flex items-start justify-between gap-2">
          <div className="flex items-center gap-2.5">
            {brand && (
              <span
                className={`grid h-9 w-9 shrink-0 place-items-center rounded-xl ${brand.badge}`}
              >
                {brand.icon}
              </span>
            )}
            <h3 className="text-[15px] font-semibold leading-snug tracking-tight text-slate-900">
              {name}
            </h3>
          </div>
          {highlight && (
            <span className="shrink-0 rounded-full bg-blue-600 px-2.5 py-[5px] font-mono text-[9px] font-bold uppercase tracking-widest text-white shadow-sm">
              {cluster === "website" ? "Chính" : "Hot"}
            </span>
          )}
        </div>

        {tagline && (
          <p className="mt-2 text-[12.5px] leading-relaxed text-slate-500">
            {tagline}
          </p>
        )}

        {/* Price */}
        <div className="mt-5">
          {hasTuPrefix && (
            <p className="mb-0.5 font-mono text-[10px] font-medium uppercase tracking-[0.18em] text-slate-400">
              Từ
            </p>
          )}
          {isPriceNegotiation ? (
            <p className="text-lg font-semibold italic text-slate-600">
              {priceLabel}
            </p>
          ) : (
            <div className="flex items-baseline gap-1.5">
              <span className="text-[2rem] font-bold leading-none tracking-tight text-slate-900">
                {priceDisplay}
              </span>
              {priceUnit && (
                <span className="text-[12px] text-slate-400">{priceUnit}</span>
              )}
            </div>
          )}
        </div>

        {/* Divider */}
        <div className="my-5 border-t border-slate-100" />

        {/* Features */}
        <ul className="flex flex-1 flex-col gap-2">
          {features.map((f) => (
            <li
              key={f}
              className="flex items-start gap-2 text-[12.5px] leading-snug text-slate-600"
            >
              <IconCheck
                className={`mt-0.5 h-[14px] w-[14px] shrink-0 ${
                  highlight ? "text-blue-500" : checkColor
                }`}
              />
              <span>{f}</span>
            </li>
          ))}
        </ul>

        {/* Disclaimer */}
        {disclaimer && (
          <div className="mt-5 rounded-xl bg-slate-50 px-3 py-2 ring-1 ring-slate-100">
            <p className="text-[11px] leading-relaxed text-slate-400">
              {disclaimer}
            </p>
          </div>
        )}

        {/* CTA */}
        <Button
          href={ctaHref}
          variant={highlight ? "primary" : "secondary"}
          className="mt-6 w-full"
        >
          {ctaLabel}
        </Button>
      </div>
    </div>
  );
}
