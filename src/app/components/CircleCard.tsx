import Image from "next/image";
import Link from "next/link";
import { supabase } from "../../utils/supabase";

// Supabaseテーブルの構造に合わせたサークルデータの型定義
export type Circle = {
  id: number;
  name: string;
  description: string;
  tags: string[];
  universities: string[];
  images_url: string[];
  activity_days: string | null;
  member_count: number | null;
  location: string | null;
  fee: string | null;
  tiktok_link: string | null;
  x_link: string | null;
  instagram_link: string | null;
  website_link: string | null;
};

// 1件分のカード表示を行うコンポーネント
function CircleCard({ circle }: { circle: Circle }) {
  // 画像が存在しない場合のフォールバックを設定
  const mainImage = circle.images_url && circle.images_url.length > 0 
    ? circle.images_url[0] 
    : "/images/placeholder.jpg"; // フォールバック画像（プロジェクトに存在しなければ後で入れ替えます）

  return (
    <Link href={`/circles/${circle.id}`} className="group">
      <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group-hover:-translate-y-1">
        <div className="relative overflow-hidden">
          <Image
            src={mainImage}
            alt={circle.name}
            width={600}
            height={400}
            className="w-full h-52 object-cover group-hover:scale-105 transition-transform duration-300"
          />
          {/* タグバッジ（画像の上に重ねる） */}
          <div className="absolute top-3 left-3 flex gap-2 flex-wrap">
            {circle.tags && circle.tags.map(tag => (
              <span key={tag} className="bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow border border-white/20">
                #{tag}
              </span>
            ))}
          </div>
        </div>
        <div className="p-5">
          <h3 className="font-bold text-lg text-gray-800 group-hover:text-blue-600 transition-colors">
            {circle.name}
          </h3>
        </div>
      </div>
    </Link>
  );
}

// サークル一覧グリッド（Supabaseからデータ取得する非同期Server Component）
export default async function CircleList() {
  const { data: circles, error } = await supabase
    .from('circle')
    .select('*')
    .order('id', { ascending: true }); // ID順などでソート

  if (error) {
    console.error('サークルデータの取得に失敗しました:', error);
    return (
      <div className="text-center text-red-500 p-8 bg-red-50 rounded-xl">
        <p className="font-bold text-lg mb-2">サークル情報の読み込みに失敗しました。</p>
        <p className="text-sm">時間を置いて再度お試しください。（Error: {error.message}）</p>
      </div>
    );
  }

  if (!circles || circles.length === 0) {
    return (
      <div className="text-center text-gray-500 p-8">
        登録されているサークルがまだありません。
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {circles.map((circle: Circle) => (
        <CircleCard key={circle.id} circle={circle} />
      ))}
    </div>
  );
}