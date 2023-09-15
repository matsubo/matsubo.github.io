import * as React from "react"
import { Link } from "gatsby"

import Layout from "../../../../components/layout"
import { Seo } from "../../../../components/seo"
import { StaticImage } from "gatsby-plugin-image"

const AboutPage = () => (
  <Layout>
    <div className="container my-2">
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
        <div>Aptana Studio統合開発環境です。</div>
        <h2>手順</h2>
        <div>以下のサイトへアクセスし、Aptana Studio 3をダウンロードします。</div>
        <div>
          <a
            href="https://www.aptana.com/products/studio3/download"
            target="_blank"
            rel="noreferrer"
            className="btn btn-lg btn-info"
          >
            <i className="bi bi-box-arrow-up-right"></i>
            https://www.aptana.com/products/studio3/download
          </a>
        </div>
        <div>
          ダウンロードしたファイルを開いて、[Aptana Studio 3]
          ディレクトリをアプリケーションフォルダへドラッグアンドドロップします。
        </div>
        <div>
          <StaticImage src="../../../../images/aptana_move.png" alt="" />
        </div>
        <div>
          Spotlightまたは、[アプリケーション] ディレクトリから[Aptana Studio 3]を起動します。
        </div>
        <div>
          <StaticImage src="../../../../images/aptana_start.png" alt="" />
        </div>
        <div>以下のような画面が表示されればインストールは成功しています。</div>
        <div>
          <StaticImage
            src="../../../../images/aptana_window.png"
            alt="aptana for windows"
          />
        </div>
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
