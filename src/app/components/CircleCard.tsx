import Image from "next/image";
import Link from "next/link";

// 1. サークルデータの「設計図（型）」を定義する
export type Circle = {
  id: number;        // IDは数字
  name: string;      // 名前は文字列
  tag: string;       // タグは文字列
  university: string;// 大学名は文字列
  image: string; //画像URL
};

// 2. 仮のデータ（上で作った型に沿って書きます）
export const circlesData: Circle[] = [
  { id: 1, name: "FC東京インカレ", tag: "フットサル", university: "複数大学", image: "/images/test1.png" },
  { id: 2, name: "Webエンジニアリング部", tag: "プログラミング", university: "複数大学", image: "/images/test2.png" },
  { id: 3, name: "週末登山サークル", tag: "アウトドア", university: "複数大学", image: "/images/test3.png" },
];

// 3. コンポーネントが受け取る「props」の型も指定する
// { circle }: { circle: Circle } と書くことで、「このcircleはさっき作った設計図通りだよ」と伝えます
function CircleCard({ circle }: { circle: Circle }) {
  return (
    <Link href={`/circles/${circle.id}`}>
        <div className="border rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow">
            <Image
            src={circle.image} // 文字列（URL）をそのまま渡します
            alt={circle.name}  // alt属性も必須です
            width={600}            // 画像の基準となる幅
            height={400}           // 画像の基準となる高さ
            // object-cover で画像を歪ませずにトリミングします
            className="w-full h-48 object-cover rounded-md mb-4" 
            />
        <h3 className="font-bold text-lg">{circle.name}</h3>
        <span className="bg-blue-100 text-blue-800 text-sm px-2 py-1 rounded-full w-fit mt-2 inline-block">
            #{circle.tag}
        </span>
        </div>
    </Link>
  );
}

// 4. ページ本体
export default function CircleList() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8 px-4">
      {circlesData.map((circle) => (
        <CircleCard key={circle.id} circle={circle} />
      ))}
    </div>
  );
}