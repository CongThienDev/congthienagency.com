import Image from "next/image";
import { Button } from "./Button";
import { IconArrowRight, IconChat } from "./Icons";
import { SITE } from "@/content/site";

export function MobileHomeHero({
  sub,
}: {
  sub: string;
}) {
  return (
    <section className="relative min-h-[calc(100svh-68px)] overflow-hidden bg-[#f7f5f1] lg:hidden">
      <Image
        src="/hero-section/hero-section-mobile-ver-doc.png"
        alt=""
        fill
        priority
        className="object-cover object-center landscape:hidden"
        sizes="100vw"
        aria-hidden
      />
      <Image
        src="/hero-section/hero-section-mobile-ver-ngang.png"
        alt=""
        fill
        priority
        className="hidden object-cover object-center landscape:block"
        sizes="100vw"
        aria-hidden
      />
      <div
        aria-hidden
        className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.92)_0%,rgba(255,255,255,0.82)_28%,rgba(255,255,255,0.18)_48%,rgba(255,255,255,0)_66%)]"
      />

      <div className="relative flex min-h-[calc(100svh-68px)] flex-col px-5 pb-4 pt-5">
        <div className="animate-rise flex flex-wrap gap-2">
          <span className="rounded-full border border-blue-200/80 bg-white/90 px-4 py-1.5 text-[11px] font-semibold text-blue-600 shadow-soft backdrop-blur">
            Marketing Online
          </span>
          <span className="rounded-full border border-line-strong/80 bg-white/90 px-4 py-1.5 text-[11px] font-medium text-ink-soft shadow-soft backdrop-blur">
            Hội An – Đà Nẵng
          </span>
        </div>

        <h1
          className="animate-rise mt-5 max-w-[18.5rem] text-[1.88rem] font-bold leading-[1.08] tracking-[-0.04em] text-ink"
          style={{ animationDelay: "80ms" }}
        >
          <span className="block">Website, Naver &amp;</span>
          <span className="block">Google Maps</span>
          <span className="mt-1 block text-blue-600">cho spa, nhà hàng</span>
          <span className="block text-blue-600">tại Hội An</span>
        </h1>

        <div
          className="animate-rise mt-5 flex max-w-[15.5rem] flex-col gap-2.5"
          style={{ animationDelay: "160ms" }}
        >
          <Button href={SITE.contact.zalo} external className="w-fit min-w-[11.5rem] px-4.5 py-2.5 text-[0.9rem] shadow-[0_8px_18px_rgba(37,99,235,0.22)]">
            <IconChat className="h-4 w-4" />
            Nhận tư vấn
          </Button>
          <Button href="/vi/du-an" variant="secondary" className="w-fit min-w-[10.5rem] px-4.5 py-2.5 text-[0.9rem] shadow-[0_4px_12px_rgba(15,23,42,0.08)]">
            Xem dự án
            <IconArrowRight className="h-3.5 w-3.5" />
          </Button>
        </div>

        <div className="mt-auto pt-10" />
      </div>
    </section>
  );
}
