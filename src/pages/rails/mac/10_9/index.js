import * as React from "react"
import { Link } from "gatsby"

import Layout from "../../../../components/layout"
import { Seo } from "../../../../components/seo"

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
          <li className="breadcrumb-item active" aria-current="page">
            Mac OS X 10.9
          </li>
        </ol>
      </nav>

      <div>
        <h1>Mac OS X 10.9 (Marvericks)</h1>
        <p>上から順番にインストールを進めてください。</p>
        <h2 className="mt-3">Ruby on Railsのインストール</h2>
        <div className="list-group">
          <Link to="command_line_tools" className="list-group-item">
            <h4 className="list-group-item-heading">
              1. Command Line Toolsのインストール
            </h4>
            <p className="list-group-item-text">
              Mac OS
              Xでソフトウェア開発を行う際に必要になる一般的なライブラリをインストールします。30分程度かかります。
            </p>
          </Link>
          <Link to="homebrew" className="list-group-item">
            <h4 className="list-group-item-heading">
              2. homebrewのインストール
            </h4>
            <p className="list-group-item-text">
              rubyenvをインストールするためのアプリケーションをインストールします。
            </p>
          </Link>
          <Link to="rbenv" className="list-group-item">
            <h4 className="list-group-item-heading">3. rbenvのインストール</h4>
            <p className="list-group-item-text">
              ruby自体を管理するアプリケーションをインストールし、設定します。
            </p>
          </Link>
          <Link to="ruby" className="list-group-item">
            <h4 className="list-group-item-heading">4. Rubyのインストール</h4>
            <p className="list-group-item-text">
              Ruby自体のインストールを行います。
            </p>
          </Link>
          <Link to="ror" className="list-group-item">
            <h4 className="list-group-item-heading">
              5. Ruby on Railsのインストール
            </h4>
            <p className="list-group-item-text">
              Ruby on Railsのライブラリをインストールします。
            </p>
          </Link>
        </div>

        <h2 className="mt-3">Aptana Studioのインストール</h2>
        <div className="list-group">
          <Link to="java" className="list-group-item">
            <h4 className="list-group-item-heading">1. Javaのインストール</h4>
            <p className="list-group-item-text">
              Aptanaが依存しているJavaをインストールします。
            </p>
          </Link>
          <Link to="aptana" className="list-group-item">
            <h4 className="list-group-item-heading">
              2. Aptana Studioのインストール
            </h4>
            <p className="list-group-item-text">
              Aptana Studioをダウンロードし、インストール、起動します。
            </p>
          </Link>
          <Link to="aptana_check" className="list-group-item">
            <h4 className="list-group-item-heading">
              3. Ruby on Railsの動作確認
            </h4>
            <p className="list-group-item-text">
              Aptana StudioからRuby on
              Railsプロジェクトを作成して動作確認をします。
            </p>
          </Link>
        </div>

        <p className="mt-5">
          <Link to="/rails/mac/" className="btn btn-info">
            <i className="bi bi-chevron-left"></i>
            戻る
          </Link>
        </p>
      </div>
    </div>
  </Layout>
)

export default AboutPage

export const Head = () => <Seo title="matsubo's public archive on github" />
