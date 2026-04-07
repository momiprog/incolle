import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "./components/layout/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = "https://incolle.vercel.app";
const siteName = "インカレサーチ";
const defaultDescription = "大学の垣根を超えたインカレサークル・学生団体を探せる専門サイト。サークル・学生団体の活動内容・部員数・新歓イベント情報を掲載中。あなたにぴったりのインカレサークル・学生団体がきっと見つかります。";

export const metadata: Metadata = {
  title: {
    default: "インカレサーチ｜インカレサークル・学生団体専門紹介サイト",
    template: "%s | インカレサーチ",
  },
  description: defaultDescription,
  keywords: ["インカレ", "インカレサークル", "学生団体", "大学サークル", "サークル検索", "新歓", "新歓イベント", "大学生", "インターカレッジ", "サークル紹介", "ボランティア団体"],
  authors: [{ name: siteName }],
  creator: siteName,
  metadataBase: new URL(siteUrl),
  openGraph: {
    type: "website",
    locale: "ja_JP",
    url: siteUrl,
    siteName: siteName,
    title: "インカレサーチ｜インカレサークル・学生団体専門紹介サイト",
    description: defaultDescription,
  },
  twitter: {
    card: "summary_large_image",
    title: "インカレサーチ｜インカレサークル・学生団体専門紹介サイト",
    description: defaultDescription,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: siteUrl,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ja"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col" suppressHydrationWarning>
        {children}
        <Footer />
      </body>
    </html>
  );
}
