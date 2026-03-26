import Header from "./components/layout/Header";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Header />
      <div className="text-center justify-center items-center bg-yellow-300">
        <h1 className="text-4xl font-bold  w-fit mx-auto rounded-lg p-4 mt-16">
          インカレサーチは<br />
          インカレ専門のサークル紹介サイトです
        </h1>
        <Link href="/search" className="inline-block px-8 py-3 text-2xl font-bold text-white bg-blue-600 rounded-full hover:bg-blue-700 transition-colors">サークルを探す</Link>
      </div>
    </div>
  );
}