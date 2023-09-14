import * as React from "react"
import { Link } from "gatsby"

import Layout from "../../components/layout"
import { Seo } from "../../components/seo"

const AboutPage = () => (
  <Layout>
    <div className="container my-5">
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item">
            <Link to="/">Home</Link>
          </li>
          <li class="breadcrumb-item active" aria-current="page">
            Ruby on Rails install
          </li>
        </ol>
      </nav>

      <div>
        <h1>Ruby on Rails</h1>
        <h2>開発環境セットアップ</h2>
        <p class="">
          Aptanaを立ち上げて、Ruby on
          Railsのサーバを起動し、動作確認を行う事をゴールとしています。
        </p>
        <div class="list-group">
          <a href="win/" class="list-group-item">
            <h4 class="list-group-item-heading">
              <i class="bi bi-windows"></i>
              Windows
            </h4>
            <p class="list-group-item-text">
              Windowsをご利用の方はこちらのドキュメントを参照ください。
            </p>
          </a>

          <a href="mac/" class="list-group-item">
            <h4 class="list-group-item-heading">
              <i class="bi bi-apple"></i>
              Mac OS X
            </h4>
            <p class="list-group-item-text">
              Mac OS Xをご利用の方はこちらのドキュメントを参照ください。
            </p>
          </a>
        </div>

        <h2 class="mt-3">Herokuでの公開方法</h2>

        <div class="list-group">
          <a
            href="https://github.com/matsubo/rails4heroku/blob/master/README.md"
            class="list-group-item"
          >
            <h4 class="list-group-item-heading">
              <i class="bi bi-filetype-js"></i>
              RailsプロジェクトをHerokuで公開する
            </h4>
            <p class="list-group-item-text">
              HerokuでRailsのプロジェクトを公開する手順
            </p>
          </a>
        </div>

        <h2 class="mt-3">お問い合わせ</h2>
        <p>
          ドキュメントの間違いなどを見つけられた方は、
          <a href="https://github.com/matsubo/matsubo.github.io">
            こちらのソース
          </a>
          に対してPull requestの送信、またはIssueの作成をお願いします。
        </p>
        <p>
          <Link to="/" class="btn btn-info">
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
