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
            homebrewのインストール
          </li>
        </ol>
      </nav>

      <div>
        <h1>homebrewのインストール</h1>
        <p>
          homebrewとはMac OS
          Xにコマンドを1回打つだけでアプリケーションを導入できるようにするツールです。
        </p>
        <p>
          後ほど利用する、rbenvというrubyを管理するためのアプリケーションをインストールするために利用します。
        </p>
        <h2>手順</h2>
        <p>[ターミナル] を立ち上げます。</p>
        <StaticImage src="../../../../images/terminal.png" />
        <p>ターミナルに、以下のように入力して[Enter]キーを押します。</p>
        <p>
          <code>
            % ruby -e &quot;$(curl -fsSL
            https://raw.github.com/Homebrew/homebrew/go/install)&quot;
          </code>
        </p>
        <p>&nbsp;</p>
        <p>
          いくつか、インストール中に質問を聞かれるので、適切に回答していきます。
        </p>
        <p>
          途中、時分のパスワード入力を求められるので、入力してEnterを押します。
        </p>
        <p>&nbsp;</p>
        <p>最後の方に、</p>
        <code>Installation successful!</code>
        <p>と表示されたら完了です。</p>
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
