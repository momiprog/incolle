import Header from "../components/layout/Header";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "インカレサーチについて",
    description: "インカレサーチは、大学の枠を超えたインカレサークルを専門に紹介する検索サイトです。あなたが本当にやりたいこと、心から楽しめる居場所を見つけましょう。",
    openGraph: {
        title: "インカレサーチについて",
        description: "大学の枠を超えて、本当に「夢中になれる」場所を見つけよう。インカレサークル専門の検索サイト。",
    },
};

export default function About() {
    return (
        <div className="min-h-screen bg-gray-50">
            <Header />

            {/* ページヒーロー */}
            <section className="bg-gradient-to-br from-blue-600 via-blue-500 to-indigo-600 text-white py-20 text-center">
                <div className="max-w-3xl mx-auto px-6">
                    <h1 className="text-4xl md:text-5xl font-extrabold leading-tight tracking-tight">
                        大学の枠を越えて、<br />
                        本当に「夢中になれる」場所を。
                    </h1>
                    <p className="mt-6 text-lg text-blue-100">
                        インカレサークル専門の検索サイト
                    </p>
                </div>
            </section>

            {/* リード文セクション */}
            <section className="max-w-3xl mx-auto px-6 py-16">
                <div className="bg-white rounded-2xl shadow-sm p-8 md:p-12 text-gray-700 leading-relaxed text-lg space-y-4">
                    <p className="text-gray-500 italic text-base">
                        「自分の大学には、入りたいサークルがなかった」<br />
                        「もっと色々な人と交流して、新しいことに挑戦してみたい」
                    </p>
                    <p>
                        <strong className="text-gray-900">インカレサーチ</strong>は、そんな学生のためのサークル探しプラットフォームです。
                    </p>
                    <p>
                        大学という枠組みにとらわれず、あなたが本当にやりたいこと、心から楽しめる居場所を見つけるための選択肢を用意しました。
                    </p>
                </div>
            </section>

            {/* 3つの特徴 */}
            <section className="max-w-5xl mx-auto px-6 pb-20">
                <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-800 mb-12">
                    インカレサーチの<span className="text-blue-600">3つの特徴</span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* 特徴 1 */}
                    <div className="bg-white rounded-2xl shadow-sm p-8 hover:shadow-lg transition-shadow duration-300">
                        <h3 className="text-lg font-bold text-gray-800 mb-3">
                            あなたの「やりたい」が見つかる
                        </h3>
                        <p className="text-gray-600 leading-relaxed text-sm">
                            スポーツ、文化系、学術、プログラミングから、少しニッチな趣味の集まりまで。多種多様なインカレサークルが集まっているため、妥協のないサークル選びが可能です。
                        </p>
                    </div>

                    {/* 特徴 2 */}
                    <div className="bg-white rounded-2xl shadow-sm p-8 hover:shadow-lg transition-shadow duration-300">
                        <h3 className="text-lg font-bold text-gray-800 mb-3">
                            キャンパスの外に広がる新しい出会い
                        </h3>
                        <p className="text-gray-600 leading-relaxed text-sm">
                            インカレサークルの醍醐味は、普段の大学生活では出会えない他大学の学生と交流できること。多様な価値観に触れることで、あなたの世界はもっと広がります。
                        </p>
                    </div>

                    {/* 特徴 3 */}
                    <div className="bg-white rounded-2xl shadow-sm p-8 hover:shadow-lg transition-shadow duration-300">
                        <h3 className="text-lg font-bold text-gray-800 mb-3">
                            「通いやすさ」も、もう妥協しない
                        </h3>
                        <p className="text-gray-600 leading-relaxed text-sm">
                            すべてのサークルの「主な活動場所」をわかりやすく掲載。家や学校から無理なく通える、リアルな活動拠点から検索できます。
                        </p>
                    </div>
                </div>
            </section>

            {/* 結びのメッセージ */}
            <section className="bg-gradient-to-r from-blue-50 to-indigo-50 py-16">
                <div className="max-w-3xl mx-auto px-6 text-center">
                    <p className="text-xl md:text-2xl font-bold text-gray-800 leading-relaxed">
                        「とりあえず」で決めるのではなく、<br />
                        本当にワクワクできる場所へ。
                    </p>
                    <p className="mt-6 text-gray-600">
                        インカレサーチで、あなたの大学生活をさらに充実させる最高のサークルを見つけてください。
                    </p>
                    <Link
                        href="/circles"
                        className="mt-10 inline-block px-10 py-4 text-lg font-bold bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 hover:shadow-xl hover:scale-105 transition-all duration-300"
                    >
                        サークル一覧を見る
                    </Link>
                </div>
            </section>
        </div>
    );
}