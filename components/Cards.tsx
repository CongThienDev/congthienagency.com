import Link from "next/link";
import { type ReactNode } from "react";

export function ServiceCard({
  title,
  desc,
  href,
  tag,
}: {
  title: string;
  desc: string;
  href: string;
  tag?: string;
}) {
  return (
    <Link
      href={href}
      className="group relative flex flex-col rounded-card border border-line bg-white p-6 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-lift"
    >
      {tag && <span className="label-mono text-blue-600">{tag}</span>}
      <h3 className="mt-3 text-lg font-semibold tracking-tight text-ink">{title}</h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">{desc}</p>
      <span className="mt-5 inline-flex items-center gap-1 text-sm font-medium text-blue-700">
        Xem chi tiết
        <span className="transition-transform group-hover:translate-x-1">→</span>
      </span>
    </Link>
  );
}

export function PortfolioCard({
  href,
  name,
  category,
  location,
  stat,
}: {
  href: string;
  name: string;
  category: string;
  location: string;
  stat: string;
}) {
  return (
    <Link
      href={href}
      className="group flex flex-col overflow-hidden rounded-card border border-line bg-white shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-lift"
    >
      <div className="relative aspect-[16/10] bg-gradient-to-br from-blue-50 via-white to-blue-100">
        <div className="bg-grid absolute inset-0 opacity-40" />
        <div className="absolute bottom-4 left-4 rounded-full bg-ink/90 px-3 py-1 text-xs font-medium text-white">
          {stat}
        </div>
      </div>
      <div className="p-6">
        <span className="label-mono text-blue-600">{category}</span>
        <h3 className="mt-2 text-lg font-semibold tracking-tight text-ink">{name}</h3>
        <p className="mt-1 text-sm text-muted">{location}</p>
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
      className="group flex flex-col rounded-card border border-line bg-white p-6 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-lift"
    >
      <div className="flex items-center gap-3 text-xs text-muted">
        <span>{d}</span>
        <span className="h-1 w-1 rounded-full bg-line-strong" />
        <span>{readingMinutes} phút đọc</span>
      </div>
      <h3 className="mt-3 text-lg font-semibold leading-snug tracking-tight text-ink group-hover:text-blue-700">
        {title}
      </h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">{excerpt}</p>
      <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-blue-700">
        Đọc bài <span className="transition-transform group-hover:translate-x-1">→</span>
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
