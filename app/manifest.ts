import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Công Thiên Agency by CongThienDev",
    short_name: "Công Thiên Agency",
    description:
      "Website, Naver Marketing và Google Maps Marketing cho doanh nghiệp dịch vụ – du lịch tại Hội An – Đà Nẵng.",
    start_url: "/vi",
    display: "standalone",
    background_color: "#F6FAFF",
    theme_color: "#2F66F5",
    icons: [
      {
        src: "/icon",
        sizes: "512x512",
        type: "image/png",
      },
      {
        src: "/apple-icon",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  };
}
