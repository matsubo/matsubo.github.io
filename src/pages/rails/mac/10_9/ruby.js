import * as React from "react"
import { Link } from "gatsby"

import Layout from "../../../../components/layout"
import { Seo } from "../../../../components/seo"
import { StaticImage } from "gatsby-plugin-image"

const AboutPage = () => (
  <Layout>
    <div className="container my-5">
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link to="/">Home</Link>
          </li>
          <li className="breadcrumb-item">
            <Link to="/rails/">Ruby on Rails install</Link>
          </li>
          <li className="breadcrumb-item">
            <Link to="/rails/mac/">Mac OS X</Link>
          </li>
          <li className="breadcrumb-item">
            <Link to="/rails/mac/10_9/">Mac OS X 10.9</Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            Rubyのインストール
          </li>
        </ol>
      </nav>

      <div>
        <h1>
          <span className="active">Ruby</span>のインストール
        </h1>
        <p>Ruby自体をインストールします。</p>
        <h2>手順</h2>
        <p>[ターミナル] を立ち上げます。</p>
        <p>ターミナルに、以下のように入力して[Enter]キーを押します。</p>
        <pre>
          <code>% rbenv install 2.0.0-p353</code>
        </pre>
        <div className="alert alert-info">
          <code>rbenv install -l</code>
          と入力するとインストール可能なバージョンの一覧が表示されます。2.0.0-p353は2014年1月で最新の安定バージョンとなります。
        </div>
        <p>
          インストールが完了したら、ターミナルに、以下のように入力して[Enter]キーを押します。
        </p>
        <pre>
          <code>
            % rbenv versions * system (set by /Users/matsu/.rbenv/version)
            2.0.0-p353
          </code>
        </pre>
        <p>
          <code>rbenv install</code>
          で指定したバージョン名が表示されていたら、rbenvでのrubyインストールが成功です。
        </p>
        <p>
          次に、rbenvでインストールしたrubyを利用する設定を行います。以下のように入力して、利用するrubyの環境を指定します。
        </p>
        <pre>
          <code>% rbenv global 2.0.0-p353</code>
        </pre>
        <p>
          再度、<code>rbenv versions</code>
          と入力して指定したrubyのバージョンの横にアスタリスクが表示されていれば問題ありません。
        </p>
        <p>
          次に、現在利用するrubyの環境設定を更新するために、
          <br />
          ターミナルに、以下のように入力して[Enter]キーを押します。
        </p>
        <pre>
          <code>% rbenv rehash</code>
        </pre>
        <p>何も表示されなければ成功です。</p>
        <p>
          次に、Aptana（後述）からrbenvで利用したRubyを利用するための設定ファイルを作成します。
        </p>
        <p>ターミナルに、以下のように入力して[Enter]キーを押します。</p>
        <pre>
          <code>
            % echo 'export PATH="$HOME/.rbenv/bin:$PATH"' &gt;&gt; ~/.aptanarc
            <br/>
            % echo 'eval "$(rbenv init -)"' &gt;&gt; ~/.aptanarc
          </code>
        </pre>
        <br />
        <h2>参考：rbenvのその他のオプション</h2>
        <dl>
          <dt>rbenvでRubyのバージョンを指定する方法</dt>
          <dd>
            <a
              href="https://qiita.com/makoto_kw/items/cc73b628c9ef039f6e6f"
              target="_blank"
              rel="noopener"
            >
              https://qiita.com/makoto_kw/items/cc73b628c9ef039f6e6f
            </a>
          </dd>
          <dt>Mountain Lion環境への「rbenv」のインストール手順 + 設定方法</dt>
          <dd>
            <a
              href="https://qiita.com/skinoshita/items/2cf0c27a6ff4f0602568"
              target="_blank"
              rel="noopener"
            >
              https://qiita.com/skinoshita/items/2cf0c27a6ff4f0602568
            </a>
          </dd>
        </dl>
      </div>

      <p className="mt-5">
        <Link to="../" className="btn btn-info">
          <i className="bi bi-chevron-left"></i>
          戻る
        </Link>
      </p>
    </div>
  </Layout>
)

export default AboutPage

export const Head = () => <Seo title="matsubo's public archive on github" />
