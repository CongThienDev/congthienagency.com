import { type ReactNode } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { FloatingContactWidget } from "./FloatingContactWidget";
import type { Locale } from "@/content/site";
import type { LOCALE_ALTERNATES } from "@/content/navigation";

export function Shell({
  locale,
  alternateKey,
  children,
}: {
  locale: Locale;
  alternateKey?: keyof typeof LOCALE_ALTERNATES;
  children: ReactNode;
}) {
  return (
    <>
      <Header locale={locale} alternateKey={alternateKey} />
      <main>{children}</main>
      <Footer locale={locale} />
      <FloatingContactWidget />
    </>
  );
}
