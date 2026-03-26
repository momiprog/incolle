import Image from "next/image";
import Link from "next/link";

// サークルデータの型定義
export type Circle = {
  id: number;
  name: string;
  description: string;   // サークルの説明文
  tags: string[];        // 複数のタグ
  universities: string[]; // 複数の大学
  images: string[];       // 複数の画像

  // 今後追加すると良さそうな情報
  activityDays: string;  // 活動日
  memberCount: number;   // 部員数
  location?: string;     // 活動場所
  snsLinks?: {           // 各種SNSのリンク
    x?: string;
    instagram?: string;
  };
};

// 仮データ
export const circlesData: Circle[] = [
  {
    id: 1,
    name: "FC東京インカレ",
    description: "東京を中心に活動するインカレのフットサルサークルです。初心者から経験者まで幅広く在籍しており、週末の練習を通じて他大学の学生と交流を深めています！",
    tags: ["フットサル", "スポーツ", "初心者歓迎"],
    universities: ["東京大学", "早稲田大学", "慶應義塾大学"],
    images: ["/images/test1.png"],
    activityDays: "毎週土曜日 13:00~17:00",
    memberCount: 45,
    location: "東京都内のフットサルコート",
    snsLinks: { x: "https://x.com" }
  },
  {
    id: 2,
    name: "Webエンジニアリング部",
    description: "プログラミング未経験からでもWebアプリを作れるようになることを目標にした開発サークルです。週1回のオンライン勉強会と、月1回の対面ハッカソンを実施しています。",
    tags: ["プログラミング", "IT", "初心者歓迎"],
    universities: ["複数大学オンライン連盟"],
    images: ["/images/test2.png"],
    activityDays: "毎週水曜日（オンライン）/ 月1回土日（対面）",
    memberCount: 120,
    snsLinks: { x: "https://x.com", instagram: "https://instagram.com" }
  },
  {
    id: 3,
    name: "週末登山サークル",
    description: "関東近郊の山を中心に、月に1〜2回のペースで登山を楽しんでいます。自然を感じながら体を動かしたい方、新しい出会いを探している方にぴったりです。",
    tags: ["アウトドア", "登山", "自然"],
    universities: ["複数大学"],
    images: ["/images/test3.png"],
    activityDays: "隔週日曜日",
    memberCount: 30,
    location: "関東近郊の山々"
  },
];

function CircleCard({ circle }: { circle: Circle }) {
  return (
    <Link href={`/circles/${circle.id}`} className="group">
      <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group-hover:-translate-y-1">
        <div className="relative overflow-hidden">
          <Image
            src={circle.images[0]}
            alt={circle.name}
            width={600}
            height={400}
            className="w-full h-52 object-cover group-hover:scale-105 transition-transform duration-300"
          />
          {/* タグバッジ（画像の上に重ねる） */}
          <div className="absolute top-3 left-3 flex gap-2 flex-wrap">
            {circle.tags.map(tag => (
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

// サークル一覧グリッド
export default function CircleList() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {circlesData.map((circle) => (
        <CircleCard key={circle.id} circle={circle} />
      ))}
    </div>
  );
}