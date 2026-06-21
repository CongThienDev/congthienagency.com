import Image from "next/image";
import { SITE } from "@/content/site";
import { IconChat, IconPhone } from "./Icons";

export function FloatingContactWidget() {
  return (
    <div className="fixed bottom-5 right-4 z-40 flex flex-col items-end gap-2.5 sm:right-5">
      <a
        href={SITE.contact.zalo}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Chat Zalo ${SITE.contact.phoneDisplay}`}
        className="group flex h-12 items-center gap-2 rounded-full bg-blue-600 pl-3.5 pr-4 text-white shadow-blue transition-all hover:-translate-y-0.5 hover:bg-blue-500"
      >
        <IconChat className="h-5 w-5" />
        <span className="text-sm font-bold">Zalo</span>
      </a>
      <a
        href={SITE.contact.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat WhatsApp"
        className="grid h-12 w-12 place-items-center rounded-full border border-line bg-white shadow-lift transition-all hover:-translate-y-0.5"
      >
        <Image
          src="/icon-service/whatsapp-icon.avif"
          alt="WhatsApp"
          width={22}
          height={22}
          className="h-5.5 w-5.5 object-contain"
        />
      </a>
      <a
        href={SITE.contact.maps.shortUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Mở Google Maps"
        className="grid h-12 w-12 place-items-center rounded-full border border-line bg-white shadow-lift transition-all hover:-translate-y-0.5"
      >
        <Image
          src="/icon-service/map-icon.png"
          alt="Google Maps"
          width={22}
          height={22}
          className="h-5.5 w-5.5 object-contain"
        />
      </a>
      <a
        href={`tel:${SITE.contact.phoneE164}`}
        aria-label={`Gọi ${SITE.contact.phoneDisplay}`}
        className="grid h-12 w-12 place-items-center rounded-full border border-line bg-white text-ink shadow-lift transition-all hover:-translate-y-0.5 hover:text-blue-700"
      >
        <IconPhone className="h-5 w-5" />
      </a>
    </div>
  );
}
