import * as React from "react"
import { Link } from "gatsby"

import Layout from "../../../../components/layout"
import { Seo } from "../../../../components/seo"
import { StaticImage } from "gatsby-plugin-image"
import {
  ChevronLeftIcon,
  CodeBracketIcon,
  ArrowDownTrayIcon,
} from "@heroicons/react/24/outline"

const AboutPage = () => (
  <Layout>
    {/* Breadcrumb */}
    <div className="bg-base-200 py-4">
      <div className="container mx-auto px-4">
        <div className="breadcrumbs text-sm">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/rails/">Ruby on Rails install</Link>
            </li>
            <li>
              <Link to="/rails/mac/">Mac OS X</Link>
            </li>
            <li>
              <Link to="/rails/mac/10_9/">Mac OS X 10.9</Link>
            </li>
            <li>Javaのインストール</li>
          </ul>
        </div>
      </div>
    </div>

    <div className="container mx-auto px-4 py-12 max-w-4xl">
      {/* Header */}
      <div className="mb-12">
        <div className="flex items-center gap-3 mb-4">
          <div className="badge badge-secondary badge-lg">Aptana - Step 1</div>
          <h1 className="text-5xl font-bold flex items-center gap-3">
            <CodeBracketIcon className="h-12 w-12 text-secondary" />
            Javaのインストール
          </h1>
        </div>
        <div className="alert alert-info">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="stroke-current shrink-0 w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            ></path>
          </svg>
          <span>
            AptanaはJavaに依存しているため、Javaがインストールされていない場合は、Javaをインストールします。
          </span>
        </div>
      </div>

      {/* Instructions */}
      <section className="space-y-8">
        {/* Check Java */}
        <div>
          <h2 className="text-3xl font-bold mb-6">
            Javaがインストールされているか確認
          </h2>
          <div className="card bg-base-100 shadow-lg">
            <div className="card-body">
              <p className="mb-4">ターミナルで以下のコマンドを実行します：</p>
              <div className="mockup-code">
                <pre data-prefix="%">
                  <code>java -version</code>
                </pre>
              </div>
              <p className="mt-4">
                以下のようにバージョン番号が表示されれば、既にインストールされているのでここでJavaのインストールをする必要は有りません。
              </p>
              <div className="bg-base-200 p-4 rounded-lg mt-4">
                <StaticImage
                  src="../../../../images/java.png"
                  alt="java version"
                  placeholder="none"
                  quality={95}
                  className="rounded-lg shadow-md"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Download and Install */}
        <div>
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
            <ArrowDownTrayIcon className="h-8 w-8 text-secondary" />
            Javaのダウンロードとインストール
          </h2>

          {/* Step 1: Download */}
          <div className="card bg-base-100 shadow-lg mb-6">
            <div className="card-body">
              <h3 className="card-title text-2xl mb-4">
                <div className="badge badge-secondary">1</div>
                Javaをダウンロード
              </h3>
              <p className="mb-4">
                以下のサイトへアクセスし、Javaをダウンロードします：
              </p>
              <a
                href="http://java.com/ja/download/"
                target="_blank"
                rel="noreferrer"
                className="btn btn-lg btn-secondary gap-2"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                  />
                </svg>
                Java公式サイトへ
              </a>
              <p className="mt-4">
                「同意して無料ダウンロードを開始」ボタンをクリックすると、ダウンロードが開始されるためデスクトップなどの適当な場所へファイルを保存します。
              </p>
              <div className="bg-base-200 p-4 rounded-lg mt-4">
                <StaticImage
                  src="../../../../images/java_download.png"
                  alt="java download"
                  placeholder="none"
                  quality={95}
                  className="rounded-lg shadow-md"
                />
              </div>
            </div>
          </div>

          {/* Step 2: Install */}
          <div className="card bg-base-100 shadow-lg">
            <div className="card-body">
              <h3 className="card-title text-2xl mb-4">
                <div className="badge badge-secondary">2</div>
                インストールを実行
              </h3>
              <p className="mb-4">
                保存したファイルを開き、表示された内容通りに進んで行けばインストールを完了できます。
              </p>
              <div className="space-y-6">
                <div>
                  <p className="font-semibold mb-2">インストーラーを起動</p>
                  <div className="bg-base-200 p-4 rounded-lg">
                    <StaticImage
                      src="../../../../images/java_installer.png"
                      alt="java installer"
                      placeholder="none"
                      quality={95}
                      className="rounded-lg shadow-md"
                    />
                  </div>
                </div>
                <div className="divider"></div>
                <div>
                  <p className="font-semibold mb-2">ライセンス契約に同意</p>
                  <div className="bg-base-200 p-4 rounded-lg">
                    <StaticImage
                      src="../../../../images/java_agreement.png"
                      alt="java agreement"
                      placeholder="none"
                      quality={95}
                      className="rounded-lg shadow-md"
                    />
                  </div>
                </div>
                <div className="divider"></div>
                <div>
                  <p className="font-semibold mb-2">
                    セキュリティ警告（必要に応じて）
                  </p>
                  <div className="bg-base-200 p-4 rounded-lg">
                    <StaticImage
                      src="../../../../images/java_warning.png"
                      alt="java warning"
                      placeholder="none"
                      quality={95}
                      className="rounded-lg shadow-md"
                    />
                  </div>
                </div>
                <div className="divider"></div>
                <div>
                  <p className="font-semibold mb-2">インストール完了</p>
                  <div className="bg-base-200 p-4 rounded-lg">
                    <StaticImage
                      src="../../../../images/java_installed.png"
                      alt="java installed"
                      placeholder="none"
                      quality={95}
                      className="rounded-lg shadow-md"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Step 3: Verify */}
          <div className="card bg-success text-success-content shadow-lg mt-6">
            <div className="card-body">
              <h3 className="card-title text-2xl mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-8 h-8"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                インストールの確認
              </h3>
              <p className="text-lg mb-4">
                再度、以下を入力してバージョン番号が表示されるかを確認します：
              </p>
              <div className="mockup-code bg-base-100 text-base-content">
                <pre data-prefix="%">
                  <code>java -version</code>
                </pre>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation */}
      <div className="flex justify-between items-center mt-12 pt-6 border-t border-base-300">
        <Link to="../ror" className="btn btn-ghost gap-2">
          <ChevronLeftIcon className="h-5 w-5" />
          前のステップ
        </Link>
        <Link to="../aptana" className="btn btn-secondary gap-2">
          次のステップへ
          <ChevronLeftIcon className="h-5 w-5 rotate-180" />
        </Link>
      </div>
    </div>
  </Layout>
)

export default AboutPage

export const Head = () => (
  <Seo title="Javaのインストール - Ruby on Rails Install Guide" />
)
