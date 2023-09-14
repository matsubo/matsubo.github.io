import * as React from "react"
import { Link } from "gatsby"

import Layout from "../../../../components/layout"
import { Seo } from "../../../../components/seo"

const AboutPage = () => (
  <Layout>
    <div className="container my-5">
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item">
            <Link to="/">Home</Link>
          </li>
          <li class="breadcrumb-item">
            <Link to="/rails/">Ruby on Rails install</Link>
          </li>
          <li class="breadcrumb-item">
            <Link to="/rails/10_8/">Mac OS X</Link>
          </li>
          <li class="breadcrumb-item active" aria-current="page">
            Mac OS X 10.9
          </li>
        </ol>
      </nav>

      <div>
        <h1>Mac OS X 10.9 (Marvericks)</h1>
        <p>上から順番にインストールを進めてください。</p>
        <h2 class="mt-3">Ruby on Railsのインストール</h2>
        <div class="list-group">
          <Link to="command_line_tools" class="list-group-item">
            <h4 class="list-group-item-heading">
              1. Command Line Toolsのインストール
            </h4>
            <p class="list-group-item-text">
              Mac OS
              Xでソフトウェア開発を行う際に必要になる一般的なライブラリをインストールします。30分程度かかります。
            </p>
          </Link>
          <a href="homebrew.html" class="list-group-item">
            <h4 class="list-group-item-heading">2. homebrewのインストール</h4>
            <p class="list-group-item-text">
              rubyenvをインストールするためのアプリケーションをインストールします。
            </p>
          </a>
          <a href="rbenv.html" class="list-group-item">
            <h4 class="list-group-item-heading">3. rbenvのインストール</h4>
            <p class="list-group-item-text">
              ruby自体を管理するアプリケーションをインストールし、設定します。
            </p>
          </a>
          <a href="ruby.html" class="list-group-item">
            <h4 class="list-group-item-heading">4. Rubyのインストール</h4>
            <p class="list-group-item-text">
              Ruby自体のインストールを行います。
            </p>
          </a>
          <a href="ror.html" class="list-group-item">
            <h4 class="list-group-item-heading">
              5. Ruby on Railsのインストール
            </h4>
            <p class="list-group-item-text">
              Ruby on Railsのライブラリをインストールします。
            </p>
          </a>
        </div>

        <h2 class="mt-3">Aptana Studioのインストール</h2>
        <div class="list-group">
          <a href="java.html" class="list-group-item">
            <h4 class="list-group-item-heading">1. Javaのインストール</h4>
            <p class="list-group-item-text">
              Aptanaが依存しているJavaをインストールします。
            </p>
          </a>
          <a href="aptana.html" class="list-group-item">
            <h4 class="list-group-item-heading">
              2. Aptana Studioのインストール
            </h4>
            <p class="list-group-item-text">
              Aptana Studioをダウンロードし、インストール、起動します。
            </p>
          </a>
          <a href="aptana_check.html" class="list-group-item">
            <h4 class="list-group-item-heading">3. Ruby on Railsの動作確認</h4>
            <p class="list-group-item-text">
              Aptana StudioからRuby on
              Railsプロジェクトを作成して動作確認をします。
            </p>
          </a>
        </div>

        <p class="mt-5">
          <Link to="/rails/mac/" class="btn btn-info">
            <i class="bi bi-chevron-left"></i>
            戻る
          </Link>
        </p>
      </div>
    </div>
  </Layout>
)

export default AboutPage

export const Head = () => <Seo title="matsubo's public archive on github" />
