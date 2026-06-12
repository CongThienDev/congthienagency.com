import Link from "next/link";
import { Container } from "./Container";
import { FOOTER_VI } from "@/content/navigation";
import { SITE, type Locale } from "@/content/site";
import {
  IconChat,
  IconMail,
  IconMapPin,
  IconCode,
  IconNaver,
  IconMapsColor,
  IconFacebook,
} from "./Icons";
import type { ReactNode } from "react";

function brandIconForHref(href: string): ReactNode {
  if (href.includes("thiet-ke-website")) return <IconCode className="h-3.5 w-3.5 text-blue-400" />;
  if (href.includes("naver")) return <IconNaver className="h-3.5 w-3.5 text-[color:var(--color-naver)]" />;
  if (href.includes("google-maps")) return <IconMapsColor className="h-4 w-4" />;
  if (href.includes("social")) return <IconFacebook className="h-3.5 w-3.5 text-[color:var(--color-facebook)]" />;
  return null;
}

export function Footer({ locale }: { locale: Locale }) {
  const year = new Date().getFullYear();

  if (locale === "en") {
    return (
      <footer className="relative overflow-hidden border-t border-white/10 bg-ink text-white">
        <div aria-hidden className="bg-glow-dark absolute inset-0 opacity-60" />
        <Container className="relative py-14">
          <div className="flex flex-col gap-10 sm:flex-row sm:items-start sm:justify-between">
            <div className="max-w-xs">
              <BrandLockup />
              <p className="mt-4 text-sm leading-relaxed text-blue-100/60">
                Websites, Naver & Google Maps marketing for tourism businesses
                in Hoi An – Da Nang.
              </p>
            </div>
            <div className="flex flex-col gap-2.5 text-sm">
              <Link href="/en/services" className="text-blue-100/70 transition-colors hover:text-white">Services</Link>
              <Link href="/en/pricing" className="text-blue-100/70 transition-colors hover:text-white">Pricing</Link>
              <Link href="/en/about" className="text-blue-100/70 transition-colors hover:text-white">About</Link>
              <Link href="/en/contact" className="text-blue-100/70 transition-colors hover:text-white">Contact</Link>
            </div>
            <div className="flex flex-col gap-2.5 text-sm">
              <a href={SITE.contact.zalo} className="text-blue-100/70 transition-colors hover:text-white" target="_blank" rel="noopener noreferrer">Zalo: {SITE.contact.phoneDisplay}</a>
              <a href={`mailto:${SITE.contact.email}`} className="text-blue-100/70 transition-colors hover:text-white">{SITE.contact.email}</a>
              <a href={SITE.contact.fanpage} className="text-blue-100/70 transition-colors hover:text-white" target="_blank" rel="noopener noreferrer">Facebook Fanpage</a>
            </div>
          </div>
          <div className="mt-12 border-t border-white/10 pt-6 text-xs text-blue-100/40">
            © {year} {SITE.name}. Service area: Hoi An – Da Nang, Vietnam.
          </div>
        </Container>
      </footer>
    );
  }

  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-ink text-white">
      <div aria-hidden className="bg-glow-dark absolute inset-0 opacity-60" />
      <Container className="relative py-14 sm:py-16">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div className="max-w-sm">
            <BrandLockup />
            <p className="mt-4 text-sm leading-relaxed text-blue-100/60">
              Website có booking & thanh toán, Naver Marketing, Google Maps
              Review & Reputation cho doanh nghiệp dịch vụ – du lịch.
            </p>
            <div className="mt-6 flex flex-col gap-3 text-sm">
              <a
                href={SITE.contact.zalo}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 text-blue-100/75 transition-colors hover:text-white"
              >
                <span className="grid h-8 w-8 place-items-center rounded-lg bg-white/10 ring-1 ring-white/10">
                  <IconChat className="h-4 w-4 text-blue-300" />
                </span>
                Zalo / Hotline: <strong className="font-semibold text-white">{SITE.contact.phoneDisplay}</strong>
              </a>
              <a
                href={`mailto:${SITE.contact.email}`}
                className="flex items-center gap-2.5 text-blue-100/75 transition-colors hover:text-white"
              >
                <span className="grid h-8 w-8 place-items-center rounded-lg bg-white/10 ring-1 ring-white/10">
                  <IconMail className="h-4 w-4 text-blue-300" />
                </span>
                {SITE.contact.email}
              </a>
              <span className="flex items-center gap-2.5 text-blue-100/75">
                <span className="grid h-8 w-8 place-items-center rounded-lg bg-white/10 ring-1 ring-white/10">
                  <IconMapPin className="h-4 w-4 text-blue-300" />
                </span>
                Hội An – Đà Nẵng & toàn Việt Nam
              </span>
            </div>
          </div>

          <FooterCol title="Dịch vụ" links={FOOTER_VI.services} brandIcons />
          <FooterCol title="Ngành nghề" links={FOOTER_VI.industries} />
          <FooterCol title="Công ty" links={FOOTER_VI.company} />
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-white/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-blue-100/40">
            © {year} {SITE.name}. Sáng lập bởi {SITE.founder}.
          </p>
          <a
            href={SITE.contact.fanpage}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-blue-100/50 transition-colors hover:text-white"
          >
            Facebook Fanpage →
          </a>
        </div>
      </Container>
    </footer>
  );
}

function BrandLockup() {
  return (
    <div className="flex items-center gap-2.5">
      <span className="relative grid h-10 w-10 place-items-center overflow-hidden rounded-xl bg-white/10 font-mono text-sm font-bold text-white ring-1 ring-white/15">
        <span className="absolute inset-0 bg-gradient-to-br from-blue-600/60 via-transparent to-transparent" />
        <span className="relative">CT</span>
      </span>
      <span className="leading-tight">
        <span className="block text-base font-bold tracking-tight text-white">
          Công Thiên Agency
        </span>
        <span className="block font-mono text-[9px] uppercase tracking-[0.22em] text-blue-200/50">
          by CongThienDev
        </span>
      </span>
    </div>
  );
}

function FooterCol({
  title,
  links,
  brandIcons = false,
}: {
  title: string;
  links: { label: string; href: string }[];
  brandIcons?: boolean;
}) {
  return (
    <div>
      <p className="label-mono text-blue-200/50">{title}</p>
      <ul className="mt-5 flex flex-col gap-2.5">
        {links.map((l) => (
          <li key={l.href}>
            <Link
              href={l.href}
              className="group flex items-center gap-2.5 text-sm text-blue-100/70 transition-colors hover:text-white"
            >
              {brandIcons && (
                <span className="grid h-6 w-6 shrink-0 place-items-center rounded-lg bg-white/10 ring-1 ring-white/10 transition-colors group-hover:bg-white/15">
                  {brandIconForHref(l.href)}
                </span>
              )}
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
