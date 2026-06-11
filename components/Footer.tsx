import Link from "next/link";
import { Container } from "./Container";
import { FOOTER_VI } from "@/content/navigation";
import { SITE, type Locale } from "@/content/site";

export function Footer({ locale }: { locale: Locale }) {
  const year = new Date().getFullYear();

  if (locale === "en") {
    return (
      <footer className="border-t border-line bg-white">
        <Container className="py-12">
          <div className="flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
            <div className="max-w-xs">
              <p className="text-base font-semibold text-ink">{SITE.shortName}</p>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                Websites, Naver & Google Maps marketing for tourism businesses in
                Hoi An – Da Nang.
              </p>
            </div>
            <div className="flex flex-col gap-2 text-sm">
              <Link href="/en/services" className="text-ink-soft hover:text-blue-700">Services</Link>
              <Link href="/en/pricing" className="text-ink-soft hover:text-blue-700">Pricing</Link>
              <Link href="/en/about" className="text-ink-soft hover:text-blue-700">About</Link>
              <Link href="/en/contact" className="text-ink-soft hover:text-blue-700">Contact</Link>
            </div>
            <div className="text-sm">
              <a href={SITE.contact.zalo} className="block text-ink-soft hover:text-blue-700" target="_blank" rel="noopener noreferrer">Zalo: {SITE.contact.phoneDisplay}</a>
              <a href={`mailto:${SITE.contact.email}`} className="mt-2 block text-ink-soft hover:text-blue-700">{SITE.contact.email}</a>
              <a href={SITE.contact.fanpage} className="mt-2 block text-ink-soft hover:text-blue-700" target="_blank" rel="noopener noreferrer">Fanpage</a>
            </div>
          </div>
          <div className="mt-10 border-t border-line pt-6 text-xs text-muted">
            © {year} {SITE.name}. Service area: Hoi An – Da Nang, Vietnam.
          </div>
        </Container>
      </footer>
    );
  }

  return (
    <footer className="border-t border-line bg-white">
      <Container className="py-12">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div className="max-w-xs">
            <p className="text-base font-semibold text-ink">{SITE.shortName}</p>
            <p className="mt-2 text-sm leading-relaxed text-muted">
              {SITE.brandTagline}
            </p>
            <p className="mt-3 text-sm text-muted">Khu vực phục vụ: Hội An – Đà Nẵng & toàn Việt Nam.</p>
          </div>

          <FooterCol title="Dịch vụ" links={FOOTER_VI.services} />
          <FooterCol title="Ngành nghề" links={FOOTER_VI.industries} />
          <FooterCol title="Công ty" links={FOOTER_VI.company} />
        </div>

        <div className="mt-10 flex flex-col gap-4 border-t border-line pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-muted">
            © {year} {SITE.name}. Sáng lập bởi {SITE.founder}.
          </p>
          <div className="flex flex-wrap gap-4 text-xs text-ink-soft">
            <a href={SITE.contact.zalo} target="_blank" rel="noopener noreferrer" className="hover:text-blue-700">Zalo {SITE.contact.phoneDisplay}</a>
            <a href={`mailto:${SITE.contact.email}`} className="hover:text-blue-700">{SITE.contact.email}</a>
            <a href={SITE.contact.fanpage} target="_blank" rel="noopener noreferrer" className="hover:text-blue-700">Fanpage</a>
          </div>
        </div>
      </Container>
    </footer>
  );
}

function FooterCol({
  title,
  links,
}: {
  title: string;
  links: { label: string; href: string }[];
}) {
  return (
    <div>
      <p className="label-mono text-muted">{title}</p>
      <ul className="mt-4 flex flex-col gap-2">
        {links.map((l) => (
          <li key={l.href}>
            <Link href={l.href} className="text-sm text-ink-soft hover:text-blue-700">
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
