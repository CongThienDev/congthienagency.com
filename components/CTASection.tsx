import { Container } from "./Container";
import { SITE } from "@/content/site";
import { IconChat, IconMail, IconPhone } from "./Icons";

export function CTASection({
  title,
  sub,
  primaryHref,
  primaryLabel,
}: {
  title: string;
  sub: string;
  primaryHref?: string;
  primaryLabel?: string;
}) {
  return (
    <section className="py-16 sm:py-24">
      <Container>
        <div className="card-gradient-border-dark relative overflow-hidden rounded-[1.75rem] px-6 py-14 sm:px-14 sm:py-20">
          <div aria-hidden className="bg-glow-dark absolute inset-0" />
          <div aria-hidden className="bg-grid absolute inset-0 opacity-[0.06]" />
          <div
            aria-hidden
            className="absolute -right-24 -top-24 h-80 w-80 rounded-full bg-blue-600/25 blur-3xl"
          />

          <div className="relative mx-auto max-w-2xl text-center">
            <p className="label-mono text-blue-300">Bắt đầu ngay hôm nay</p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-[2.6rem] sm:leading-[1.15] text-balance">
              {title}
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-blue-100/75">{sub}</p>

            <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
              <a
                href={SITE.contact.zalo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-7 py-3.5 text-base font-semibold text-white shadow-blue transition-all hover:-translate-y-0.5 hover:bg-blue-500"
              >
                <IconChat className="h-4.5 w-4.5" />
                Zalo {SITE.contact.phoneDisplay}
              </a>
              <a
                href={SITE.contact.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-6 py-3.5 text-base font-semibold text-white backdrop-blur transition-all hover:-translate-y-0.5 hover:bg-white/20"
              >
                <IconPhone className="h-4.5 w-4.5" />
                WhatsApp
              </a>
              <a
                href={`mailto:${SITE.contact.email}`}
                className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-6 py-3.5 text-base font-semibold text-white backdrop-blur transition-all hover:-translate-y-0.5 hover:bg-white/20"
              >
                <IconMail className="h-4.5 w-4.5" />
                Email
              </a>
            </div>

            <p className="mt-7 font-mono text-xs tracking-wide text-blue-200/50">
              Tư vấn miễn phí · Báo giá rõ ràng trước khi bắt đầu
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
