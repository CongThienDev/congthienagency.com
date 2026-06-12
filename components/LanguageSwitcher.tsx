import Link from "next/link";
import { LOCALE_ALTERNATES } from "@/content/navigation";
import type { Locale } from "@/content/site";

/** Renders VI/EN links. `alternateKey` resolves to the twin path per locale. */
export function LanguageSwitcher({
  locale,
  alternateKey,
}: {
  locale: Locale;
  alternateKey?: keyof typeof LOCALE_ALTERNATES;
}) {
  const alt = alternateKey ? LOCALE_ALTERNATES[alternateKey] : undefined;
  const viHref = alt?.vi ?? "/vi";
  const enHref = alt?.en ?? "/en";

  const base =
    "rounded-full px-2.5 py-1 font-mono text-[11px] font-semibold uppercase tracking-wider transition-all";
  const active = "bg-ink text-white shadow-soft";
  const idle = "text-muted hover:text-blue-700";

  return (
    <div className="flex items-center gap-0.5 rounded-full border border-line bg-white/70 p-0.5">
      <Link href={viHref} className={`${base} ${locale === "vi" ? active : idle}`}>
        VI
      </Link>
      <Link href={enHref} className={`${base} ${locale === "en" ? active : idle}`}>
        EN
      </Link>
    </div>
  );
}
