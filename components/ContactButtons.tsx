import { SITE } from "@/content/site";

const CHANNELS = [
  {
    key: "zalo",
    label: "Zalo",
    sub: SITE.contact.phoneDisplay,
    href: SITE.contact.zalo,
  },
  {
    key: "whatsapp",
    label: "WhatsApp",
    sub: "Chat trực tiếp",
    href: SITE.contact.whatsapp,
  },
  {
    key: "email",
    label: "Email",
    sub: SITE.contact.email,
    href: `mailto:${SITE.contact.email}`,
  },
  {
    key: "fanpage",
    label: "Fanpage",
    sub: "Facebook",
    href: SITE.contact.fanpage,
  },
] as const;

export function ContactButtons() {
  return (
    <div className="grid gap-3 sm:grid-cols-2">
      {CHANNELS.map((c) => (
        <a
          key={c.key}
          href={c.href}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center justify-between rounded-card border border-line bg-white px-5 py-4 shadow-soft transition-all hover:-translate-y-0.5 hover:border-blue-200 hover:shadow-lift"
        >
          <span>
            <span className="block text-sm font-semibold text-ink">{c.label}</span>
            <span className="block text-sm text-muted">{c.sub}</span>
          </span>
          <span aria-hidden className="text-blue-700 transition-transform group-hover:translate-x-1">→</span>
        </a>
      ))}
    </div>
  );
}
