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
    "px-2 py-1 text-xs font-medium uppercase tracking-wider transition-colors";
  const active = "text-ink";
  const idle = "text-muted hover:text-blue-700";

  return (
    <div className="flex items-center gap-1 rounded-full border border-line bg-white/60 px-1 py-0.5">
      <Link href={viHref} className={`${base} ${locale === "vi" ? active : idle}`}>
        VI
      </Link>
      <span className="text-line-strong">/</span>
      <Link href={enHref} className={`${base} ${locale === "en" ? active : idle}`}>
        EN
      </Link>
    </div>
  );
}
