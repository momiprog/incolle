import Header from "../components/layout/Header";
import Link from "next/link";

// イベントの型定義
type WelcomeEvent = {
    id: number;
    circleId: number;
    circleName: string;
    eventName: string;
    date: string;       // 例: "4月5日(金) 19:00〜21:00"
    location: string;   // 例: "オンライン (Zoom)" または "新宿キャンパス 301教室"
    type: "online" | "offline";
    description: string;
    snsLinks?: {
        x?: string;
        instagram?: string;
    };
};

// 新歓イベントデータ
const events: WelcomeEvent[] = [
    {
        id: 1,
        circleId: 1,
        circleName: "学生団体廃校文化祭実行委員会CSF",
        eventName: "新入生歓迎イベント",
        date: "4月12日(日) 13:00〜16:00",
        location: "東京都豊島区池袋 みらい館大明",
        type: "offline",
        description: "全学年対象🙆🏻\n\n参加費: 500円\n持ち物: スリッパ",
        snsLinks: { x: "https://x.com/CSFshinkan", instagram: "https://www.instagram.com/csfshinkan" },
    },
    {
        id: 2,
        circleId: 1,
        circleName: "学生団体廃校文化祭実行委員会CSF",
        eventName: "たこ焼きパーティー (大型新歓)",
        date: "4月19日(日) 12:00〜16:00",
        location: "東京都豊島区池袋 みらい館大明",
        type: "offline",
        description: "全学年対象🙆🏻\n\n参加費: 未定(1500円〜を予定しております)\n持ち物: スリッパ",
        snsLinks: { x: "https://x.com/CSFshinkan", instagram: "https://www.instagram.com/csfshinkan" },
    },
    {
        id: 3,
        circleId: 1,
        circleName: "学生団体廃校文化祭実行委員会CSF",
        eventName: "新入生歓迎イベント",
        date: "5月10日(日) 13:00〜16:00",
        location: "東京都豊島区池袋 みらい館大明",
        type: "offline",
        description: "全学年対象🙆🏻\n\n参加費: 500円\n持ち物: スリッパ",
        snsLinks: { x: "https://x.com/CSFshinkan", instagram: "https://www.instagram.com/csfshinkan" },
    },
    {
        id: 4,
        circleId: 1,
        circleName: "学生団体廃校文化祭実行委員会CSF",
        eventName: "新入生歓迎イベント",
        date: "5月24日(日) 13:00〜16:00",
        location: "東京都豊島区池袋 みらい館大明",
        type: "offline",
        description: "全学年対象🙆🏻\n\n参加費: 500円\n持ち物: スリッパ",
        snsLinks: { x: "https://x.com/CSFshinkan", instagram: "https://www.instagram.com/csfshinkan" },
    }
];

export default function WelcomeEventPage() {
    return (
        <div className="min-h-screen bg-gray-50 pb-20">
            <Header />

            {/* ヒーローセクション（春・新歓らしい桜色のグラデーション） */}
            <section className="bg-gradient-to-r from-pink-400 via-rose-400 to-orange-300 text-white py-20 relative overflow-hidden">
                {/* 背景の装飾ブラー */}
                <div className="absolute inset-0 opacity-20 pointer-events-none">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full mix-blend-overlay filter blur-3xl opacity-60"></div>
                    <div className="absolute bottom-0 left-20 w-72 h-72 bg-yellow-200 rounded-full mix-blend-overlay filter blur-3xl opacity-60"></div>
                </div>

                <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
                    <span className="bg-white/20 text-white px-4 py-1.5 rounded-full font-bold text-sm tracking-widest inline-block mb-6 shadow-sm border border-white/30 backdrop-blur-md">
                        2026 SPRING
                    </span>
                    <h1 className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight drop-shadow-md">
                        インカレ新歓イベント<br className="md:hidden" /> 特設サイト
                    </h1>
                    <p className="text-lg md:text-xl text-pink-50 max-w-2xl mx-auto leading-relaxed drop-shadow-sm font-medium">
                        春は新しい出会いの季節。<br />
                        気になるサークルの説明会や体験イベントに参加して、<br className="hidden md:block" />
                        自分にぴったりの居場所を見つけよう！
                    </p>
                </div>
            </section>

            {/* メインコンテンツ */}
            <main className="max-w-4xl mx-auto px-6 py-16">
                <div className="flex items-center gap-3 mb-10 border-b-2 border-pink-400 pb-3">
                    <span className="text-3xl">📅</span>
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-800 tracking-tight">
                        新歓イベント日程一覧
                    </h2>
                </div>

                <div className="space-y-6">
                    {events.length === 0 ? (
                        <div className="bg-white rounded-2xl shadow-sm p-10 text-center border border-gray-100">
                            <p className="text-gray-500 font-bold text-lg">現在予定されている新歓イベントはありません🌸</p>
                            <p className="text-gray-400 text-sm mt-2">新しいイベントが追加されるのをお待ちください！</p>
                        </div>
                    ) : events.map((event) => {
                        // "4月13日(土) 13:00〜16:00" を日付と時間に分割
                        const [datePart, timePart] = event.date.split(' ');

                        return (
                            <div key={event.id} className="bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden border border-gray-100 flex flex-col md:flex-row group">

                                {/* 日付エリア（左側） */}
                                <div className="bg-pink-50 md:w-56 p-6 flex flex-col justify-center items-center border-b md:border-b-0 md:border-r border-pink-100 shrink-0 group-hover:bg-pink-100 transition-colors">
                                    <span className="text-pink-600 font-black text-2xl tracking-tighter text-center">
                                        {datePart}
                                    </span>
                                    <span className="text-gray-500 font-bold text-sm mt-1">
                                        {timePart}
                                    </span>
                                </div>

                                {/* 詳細エリア（右側） */}
                                <div className="p-6 md:p-8 flex-1 flex flex-col">
                                    {/* サークル名ラベル */}
                                    <div className="mb-3 flex items-center">
                                        <Link href={`/circles/${event.circleId}`} className="inline-block transition-transform hover:-translate-y-0.5 hover:scale-105">
                                            <span className="text-sm md:text-base font-extrabold text-white bg-gradient-to-r from-pink-500 to-orange-400 px-4 py-1.5 rounded-full shadow-md drop-shadow-sm border border-pink-300 flex items-center gap-1.5">
                                                {event.circleName} <span className="text-sm font-black pl-2">詳細を見る➡️</span>
                                            </span>
                                        </Link>
                                    </div>

                                    {/* イベント名 */}
                                    <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 leading-snug group-hover:text-pink-600 transition-colors">
                                        {event.eventName}
                                    </h3>

                                    {/* 説明文 */}
                                    <p className="text-gray-600 text-sm mb-6 leading-relaxed flex-1 whitespace-pre-wrap">
                                        {event.description}
                                    </p>

                                    {/* フッター（場所＆SNSボタン） */}
                                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mt-auto pt-5 border-t border-gray-100">

                                        {/* 左側: 場所 */}
                                        {event.type === 'offline' ? (
                                            <a
                                                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(event.location)}`}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-sm font-bold text-gray-600 hover:text-blue-600 flex items-center gap-1.5 bg-gray-50 hover:bg-blue-50 px-3 py-1.5 rounded-md transition-colors shrink-0"
                                                title="Googleマップで開く"
                                            >
                                                📍 <span className="underline decoration-gray-300 underline-offset-4">{event.location}</span>
                                            </a>
                                        ) : (
                                            <div className="text-sm font-bold text-gray-500 flex items-center gap-1.5 bg-gray-50 px-3 py-1.5 rounded-md shrink-0">
                                                💻 {event.location}
                                            </div>
                                        )}

                                        {/* 右側: 新歓用SNSリンク */}
                                        <div className="flex flex-wrap gap-2 w-full sm:w-auto mt-2 sm:mt-0 justify-end">
                                            {event.snsLinks?.x && (
                                                <a
                                                    href={event.snsLinks.x}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="flex-1 sm:flex-none bg-black text-white px-4 py-2 rounded-full font-bold hover:bg-gray-800 transition-colors text-xs flex justify-center items-center gap-1.5 shadow-sm"
                                                    title="新歓用公式Xを見る"
                                                >
                                                    <svg className="w-3.5 h-3.5 fill-current shrink-0" viewBox="0 0 24 24">
                                                        <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
                                                    </svg>
                                                    新歓用Xを見る
                                                </a>
                                            )}
                                            {event.snsLinks?.instagram && (
                                                <a
                                                    href={event.snsLinks.instagram}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="flex-1 sm:flex-none bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400 text-white px-4 py-2 rounded-full font-bold hover:opacity-90 transition-opacity text-xs flex justify-center items-center gap-1.5 shadow-sm"
                                                    title="新歓用公式Instagramを見る"
                                                >
                                                    <svg className="w-3.5 h-3.5 fill-current shrink-0" viewBox="0 0 24 24">
                                                        <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                                                    </svg>
                                                    新歓用インスタを見る
                                                </a>
                                            )}
                                        </div>
                                    </div>
                                </div>

                            </div>
                        );
                    })}
                </div>
            </main>
        </div>
    );
}
