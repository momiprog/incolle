// src/app/circle/[id]/page.tsx

// paramsの中身の型（設計図）も定義しておきます
type Props = {
  params: {
    id: string; // URLから取得する値はすべて最初は文字列になります
  };
};

export default function CircleDetailPage({ params }: Props) {
  // params.id にURLの数字（1や2など）が入ってきます！
  const circleId = params.id;

  return (
    <div className="p-10 text-center">
      <h1 className="text-2xl font-bold">
        サークルID: {circleId} の詳細ページです
      </h1>
      {/* 実際は、ここで取得したIDを使ってデータベースから詳細データを引っ張ってきます */}
    </div>
  );
}