import Link from "next/link";

export default function Header() {
    return (
        <header className="sticky top-0 z-50 backdrop-blur-md bg-blue-600/95 shadow-lg">
            <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
                <h1>
                    <Link
                        href="/"
                        className="text-2xl font-extrabold text-white tracking-tight hover:opacity-90 transition-opacity"
                    >
                        インカレサーチ
                    </Link>
                </h1>
            </div>
        </header>
    );
}