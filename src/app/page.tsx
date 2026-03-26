import Header from "./components/layout/Header";
import Link from "next/link";
import CircleCard from "./components/CircleCard";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
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
            🎓 サークル一覧
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
    </div>
  );
}