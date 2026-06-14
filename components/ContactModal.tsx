"use client";

import Image from "next/image";
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from "react";
import { createPortal } from "react-dom";
import { SITE } from "@/content/site";
import { IconChat, IconPhone, IconArrowRight } from "./Icons";

/* ─── Context ─── */

type ContactModalContextValue = { open: () => void };
const ContactModalContext = createContext<ContactModalContextValue | null>(null);

export function useContactModal() {
  const ctx = useContext(ContactModalContext);
  if (!ctx) {
    throw new Error("useContactModal must be used within <ContactModalProvider>");
  }
  return ctx;
}

/* ─── Channels (instant contact) ─── */

type Channel = {
  key: string;
  label: string;
  sub: string;
  href: string;
  external: boolean;
  tile: string;
  icon: ReactNode;
};

const CHANNELS: Channel[] = [
  {
    key: "zalo",
    label: "Zalo",
    sub: SITE.contact.phoneDisplay,
    href: SITE.contact.zalo,
    external: true,
    tile: "bg-blue-600 text-white",
    icon: <IconChat className="h-6 w-6" />,
  },
  {
    key: "whatsapp",
    label: "WhatsApp",
    sub: "Chat trực tiếp với mình",
    href: SITE.contact.whatsapp,
    external: true,
    tile: "bg-[#25D366] text-white",
    icon: (
      <Image
        src="/icon-service/whatsapp-icon.avif"
        alt="WhatsApp"
        width={26}
        height={26}
        className="h-6 w-6 object-contain"
      />
    ),
  },
  {
    key: "phone",
    label: "Gọi điện",
    sub: SITE.contact.phoneDisplay,
    href: `tel:${SITE.contact.phoneE164}`,
    external: false,
    tile: "bg-ink text-white",
    icon: <IconPhone className="h-6 w-6" />,
  },
];

/* ─── Provider + Modal ─── */

export function ContactModalProvider({ children }: { children: ReactNode }) {
  const [mounted, setMounted] = useState(false); // portal target ready
  const [render, setRender] = useState(false); // in DOM
  const [show, setShow] = useState(false); // animation state
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => setMounted(true), []);

  const open = useCallback(() => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setRender(true);
    // next frame → trigger enter transition
    requestAnimationFrame(() => requestAnimationFrame(() => setShow(true)));
  }, []);

  const close = useCallback(() => {
    setShow(false);
    closeTimer.current = setTimeout(() => setRender(false), 280);
  }, []);

  // Lock scroll + Escape to close while open
  useEffect(() => {
    if (!render) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [render, close]);

  return (
    <ContactModalContext.Provider value={{ open }}>
      {children}
      {mounted &&
        render &&
        createPortal(
          <div
            role="dialog"
            aria-modal="true"
            aria-label="Liên hệ ngay"
            className="fixed inset-0 z-[100] flex items-end justify-center sm:items-center"
          >
            {/* Backdrop */}
            <div
              onClick={close}
              className={`absolute inset-0 bg-ink/45 backdrop-blur-[3px] transition-opacity duration-300 ${
                show ? "opacity-100" : "opacity-0"
              }`}
            />

            {/* Panel */}
            <div
              className={[
                "relative z-[1] w-full max-w-md overflow-hidden bg-white shadow-float",
                "rounded-t-[1.75rem] sm:rounded-[1.75rem]",
                "transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]",
                show
                  ? "translate-y-0 scale-100 opacity-100"
                  : "translate-y-full opacity-0 sm:translate-y-3 sm:scale-95",
              ].join(" ")}
            >
              {/* Glow header strip */}
              <div aria-hidden className="bg-glow pointer-events-none absolute inset-x-0 top-0 h-32" />

              {/* Mobile grab handle */}
              <div className="relative flex justify-center pt-3 sm:hidden">
                <span className="h-1.5 w-10 rounded-full bg-line-strong" />
              </div>

              {/* Close button */}
              <button
                type="button"
                onClick={close}
                aria-label="Đóng"
                className="absolute right-4 top-4 z-[2] grid h-9 w-9 place-items-center rounded-full bg-white/70 text-muted ring-1 ring-line backdrop-blur transition-colors hover:bg-white hover:text-ink"
              >
                <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
                  <path d="M6 6l12 12M18 6L6 18" />
                </svg>
              </button>

              {/* Content */}
              <div className="relative px-6 pb-7 pt-6 sm:px-8 sm:pb-8 sm:pt-8">
                <p className="label-mono text-blue-600">Liên hệ ngay</p>
                <h2 className="mt-2 text-2xl font-bold tracking-tight text-ink">
                  Chọn cách trao đổi
                </h2>
                <p className="mt-1.5 text-sm leading-relaxed text-muted">
                  Mình phản hồi nhanh nhất qua Zalo &amp; WhatsApp — nhắn ngay để được tư vấn miễn phí.
                </p>

                <div className="mt-6 flex flex-col gap-3">
                  {CHANNELS.map((c, i) => (
                    <a
                      key={c.key}
                      href={c.href}
                      target={c.external ? "_blank" : undefined}
                      rel={c.external ? "noopener noreferrer" : undefined}
                      onClick={close}
                      style={{ transitionDelay: show ? `${120 + i * 70}ms` : "0ms" }}
                      className={[
                        "group flex items-center gap-4 rounded-2xl border border-line bg-white p-3.5 shadow-soft",
                        "transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-0.5 hover:border-blue-200 hover:shadow-lift",
                        show ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0",
                      ].join(" ")}
                    >
                      <span
                        className={`grid h-12 w-12 shrink-0 place-items-center rounded-xl ${c.tile} transition-transform duration-300 group-hover:scale-105`}
                      >
                        {c.icon}
                      </span>
                      <span className="min-w-0 flex-1">
                        <span className="block text-[15px] font-bold text-ink">{c.label}</span>
                        <span className="block truncate text-[13px] text-muted">{c.sub}</span>
                      </span>
                      <IconArrowRight className="h-4 w-4 shrink-0 text-blue-600 transition-transform duration-200 group-hover:translate-x-1" />
                    </a>
                  ))}
                </div>

                <p className="mt-5 text-center text-xs text-muted">
                  Hoặc email:{" "}
                  <a
                    href={`mailto:${SITE.contact.email}`}
                    className="font-medium text-ink-soft underline-offset-2 hover:text-blue-700 hover:underline"
                  >
                    {SITE.contact.email}
                  </a>
                </p>
              </div>
            </div>
          </div>,
          document.body
        )}
    </ContactModalContext.Provider>
  );
}

/* ─── Trigger button (styled like secondary Button) ─── */

export function ContactTriggerButton({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  const { open } = useContactModal();
  return (
    <button
      type="button"
      onClick={open}
      className={`group inline-flex shrink-0 items-center justify-center gap-2 whitespace-nowrap rounded-full border border-line-strong bg-white px-6 py-3 text-sm font-semibold text-ink shadow-soft transition-all duration-200 hover:-translate-y-0.5 hover:border-blue-300 hover:text-blue-700 ${className}`}
    >
      {children}
    </button>
  );
}
