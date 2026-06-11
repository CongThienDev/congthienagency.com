import { SITE } from "@/content/site";

export function FloatingContactWidget() {
  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col gap-2">
      <a
        href={SITE.contact.zalo}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat Zalo"
        className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 text-xs font-bold text-white shadow-blue transition-transform hover:scale-110"
      >
        Zalo
      </a>
      <a
        href={SITE.contact.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat WhatsApp"
        className="flex h-12 w-12 items-center justify-center rounded-full bg-ink text-[10px] font-bold text-white shadow-lift transition-transform hover:scale-110"
      >
        WA
      </a>
    </div>
  );
}
