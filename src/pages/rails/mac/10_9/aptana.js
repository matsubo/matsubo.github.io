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
            Aptanaのインストール
          </li>
        </ol>
      </nav>

      <div>
        <h1>
          <span className="active">Aptana Studio</span>のインストール
        </h1>
        <p>Aptana Studio統合開発環境です。</p>
        <h2>手順</h2>
        <p>以下のサイトへアクセスし、Aptana Studio 3をダウンロードします。</p>
        <p>
          <a
            href="http://www.aptana.com/products/studio3/download"
            target="_blank"
            className="btn btn-lg btn-info"
          >
            <span className="glyphicon glyphicon-link"></span>
            http://www.aptana.com/products/studio3/download{" "}
          </a>
        </p>
        <p>
          ダウンロードしたファイルを開いて、[Aptana Studio 3]
          ディレクトリをアプリケーションフォルダへドラッグアンドドロップします。
        </p>
        <p>
          <StaticImage
            src="../../../../images/aptana_move.png"
            alt=""
            width="268"
            height="276"
          />
        </p>
        <p>
          Spotlightまたは、[アプリケーション] ディレクトリから[Aptana Studio
          3]を起動します。
        </p>
        <p>
          <StaticImage
            src="../../../../images/aptana_start.png"
            alt=""
            width="336"
            height="288"
          />
        </p>
        <p>以下のような画面が表示されればインストールは成功しています。</p>
        <p>
          <StaticImage
            src="../../../../images/aptana_window.png"
            alt=""
            width="527"
            height="436"
          />
        </p>
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
