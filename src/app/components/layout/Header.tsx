import Link from "next/link";

export default function Header() {
    return (
        <header>
            {/* 1. h1 と ul を横並びにし、両端に配置する */}
            <div className="flex items-center justify-between bg-blue-600 px-4 py-3 shadow-md">

                {/* 背景色などは親のdivに移動させたので、h1は文字のスタイルのみにしました */}
                <h1 className="text-2xl font-bold text-white">
                    チャットルーム
                </h1>

                {/* 2. メニュー項目(li)同士を横並びにし、隙間(gap)を空ける */}
                <ul className="flex gap-6 text-white font-medium">
                    <li className="hover:text-blue-200 cursor-pointer">
                        <Link href="/search">
                            サークルを探す
                        </Link>
                    </li>
                    <li className="hover:text-blue-200 cursor-pointer">
                        <Link href="/events">
                            イベント一覧
                        </Link>
                    </li>
                    <li className="hover:text-blue-200 cursor-pointer">
                        サークルを掲載する
                    </li>
                </ul>
            </div>
        </header>
    );
}