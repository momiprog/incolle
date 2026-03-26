import Header from "../components/layout/Header";
import CircleCard from "../components/CircleCard";

export default function Search() {
    return (
        <div>
            <Header />
            <p>サークルを探す</p>
            <h1>サークル一覧</h1>
            <CircleCard />
        </div>
    );
}