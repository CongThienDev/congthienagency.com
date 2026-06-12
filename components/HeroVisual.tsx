import { IconCheck, IconMapPin, IconNaver, IconMapsColor } from "./Icons";

/**
 * CSS-built product mockup for the hero: a browser window showing a
 * booking website, with floating proof cards (PageSpeed score, booking
 * confirmation, channel chips). No image assets required.
 */
export function HeroVisual() {
  return (
    <div className="relative mx-auto w-full max-w-[540px] select-none" aria-hidden>
      {/* glow behind */}
      <div className="absolute -inset-8 rounded-[3rem] bg-gradient-to-br from-blue-400/25 via-blue-200/10 to-transparent blur-2xl" />

      {/* Browser window */}
      <div className="relative overflow-hidden rounded-2xl border border-line-strong/70 bg-white shadow-float">
        {/* chrome bar */}
        <div className="flex items-center gap-2 border-b border-line bg-paper px-4 py-2.5">
          <span className="h-2.5 w-2.5 rounded-full bg-line-strong" />
          <span className="h-2.5 w-2.5 rounded-full bg-line-strong" />
          <span className="h-2.5 w-2.5 rounded-full bg-line-strong" />
          <div className="ml-3 flex h-6 flex-1 items-center gap-1.5 rounded-md bg-white px-2.5 font-mono text-[10px] text-muted ring-1 ring-line">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-3 w-3 text-blue-600">
              <rect x="5" y="10" width="14" height="10" rx="2" />
              <path d="M8 10V7a4 4 0 0 1 8 0v3" />
            </svg>
            serenaretreat-spa.com
          </div>
        </div>

        {/* page mock */}
        <div className="grid grid-cols-[1.4fr_1fr]">
          {/* left: spa site content */}
          <div className="space-y-3 p-5">
            <div className="h-2 w-16 rounded-full bg-blue-200" />
            <div className="space-y-1.5">
              <div className="h-3.5 w-full rounded-full bg-ink/85" />
              <div className="h-3.5 w-3/4 rounded-full bg-ink/85" />
            </div>
            <div className="space-y-1.5 pt-1">
              <div className="h-2 w-full rounded-full bg-line" />
              <div className="h-2 w-5/6 rounded-full bg-line" />
            </div>
            <div className="flex gap-2 pt-2">
              <div className="h-7 w-24 rounded-lg bg-blue-600 shadow-blue" />
              <div className="h-7 w-20 rounded-lg ring-1 ring-line-strong" />
            </div>
            <div className="grid grid-cols-3 gap-2 pt-3">
              <div className="aspect-[4/3] rounded-lg bg-gradient-to-br from-blue-100 to-blue-50" />
              <div className="aspect-[4/3] rounded-lg bg-gradient-to-br from-blue-200/70 to-blue-50" />
              <div className="aspect-[4/3] rounded-lg bg-gradient-to-br from-blue-100 to-paper" />
            </div>
          </div>

          {/* right: booking panel */}
          <div className="space-y-2.5 border-l border-line bg-paper/70 p-4">
            <p className="font-mono text-[9px] uppercase tracking-[0.16em] text-muted">Booking</p>
            <div className="space-y-1.5 rounded-lg bg-white p-2.5 ring-1 ring-line">
              <div className="h-1.5 w-12 rounded-full bg-line-strong" />
              <div className="h-5 rounded-md bg-paper ring-1 ring-line" />
              <div className="h-1.5 w-9 rounded-full bg-line-strong" />
              <div className="h-5 rounded-md bg-paper ring-1 ring-line" />
              <div className="mt-1 flex h-6 items-center justify-center rounded-md bg-blue-600">
                <span className="font-mono text-[8px] font-semibold uppercase tracking-wider text-white">Đặt lịch</span>
              </div>
            </div>
            <div className="flex items-center justify-between rounded-lg bg-white px-2.5 py-2 ring-1 ring-line">
              <span className="font-mono text-[8px] text-muted">PayPal</span>
              <span className="font-mono text-[8px] text-muted">Stripe</span>
              <span className="font-mono text-[8px] text-muted">VISA</span>
            </div>
          </div>
        </div>
      </div>

      {/* Floating: PageSpeed score */}
      <div className="animate-float absolute -left-3 -top-7 sm:-left-9 sm:-top-5">
        <div className="glass flex items-center gap-3 rounded-2xl border border-white/60 px-4 py-3 shadow-lift ring-1 ring-line/60">
          <div className="relative grid h-12 w-12 place-items-center">
            <svg viewBox="0 0 48 48" className="h-12 w-12 -rotate-90">
              <circle cx="24" cy="24" r="20" fill="none" stroke="var(--color-line)" strokeWidth="4.5" />
              <circle cx="24" cy="24" r="20" fill="none" stroke="var(--color-blue-600)" strokeWidth="4.5" strokeDasharray="125.6" strokeDashoffset="0" strokeLinecap="round" />
            </svg>
            <span className="absolute text-sm font-bold text-ink">100</span>
          </div>
          <div>
            <p className="text-xs font-semibold text-ink">PageSpeed SEO</p>
            <p className="font-mono text-[10px] text-muted">insights · 100/100</p>
          </div>
        </div>
      </div>

      {/* Floating: booking confirmed */}
      <div className="animate-float-slow absolute -bottom-6 -right-2 sm:-right-7">
        <div className="glass flex items-center gap-3 rounded-2xl border border-white/60 px-4 py-3 shadow-lift ring-1 ring-line/60">
          <span className="grid h-9 w-9 place-items-center rounded-full bg-blue-600 text-white shadow-blue">
            <IconCheck className="h-4 w-4" />
          </span>
          <div>
            <p className="text-xs font-semibold text-ink">Booking confirmed</p>
            <p className="font-mono text-[10px] text-muted">payment ✓ &nbsp;email ✓</p>
          </div>
        </div>
      </div>

      {/* Floating: local presence chip */}
      <div className="absolute -right-1 top-9 hidden sm:block">
        <div className="flex items-center gap-1.5 rounded-full bg-ink px-3 py-1.5 text-white shadow-lift">
          <IconMapPin className="h-3.5 w-3.5 text-blue-400" />
          <span className="font-mono text-[10px] tracking-wide">Hội An – Đà Nẵng</span>
          <span className="animate-pulse-dot h-1.5 w-1.5 rounded-full bg-blue-400" />
        </div>
      </div>

      {/* Floating: Naver service chip */}
      <div className="animate-float-slow absolute -left-6 top-1/2 hidden md:block">
        <div className="glass flex items-center gap-2 rounded-full border border-white/60 py-1.5 pl-1.5 pr-3.5 shadow-lift ring-1 ring-line/60">
          <span className="grid h-6 w-6 place-items-center rounded-full bg-naver text-white">
            <IconNaver className="h-3.5 w-3.5" />
          </span>
          <span className="text-[11px] font-semibold text-ink">Naver Blog</span>
        </div>
      </div>

      {/* Floating: Google Maps service chip */}
      <div className="animate-float absolute -right-5 bottom-24 hidden md:block">
        <div className="glass flex items-center gap-2 rounded-full border border-white/60 py-1.5 pl-1.5 pr-3.5 shadow-lift ring-1 ring-line/60">
          <span className="grid h-6 w-6 place-items-center rounded-full bg-white ring-1 ring-line">
            <IconMapsColor className="h-4 w-4" />
          </span>
          <span className="text-[11px] font-semibold text-ink">Google Maps</span>
        </div>
      </div>
    </div>
  );
}
