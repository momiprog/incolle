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
  fee: string;           // 活動費
  genderRatio: string;   // 男女比
  snsLinks?: {           // 各種SNSのリンク
    x?: string;
    instagram?: string;
    website?: string;
    tiktok?: string;
  };
};

// 仮データ
export const circlesData: Circle[] = [
  {
    id: 1,
    name: "学生団体廃校文化祭実行委員会CSF",
    description: `「廃校をもっと身近に」という理念のもと、池袋にある廃校を活動拠点としてイベントを開催している団体です🏫🌱
イベントを開催し、廃校に足を運んでもらうことで、廃校活用の楽しさや可能性を肌で感じてもらうことを、地域創生活動の一環として行っています。
普段のミーツでは、地域創生局・運営局・広報局・渉外局といった4つの局編成のもと、自分のやりたい分野に近い局を選び、イベントに向けた準備を行っています。
所属しているメンバーは個性豊かで優しく、友達思いな人が多いです🤝🏻
毎週行っているミーツ以外でも、プライベートで集まって遊ぶことが多いです👀
メンバーはイベントが大好きで、夏には花火大会に行くなど、活動以外でも充実すること間違いなしです！
大学というコミュニティを超えたこの団体で、たくさんの思い出と経験を得ましょう！！`,
    tags: ["イベント"],
    universities: ["日本大学", "その他大学"],
    images: [
      "/images/csf/csf-1.webp",
      "/images/csf/csf-2.webp",
      "/images/csf/csf-3.webp",
      "/images/csf/csf-4.webp",
      "/images/csf/csf-5.webp"
    ],
    activityDays: "毎週金曜日 19〜21時",
    memberCount: 25,
    location: "東京都豊島区池袋三丁目30-8 みらい館大明",
    fee: "",
    genderRatio: "男6:女4",
    snsLinks: {           // 各種SNSのリンク
      x: "https://x.com/closedschool",
      instagram: "https://www.instagram.com/closed_school_festival",
    },
  },
  {
    id: 2,
    name: "インカレ鬼ごっこサークル【Goblin's】",
    description: `週1回都内の公園で鬼ごっこなどをやったり月1回様々なイベントを開催していたり春、夏、秋、冬、に合宿(旅行)に行きます！

サークルの活動以外にもみんなで定期的に一緒にゲームをしたり、キックボクシングをしたり、カラオケに行ったりもしています！`,
    tags: ["スポーツ", "イベント", "アウトドア"],
    universities: ["青山学院大学", "専修大学", "早稲田大学", "東京農業大学", "日本大学", "神奈川大学"],
    images: [
      "/images/goblin's/goblin-1.webp",
      "/images/goblin's/goblin-2.webp",
      "/images/goblin's/goblin-3.webp",
      "/images/goblin's/goblin-4.webp",
      "/images/goblin's/goblin-5.webp",
    ], // 画像を設定しました
    activityDays: "週1〜2日",
    memberCount: 100,
    location: "代々木公園、駒沢オリンピック公園、西六郷公園",
    fee: "年会費なし、鬼ごっこ無料、イベントはその都度",
    genderRatio: "男6:女4",
    snsLinks: {
      x: "https://x.com/onigokkos?s=21&t=sH7dciIMytSV-yF9Tj5cqg",
      instagram: "https://www.instagram.com/onigokkos_insta?igsh=OXV3amtkMjRpeXQ4&utm_source=qr",
    },
  },
  {
    id: 3,
    name: "Dolphins",
    description: "ダイビングサークルのDolphinsです！ほとんどの人が初心者からスタートしますが、周りの先輩方が優しくサポートしてくれるので気づいたらダイビングもDolphinsのことも大好きになっています。アットホームで居心地のいいサークルです！おひとり様入会、2年生以上、院生も大歓迎。入会お待ちしています！！",
    tags: ["スポーツ", "アウトドア", "ダイビング", "海"],
    universities: ["東京大学", "東京海洋大学", "慶應義塾大学", "電気通信大学", "明治大学", "中央大学", "芝浦工業大学", "その他"],
    images: [
      "/images/dolphins/dolphins-1.jpg",
      "/images/dolphins/dolphins-2.jpg",
      "/images/dolphins/dolphins-3.jpg",
      "/images/dolphins/dolphins-4.jpg",
      "/images/dolphins/dolphins-5.jpg",
    ],
    activityDays: "毎週末、月4回（強制なしの自由参加）",
    memberCount: 120,
    location: "伊豆、沖縄、小笠原諸島",
    fee: "年会費¥3,800、一回の活動¥16,000前後（行き先や内容による）",
    genderRatio: "男2:女1",
    snsLinks: {
      x: "https://x.com/2026Dolphins",
      instagram: "https://www.instagram.com/dolphins_intercollegiate",
      website: "https://www.dolphins-intercollegiate.com/",
    },
  },
  {
    id: 4,
    name: "カフェ巡りサークル巡りて",
    description: "カフェ巡りは少人数、イベントは大人数の活動です。大人数がニガテな方も、みんなでワイワイしたい方もお話ししやすいサークルです！",
    tags: ["カフェ", "グルメ", "イベント"],
    universities: ["東洋大学", "共立女子大学", "横浜国立大学", "東京都市大学", "武蔵大学"],
    images: [
      "/images/megurite/megurite-1.jpg",
      "/images/megurite/megurite-2.jpg",
      "/images/megurite/megurite-3.jpg",
      "/images/megurite/megurite-4.png",
      "/images/megurite/megurite-5.png",
    ],
    activityDays: "週末、月2回",
    memberCount: 36,
    location: "東京都内、希に東京近郊",
    fee: "年1,000円、イベントごとに会費2,500円程度",
    genderRatio: "男3:女7",
    snsLinks: {
      x: "https://x.com/toyocafe0909",
      instagram: "https://www.instagram.com/toyocafe0909?igsh=dnhxZzZjdDV2bHcy",
      tiktok: "https://www.tiktok.com/@megurite0?_r=1&_t=ZS-959Nu7ocEcO",
    },
  },
  {
    id: 5,
    name: "学生団体フェアトレードドリップパックプロジェクト",
    description: `ラオス産のフェアトレードコーヒーを日本のイベントに出展して販売する活動を行っています。その利益は前期から本格的に始動したコーヒーの苗植樹プロジェクトの資金として還元されたりします。
私たちの団体では、マーケティング、広報、財務など幅広くスキルアップができ、1年目からでも積極的に参加して団体に貢献していただけます。`,
    tags: ["社会貢献", "フェアトレード", "コーヒー", "SDGs"],
    universities: ["東洋大学", "東京理科大学", "明治大学"],
    images: [
      "/images/dripro/dripro-1.jpg",
      "/images/dripro/dripro-2.jpg",
      "/images/dripro/dripro-3.jpg",
      "/images/dripro/dripro-4.jpg",
      "/images/dripro/dripro-5.jpg",
    ],
    activityDays: "毎週月曜日18:30〜、週1〜2日",
    memberCount: 13,
    location: "東洋大学白山キャンパス、東京理科大学神楽坂キャンパス",
    fee: "年3,000円（交通費・ラオス渡航費は自己負担）",
    genderRatio: "男7:女3",
    snsLinks: {
      x: "https://x.com/DripPack_pro",
      instagram: "https://www.instagram.com/dripro_laoscoffee",
      website: "https://ft-drippack-project.jimdofree.com/%E3%83%89%E3%83%AA%E3%83%97%E3%83%AD%E3%81%AB%E3%81%A4%E3%81%84%E3%81%A6/%E7%90%86%E5%BF%B5/",
    },
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