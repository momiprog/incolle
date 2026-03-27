import Header from "../components/layout/Header";
import CircleCard from "../components/CircleCard";

export default function Search() {
    return (
        <div className="min-h-screen bg-gray-50">
            <Header />
            <section className="max-w-6xl mx-auto px-6 py-10">
                <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8">
                    サークル一覧
                </h1>
                <CircleCard />
            </section>
        </div>
    );
}