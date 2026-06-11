import { Container } from "./Container";
import { Button } from "./Button";
import { SITE } from "@/content/site";

export function CTASection({
  title,
  sub,
  primaryHref,
  primaryLabel,
}: {
  title: string;
  sub: string;
  primaryHref: string;
  primaryLabel: string;
}) {
  return (
    <section className="py-16 sm:py-20">
      <Container>
        <div className="relative overflow-hidden rounded-card bg-ink px-6 py-12 sm:px-12 sm:py-16">
          <div className="bg-grid absolute inset-0 opacity-[0.07]" />
          <div
            aria-hidden
            className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-blue-600/30 blur-3xl"
          />
          <div className="relative max-w-2xl">
            <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl text-balance">
              {title}
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-blue-100/80">{sub}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button href={primaryHref} variant="primary">
                {primaryLabel}
              </Button>
              <Button href={SITE.contact.zalo} variant="secondary" external>
                Zalo {SITE.contact.phoneDisplay}
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
