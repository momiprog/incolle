import Link from "next/link";

// SEO対策: キーワード「インカレ」「インカレサークル」を含むフッター
// 内部リンクの充実・構造化により検索エンジンの評価を向上させる
export default function Footer() {
    return (
        <footer className="bg-gray-900 text-gray-400 mt-auto">
            <div className="max-w-6xl mx-auto px-6 py-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* サイト情報 */}
                    <div>
                        <h2 className="text-white font-bold text-lg mb-3">インカレサーチ</h2>
                        <p className="text-sm leading-relaxed">
                            インカレサークル専門の紹介・検索サイト。大学の垣根を超えた仲間と出会える、インカレサークルの情報を掲載しています。
                        </p>
                    </div>

                    {/* サイトマップ */}
                    <div>
                        <h3 className="text-white font-bold text-sm mb-3">ページ一覧</h3>
                        <ul className="space-y-2 text-sm">
                            <li>
                                <Link href="/" className="hover:text-white transition-colors">
                                    トップページ
                                </Link>
                            </li>
                            <li>
                                <Link href="/circles" className="hover:text-white transition-colors">
                                    インカレサークル一覧
                                </Link>
                            </li>
                            <li>
                                <Link href="/welcome-event" className="hover:text-white transition-colors">
                                    新歓イベント情報
                                </Link>
                            </li>
                            <li>
                                <Link href="/about" className="hover:text-white transition-colors">
                                    インカレサーチについて
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* 関連キーワード（内部リンク兼SEO） */}
                    <div>
                        <h3 className="text-white font-bold text-sm mb-3">インカレサークルを探す</h3>
                        <p className="text-sm leading-relaxed">
                            インカレサークルとは、複数の大学の学生が所属するインターカレッジサークルのこと。スポーツ系・文化系・ボランティア系など、さまざまなジャンルのインカレサークルを掲載中です。
                        </p>
                    </div>
                </div>

                {/* コピーライト */}
                <div className="border-t border-gray-800 mt-8 pt-6 text-center text-xs text-gray-500">
                    <p>© {new Date().getFullYear()} インカレサーチ - インカレサークル専門紹介サイト</p>
                </div>
            </div>
        </footer>
    );
}
