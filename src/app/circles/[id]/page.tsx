import Header from "../../components/layout/Header";
import { circlesData } from "../../components/CircleCard";
import { notFound } from "next/navigation";
import Image from "next/image";

type Props = {
  params: Promise<{
    id: string;
  }>;
};

export default async function CircleDetailPage({ params }: Props) {
  const { id } = await params;
  
  // URLのIDを数値に変換し、circlesDataの中から一致するサークルを探します
  const circle = circlesData.find((c) => c.id === parseInt(id, 10));

  // もし該当するサークルが存在しなかったら「404 Not Foundページ」を表示
  if (!circle) {
    return notFound();
  }

  return (
    <div className="bg-slate-50 min-h-screen">
      <Header />
      
      {/* ヒーロー（上部のカバー画像）エリア */}
      <div className="relative w-full h-[35vh] md:h-[45vh] bg-gray-900">
        <Image
          src={circle.images[0]}
          alt={circle.name}
          fill
          className="object-cover opacity-80"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
      </div>

      {/* メイン詳細コンテンツ - 画像に上に少し重なるように配置してモダンに */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 relative -mt-24 pb-20">
        <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12">
          
          {/* タグ */}
          <div className="flex flex-wrap items-center gap-3 mb-6">
            {circle.tags.map(tag => (
              <span key={tag} className="bg-blue-100 text-blue-700 font-bold px-4 py-1.5 rounded-full text-sm">
                #{tag}
              </span>
            ))}
          </div>

          {/* サークルタイトル */}
          <h1 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-6 tracking-tight">
            {circle.name}
          </h1>

          {/* サークル基本情報（新しく追加した項目） */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 bg-gray-50 p-6 rounded-2xl mb-8 border border-gray-100">
            <div className="flex items-center gap-2">
              <span className="text-xl">📅</span>
              <div>
                <dt className="text-xs text-gray-500 font-bold">活動日</dt>
                <dd className="text-gray-800 font-medium">{circle.activityDays}</dd>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xl">👥</span>
              <div>
                <dt className="text-xs text-gray-500 font-bold">部員数</dt>
                <dd className="text-gray-800 font-medium">{circle.memberCount}名</dd>
              </div>
            </div>
            {circle.location && (
              <div className="flex items-center gap-2">
                <span className="text-xl">📍</span>
                <div>
                  <dt className="text-xs text-gray-500 font-bold">活動場所</dt>
                  <dd className="text-gray-800 font-medium">{circle.location}</dd>
                </div>
              </div>
            )}
            <div className="flex items-center gap-2">
              <span className="text-xl">🎓</span>
              <div>
                <dt className="text-xs text-gray-500 font-bold">主な大学</dt>
                <dd className="text-gray-800 font-medium">{circle.universities.join("・")}</dd>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xl">💰</span>
              <div>
                <dt className="text-xs text-gray-500 font-bold">活動費</dt>
                <dd className="text-gray-800 font-medium">{circle.fee}</dd>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xl">👫</span>
              <div>
                <dt className="text-xs text-gray-500 font-bold">男女比</dt>
                <dd className="text-gray-800 font-medium">{circle.genderRatio}</dd>
              </div>
            </div>
          </div>

          {/* 紹介文 */}
          <div className="prose prose-blue max-w-none text-gray-700 mb-10 leading-relaxed md:text-lg whitespace-pre-wrap">
            {circle.description}
          </div>

          {/* アクションボタン（クリックを促す） */}
          <div className="flex flex-col sm:flex-row gap-4 border-t border-gray-100 pt-8 mt-4">
            <button className="flex-1 bg-blue-600 text-white font-bold py-4 px-8 rounded-2xl hover:bg-blue-700 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 text-center text-lg">
              このサークルに問い合わせる
            </button>
            <button className="flex-1 bg-sky-50 text-sky-600 font-bold py-4 px-8 rounded-2xl hover:bg-sky-100 hover:shadow-md transition-all duration-300 text-center text-lg flex justify-center items-center gap-2">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
              </svg>
              公式Xを見る
            </button>
          </div>
          
        </div>
      </main>
    </div>
  );
}