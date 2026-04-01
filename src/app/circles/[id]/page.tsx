import Header from "../../components/layout/Header";
import { circlesData } from "../../components/CircleCard";
import { notFound } from "next/navigation";
import ImageSlider from "../../components/ImageSlider";
import Image from "next/image";
import { events as allWelcomeEvents } from "../../data/welcomeEvents";
import type { Metadata } from "next";

type Props = {
  params: Promise<{
    id: string;
  }>;
};

// サークルごとに動的なメタデータを生成（SEO対策）
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const circle = circlesData.find((c) => c.id === parseInt(id, 10));

  if (!circle) {
    return { title: "サークルが見つかりません" };
  }

  const description = `${circle.name}の活動内容・部員数・新歓情報。${circle.description.slice(0, 100)}…`;

  return {
    title: circle.name,
    description,
    openGraph: {
      title: `${circle.name} | インカレサーチ`,
      description,
      images: circle.images[0] ? [{ url: circle.images[0] }] : [],
    },
    twitter: {
      card: "summary_large_image",
      title: `${circle.name} | インカレサーチ`,
      description,
    },
  };
}

export default async function CircleDetailPage({ params }: Props) {
  const { id } = await params;

  // URLのIDを数値に変換し、circlesDataの中から一致するサークルを探します
  const circle = circlesData.find((c) => c.id === parseInt(id, 10));

  // このサークルの新歓イベントを取得
  const welcomeEvents = allWelcomeEvents.filter((e) => e.circleId === parseInt(id, 10));

  // もし該当するサークルが存在しなかったら「404 Not Foundページ」を表示
  if (!circle) {
    return notFound();
  }
  // サークル用の構造化データ（JSON-LD）
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: circle.name,
    description: circle.description.slice(0, 200),
    url: `https://incolle.vercel.app/circles/${circle.id}`,
    location: circle.location,
    memberOf: {
      "@type": "Organization",
      name: "インカレサーチ",
    },
    sameAs: [
      circle.snsLinks?.x,
      circle.snsLinks?.instagram,
      circle.snsLinks?.website,
    ].filter(Boolean),
  };

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* JSON-LD 構造化データ */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />

      {/* ヒーロー（上部のカバー画像）エリア */}
      <div className="relative w-full h-[35vh] md:h-[45vh] bg-gray-900">
        <Image
          src={circle.images[0]}
          alt={circle.name}
          fill
          sizes="100vw"
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

          {/* 写真スライダー */}
          <div className="w-full h-64 sm:h-80 md:h-96 rounded-2xl overflow-hidden mb-8 shadow-sm">
            <ImageSlider
              images={circle.images}
              alt={`${circle.name}の活動風景`}
              className="w-full h-full"
            />
          </div>

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

          {/* 新歓イベント日程（該当サークルのみ） */}
          {welcomeEvents.length > 0 && (
            <div className="mb-10 bg-pink-50/50 rounded-2xl p-6 border border-pink-100">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <span className="text-pink-400">🌸</span> 新歓イベント日程
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {welcomeEvents.map((event) => (
                  <div key={event.id} className="bg-white border border-gray-100 rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow">
                    <div className="mb-3">
                      <h3 className="font-bold text-lg text-gray-800">{event.eventName}</h3>
                    </div>
                    <div className="text-sm text-gray-600 space-y-2">
                      <p className="flex items-start gap-2">
                        <span className="text-gray-400 shrink-0 mt-0.5">📅</span>
                        <span>{event.date}</span>
                      </p>
                      <p className="flex items-start gap-2">
                        <span className="text-gray-400 shrink-0 mt-0.5">📍</span>
                        <span>{event.location}</span>
                      </p>
                    </div>
                    {event.description && (
                      <p className="text-sm text-gray-700 whitespace-pre-wrap mt-4 pt-3 border-t border-gray-100">
                        {event.description}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* アクションボタン（クリックを促す） */}
          <div className="flex flex-col sm:flex-row gap-4 border-t border-gray-100 pt-8 mt-4">
            {circle.snsLinks?.x && (
              <a
                href={circle.snsLinks.x}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 bg-black text-white font-bold py-4 px-8 rounded-2xl hover:bg-gray-800 hover:shadow-md transition-all duration-300 text-center text-lg flex justify-center items-center gap-2"
              >
                <svg className="w-5 h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
                </svg>
                公式Xを見る
              </a>
            )}

            {circle.snsLinks?.instagram && (
              <a
                href={circle.snsLinks.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400 text-white font-bold py-4 px-8 rounded-2xl hover:opacity-90 hover:shadow-md transition-all duration-300 text-center text-lg flex justify-center items-center gap-2"
              >
                <svg className="w-5 h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                </svg>
                公式Instagramを見る
              </a>
            )}

            {circle.snsLinks?.website && (
              <a
                href={circle.snsLinks.website}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 bg-teal-500 text-white font-bold py-4 px-8 rounded-2xl hover:bg-teal-600 hover:shadow-md transition-all duration-300 text-center text-lg flex justify-center items-center gap-2"
              >
                <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
                ホームページを見る
              </a>
            )}

            {circle.snsLinks?.tiktok && (
              <a
                href={circle.snsLinks.tiktok}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 bg-gray-900 text-white font-bold py-4 px-8 rounded-2xl hover:bg-gray-700 hover:shadow-md transition-all duration-300 text-center text-lg flex justify-center items-center gap-2"
              >
                <svg className="w-5 h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
                </svg>
                TikTokを見る
              </a>
            )}

            {/* リンクがどちらもない場合 */}
            {!circle.snsLinks?.x && !circle.snsLinks?.instagram && !circle.snsLinks?.website && !circle.snsLinks?.tiktok && (
              <p className="text-gray-500 text-sm text-center w-full py-4">SNSリンクは現在準備中です</p>
            )}
          </div>

        </div>
      </main>
    </div>
  );
}