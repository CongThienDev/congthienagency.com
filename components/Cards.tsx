import Link from "next/link";
import { type ReactNode } from "react";
import { IconArrowRight, IconCheck } from "./Icons";
import { SERVICE_BRAND, type ServiceBrand } from "./serviceBrand";

export function ServiceCard({
  title,
  desc,
  href,
  tag,
  icon,
  brand,
  featured = false,
  bullets,
  chips,
  ctaLabel = "Xem chi tiết",
}: {
  title: string;
  desc: string;
  href: string;
  tag?: string;
  icon?: ReactNode;
  brand?: ServiceBrand;
  featured?: boolean;
  bullets?: string[];
  chips?: string[];
  ctaLabel?: string;
}) {
  const b = brand ? SERVICE_BRAND[brand] : undefined;
  const badgeIcon = b?.icon ?? icon;
  const badgeClass = b
    ? featured
      ? b.badgeDark
      : b.badge
    : featured
      ? "bg-blue-600 text-white shadow-blue"
      : "bg-blue-50 text-blue-600 ring-1 ring-blue-100";

  return (
    <Link
      href={href}
      className={`group card-hover relative flex flex-col overflow-hidden rounded-card p-6 sm:p-7 ${
        featured
          ? "card-gradient-border-dark text-white shadow-lift"
          : "card-gradient-border shadow-soft"
      }`}
    >
      {featured && (
        <div aria-hidden className="bg-glow-dark absolute inset-0 opacity-80" />
      )}
      <div className="relative flex h-full flex-col">
        <div className="flex items-start justify-between">
          {badgeIcon && (
            <span
              className={`grid h-11 w-11 place-items-center rounded-xl transition-transform duration-300 group-hover:scale-110 ${badgeClass}`}
            >
              {badgeIcon}
            </span>
          )}
          {tag && (
            <span
              className={`label-mono ${featured ? "text-blue-300" : b?.accentText ?? "text-blue-600"}`}
            >
              {tag}
            </span>
          )}
        </div>
        <h3
          className={`mt-4 text-lg font-bold tracking-tight ${
            featured ? "text-white" : "text-ink"
          }`}
        >
          {title}
        </h3>
        <p
          className={`mt-2 text-sm leading-relaxed ${
            featured ? "text-blue-100/75" : "text-muted"
          }`}
        >
          {desc}
        </p>
        {bullets && (
          <ul className="mt-4 flex flex-col gap-1.5">
            {bullets.map((bl) => (
              <li
                key={bl}
                className={`flex items-center gap-2 text-[13px] ${
                  featured ? "text-blue-100/85" : "text-ink-soft"
                }`}
              >
                <IconCheck
                  className={`h-3.5 w-3.5 shrink-0 ${featured ? "text-blue-400" : "text-blue-600"}`}
                />
                {bl}
              </li>
            ))}
          </ul>
        )}
        {chips && (
          <div className="mt-4 flex flex-wrap gap-1.5">
            {chips.map((c) => (
              <span
                key={c}
                className={`rounded-full border px-2.5 py-1 text-[11px] font-semibold ${
                  featured
                    ? "border-white/15 bg-white/10 text-blue-100/85"
                    : b?.chip ?? "border-blue-200 bg-blue-50 text-blue-700"
                }`}
              >
                {c}
              </span>
            ))}
          </div>
        )}
        <span
          className={`mt-auto inline-flex items-center gap-1.5 pt-5 text-sm font-semibold ${
            featured ? "text-blue-300" : "text-blue-700"
          }`}
        >
          {ctaLabel}
          <IconArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-1" />
        </span>
      </div>
    </Link>
  );
}

export function PortfolioCard({
  href,
  name,
  category,
  location,
  deliveryTime,
  features,
  proofs,
}: {
  href: string;
  name: string;
  category: string;
  location: string;
  deliveryTime?: string;
  features?: string[];
  proofs?: { icon: ReactNode; label: string }[];
}) {
  return (
    <Link
      href={href}
      className="group card-hover card-gradient-border flex flex-col overflow-hidden rounded-card shadow-soft"
    >
      {/* mock screenshot area — swap for a real <Image> when assets exist */}
      <div className="relative m-3 mb-0 overflow-hidden rounded-xl border border-line bg-gradient-to-br from-blue-950 via-blue-900 to-ink">
        <div className="bg-grid absolute inset-0 opacity-[0.12]" />
        <div className="relative px-6 pb-0 pt-6">
          <div className="overflow-hidden rounded-t-lg border border-white/10 bg-white shadow-float transition-transform duration-500 group-hover:-translate-y-1.5">
            <div className="flex items-center gap-1.5 border-b border-line bg-paper px-3 py-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-line-strong" />
              <span className="h-1.5 w-1.5 rounded-full bg-line-strong" />
              <span className="h-1.5 w-1.5 rounded-full bg-line-strong" />
            </div>
            <div className="space-y-1.5 p-3.5">
              <div className="h-2.5 w-2/3 rounded-full bg-ink/80" />
              <div className="h-1.5 w-full rounded-full bg-line" />
              <div className="h-1.5 w-4/5 rounded-full bg-line" />
              <div className="flex gap-1.5 pt-1">
                <div className="h-4 w-14 rounded bg-blue-600" />
                <div className="h-4 w-12 rounded ring-1 ring-line-strong" />
              </div>
            </div>
          </div>
        </div>
        {/* SEO badge */}
        <div className="absolute right-3.5 top-3.5 flex items-center gap-1.5 rounded-full bg-white/95 px-2.5 py-1 shadow-soft">
          <span className="grid h-4 w-4 place-items-center rounded-full bg-blue-600 text-[8px] font-bold text-white">✓</span>
          <span className="font-mono text-[10px] font-semibold text-ink">SEO 100/100</span>
        </div>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-center justify-between gap-3">
          <span className="label-mono text-blue-600">{category}</span>
          {deliveryTime && (
            <span className="rounded-full bg-blue-50 px-2.5 py-0.5 font-mono text-[10px] font-semibold text-blue-700 ring-1 ring-blue-100">
              {deliveryTime}
            </span>
          )}
        </div>
        <h3 className="mt-2.5 text-xl font-bold tracking-tight text-ink">{name}</h3>
        <p className="mt-0.5 text-sm text-muted">{location}</p>
        {proofs && (
          <ul className="mt-4 flex flex-col gap-2">
            {proofs.map((p) => (
              <li key={p.label} className="flex items-center gap-2.5 text-[13px] font-medium text-ink-soft">
                <span className="grid h-7 w-7 shrink-0 place-items-center rounded-lg bg-paper ring-1 ring-line">
                  {p.icon}
                </span>
                {p.label}
              </li>
            ))}
          </ul>
        )}
        {!proofs && features && (
          <ul className="mt-4 flex flex-wrap gap-1.5">
            {features.map((f) => (
              <li
                key={f}
                className="rounded-full border border-line bg-paper px-2.5 py-1 text-[11px] font-medium text-ink-soft"
              >
                {f}
              </li>
            ))}
          </ul>
        )}
        <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-blue-700">
          Xem case study
          <IconArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-1" />
        </span>
      </div>
    </Link>
  );
}

export function BlogCard({
  href,
  title,
  excerpt,
  date,
  readingMinutes,
}: {
  href: string;
  title: string;
  excerpt: string;
  date: string;
  readingMinutes: number;
}) {
  const d = new Date(date).toLocaleDateString("vi-VN", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });
  return (
    <Link
      href={href}
      className="group card-hover card-gradient-border flex flex-col rounded-card p-6 shadow-soft"
    >
      <div className="flex items-center gap-3 font-mono text-[11px] text-muted">
        <span>{d}</span>
        <span className="h-1 w-1 rounded-full bg-line-strong" />
        <span>{readingMinutes} phút đọc</span>
      </div>
      <h3 className="mt-3 text-lg font-bold leading-snug tracking-tight text-ink transition-colors group-hover:text-blue-700">
        {title}
      </h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">{excerpt}</p>
      <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-blue-700">
        Đọc bài
        <IconArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-1" />
      </span>
    </Link>
  );
}

export function Card({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`rounded-card border border-line bg-white p-6 shadow-soft ${className}`}>
      {children}
    </div>
  );
}
