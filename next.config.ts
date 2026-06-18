import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  poweredByHeader: false,
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/",
        destination: "/vi",
        permanent: true,
      },
      {
        source: "/vi/naver-marketing/naver-marketing-agency-vietnam",
        destination: "/en/naver-marketing/naver-marketing-agency-vietnam",
        permanent: true,
      },
      {
        source: "/vi/naver-marketing/naver-blog-marketing-vietnam",
        destination: "/en/naver-marketing/naver-blog-marketing-vietnam",
        permanent: true,
      },
      {
        source: "/vi/naver-marketing/naver-seo-agency-for-hotels",
        destination: "/en/naver-marketing/naver-seo-agency-for-hotels",
        permanent: true,
      },
      {
        source: "/vi/naver-marketing/attract-korean-tourists-with-naver",
        destination: "/en/naver-marketing/attract-korean-tourists-with-naver",
        permanent: true,
      },
      {
        source: "/vi/naver-marketing/naver-map-optimization-restaurants-vietnam",
        destination: "/en/naver-marketing/naver-map-optimization-restaurants-vietnam",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
