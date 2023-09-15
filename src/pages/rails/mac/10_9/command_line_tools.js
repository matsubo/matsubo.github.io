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
          <li className="breadcrumb-item">
            <Link to="/rails/mac/10_9/">Mac OS X 10.9</Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            Command Line Toolsのインストール
          </li>
        </ol>
      </nav>

      <div>
        <h1>Command Line Toolsのインストール</h1>
        <p>
          Command Line Toolsとは、Mac
          OS上でソフトウェアをコンパイルするために必要なライブラリやコマンドが収録されたライブラリです。
        </p>
        <p>
          一般的に、Mac OS上でソフトウェア開発を行う場合は必要になるツールです。
        </p>
        <h2 className="mt-3">手順</h2>
        <p>2014/1/16更新：後日、詳細を書きます。</p>
        <p>
          <a href="http://osksn2.hep.sci.osaka-u.ac.jp/~taku/osx/install_xcode.html">
            http://osksn2.hep.sci.osaka-u.ac.jp/~taku/osx/install_xcode.html
          </a>
          を参照し、Webサイトからダウンロードをお願いします。
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
