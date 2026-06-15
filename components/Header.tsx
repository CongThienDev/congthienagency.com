"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
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
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const nav: NavItem[] = locale === "vi" ? NAV_VI : NAV_EN;
  const home = locale === "vi" ? "/vi" : "/en";
  const ctaHref = locale === "vi" ? "/vi/lien-he" : "/en/contact";
  const ctaLabel = locale === "vi" ? "Nhận tư vấn" : "Get in touch";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "glass border-b border-line shadow-soft"
          : "border-b border-transparent bg-paper/60 backdrop-blur-sm"
      }`}
    >
      <Container>
        <div className="flex h-[68px] items-center justify-between gap-4">
          <Link
            href={home}
            className="group flex shrink-0 items-center"
            onClick={() => setOpen(false)}
          >
            <Image
              src="/logo/cong-thien-agency-signature-blue.svg"
              alt="Công Thiên Agency"
              width={3495}
              height={844}
              priority
              className="h-9 w-auto transition-transform duration-300 group-hover:scale-[1.02] sm:h-10"
            />
          </Link>

          <nav className="hidden items-center gap-0.5 lg:flex">
            {nav.map((item) => {
              const isActive =
                pathname === item.href ||
                (item.href !== home && pathname?.startsWith(item.href + "/"));
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`relative whitespace-nowrap rounded-full px-3 py-2 text-[13px] font-medium transition-colors ${
                    isActive
                      ? "text-blue-700"
                      : "text-ink-soft hover:bg-blue-50/70 hover:text-blue-700"
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute inset-x-3.5 -bottom-px h-0.5 rounded-full bg-blue-600" />
                  )}
                </Link>
              );
            })}
          </nav>

          <div className="flex shrink-0 items-center gap-2.5">
            <div className="hidden md:block">
              <LanguageSwitcher locale={locale} alternateKey={alternateKey} />
            </div>
            <Link
              href={ctaHref}
              className="hidden items-center gap-1.5 whitespace-nowrap rounded-full bg-blue-600 px-4.5 py-2.5 text-sm font-semibold text-white shadow-blue transition-all hover:-translate-y-0.5 hover:bg-blue-500 sm:inline-flex"
            >
              {ctaLabel}
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" className="h-3.5 w-3.5">
                <path d="M5 12h14m-5-5 5 5-5 5" />
              </svg>
            </Link>
            <button
              type="button"
              aria-label="Menu"
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
              className="grid h-10 w-10 place-items-center rounded-xl border border-line bg-white/70 text-ink lg:hidden"
            >
              <span className="relative block h-3 w-5">
                <span
                  className={`absolute left-0 top-0 h-[1.5px] w-5 rounded bg-ink transition-transform duration-200 ${open ? "translate-y-[5.5px] rotate-45" : ""}`}
                />
                <span
                  className={`absolute left-0 top-[5.5px] h-[1.5px] w-5 rounded bg-ink transition-opacity duration-200 ${open ? "opacity-0" : ""}`}
                />
                <span
                  className={`absolute left-0 top-[11px] h-[1.5px] w-5 rounded bg-ink transition-transform duration-200 ${open ? "-translate-y-[5.5px] -rotate-45" : ""}`}
                />
              </span>
            </button>
          </div>
        </div>
      </Container>

      {open && (
        <div className="glass border-t border-line lg:hidden">
          <Container className="py-4">
            <nav className="flex flex-col">
              {nav.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className={`flex items-center justify-between rounded-xl px-3.5 py-3 text-[15px] font-medium ${
                      isActive
                        ? "bg-blue-50 text-blue-700"
                        : "text-ink-soft hover:bg-blue-50/60 hover:text-blue-700"
                    }`}
                  >
                    {item.label}
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-3.5 w-3.5 text-line-strong">
                      <path d="m9 6 6 6-6 6" />
                    </svg>
                  </Link>
                );
              })}
            </nav>
            <div className="mt-4 flex items-center justify-between gap-3 border-t border-line pt-4">
              <LanguageSwitcher locale={locale} alternateKey={alternateKey} />
              <a
                href={SITE.contact.zalo}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 rounded-full bg-blue-600 px-5 py-3 text-center text-sm font-semibold text-white shadow-blue"
              >
                Zalo {SITE.contact.phoneDisplay}
              </a>
            </div>
          </Container>
        </div>
      )}
    </header>
  );
}
