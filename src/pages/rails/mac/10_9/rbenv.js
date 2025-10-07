import * as React from "react"
import { Link } from "gatsby"

import Layout from "../../../../components/layout"
import { Seo } from "../../../../components/seo"
import { StaticImage } from "gatsby-plugin-image"
import { ChevronLeftIcon, CommandLineIcon } from "@heroicons/react/24/outline"

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
            <li>rbenvのインストール</li>
          </ul>
        </div>
      </div>
    </div>

    <div className="container mx-auto px-4 py-12 max-w-4xl">
      {/* Header */}
      <div className="mb-12">
        <div className="flex items-center gap-3 mb-4">
          <div className="badge badge-primary badge-lg">Step 3</div>
          <h1 className="text-5xl font-bold flex items-center gap-3">
            <CommandLineIcon className="h-12 w-12 text-primary" />
            rbenvのインストール
          </h1>
        </div>
        <div className="prose max-w-none">
          <p className="text-lg">
            ruby自体を管理するためのアプリケーションをインストールし、設定します。
          </p>
        </div>
      </div>

      {/* Instructions */}
      <section className="space-y-8">
        <h2 className="text-3xl font-bold mb-6">手順</h2>

        {/* Step 1: Install rbenv */}
        <div className="card bg-base-100 shadow-lg">
          <div className="card-body">
            <h3 className="card-title text-2xl mb-4">
              <div className="badge badge-primary">1</div>
              rbenvをインストール
            </h3>
            <p className="mb-4">ターミナルで以下のコマンドを実行します：</p>
            <div className="mockup-code">
              <pre data-prefix="%">
                <code>brew install rbenv ruby-build</code>
              </pre>
            </div>
            <div className="divider">出力例</div>
            <div className="bg-base-200 p-4 rounded-lg">
              <StaticImage
                src="../../../../images/brew_install_rbenv.png"
                alt="rbenv インストール"
                placeholder="none"
                quality={95}
                className="rounded-lg shadow-md"
              />
            </div>
          </div>
        </div>

        {/* Step 2: Configure rbenv */}
        <div className="card bg-base-100 shadow-lg">
          <div className="card-body">
            <h3 className="card-title text-2xl mb-4">
              <div className="badge badge-primary">2</div>
              rbenvの設定を書き込み
            </h3>
            <p className="mb-4">以下のコマンドを順番に実行します：</p>
            <div className="mockup-code">
              <pre data-prefix="%">
                <code>cd</code>
              </pre>
              <pre data-prefix="%">
                <code>
                  echo 'export PATH="$HOME/.rbenv/bin:$PATH"' &gt;&gt;
                  .bash_profile
                </code>
              </pre>
              <pre data-prefix="%">
                <code>
                  echo 'if which rbenv &gt; /dev/null; then eval "$(rbenv init
                  -)"; fi' &gt;&gt; .bash_profile
                </code>
              </pre>
            </div>
          </div>
        </div>

        {/* Step 3: Reload Settings */}
        <div className="card bg-base-100 shadow-lg">
          <div className="card-body">
            <h3 className="card-title text-2xl mb-4">
              <div className="badge badge-primary">3</div>
              設定を再読み込み
            </h3>
            <p className="mb-4">
              以下のコマンドで設定を再読み込みします（上記の設定を行った直後のみ必要）：
            </p>
            <div className="mockup-code">
              <pre data-prefix="%">
                <code>source .bash_profile</code>
              </pre>
            </div>
            <div className="alert alert-success mt-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="stroke-current shrink-0 h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span>何も出力されなければ成功です。</span>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation */}
      <div className="flex justify-between items-center mt-12 pt-6 border-t border-base-300">
        <Link to="../homebrew" className="btn btn-ghost gap-2">
          <ChevronLeftIcon className="h-5 w-5" />
          前のステップ
        </Link>
        <Link to="../ruby" className="btn btn-primary gap-2">
          次のステップへ
          <ChevronLeftIcon className="h-5 w-5 rotate-180" />
        </Link>
      </div>
    </div>
  </Layout>
)

export default AboutPage

export const Head = () => (
  <Seo title="rbenvのインストール - Ruby on Rails Install Guide" />
)
