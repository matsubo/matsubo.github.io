import * as React from "react"
import { graphql } from "gatsby"
import { Link } from "gatsby-plugin-react-i18next"

import Layout from "../../../../components/layout"
import { Seo } from "../../../../components/seo"
import {
  ChevronLeftIcon,
  CommandLineIcon,
  ClockIcon,
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
            <li>Command Line Toolsのインストール</li>
          </ul>
        </div>
      </div>
    </div>

    <div className="container mx-auto px-4 py-12 max-w-4xl">
      {/* Header */}
      <div className="mb-12">
        <div className="flex items-center gap-3 mb-4">
          <div className="badge badge-primary badge-lg">Step 1</div>
          <h1 className="text-5xl font-bold flex items-center gap-3">
            <CommandLineIcon className="h-12 w-12 text-primary" />
            Command Line Toolsのインストール
          </h1>
        </div>
        <div className="alert alert-warning mb-6">
          <ClockIcon className="h-6 w-6" />
          <div>
            <p className="font-semibold">所要時間: 約30分</p>
            <p>
              このステップは時間がかかります。余裕を持って作業してください。
            </p>
          </div>
        </div>
        <div className="prose max-w-none">
          <p className="text-lg">
            Command Line Toolsとは、Mac
            OS上でソフトウェアをコンパイルするために必要なライブラリやコマンドが収録されたツールセットです。
          </p>
          <p className="text-lg">
            一般的に、Mac
            OS上でソフトウェア開発を行う場合は必要になるツールです。
          </p>
        </div>
      </div>

      {/* Instructions */}
      <section className="space-y-8">
        <h2 className="text-3xl font-bold mb-6">手順</h2>

        {/* External Reference */}
        <div className="card bg-base-100 shadow-lg">
          <div className="card-body">
            <h3 className="card-title text-2xl mb-4">インストール方法</h3>
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
              <div>
                <p className="mb-2">
                  以下のWebサイトを参照し、Command Line
                  Toolsをダウンロードしてインストールしてください：
                </p>
                <a
                  href="http://osksn2.hep.sci.osaka-u.ac.jp/~taku/osx/install_xcode.html"
                  className="link link-primary font-semibold break-all"
                  target="_blank"
                  rel="noreferrer"
                >
                  http://osksn2.hep.sci.osaka-u.ac.jp/~taku/osx/install_xcode.html
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Important Notes */}
        <div className="card bg-warning text-warning-content shadow-lg">
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
                  d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"
                />
              </svg>
              重要な注意事項
            </h3>
            <ul className="list-disc list-inside space-y-2 text-lg">
              <li>インストールには30分程度かかります</li>
              <li>
                ダウンロードサイズが大きいため、安定したインターネット接続が必要です
              </li>
              <li>インストール中は他の作業を避けてください</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Navigation */}
      <div className="flex justify-between items-center mt-12 pt-6 border-t border-base-300">
        <Link to="../" className="btn btn-ghost gap-2">
          <ChevronLeftIcon className="h-5 w-5" />
          ステップ一覧に戻る
        </Link>
        <Link to="../homebrew" className="btn btn-primary gap-2">
          次のステップへ
          <ChevronLeftIcon className="h-5 w-5 rotate-180" />
        </Link>
      </div>
    </div>
  </Layout>
)

export default AboutPage

export const Head = () => (
  <Seo title="Command Line Toolsのインストール - Ruby on Rails Install Guide" />
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
