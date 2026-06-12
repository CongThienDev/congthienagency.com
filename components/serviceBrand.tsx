import type { ReactNode } from "react";
import {
  IconCode,
  IconNaver,
  IconMapsColor,
  IconFacebook,
} from "./Icons";

export type ServiceBrand = "website" | "naver" | "maps" | "facebook";

type BrandStyle = {
  icon: ReactNode;
  /** Light icon badge (used on white cards). */
  badge: string;
  /** Icon badge for dark/featured cards. */
  badgeDark: string;
  /** Feature-chip pill style. */
  chip: string;
  /** Accent label text color. */
  accentText: string;
};

export const SERVICE_BRAND: Record<ServiceBrand, BrandStyle> = {
  website: {
    icon: <IconCode className="h-5 w-5" />,
    badge: "bg-blue-600 text-white shadow-blue",
    badgeDark: "bg-blue-600 text-white shadow-blue",
    chip: "border-blue-200 bg-blue-50 text-blue-700",
    accentText: "text-blue-600",
  },
  naver: {
    icon: <IconNaver className="h-[18px] w-[18px]" />,
    badge: "bg-naver text-white",
    badgeDark: "bg-naver text-white",
    chip: "border-emerald-200 bg-emerald-50 text-[color:var(--color-naver)]",
    accentText: "text-[color:var(--color-naver)]",
  },
  maps: {
    icon: <IconMapsColor className="h-[22px] w-[22px]" />,
    badge: "bg-white ring-1 ring-line",
    badgeDark: "bg-white",
    chip: "border-line bg-paper text-ink-soft",
    accentText: "text-blue-600",
  },
  facebook: {
    icon: <IconFacebook className="h-[18px] w-[18px]" />,
    badge: "bg-facebook text-white",
    badgeDark: "bg-facebook text-white",
    chip: "border-blue-200 bg-blue-50 text-[color:var(--color-facebook)]",
    accentText: "text-[color:var(--color-facebook)]",
  },
};
