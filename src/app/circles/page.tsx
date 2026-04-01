import Header from "../components/layout/Header";
import CircleCard from "../components/CircleCard";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "サークル一覧",
    description: "インカレサーチに掲載中のインカレサークル一覧。活動内容や雰囲気をチェックして、あなたにぴったりのサークルを見つけよう。",
    openGraph: {
        title: "サークル一覧 | インカレサーチ",
        description: "インカレサーチに掲載中のインカレサークル一覧。活動内容や雰囲気をチェックして、あなたにぴったりのサークルを見つけよう。",
    },
};

export default function Search() {
    return (
        <div className="min-h-screen bg-gray-50">
            <Header />
            <section className="max-w-6xl mx-auto px-6 py-10">
                <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8">
                    インカレサークル一覧
                </h1>
                <CircleCard />
            </section>
        </div>
    );
}