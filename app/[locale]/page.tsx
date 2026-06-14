import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { cloneElement } from "react";
import { BedDouble, Flower2, MapPinned, Utensils } from "lucide-react";
import { Shell } from "@/components/Shell";
import { Container } from "@/components/Container";
import { Button } from "@/components/Button";
import { SectionHeader } from "@/components/SectionHeader";
import { ServiceCard, PortfolioCard } from "@/components/Cards";
import { TrustStrip } from "@/components/Bits";
import { CTASection } from "@/components/CTASection";
import { FAQAccordion } from "@/components/FAQAccordion";
import { HeroImage } from "@/components/HeroImage";
import { MobileHomeHero } from "@/components/MobileHomeHero";
import { Reveal } from "@/components/Reveal";
import { PricingCard } from "@/components/PricingCard";
import { JsonLd } from "@/components/JsonLd";
import {
  IconArrowRight,
  IconBolt,
  IconCalendarCheck,
  IconChat,
  IconCode,
  IconCreditCard,
  IconGauge,
  IconGlobe,
  IconMapPin,
  IconMapsColor,
  IconSearch,
  IconShield,
  IconStar,
  IconUsers,
} from "@/components/Icons";
import { SERVICE_BRAND } from "@/components/serviceBrand";
import { HOME_VI } from "@/content/pages.vi";
import { HOME_EN } from "@/content/pages.en";
import { PROJECTS } from "@/content/projects.vi";
import { GLOBAL_FAQS } from "@/content/faqs.vi";
import { PRICING_GROUPS } from "@/content/pricing.vi";
import { graphDocument, faqGraph, webPageGraph } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";
import { SITE } from "@/content/site";
import { resolveAbsoluteImageUrls, resolvePrimaryImage } from "@/lib/siteIndex";

type Params = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { locale } = await params;
  const c = locale === "en" ? HOME_EN : HOME_VI;
  const pagePath = locale === "en" ? "/en" : "/vi";
  return buildMetadata({
    title: c.metaTitle,
    description: c.metaDescription,
    path: pagePath,
    locale: locale === "en" ? "en" : "vi",
    alternateKey: "home",
    image: resolvePrimaryImage(["/images/og/og-default.jpg", "/images/hero/macbook-hero.jpg"]),
  });
}

export default async function HomePage({ params }: Params) {
  const { locale } = await params;
  if (locale !== "vi" && locale !== "en") notFound();

  if (locale === "en") return <HomeEN />;
  return <HomeVI />;
}

/* ────────────────────────── VI HOMEPAGE ────────────────────────── */

const SERVICE_ICONS = [
  <IconGlobe key="globe" />,
  <IconSearch key="search" />,
  <IconMapPin key="map" />,
  <IconUsers key="users" />,
];

const INDUSTRY_ICONS = [
  <Flower2 key="spa" className="h-5 w-5" strokeWidth={1.8} />,
  <Utensils key="dish" className="h-5 w-5" strokeWidth={1.8} />,
  <BedDouble key="bed" className="h-5 w-5" strokeWidth={1.8} />,
  <MapPinned key="compass" className="h-5 w-5" strokeWidth={1.8} />,
];

const INDUSTRY_IMAGES = [
  "/images/illustrations/spa.webp",
  "/images/illustrations/restaurant.webp",
  "/images/illustrations/homestay.webp",
  "/images/illustrations/cooking-class-tour.webp",
];

const INDUSTRY_ICON_STYLES = [
  "text-blue-600",
  "text-amber-500",
  "text-blue-600",
  "text-emerald-500",
];

const SERVICE_IMAGES = [
  "/images/services/service-website.webp",
  "/images/services/service-naver.webp",
  "/images/services/service-maps.webp",
  "/images/services/service-social.webp",
];

const TRUST_ICONS = [
  <IconGauge key="gauge" />,
  <IconBolt key="bolt" />,
  <IconCreditCard key="card" />,
  <IconMapPin key="pin" />,
];

const WHY_ICONS = [
  <IconCode key="code" />,
  <IconGauge key="gauge" />,
  <IconShield key="shield" />,
  <IconStar key="star" />,
];

function ServiceSystemSection() {
  const intro = HOME_VI.servicesIntro;

  return (
    <section className="relative overflow-hidden border-y border-line bg-white py-16 sm:py-24">
      <div aria-hidden className="bg-dots absolute inset-0 opacity-40" />

      <Container className="relative">
        <Reveal>
          <SectionHeader {...intro} align="center" />
        </Reveal>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {HOME_VI.services.map((service, index) => {
            const serviceBrand = SERVICE_BRAND[service.brand];

            return (
              <Reveal key={service.href} delay={index * 70}>
                <Link
                  href={service.href}
                  className="group flex h-full overflow-hidden rounded-[2rem] border border-slate-200/80 bg-white shadow-[0_18px_45px_rgba(15,23,42,0.08)] transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_28px_65px_rgba(15,23,42,0.14)]"
                >
                  <div className="flex w-full flex-col">
                    <div className="relative overflow-visible border-b border-slate-100">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={SERVICE_IMAGES[index]}
                        alt=""
                        aria-hidden
                        loading="lazy"
                        className="aspect-[5/4] w-full object-cover object-center transition-transform duration-700 group-hover:scale-[1.04]"
                      />
                      <div
                        aria-hidden
                        className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-slate-950/12 via-slate-950/0 to-transparent"
                      />
                      <span
                        className={`absolute bottom-0 left-1/2 z-10 grid h-10 w-10 -translate-x-1/2 translate-y-[36%] place-items-center rounded-[0.95rem] border border-white/90 bg-white shadow-[0_10px_22px_rgba(15,23,42,0.14)] ${serviceBrand.accentText}`}
                      >
                        {serviceBrand.logoImage}
                      </span>
                    </div>
                    <div className="flex flex-1 flex-col px-6 pb-5 pt-6 text-center">
                      <h3 className="mt-1 text-[1.05rem] font-bold tracking-tight text-ink sm:text-[1.12rem]">
                        {service.title}
                      </h3>
                      <p className="mt-2 text-[0.96rem] leading-6 text-slate-500">
                        {service.desc}
                      </p>

                      <span className="mt-auto inline-flex items-center justify-center gap-2 pt-3 text-sm font-semibold text-blue-700">
                        Xem chi tiết
                        <IconArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
                      </span>
                    </div>
                  </div>
                </Link>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

function HomeVI() {
  const c = HOME_VI;
  const imageUrls = resolveAbsoluteImageUrls(["/images/og/og-default.jpg", "/images/hero/macbook-hero.jpg"]);
  const pricingPreviewIds = ["naver-blogger", "website-business", "maps-reputation"];
  const allPackages = PRICING_GROUPS.flatMap((g) => g.packages);
  const pricingPreview = pricingPreviewIds
    .map((id) => allPackages.find((p) => p.id === id))
    .filter((p): p is (typeof allPackages)[number] => p !== undefined);

  return (
    <Shell locale="vi" alternateKey="home">
      <JsonLd
        data={graphDocument([
          webPageGraph({
            name: c.metaTitle,
            description: c.metaDescription,
            path: "/vi",
            images: imageUrls,
          }),
          faqGraph(GLOBAL_FAQS),
        ])}
      />

      {/* ── Hero ── */}
      <MobileHomeHero sub={c.heroSub} />

      <section className="relative hidden overflow-hidden lg:block">
        <div aria-hidden className="bg-glow absolute inset-0" />
        <div aria-hidden className="bg-grid bg-grid-fade absolute inset-0" />

        <Container className="relative pb-16 pt-6 sm:pb-24 sm:pt-10 lg:pt-12">
          <div className="grid items-start gap-10 lg:grid-cols-[0.89fr_1.11fr] lg:gap-8">
            {/* Left */}
            <div>
              <div
                className="animate-rise inline-flex items-center gap-2 rounded-full border border-blue-200/70 bg-white/80 py-1.5 pl-1.5 pr-4 shadow-soft"
                style={{ animationDelay: "0ms" }}
              >
                <span className="rounded-full bg-blue-600 px-2.5 py-0.5 font-mono text-[10px] font-semibold uppercase tracking-wider text-white">
                  Local
                </span>
                <span className="text-xs font-medium text-ink-soft">
                  Marketing Online · Hội An – Đà Nẵng
                </span>
              </div>

              <h1
                className="animate-rise mt-5 text-[2.1rem] font-bold leading-[1.08] tracking-tight text-ink text-balance sm:text-5xl lg:text-[3.4rem]"
                style={{ animationDelay: "80ms" }}
              >
                Website, Naver &amp; Google Maps cho{" "}
                <span className="relative whitespace-nowrap text-blue-700">
                  spa, nhà hàng
                  <svg
                    aria-hidden
                    viewBox="0 0 200 9"
                    className="absolute -bottom-1.5 left-0 w-full text-blue-300"
                    preserveAspectRatio="none"
                  >
                    <path d="M1 7C40 2.5 120 1.5 199 5" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
                  </svg>
                </span>{" "}
                tại Hội An
              </h1>

              <p
                className="animate-rise mt-6 max-w-xl text-base leading-relaxed text-muted sm:text-lg"
                style={{ animationDelay: "160ms" }}
              >
                {c.heroSub}
              </p>

              <div
                className="animate-rise mt-8 flex flex-wrap gap-3 md:flex-nowrap"
                style={{ animationDelay: "240ms" }}
              >
                <Button href={SITE.contact.zalo} external size="lg">
                  <IconChat className="h-4.5 w-4.5" />
                  Nhận tư vấn qua Zalo
                </Button>
                <Button href="/vi/du-an" variant="secondary" size="lg">
                  Xem dự án đã làm
                  <IconArrowRight className="h-4 w-4" />
                </Button>
              </div>

            </div>

            {/* Right: CSS product mockup */}
            <div
              className="animate-rise max-lg:mt-1 lg:-mr-12 lg:pt-2 xl:-mr-20"
              style={{ animationDelay: "200ms" }}
            >
              <HeroImage />
            </div>
          </div>

          {/* Trust strip */}
          <div className="animate-rise mt-14 sm:mt-18" style={{ animationDelay: "400ms" }}>
            <TrustStrip
              items={c.trust.map((t, i) => ({ ...t, icon: TRUST_ICONS[i] }))}
            />
          </div>
        </Container>
      </section>

      {/* ── Pain points ── */}
      <section className="py-12 sm:py-16 lg:py-18">
        <Container>
          <div className="grid items-start gap-7 lg:grid-cols-[0.82fr_1.18fr] lg:gap-9">
            <Reveal>
              <div className="max-w-md lg:-mt-10">
                <p className="label-mono text-[0.68rem] text-blue-600">{c.painIntro.eyebrow}</p>
                <h2 className="mt-3 max-w-[11ch] text-[1.85rem] font-semibold leading-[1.04] tracking-tight text-ink text-balance sm:text-[2.1rem] lg:text-[2.3rem]">
                  {c.painIntro.title}
                </h2>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/illustrations/growth.webp"
                  alt="Khách tìm thấy doanh nghiệp dịch vụ tại Hội An qua website và Google Maps, rồi đi đến bước đặt dịch vụ"
                  loading="lazy"
                  width={440}
                  height={340}
                  className="mt-7 aspect-[5/4] w-full max-w-[21.5rem] rounded-[1.55rem] object-cover object-center shadow-soft lg:max-w-[22.5rem]"
                />
                <div className="mt-4 hidden lg:block">
                  <Button href={SITE.contact.zalo} external className="px-5 py-2.5 text-sm">
                    <IconChat className="h-4 w-4" />
                    Trao đổi vấn đề của bạn
                  </Button>
                </div>
              </div>
            </Reveal>
            <div className="grid items-start gap-4 sm:grid-cols-2 lg:gap-4.5">
              {c.painPoints.map((p, i) => (
                <Reveal key={p.num} delay={i * 70}>
                  <div className="card-hover card-gradient-border flex h-full min-h-[12.5rem] flex-col rounded-[1.5rem] p-5 shadow-soft lg:min-h-[12.75rem]">
                    <span className="font-mono text-[0.76rem] font-semibold text-blue-600">{p.num}</span>
                    <h3 className="mt-3 max-w-[15ch] text-[0.98rem] font-bold leading-[1.2] tracking-tight text-ink sm:text-[1.03rem]">
                      {p.title}
                    </h3>
                    <p className="mt-3 max-w-[29ch] text-[0.92rem] leading-7 text-muted">
                      {p.desc}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* ── Services ── */}
      <ServiceSystemSection />

      {/* ── Why Công Thiên ── */}
      <section className="py-16 sm:py-24">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
            <Reveal>
              <div>
                <SectionHeader {...c.whyIntro} />
                <div className="mt-8 flex flex-col gap-3">
                  {c.why.map((w, i) => (
                    <div
                      key={w.title}
                      className="flex gap-4 rounded-card border border-line bg-white p-5 shadow-soft transition-colors hover:border-blue-200"
                    >
                      <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-blue-50 text-blue-600 ring-1 ring-blue-100">
                        {WHY_ICONS[i]}
                      </span>
                      <div>
                        <h3 className="text-[15px] font-bold tracking-tight text-ink">{w.title}</h3>
                        <p className="mt-1 text-sm leading-relaxed text-muted">{w.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>

            {/* system flow visual */}
            <Reveal delay={120}>
              <div className="card-gradient-border-dark relative overflow-hidden rounded-[1.75rem] p-7 text-white shadow-lift sm:p-10">
                <div aria-hidden className="bg-glow-dark absolute inset-0" />
                <div aria-hidden className="bg-grid absolute inset-0 opacity-[0.06]" />
                <div className="relative">
                  <p className="label-mono text-blue-300">Hệ thống tăng trưởng</p>
                  <h3 className="mt-3 text-2xl font-bold tracking-tight text-balance">
                    Một hệ thống — khách tìm thấy, tin tưởng và đặt dịch vụ
                  </h3>
                  <div className="mt-8 flex flex-col gap-2.5">
                    {(
                      [
                        { label: "Website", note: "nền tảng chính chủ, chuẩn SEO", brand: "website", iconBg: "bg-blue-600/90 text-white shadow-blue" },
                        { label: "Naver", note: "khách Hàn tìm thấy bạn", brand: "naver", iconBg: "bg-white/95" },
                        { label: "Google Maps", note: "uy tín tại địa phương", brand: "maps", iconBg: "bg-white/95" },
                        { label: "Social", note: "kênh tương tác & tin cậy", brand: "facebook", iconBg: "bg-white/95" },
                      ] as { label: string; note: string; brand: "website" | "naver" | "maps" | "facebook"; iconBg: string }[]
                    ).map((step, i) => (
                      <div key={step.label}>
                        <div className="flex items-center gap-3.5 rounded-2xl bg-white/[0.07] px-4 py-3.5 ring-1 ring-white/10 backdrop-blur transition-colors hover:bg-white/[0.11]">
                          <span className={`grid h-9 w-9 shrink-0 place-items-center rounded-xl ${step.iconBg}`}>
                            {SERVICE_BRAND[step.brand].logoImage}
                          </span>
                          <div className="flex-1">
                            <p className="text-sm font-bold">{step.label}</p>
                            <p className="text-xs text-blue-100/60">{step.note}</p>
                          </div>
                          <span className="font-mono text-[10px] text-blue-200/40">0{i + 1}</span>
                        </div>
                        {i < 3 && (
                          <div className="ml-[1.95rem] h-2.5 w-px bg-gradient-to-b from-blue-400/50 to-transparent" />
                        )}
                      </div>
                    ))}
                    {/* result row */}
                    <div className="ml-[1.95rem] h-2.5 w-px bg-gradient-to-b from-blue-400/50 to-transparent" />
                    <div className="flex items-center gap-3.5 rounded-2xl bg-blue-600 px-4 py-4 shadow-blue">
                      <span className="grid h-9 w-9 place-items-center rounded-xl bg-white/15 text-white">
                        <IconCalendarCheck className="h-4.5 w-4.5" />
                      </span>
                      <div className="flex-1">
                        <p className="text-sm font-bold">Booking + thanh toán online</p>
                        <p className="text-xs text-blue-100/80">khách đặt trực tiếp, email xác nhận tự động</p>
                      </div>
                      <span className="animate-pulse-dot h-2 w-2 rounded-full bg-white" />
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* ── Portfolio ── */}
      <section className="relative border-y border-line bg-white py-16 sm:py-24">
        <Container>
          <Reveal>
            <div className="flex flex-wrap items-end justify-between gap-6">
              <SectionHeader {...c.proofIntro} />
              <Link
                href="/vi/du-an"
                className="group inline-flex items-center gap-1.5 text-sm font-semibold text-blue-700"
              >
                Xem tất cả dự án
                <IconArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </Reveal>
          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            {PROJECTS.map((p, i) => {
              const payment = p.stats.find((s) => s.label === "Thanh toán");
              return (
                <Reveal key={p.slug} delay={i * 100}>
                  <PortfolioCard
                    href={p.path}
                    name={p.name}
                    category={p.category}
                    location={`${p.location} · ${p.year}`}
                    deliveryTime={p.stats[0]?.value}
                    previewImage={p.previewImage}
                    proofs={[
                      { icon: <IconGauge className="h-4 w-4 text-blue-600" />, label: "PageSpeed Insights SEO 100/100" },
                      { icon: <IconCreditCard className="h-4 w-4 text-blue-600" />, label: payment ? `Thanh toán: ${payment.value}` : "Booking + thanh toán online" },
                      { icon: <IconMapsColor className="h-4 w-4" />, label: "Thiết lập Google Maps" },
                    ]}
                  />
                </Reveal>
              );
            })}
          </div>
        </Container>
      </section>

      {/* ── Pricing preview ── */}
      <section className="py-16 sm:py-24">
        <Container>
          <Reveal>
            <SectionHeader
              eyebrow="Bảng giá"
              title="Chi phí rõ ràng, báo giá trước khi bắt đầu"
              sub="Ba gói được quan tâm nhiều nhất. Xem bảng giá đầy đủ cho tất cả dịch vụ."
              align="center"
            />
          </Reveal>
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {pricingPreview.map((pkg, i) => (
              <Reveal key={pkg.id} delay={i * 90}>
                <PricingCard
                  name={pkg.name}
                  priceLabel={pkg.priceLabel}
                  priceUnit={pkg.priceUnit}
                  tagline={pkg.tagline}
                  features={pkg.features.slice(0, 4)}
                  ctaHref={pkg.ctaHref}
                  ctaLabel={pkg.ctaLabel}
                  highlight={pkg.highlight}
                  cluster={pkg.cluster}
                />
              </Reveal>
            ))}
          </div>
          <Reveal>
            <div className="mt-9 flex flex-col items-center gap-3">
              <Button href="/vi/bang-gia" variant="secondary">
                Xem bảng giá đầy đủ
                <IconArrowRight className="h-4 w-4" />
              </Button>
              <p className="font-mono text-xs text-muted">
                Giá có thể thay đổi theo phạm vi dự án.
              </p>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* ── Industries ── */}
      <section className="relative border-y border-line bg-white py-16 sm:py-24">
        <div aria-hidden className="bg-dots absolute inset-0 opacity-40" />
        <Container className="relative">
          <Reveal>
            <SectionHeader {...c.industriesIntro} align="center" />
          </Reveal>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
            {c.industries.map((ind, i) => (
              <Reveal key={ind.title} delay={i * 70}>
                <div className="group h-full overflow-hidden rounded-[2rem] border border-slate-200/80 bg-white text-center shadow-[0_18px_45px_rgba(15,23,42,0.08)] transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_28px_65px_rgba(15,23,42,0.14)]">
                  <div className="relative overflow-visible border-b border-slate-100">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={INDUSTRY_IMAGES[i]}
                      alt=""
                      aria-hidden
                      loading="lazy"
                      className="aspect-[5/4] w-full object-cover object-center transition-transform duration-700 group-hover:scale-[1.04]"
                    />
                    <div
                      aria-hidden
                      className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-slate-950/12 via-slate-950/0 to-transparent"
                    />
                    <span
                      className={`absolute bottom-0 left-1/2 z-10 grid h-12 w-12 -translate-x-1/2 translate-y-[58%] place-items-center rounded-[1.05rem] border border-white/90 bg-white shadow-[0_12px_28px_rgba(15,23,42,0.16)] ${INDUSTRY_ICON_STYLES[i]}`}
                    >
                      {cloneElement(INDUSTRY_ICONS[i], { className: "h-5 w-5" })}
                    </span>
                  </div>
                  <div className="px-7 pb-8 pt-12">
                    <h3 className="text-[1.05rem] font-bold tracking-tight text-ink sm:text-[1.12rem]">
                      {ind.title}
                    </h3>
                    <p className="mt-3 text-[0.98rem] leading-8 text-slate-500">
                      {ind.desc}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* ── Process ── */}
      <section className="py-16 sm:py-24">
        <Container>
          <Reveal>
            <SectionHeader {...c.processIntro} align="center" />
          </Reveal>
          <div className="relative mt-14">
            {/* connecting line (desktop) */}
            <div aria-hidden className="absolute left-0 right-0 top-6 hidden h-px bg-gradient-to-r from-transparent via-line-strong to-transparent lg:block" />
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
              {c.process.map((p, i) => (
                <Reveal key={p.step} delay={i * 90}>
                  <div className="relative flex gap-4 lg:flex-col lg:gap-0 lg:text-center">
                    <div className="relative z-10 lg:mx-auto">
                      <span className="grid h-12 w-12 place-items-center rounded-2xl bg-ink font-mono text-sm font-bold text-white shadow-lift ring-4 ring-paper">
                        {p.step}
                      </span>
                    </div>
                    <div className="lg:mt-5">
                      <h3 className="text-base font-bold tracking-tight text-ink">{p.title}</h3>
                      <p className="mt-1.5 text-sm leading-relaxed text-muted">{p.detail}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* ── FAQ ── */}
      <section className="border-t border-line bg-white py-16 sm:py-24">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
            <Reveal>
              <div className="lg:sticky lg:top-28">
                <SectionHeader
                  eyebrow="FAQ"
                  title="Câu hỏi thường gặp"
                  sub="Chưa thấy câu trả lời bạn cần? Nhắn Zalo — tôi phản hồi trực tiếp."
                />
                <div className="mt-7">
                  <Button href={SITE.contact.zalo} external variant="secondary">
                    <IconChat className="h-4 w-4" />
                    Hỏi qua Zalo
                  </Button>
                </div>
              </div>
            </Reveal>
            <Reveal delay={100}>
              <FAQAccordion faqs={GLOBAL_FAQS} />
            </Reveal>
          </div>
        </Container>
      </section>

      {/* ── Final CTA ── */}
      <CTASection title={c.ctaTitle} sub={c.ctaSub} />
    </Shell>
  );
}

/* ────────────────────────── EN HOMEPAGE ────────────────────────── */

function HomeEN() {
  const c = HOME_EN;
  const imageUrls = resolveAbsoluteImageUrls(["/images/og/og-default.jpg", "/images/hero/macbook-hero.jpg"]);
  return (
    <Shell locale="en" alternateKey="home">
      <JsonLd
        data={graphDocument([
          webPageGraph({
            name: c.metaTitle,
            description: c.metaDescription,
            path: "/en",
            images: imageUrls,
          }),
        ])}
      />
      <section className="relative overflow-hidden">
        <div aria-hidden className="bg-glow absolute inset-0" />
        <div aria-hidden className="bg-grid bg-grid-fade absolute inset-0" />
        <Container className="relative pb-16 pt-10 sm:pb-24 sm:pt-16 lg:pt-20">
          <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10">
            <div>
              <p className="label-mono animate-rise text-blue-600">{c.eyebrow}</p>
              <h1
                className="animate-rise mt-4 text-[2.1rem] font-bold leading-[1.08] tracking-tight text-ink sm:text-5xl text-balance"
                style={{ animationDelay: "80ms" }}
              >
                {c.h1}
              </h1>
              <p
                className="animate-rise mt-6 max-w-xl text-base leading-relaxed text-muted sm:text-lg"
                style={{ animationDelay: "160ms" }}
              >
                {c.heroSub}
              </p>
              <div className="animate-rise mt-8 flex flex-wrap gap-3" style={{ animationDelay: "240ms" }}>
                <Button href={c.heroPrimaryCta.href} size="lg">
                  {c.heroPrimaryCta.label}
                </Button>
                <Button href={c.heroSecondaryCta.href} variant="secondary" size="lg">
                  {c.heroSecondaryCta.label}
                </Button>
              </div>
            </div>
            <div className="animate-rise max-lg:mt-2" style={{ animationDelay: "200ms" }}>
              <HeroImage />
            </div>
          </div>
          <div className="animate-rise mt-16" style={{ animationDelay: "400ms" }}>
            <TrustStrip
              items={c.trust.map((t, i) => ({ ...t, icon: TRUST_ICONS[i] }))}
            />
          </div>
        </Container>
      </section>

      <section className="border-y border-line bg-white py-16 sm:py-24">
        <Container>
          <Reveal>
            <SectionHeader {...c.servicesIntro} align="center" />
          </Reveal>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {c.services.map((s, i) => (
              <Reveal key={s.title} delay={i * 80}>
                <ServiceCard {...s} icon={SERVICE_ICONS[i]} ctaLabel="Learn more" />
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <CTASection title={c.ctaTitle} sub={c.ctaSub} />
    </Shell>
  );
}
