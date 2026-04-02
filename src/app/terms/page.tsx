import Header from "../components/layout/Header";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "利用規約",
    description: "インカレサーチの利用規約。当サイトのご利用にあたっての注意事項をご確認ください。",
};

export default function Terms() {
    return (
        <div className="min-h-screen bg-gray-50">
            <Header />
            <main className="max-w-4xl mx-auto px-6 py-16">
                <div className="bg-white rounded-2xl shadow-sm p-8 md:p-12">
                    <h1 className="text-3xl font-bold text-gray-900 mb-2">利用規約</h1>
                    <p className="text-sm text-gray-400 mb-10">最終更新日: 2026年4月2日</p>

                    <div className="prose prose-gray max-w-none text-gray-700 space-y-8">
                        {/* 前文 */}
                        <p>
                            この利用規約（以下「本規約」といいます）は、インカレサーチ（以下「当サイト」といいます）の利用に関する条件を定めるものです。当サイトをご利用いただく場合、本規約に同意したものとみなします。
                        </p>

                        {/* 1. サービス内容 */}
                        <section>
                            <h2 className="text-xl font-bold text-gray-900 mb-3">1. サービス内容</h2>
                            <p>
                                当サイトは、インカレサークル（複数大学の学生が所属するサークル）の情報を紹介する無料のウェブサイトです。サークルの活動内容、新歓イベント情報、SNSアカウント等を掲載しています。
                            </p>
                        </section>

                        {/* 2. 掲載情報の正確性 */}
                        <section>
                            <h2 className="text-xl font-bold text-gray-900 mb-3">2. 掲載情報の正確性</h2>
                            <p>
                                当サイトに掲載される情報は、各サークルから提供された内容に基づいています。当サイトは情報の正確性、完全性、最新性について可能な限り努力しますが、これらを保証するものではありません。
                            </p>
                            <p className="mt-2">
                                掲載されている活動日程・場所・費用などは変更される場合がありますので、最新情報は各サークルのSNS等で直接ご確認ください。
                            </p>
                        </section>

                        {/* 3. 免責事項 */}
                        <section>
                            <h2 className="text-xl font-bold text-gray-900 mb-3">3. 免責事項</h2>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>当サイトを通じてアクセスした外部サイト（各サークルのSNS・ウェブサイト等）の内容や安全性について、当サイトは一切の責任を負いません。</li>
                                <li>当サイトの掲載情報をもとに行った行動により生じた損害について、当サイトは一切の責任を負いません。</li>
                                <li>ユーザーと掲載サークル間で生じたトラブルについて、当サイトは一切の関与・責任を負いません。</li>
                                <li>当サイトは、予告なくサービスの内容を変更・停止することがあります。</li>
                            </ul>
                        </section>

                        {/* 4. 禁止事項 */}
                        <section>
                            <h2 className="text-xl font-bold text-gray-900 mb-3">4. 禁止事項</h2>
                            <p>当サイトの利用にあたり、以下の行為を禁止します。</p>
                            <ul className="list-disc pl-6 space-y-1 mt-2">
                                <li>当サイトの情報を無断で商用利用すること</li>
                                <li>当サイトの運営を妨害する行為</li>
                                <li>虚偽の情報を掲載申請すること</li>
                                <li>その他、法令または公序良俗に反する行為</li>
                            </ul>
                        </section>

                        {/* 5. 著作権 */}
                        <section>
                            <h2 className="text-xl font-bold text-gray-900 mb-3">5. 著作権・知的財産権</h2>
                            <p>
                                当サイトに掲載されている文章、画像、デザイン等のコンテンツの著作権は、当サイト運営者または各サークルに帰属します。無断での転載・複製を禁止します。
                            </p>
                        </section>

                        {/* 6. サークル掲載について */}
                        <section>
                            <h2 className="text-xl font-bold text-gray-900 mb-3">6. サークル掲載について</h2>
                            <p>
                                当サイトへのサークル掲載は、各サークルの代表者からの申請に基づき、当サイト運営者の判断により行われます。掲載内容の修正・削除を希望される場合は、お問い合わせよりご連絡ください。
                            </p>
                        </section>

                        {/* 7. 規約の変更 */}
                        <section>
                            <h2 className="text-xl font-bold text-gray-900 mb-3">7. 規約の変更</h2>
                            <p>
                                当サイトは、必要に応じて本規約を変更することがあります。変更後の利用規約は、当ページに掲載した時点から効力を生じるものとします。
                            </p>
                        </section>

                        {/* 8. お問い合わせ */}
                        <section>
                            <h2 className="text-xl font-bold text-gray-900 mb-3">8. お問い合わせ</h2>
                            <p>
                                本規約に関するお問い合わせは、下記メールアドレスよりご連絡ください。
                            </p>
                            <p className="mt-2">
                                メール: <a href="mailto:info@inkare-search.com" className="text-blue-600 hover:underline">info@inkare-search.com</a>
                            </p>
                        </section>
                    </div>
                </div>
            </main>
        </div>
    );
}
