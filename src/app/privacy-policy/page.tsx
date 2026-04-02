import Header from "../components/layout/Header";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "プライバシーポリシー",
    description: "インカレサーチのプライバシーポリシー。個人情報の取り扱いについてご説明します。",
};

export default function PrivacyPolicy() {
    return (
        <div className="min-h-screen bg-gray-50">
            <Header />
            <main className="max-w-4xl mx-auto px-6 py-16">
                <div className="bg-white rounded-2xl shadow-sm p-8 md:p-12">
                    <h1 className="text-3xl font-bold text-gray-900 mb-2">プライバシーポリシー</h1>
                    <p className="text-sm text-gray-400 mb-10">最終更新日: 2026年4月2日</p>

                    <div className="prose prose-gray max-w-none text-gray-700 space-y-8">
                        {/* 前文 */}
                        <p>
                            インカレサーチ（以下「当サイト」といいます）は、ユーザーの皆さまの個人情報の保護を重要視し、以下のとおりプライバシーポリシーを定めます。
                        </p>

                        {/* 1. 収集する情報 */}
                        <section>
                            <h2 className="text-xl font-bold text-gray-900 mb-3">1. 収集する情報</h2>
                            <p>当サイトでは、以下の情報を取得する場合があります。</p>
                            <ul className="list-disc pl-6 space-y-1 mt-2">
                                <li>お問い合わせ時にご入力いただく氏名、メールアドレス、お問い合わせ内容</li>
                                <li>サークル掲載申請時にご提供いただくサークル名、活動内容、SNSアカウント等の情報</li>
                                <li>アクセスログ（IPアドレス、ブラウザの種類、アクセス日時など）</li>
                            </ul>
                        </section>

                        {/* 2. 利用目的 */}
                        <section>
                            <h2 className="text-xl font-bold text-gray-900 mb-3">2. 利用目的</h2>
                            <p>取得した情報は、以下の目的で利用いたします。</p>
                            <ul className="list-disc pl-6 space-y-1 mt-2">
                                <li>サークル情報の掲載およびサイト運営のため</li>
                                <li>お問い合わせへの対応のため</li>
                                <li>サイトの利用状況の分析・改善のため</li>
                                <li>重要なお知らせやご連絡のため</li>
                            </ul>
                        </section>

                        {/* 3. 第三者への提供 */}
                        <section>
                            <h2 className="text-xl font-bold text-gray-900 mb-3">3. 第三者への提供</h2>
                            <p>
                                当サイトは、法令に基づく場合を除き、ご本人の同意なく個人情報を第三者に提供することはありません。
                            </p>
                        </section>

                        {/* 4. アクセス解析ツール */}
                        <section>
                            <h2 className="text-xl font-bold text-gray-900 mb-3">4. アクセス解析ツールについて</h2>
                            <p>
                                当サイトでは、サイトの利用状況を把握するためにアクセス解析ツールを使用する場合があります。これらのツールは、トラフィックデータの収集のためにCookieを使用することがあります。このデータは匿名で収集されており、個人を特定するものではありません。
                            </p>
                        </section>

                        {/* 5. 掲載情報について */}
                        <section>
                            <h2 className="text-xl font-bold text-gray-900 mb-3">5. 掲載情報について</h2>
                            <p>
                                当サイトに掲載されているサークル名、活動内容、SNSアカウント等の情報は、各サークルの承諾を得た上で掲載しています。掲載情報の修正・削除をご希望の場合は、お問い合わせよりご連絡ください。
                            </p>
                        </section>

                        {/* 6. 個人情報の管理 */}
                        <section>
                            <h2 className="text-xl font-bold text-gray-900 mb-3">6. 個人情報の管理</h2>
                            <p>
                                当サイトは、取得した個人情報の漏洩、紛失、改ざん等を防止するため、適切な安全管理措置を講じます。
                            </p>
                        </section>

                        {/* 7. ポリシーの変更 */}
                        <section>
                            <h2 className="text-xl font-bold text-gray-900 mb-3">7. プライバシーポリシーの変更</h2>
                            <p>
                                当サイトは、必要に応じて本プライバシーポリシーを変更することがあります。変更後のプライバシーポリシーは、当ページに掲載した時点から効力を生じるものとします。
                            </p>
                        </section>

                        {/* 8. お問い合わせ */}
                        <section>
                            <h2 className="text-xl font-bold text-gray-900 mb-3">8. お問い合わせ</h2>
                            <p>
                                本ポリシーに関するお問い合わせは、下記メールアドレスよりご連絡ください。
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
