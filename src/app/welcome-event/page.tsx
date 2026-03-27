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
};

// 仮の新歓イベントデータ
const events: WelcomeEvent[] = [
    {
        id: 1,
        circleId: 1,
        circleName: "FC東京インカレ",
        eventName: "初心者大歓迎！体験フットサル＆見学・説明会",
        date: "4月13日(土) 13:00〜16:00",
        location: "代々木フットサルコート",
        type: "offline",
        description: "実際にボールを蹴りながら、サークルの雰囲気を感じていただけます！運動着と運動靴を持参してください。見学だけでもOKです⚽️",
    },
    {
        id: 2,
        circleId: 2,
        circleName: "Webエンジニアリング部",
        eventName: "【全国から参加OK】オンライン新入生歓迎・活動説明会",
        date: "4月10日(水) 20:00〜21:00",
        location: "オンライン (Zoom)",
        type: "online",
        description: "文系・プログラミング未経験でも全く問題ありません！どんなWebアプリを作っているか、先輩たちが丁寧に解説します。気軽にご参加ください！💻",
    },
    {
        id: 3,
        circleId: 3,
        circleName: "週末登山サークル",
        eventName: "春の高尾山 新入生歓迎ハイキング＆交流会",
        date: "4月21日(日) 09:00〜15:00",
        location: "京王線 高尾山口駅 改札前 集合",
        type: "offline",
        description: "初心者でも登りやすい高尾山で、自然を楽しみながら新しい友達を作りましょう！登頂後には自己紹介ゲームや交流レクも予定しています⛰️",
    },
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
                    {events.map((event) => {
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
                                    <span className={`mt-4 px-4 py-1.5 rounded-full text-xs font-bold shadow-sm ${event.type === 'online' ? 'bg-blue-100 text-blue-700 border border-blue-200' : 'bg-green-100 text-green-700 border border-green-200'
                                        }`}>
                                        {event.type === 'online' ? '💻 オンライン開催' : '🚶‍♂️ 対面イベント'}
                                    </span>
                                </div>

                                {/* 詳細エリア（右側） */}
                                <div className="p-6 md:p-8 flex-1 flex flex-col">
                                    {/* サークル名ラベル */}
                                    <div className="mb-3 flex items-center">
                                        <span className="text-xs font-bold text-gray-500 bg-gray-100 px-3 py-1 rounded-full border border-gray-200">
                                            🏢 {event.circleName}
                                        </span>
                                    </div>

                                    {/* イベント名 */}
                                    <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 leading-snug group-hover:text-pink-600 transition-colors">
                                        {event.eventName}
                                    </h3>

                                    {/* 説明文 */}
                                    <p className="text-gray-600 text-sm mb-6 leading-relaxed flex-1">
                                        {event.description}
                                    </p>

                                    {/* フッター（場所＆ボタン） */}
                                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mt-auto pt-5 border-t border-gray-100">
                                        <div className="text-sm font-bold text-gray-500 flex items-center gap-1.5 bg-gray-50 px-3 py-1.5 rounded-md">
                                            📍 {event.location}
                                        </div>
                                        <Link href={`/circles/${event.circleId}`} className="w-full sm:w-auto text-center bg-gray-900 text-white px-6 py-2.5 rounded-full font-bold hover:bg-pink-500 hover:shadow-md transition-all duration-300 text-sm whitespace-nowrap">
                                            サークル詳細を見る →
                                        </Link>
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
