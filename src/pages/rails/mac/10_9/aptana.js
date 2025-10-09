import * as React from "react"
import { graphql } from "gatsby"
import { Link } from "gatsby-plugin-react-i18next"

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
            <li>Aptana Studioのインストール</li>
          </ul>
        </div>
      </div>
    </div>

    <div className="container mx-auto px-4 py-12 max-w-4xl">
      {/* Header */}
      <div className="mb-12">
        <div className="flex items-center gap-3 mb-4">
          <div className="badge badge-secondary badge-lg">Aptana - Step 2</div>
          <h1 className="text-5xl font-bold flex items-center gap-3">
            <CodeBracketIcon className="h-12 w-12 text-secondary" />
            Aptana Studioのインストール
          </h1>
        </div>
        <div className="prose max-w-none">
          <p className="text-lg">
            Aptana Studioは統合開発環境（IDE）です。Ruby on
            Railsの開発を効率的に行うことができます。
          </p>
        </div>
      </div>

      {/* Instructions */}
      <section className="space-y-8">
        <h2 className="text-3xl font-bold mb-6">手順</h2>

        {/* Step 1: Download */}
        <div className="card bg-base-100 shadow-lg">
          <div className="card-body">
            <h3 className="card-title text-2xl mb-4">
              <div className="badge badge-secondary">1</div>
              Aptana Studio 3をダウンロード
            </h3>
            <p className="mb-4">
              以下のサイトへアクセスし、Aptana Studio 3をダウンロードします：
            </p>
            <a
              href="https://www.aptana.com/products/studio3/download"
              target="_blank"
              rel="noreferrer"
              className="btn btn-lg btn-secondary gap-2"
            >
              <ArrowDownTrayIcon className="h-6 w-6" />
              Aptana公式サイトへ
            </a>
          </div>
        </div>

        {/* Step 2: Install */}
        <div className="card bg-base-100 shadow-lg">
          <div className="card-body">
            <h3 className="card-title text-2xl mb-4">
              <div className="badge badge-secondary">2</div>
              アプリケーションフォルダへ移動
            </h3>
            <p className="mb-4">
              ダウンロードしたファイルを開いて、
              <code className="badge badge-outline">Aptana Studio 3</code>
              ディレクトリをアプリケーションフォルダへドラッグアンドドロップします。
            </p>
            <div className="bg-base-200 p-4 rounded-lg">
              <StaticImage
                src="../../../../images/aptana_move.png"
                alt="Aptana move to Applications"
                placeholder="none"
                quality={95}
                className="rounded-lg shadow-md"
              />
            </div>
          </div>
        </div>

        {/* Step 3: Launch */}
        <div className="card bg-base-100 shadow-lg">
          <div className="card-body">
            <h3 className="card-title text-2xl mb-4">
              <div className="badge badge-secondary">3</div>
              Aptana Studio 3を起動
            </h3>
            <p className="mb-4">
              Spotlightまたは、
              <code className="badge badge-outline">アプリケーション</code>
              ディレクトリから
              <code className="badge badge-outline">Aptana Studio 3</code>
              を起動します。
            </p>
            <div className="bg-base-200 p-4 rounded-lg">
              <StaticImage
                src="../../../../images/aptana_start.png"
                alt="Aptana start"
                placeholder="none"
                quality={95}
                className="rounded-lg shadow-md"
              />
            </div>
          </div>
        </div>

        {/* Step 4: Verify */}
        <div className="card bg-success text-success-content shadow-lg">
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
              インストール完了の確認
            </h3>
            <p className="text-lg mb-4">
              以下のような画面が表示されればインストールは成功しています：
            </p>
            <div className="bg-base-100 p-4 rounded-lg">
              <StaticImage
                src="../../../../images/aptana_window.png"
                alt="Aptana window"
                placeholder="none"
                quality={95}
                className="rounded-lg shadow-md"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Navigation */}
      <div className="flex justify-between items-center mt-12 pt-6 border-t border-base-300">
        <Link to="../java" className="btn btn-ghost gap-2">
          <ChevronLeftIcon className="h-5 w-5" />
          前のステップ
        </Link>
        <Link to="../aptana_check" className="btn btn-secondary gap-2">
          次のステップへ
          <ChevronLeftIcon className="h-5 w-5 rotate-180" />
        </Link>
      </div>
    </div>
  </Layout>
)

export default AboutPage

export const Head = () => (
  <Seo title="Aptana Studioのインストール - Ruby on Rails Install Guide" />
)

export const query = graphql`
  query {
    locales: allLocale {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
  }
`
