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
            rbenvのインストール
          </li>
        </ol>
      </nav>

      <div>
        <h1>
          <span className="active">rbenv</span>のインストール
        </h1>

        <p>
          ruby自体を管理するためのアプリケーションをインストールし、設定します。
        </p>
        <h2>手順</h2>
        <p>[ターミナル] を立ち上げます。</p>
        <p>ターミナルに、以下のように入力して[Enter]キーを押します。</p>
        <p>
          <br />
          出力例：
        </p>
        <p>
          <StaticImage
            src="../../../../images/brew_install_rbenv.png"
            alt="rbenv"
          />
        </p>

        <p>次に、rbenvの設定を書き込みます。</p>
        <pre>
          <code>
            % cd % echo 'export PATH=&quot;$HOME/.rbenv/bin:$PATH&quot;'
            &gt;&gt; .bash_profile % echo 'if which rbenv &gt; /dev/null; then
            eval &quot;$(rbenv init -)&quot;; fi' &gt;&gt; .bash_profile
          </code>
        </pre>
        <p>
          以下のコマンドを入力して、上記の設定を再読み込みします。
          <br />
          (上記の設定を行った直後のみ必要です）
        </p>
        <pre>
          <code>% source .bash_profile</code>
        </pre>
        <p>何も出力されなければ成功です。 </p>
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
