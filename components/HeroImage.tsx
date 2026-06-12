"use client";

import Image from "next/image";
export function HeroImage() {
  return (
    <div className="relative w-full select-none" aria-hidden>
      <div className="relative">
        <div className="absolute -inset-10 rounded-[2rem] bg-gradient-to-br from-blue-400/18 via-blue-200/8 to-transparent blur-3xl" />
        <div className="relative w-full overflow-visible rounded-[2rem]">
          <Image
            src="/images/hero/macbook-hero.jpg"
            alt="Công Thiên Agency - Website & booking platform mockup on MacBook"
            width={1200}
            height={675}
            priority
            className="h-auto w-[108%] max-w-none -translate-x-[2%] rounded-[2rem] transform md:w-[110%] lg:w-[112%]"
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 90vw, 1200px"
          />
        </div>
      </div>
    </div>
  );
}
