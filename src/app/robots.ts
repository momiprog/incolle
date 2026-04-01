import type { MetadataRoute } from "next";

// 検索エンジンのクローラーに対する指示を定義
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/private/"],
      },
    ],
    sitemap: "https://incolle.vercel.app/sitemap.xml",
  };
}
