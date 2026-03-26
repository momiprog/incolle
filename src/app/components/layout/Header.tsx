import Link from "next/link";

export default function Header() {
    return (
        <header>
            {/* 1. h1 と ul を横並びにし、両端に配置する */}
            <div className="flex items-center justify-between bg-blue-600 px-4 py-3 shadow-md">

                {/* 背景色などは親のdivに移動させたので、h1は文字のスタイルのみにしました */}
                <h1>
                    <Link href="/" className="text-2xl font-bold text-white">インカレサーチ</Link>
                </h1>


            </div>
        </header>
    );
}