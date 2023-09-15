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
            Ruby on Railsのインストール
          </li>
        </ol>
      </nav>

      <div>
        <h1>
          <span className="active">Ruby on Rails</span>のインストール
        </h1>
        <p>
          Ruby on Railsのライブラリをインストールします。Ruby on Railsは
          <a href="https://rubygems.org/">Ruby Gems</a>
          と呼ばれるライブラリ管理アプリケーションによって提供されています。
        </p>
        <h2>手順</h2>
        <p>[ターミナル] を立ち上げます。</p>
        <p>ターミナルに、以下のように入力して[Enter]キーを押します。 </p>
        <pre>
          <code>% gem install rails</code>
        </pre>
        <div className="alert alert-info">
          <p>
            Ruby on
            Railsは様々なライブラリに依存しており、上記コマンドを実行すると依存しているライブラリもインストールされます。依存しているライブラリがたくさんあるので、インストールには時間がかかります。
          </p>
        </div>
        <p>
          インストールが完了したら、ターミナルに、以下のように入力して[Enter]キーを押します。
        </p>
        <pre>
          <code>% gem list</code>
        </pre>
        <p>railsという表記があったらインストールは成功しています。</p>
        <p>
          railsを見つけづらい場合は、<code>gem list | grep rails</code>
          と入力するとrailsが含まれた行だけ表示出来ます。
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
