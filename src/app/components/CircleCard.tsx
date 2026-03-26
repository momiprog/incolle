import Image from "next/image";
import Link from "next/link";

// サークルデータの型定義
export type Circle = {
  id: number;
  name: string;
  tag: string;
  university: string;
  image: string;
};

// 仮データ
export const circlesData: Circle[] = [
  { id: 1, name: "FC東京インカレ", tag: "フットサル", university: "複数大学", image: "/images/test1.png" },
  { id: 2, name: "Webエンジニアリング部", tag: "プログラミング", university: "複数大学", image: "/images/test2.png" },
  { id: 3, name: "週末登山サークル", tag: "アウトドア", university: "複数大学", image: "/images/test3.png" },
];

function CircleCard({ circle }: { circle: Circle }) {
  return (
    <Link href={`/circles/${circle.id}`} className="group">
      <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group-hover:-translate-y-1">
        <div className="relative overflow-hidden">
          <Image
            src={circle.image}
            alt={circle.name}
            width={600}
            height={400}
            className="w-full h-52 object-cover group-hover:scale-105 transition-transform duration-300"
          />
          {/* タグバッジ（画像の上に重ねる） */}
          <span className="absolute top-3 left-3 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow">
            #{circle.tag}
          </span>
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