"use client";

import Image from "next/image";
import { IconCheck, IconMapPin } from "./Icons";

/**
 * Real MacBook hero image with repositioned proof badges.
 * Image is full-width and prominent. Badges positioned on left/right sides
 * and bottom to not overlap the MacBook mockup.
 */
export function HeroImage() {
  return (
    <div className="relative w-full select-none" aria-hidden>
      {/* Container with image as main focus */}
      <div className="relative">
        {/* glow behind - larger */}
        <div className="absolute -inset-12 rounded-3xl bg-gradient-to-br from-blue-400/20 via-blue-200/5 to-transparent blur-3xl" />

        {/* Full-width MacBook image - prominent */}
        <div className="relative w-full overflow-hidden rounded-2xl">
          <Image
            src="/images/hero/macbook-hero.jpg"
            alt="Công Thiên Agency - Website & booking platform mockup on MacBook"
            width={1200}
            height={675}
            priority
            className="w-full h-auto"
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 90vw, 1200px"
          />
        </div>
      </div>

      {/* REPOSITIONED BADGES - Bottom row (don't cover image) */}

      {/* Floating: PageSpeed score - bottom left */}
      <div className="animate-float absolute -left-2 -bottom-20 sm:-left-8 sm:-bottom-16">
        <div className="glass flex items-center gap-3 rounded-2xl border border-white/60 px-4 py-3 shadow-lift ring-1 ring-line/60 backdrop-blur-md bg-white/90">
          <div className="relative grid h-12 w-12 place-items-center shrink-0">
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

      {/* Floating: booking confirmed - bottom right */}
      <div className="animate-float-slow absolute -right-2 -bottom-16 sm:-right-8 sm:-bottom-12">
        <div className="glass flex items-center gap-3 rounded-2xl border border-white/60 px-4 py-3 shadow-lift ring-1 ring-line/60 backdrop-blur-md bg-white/90">
          <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-blue-600 text-white shadow-blue">
            <IconCheck className="h-4 w-4" />
          </span>
          <div>
            <p className="text-xs font-semibold text-ink">Booking confirmed</p>
            <p className="font-mono text-[10px] text-muted">payment ✓ &nbsp;email ✓</p>
          </div>
        </div>
      </div>

      {/* Floating: location chip - far left, middle height */}
      <div className="animate-pulse absolute left-0 top-1/3 -translate-x-32 hidden sm:block">
        <div className="flex items-center gap-1.5 rounded-full bg-ink px-3 py-1.5 text-white shadow-lift">
          <IconMapPin className="h-3.5 w-3.5 text-blue-400" />
          <span className="font-mono text-[10px] tracking-wide">Hội An – Đà Nẵng</span>
          <span className="animate-pulse-dot h-1.5 w-1.5 rounded-full bg-blue-400" />
        </div>
      </div>

      {/* Floating: Naver service chip - far left bottom */}
      <div className="animate-float-slow absolute left-0 bottom-20 -translate-x-40 hidden lg:block">
        <div className="glass flex items-center gap-2 rounded-full border border-white/60 py-1.5 pl-1.5 pr-3.5 shadow-lift ring-1 ring-line/60 backdrop-blur-md bg-white/90">
          <span className="grid h-6 w-6 shrink-0 overflow-hidden place-items-center rounded-full">
            <Image src="/icon-service/naver-icon.jpeg" alt="Naver" width={24} height={24} className="h-6 w-6 object-cover" />
          </span>
          <span className="text-[11px] font-semibold text-ink">Naver Blog</span>
        </div>
      </div>

      {/* Floating: Google Maps service chip - far right bottom */}
      <div className="animate-float absolute right-0 bottom-24 translate-x-40 hidden lg:block">
        <div className="glass flex items-center gap-2 rounded-full border border-white/60 py-1.5 pl-1.5 pr-3.5 shadow-lift ring-1 ring-line/60 backdrop-blur-md bg-white/90">
          <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-white ring-1 ring-line">
            <Image src="/icon-service/map-icon.png" alt="Google Maps" width={18} height={18} className="object-contain" />
          </span>
          <span className="text-[11px] font-semibold text-ink">Google Maps</span>
        </div>
      </div>
    </div>
  );
}
