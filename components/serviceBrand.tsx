import Image from "next/image";
import type { ReactNode } from "react";
import { IconCode, IconNaver, IconMapsColor, IconFacebook } from "./Icons";

export type ServiceBrand = "website" | "naver" | "maps" | "facebook";

type BrandStyle = {
  /** SVG icon for small badge circles (44px / 36px). */
  icon: ReactNode;
  /** Real logo image for medium-large contexts (system flow, 36px steps). */
  logoImage: ReactNode;
  badge: string;
  badgeDark: string;
  chip: string;
  accentText: string;
};

export const SERVICE_BRAND: Record<ServiceBrand, BrandStyle> = {
  website: {
    icon: <IconCode className="h-5 w-5" />,
    logoImage: (
      <Image
        src="/icon-service/website-icon.svg"
        alt="Công Thiên Agency"
        width={26}
        height={26}
        className="rounded-[6px] object-contain"
      />
    ),
    badge: "bg-blue-600 text-white shadow-blue",
    badgeDark: "bg-blue-600 text-white shadow-blue",
    chip: "border-blue-200 bg-blue-50 text-blue-700",
    accentText: "text-blue-600",
  },
  naver: {
    icon: <IconNaver className="h-[18px] w-[18px]" />,
    logoImage: (
      <Image
        src="/icon-service/naver-icon.webp"
        alt="Naver"
        width={24}
        height={24}
        className="rounded-[4px] object-cover"
      />
    ),
    badge: "bg-naver text-white",
    badgeDark: "bg-naver text-white",
    chip: "border-emerald-200 bg-emerald-50 text-[color:var(--color-naver)]",
    accentText: "text-[color:var(--color-naver)]",
  },
  maps: {
    icon: <IconMapsColor className="h-[22px] w-[22px]" />,
    logoImage: (
      <Image
        src="/icon-service/map-icon.webp"
        alt="Google Maps"
        width={26}
        height={26}
        className="object-contain"
      />
    ),
    badge: "bg-white ring-1 ring-line",
    badgeDark: "bg-white",
    chip: "border-line bg-paper text-ink-soft",
    accentText: "text-blue-600",
  },
  facebook: {
    icon: <IconFacebook className="h-[18px] w-[18px]" />,
    logoImage: (
      <Image
        src="/icon-service/facebook-icon.webp"
        alt="Facebook"
        width={24}
        height={24}
        className="rounded-[4px] object-cover"
      />
    ),
    badge: "bg-facebook text-white",
    badgeDark: "bg-facebook text-white",
    chip: "border-blue-200 bg-blue-50 text-[color:var(--color-facebook)]",
    accentText: "text-[color:var(--color-facebook)]",
  },
};
