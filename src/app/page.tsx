import Header from "./components/layout/Header";
import Link from "next/link";
import CircleCard from "./components/CircleCard";
import Script from "next/script";

// 構造化データ（JSON-LD）- Googleの検索結果にリッチスニペットを表示するため
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "インカレサーチ",
  url: "https://incolle.vercel.app",
  description: "大学の垣根を超えたインカレサークルを探せる専門サイト。サークルの活動内容・部員数・新歓イベント情報を掲載中。",
  potentialAction: {
    "@type": "SearchAction",
    target: "https://incolle.vercel.app/circles?q={search_term_string}",
    "query-input": "required name=search_term_string",
  },
};

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* JSON-LD 構造化データ */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />

      {/* ヒーローセクション */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-600 via-blue-500 to-indigo-600 text-white">
        {/* 背景の装飾 */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-72 h-72 bg-white rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-indigo-300 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-4xl mx-auto px-6 py-24 md:py-32 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight tracking-tight">
            インカレサーチは<br />
            インカレ専門の<br className="md:hidden" />
            サークル紹介サイトです
          </h1>
          <p className="mt-6 text-lg md:text-xl text-blue-100 max-w-2xl mx-auto">
            大学の垣根を超えた仲間と出会おう。
            あなたにぴったりのインカレサークルがきっと見つかります。
          </p>
          <Link
            href="/about"
            className="mt-10 inline-block px-10 py-4 text-lg font-bold bg-white text-blue-600 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
          >
            このサイトについて
          </Link>
        </div>
      </section>

      {/* サークル一覧セクション */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
            インカレサークル一覧
          </h2>
          <Link
            href="/circles"
            className="text-blue-600 hover:text-blue-800 font-medium transition-colors"
          >
            すべて見る →
          </Link>
        </div>
        <CircleCard />
      </section>

      {/* SEOテキストセクション - インカレ関連キーワードを自然に含む */}
      <section className="bg-white border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-6 py-16">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
            インカレサークルとは？
          </h2>
          <div className="text-gray-600 leading-relaxed space-y-4 text-sm md:text-base">
            <p>
              <strong className="text-gray-800">インカレサークル</strong>（インターカレッジサークル）とは、複数の大学の学生が所属するサークルや学生団体のことです。
              自分の大学だけでは出会えない仲間と活動できるのが、インカレサークルの最大の魅力です。
            </p>
            <p>
              インカレサーチでは、スポーツ系・文化系・ボランティア系・イベント系など、さまざまなジャンルの<strong className="text-gray-800">インカレサークル</strong>を掲載しています。
              活動内容や部員数、男女比、参加費といった詳しい情報から、あなたにぴったりのインカレサークルを見つけることができます。
            </p>
            <p>
              新入生はもちろん、2年生以上・他大学からの参加・大学院生も歓迎しているインカレサークルが多数。
              新歓イベント情報もまとめて掲載しているので、気になるインカレサークルの説明会やイベントに気軽に参加してみましょう。
            </p>
          </div>
          <div className="text-center mt-8">
            <Link
              href="/circles"
              className="inline-block px-8 py-3 text-sm font-bold bg-blue-600 text-white rounded-full shadow hover:bg-blue-700 hover:shadow-lg transition-all duration-300"
            >
              インカレサークルを探す
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}