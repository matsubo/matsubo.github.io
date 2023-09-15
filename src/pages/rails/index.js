import * as React from "react"
import { Link } from "gatsby"

import Layout from "../../components/layout"
import { Seo } from "../../components/seo"

const AboutPage = () => (
  <Layout>
    <div className="container my-5">
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link to="/">Home</Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            Ruby on Rails install
          </li>
        </ol>
      </nav>

      <div>
        <h1>Ruby on Rails</h1>
        <h2>開発環境セットアップ</h2>
        <p className="">
          Aptanaを立ち上げて、Ruby on
          Railsのサーバを起動し、動作確認を行う事をゴールとしています。
        </p>
        <div className="list-group">
          <a href="win/" className="list-group-item">
            <h4 className="list-group-item-heading">
              <i className="bi bi-windows"></i>
              Windows
            </h4>
            <p className="list-group-item-text">
              Windowsをご利用の方はこちらのドキュメントを参照ください。
            </p>
          </a>

          <a href="mac/" className="list-group-item">
            <h4 className="list-group-item-heading">
              <i className="bi bi-apple"></i>
              Mac OS X
            </h4>
            <p className="list-group-item-text">
              Mac OS Xをご利用の方はこちらのドキュメントを参照ください。
            </p>
          </a>
        </div>

        <h2 className="mt-3">Herokuでの公開方法</h2>

        <div className="list-group">
          <a
            href="https://github.com/matsubo/rails4heroku/blob/master/README.md"
            className="list-group-item"
          >
            <h4 className="list-group-item-heading">
              <i className="bi bi-filetype-js"></i>
              RailsプロジェクトをHerokuで公開する
            </h4>
            <p className="list-group-item-text">
              HerokuでRailsのプロジェクトを公開する手順
            </p>
          </a>
        </div>

        <h2 className="mt-3">お問い合わせ</h2>
        <p>
          ドキュメントの間違いなどを見つけられた方は、
          <a href="https://github.com/matsubo/matsubo.github.io">
            こちらのソース
          </a>
          に対してPull requestの送信、またはIssueの作成をお願いします。
        </p>
        <p>
          <Link to="/" className="btn btn-info">
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
