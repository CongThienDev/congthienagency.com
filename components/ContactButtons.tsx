import { SITE } from "@/content/site";
import { IconArrowRight, IconChat, IconMail, IconPhone, IconUsers } from "./Icons";
import type { ReactNode } from "react";

const CHANNELS: {
  key: string;
  label: string;
  sub: string;
  href: string;
  icon: ReactNode;
}[] = [
  {
    key: "zalo",
    label: "Zalo",
    sub: SITE.contact.phoneDisplay,
    href: SITE.contact.zalo,
    icon: <IconChat className="h-5 w-5" />,
  },
  {
    key: "whatsapp",
    label: "WhatsApp",
    sub: "Chat trực tiếp",
    href: SITE.contact.whatsapp,
    icon: <IconPhone className="h-5 w-5" />,
  },
  {
    key: "email",
    label: "Email",
    sub: SITE.contact.email,
    href: `mailto:${SITE.contact.email}`,
    icon: <IconMail className="h-5 w-5" />,
  },
  {
    key: "fanpage",
    label: "Fanpage",
    sub: "Facebook",
    href: SITE.contact.fanpage,
    icon: <IconUsers className="h-5 w-5" />,
  },
];

export function ContactButtons() {
  return (
    <div className="grid gap-3 sm:grid-cols-2">
      {CHANNELS.map((c) => (
        <a
          key={c.key}
          href={c.href}
          target="_blank"
          rel="noopener noreferrer"
          className="group card-hover card-gradient-border flex items-center gap-4 rounded-card px-5 py-4 shadow-soft"
        >
          <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-blue-50 text-blue-600 ring-1 ring-blue-100 transition-transform duration-300 group-hover:scale-110">
            {c.icon}
          </span>
          <span className="min-w-0 flex-1">
            <span className="block text-sm font-bold text-ink">{c.label}</span>
            <span className="block truncate text-sm text-muted">{c.sub}</span>
          </span>
          <IconArrowRight className="h-4 w-4 shrink-0 text-blue-700 transition-transform duration-200 group-hover:translate-x-1" />
        </a>
      ))}
    </div>
  );
}
