import Link from "next/link";

export default function Header() {
    return (
        <header className="sticky top-0 z-50 backdrop-blur-md bg-blue-600/95 shadow-lg">
            <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
                <span>
                    <Link
                        href="/"
                        className="text-2xl font-extrabold text-white tracking-tight hover:opacity-90 transition-opacity"
                    >
                        インカレサーチ
                    </Link>
                </span>
                <nav>
                    <ul className="flex items-center gap-4">
                        <li>
                            <Link
                                href="/welcome-event"
                                className="text-sm font-bold bg-pink-500 text-white px-4 py-2 rounded-full shadow-sm hover:bg-pink-400 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 flex items-center gap-1"
                            >
                                新歓イベント一覧
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}