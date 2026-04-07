import type { MetadataRoute } from "next";
import { supabase } from "../utils/supabase";

const siteUrl = "https://incolle.vercel.app";

// サイトマップを動的に生成（サークルが追加されると自動で反映）
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // 固定ページ
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: siteUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${siteUrl}/about`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${siteUrl}/circles`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${siteUrl}/welcome-event`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
  ];

  // DBから全てのサークルIDを取得
  const { data: circles } = await supabase.from('circle').select('id');

  // サークル詳細ページ（動的に生成）
  const circlePages: MetadataRoute.Sitemap = (circles || []).map((circle) => ({
    url: `${siteUrl}/circles/${circle.id}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  return [...staticPages, ...circlePages];
}
