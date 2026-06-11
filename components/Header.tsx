"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Container } from "./Container";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { NAV_VI, NAV_EN, type NavItem } from "@/content/navigation";
import { LOCALE_ALTERNATES } from "@/content/navigation";
import { SITE, type Locale } from "@/content/site";

export function Header({
  locale,
  alternateKey,
}: {
  locale: Locale;
  alternateKey?: keyof typeof LOCALE_ALTERNATES;
}) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const nav: NavItem[] = locale === "vi" ? NAV_VI : NAV_EN;
  const home = locale === "vi" ? "/vi" : "/en";
  const ctaHref = locale === "vi" ? "/vi/lien-he" : "/en/contact";
  const ctaLabel = locale === "vi" ? "Liên hệ" : "Contact";

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-paper/80 backdrop-blur-md">
      <Container>
        <div className="flex h-16 items-center justify-between gap-4">
          <Link href={home} className="flex items-center gap-2" onClick={() => setOpen(false)}>
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-ink font-mono text-sm font-bold text-white">
              CT
            </span>
            <span className="hidden text-sm font-semibold tracking-tight text-ink sm:block">
              {SITE.shortName}
            </span>
          </Link>

          <nav className="hidden items-center gap-1 lg:flex">
            {nav.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`rounded-full px-3 py-2 text-sm transition-colors ${
                    isActive
                      ? "text-blue-700"
                      : "text-ink-soft hover:text-blue-700"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-3">
            <div className="hidden sm:block">
              <LanguageSwitcher locale={locale} alternateKey={alternateKey} />
            </div>
            <Link
              href={ctaHref}
              className="hidden rounded-full bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow-blue transition-all hover:bg-blue-700 sm:inline-flex"
            >
              {ctaLabel}
            </Link>
            <button
              type="button"
              aria-label="Menu"
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
              className="flex h-10 w-10 items-center justify-center rounded-lg border border-line text-ink lg:hidden"
            >
              <span className="relative block h-3 w-5">
                <span
                  className={`absolute left-0 top-0 h-0.5 w-5 bg-ink transition-transform ${open ? "translate-y-1.5 rotate-45" : ""}`}
                />
                <span
                  className={`absolute left-0 top-1.5 h-0.5 w-5 bg-ink transition-opacity ${open ? "opacity-0" : ""}`}
                />
                <span
                  className={`absolute left-0 top-3 h-0.5 w-5 bg-ink transition-transform ${open ? "-translate-y-1.5 -rotate-45" : ""}`}
                />
              </span>
            </button>
          </div>
        </div>
      </Container>

      {open && (
        <div className="border-t border-line bg-paper lg:hidden">
          <Container className="py-4">
            <nav className="flex flex-col gap-1">
              {nav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="rounded-lg px-3 py-3 text-base text-ink-soft hover:bg-blue-50 hover:text-blue-700"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
            <div className="mt-4 flex items-center justify-between border-t border-line pt-4">
              <LanguageSwitcher locale={locale} alternateKey={alternateKey} />
              <Link
                href={ctaHref}
                onClick={() => setOpen(false)}
                className="rounded-full bg-blue-600 px-5 py-2.5 text-sm font-medium text-white"
              >
                {ctaLabel}
              </Link>
            </div>
          </Container>
        </div>
      )}
    </header>
  );
}
