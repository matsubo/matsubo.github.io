import * as React from "react"
import { graphql } from "gatsby"
import { Link } from "gatsby-plugin-react-i18next"

import Layout from "../../../../components/layout"
import { Seo } from "../../../../components/seo"
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
            <li>Rubyのインストール</li>
          </ul>
        </div>
      </div>
    </div>

    <div className="container mx-auto px-4 py-12 max-w-4xl">
      {/* Header */}
      <div className="mb-12">
        <div className="flex items-center gap-3 mb-4">
          <div className="badge badge-primary badge-lg">Step 4</div>
          <h1 className="text-5xl font-bold flex items-center gap-3">
            <CommandLineIcon className="h-12 w-12 text-primary" />
            Rubyのインストール
          </h1>
        </div>
        <div className="prose max-w-none">
          <p className="text-lg">Ruby自体をインストールします。</p>
        </div>
      </div>

      {/* Instructions */}
      <section className="space-y-8">
        <h2 className="text-3xl font-bold mb-6">手順</h2>

        {/* Step 1: Install Ruby */}
        <div className="card bg-base-100 shadow-lg">
          <div className="card-body">
            <h3 className="card-title text-2xl mb-4">
              <div className="badge badge-primary">1</div>
              Rubyをインストール
            </h3>
            <p className="mb-4">ターミナルで以下のコマンドを実行します：</p>
            <div className="mockup-code">
              <pre data-prefix="%">
                <code>rbenv install 2.0.0-p353</code>
              </pre>
            </div>
            <div className="alert alert-info mt-4">
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
                <p className="font-semibold mb-2">バージョンの確認</p>
                <code className="text-sm">rbenv install -l</code>
                と入力するとインストール可能なバージョンの一覧が表示されます。2.0.0-p353は2014年1月で最新の安定バージョンとなります。
              </div>
            </div>
          </div>
        </div>

        {/* Step 2: Verify Installation */}
        <div className="card bg-base-100 shadow-lg">
          <div className="card-body">
            <h3 className="card-title text-2xl mb-4">
              <div className="badge badge-primary">2</div>
              インストールの確認
            </h3>
            <p className="mb-4">
              インストールが完了したら、以下のコマンドで確認します：
            </p>
            <div className="mockup-code">
              <pre data-prefix="%">
                <code>rbenv versions</code>
              </pre>
              <pre data-prefix=" " className="text-success">
                <code>* system (set by /Users/matsu/.rbenv/version)</code>
              </pre>
              <pre data-prefix=" " className="text-success">
                <code> 2.0.0-p353</code>
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
              <span>
                <code>rbenv install</code>
                で指定したバージョン名が表示されていたら、rbenvでのrubyインストールが成功です。
              </span>
            </div>
          </div>
        </div>

        {/* Step 3: Set Global Ruby */}
        <div className="card bg-base-100 shadow-lg">
          <div className="card-body">
            <h3 className="card-title text-2xl mb-4">
              <div className="badge badge-primary">3</div>
              利用するRubyバージョンを指定
            </h3>
            <p className="mb-4">
              rbenvでインストールしたrubyを利用する設定を行います：
            </p>
            <div className="mockup-code">
              <pre data-prefix="%">
                <code>rbenv global 2.0.0-p353</code>
              </pre>
            </div>
            <p className="mt-4">
              再度、<code className="badge badge-outline">rbenv versions</code>
              と入力して指定したrubyのバージョンの横にアスタリスクが表示されていれば問題ありません。
            </p>
          </div>
        </div>

        {/* Step 4: Rehash */}
        <div className="card bg-base-100 shadow-lg">
          <div className="card-body">
            <h3 className="card-title text-2xl mb-4">
              <div className="badge badge-primary">4</div>
              環境設定を更新
            </h3>
            <p className="mb-4">現在利用するrubyの環境設定を更新します：</p>
            <div className="mockup-code">
              <pre data-prefix="%">
                <code>rbenv rehash</code>
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
              <span>何も表示されなければ成功です。</span>
            </div>
          </div>
        </div>

        {/* Step 5: Aptana Configuration */}
        <div className="card bg-base-100 shadow-lg">
          <div className="card-body">
            <h3 className="card-title text-2xl mb-4">
              <div className="badge badge-primary">5</div>
              Aptana用の設定ファイル作成
            </h3>
            <p className="mb-4">
              Aptana（後述）からrbenvで利用したRubyを利用するための設定ファイルを作成します：
            </p>
            <div className="mockup-code">
              <pre data-prefix="%">
                <code>
                  echo 'export PATH="$HOME/.rbenv/bin:$PATH"' &gt;&gt;
                  ~/.aptanarc
                </code>
              </pre>
              <pre data-prefix="%">
                <code>echo 'eval "$(rbenv init -)"' &gt;&gt; ~/.aptanarc</code>
              </pre>
            </div>
          </div>
        </div>

        {/* References */}
        <div className="card bg-base-200 shadow-lg">
          <div className="card-body">
            <h3 className="card-title text-2xl mb-4">
              参考：rbenvのその他のオプション
            </h3>
            <dl className="space-y-4">
              <div>
                <dt className="font-bold mb-2">
                  rbenvでRubyのバージョンを指定する方法
                </dt>
                <dd>
                  <a
                    href="https://qiita.com/makoto_kw/items/cc73b628c9ef039f6e6f"
                    className="link link-primary break-all"
                    target="_blank"
                    rel="noreferrer"
                  >
                    https://qiita.com/makoto_kw/items/cc73b628c9ef039f6e6f
                  </a>
                </dd>
              </div>
              <div className="divider"></div>
              <div>
                <dt className="font-bold mb-2">
                  Mountain Lion環境への「rbenv」のインストール手順 + 設定方法
                </dt>
                <dd>
                  <a
                    href="https://qiita.com/skinoshita/items/2cf0c27a6ff4f0602568"
                    className="link link-primary break-all"
                    target="_blank"
                    rel="noreferrer"
                  >
                    https://qiita.com/skinoshita/items/2cf0c27a6ff4f0602568
                  </a>
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </section>

      {/* Navigation */}
      <div className="flex justify-between items-center mt-12 pt-6 border-t border-base-300">
        <Link to="../rbenv" className="btn btn-ghost gap-2">
          <ChevronLeftIcon className="h-5 w-5" />
          前のステップ
        </Link>
        <Link to="../ror" className="btn btn-primary gap-2">
          次のステップへ
          <ChevronLeftIcon className="h-5 w-5 rotate-180" />
        </Link>
      </div>
    </div>
  </Layout>
)

export default AboutPage

export const Head = () => (
  <Seo title="Rubyのインストール - Ruby on Rails Install Guide" />
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
