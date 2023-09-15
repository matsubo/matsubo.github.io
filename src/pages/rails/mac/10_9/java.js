import * as React from "react"
import { Link } from "gatsby"

import Layout from "../../../../components/layout"
import { Seo } from "../../../../components/seo"
import { StaticImage } from "gatsby-plugin-image"

const AbouttPage = () => (
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
          <span className="active">Java</span>のインストール
        </h1>
        <p>
          AptanaはJavaに依存しているため、Javaがインストールされていない場合は、Javaをインストールします。
        </p>
        <h2>Javaがインストールされているか確認</h2>
        <p>[ターミナル] を立ち上げます。</p>
        <p>ターミナルに、以下のように入力して[Enter]キーを押します。 </p>
        <pre>
          <code>% java -version</code>
        </pre>
        <p>
          {" "}
          以下のようにバージョン番号が表示されれば、既にインストールされているのでここで、Javaのインストールをする必要は有りません。
        </p>
        <p>
          <StaticImage
            src="../../../../images/java.png"
            alt="java"
            width="422"
            height="63"
          />
        </p>
        <h2>Javaのダウンロードとインストール</h2>
        <p>以下のサイトへアクセスし、Javaをダウンロードします。</p>
        <p>
          <a
            href="http://java.com/ja/download/"
            target="_blank"
            className="btn btn-lg btn-info"
          >
            <span className="glyphicon glyphicon-link"></span>
            http://java.com/ja/download/
          </a>
        </p>
        <p>
          「同意して無料ダウンロードを開始」ボタンをクリックすると、ダウンロードが開始されるためデスクトップなどの適当な場所へファイルを保存します。
        </p>
        <p>
          <StaticImage
            src="../../../../images/java_download.png"
            alt="java download"
            width="523"
            height="245"
          />
        </p>
        <p>
          保存したファイルを開き、表示されたないよう通りに進んで行けばインストールを完了できます。
        </p>
        <p>
          <StaticImage
            src="../../../../images/java_installer.png"
            alt=""
            width="283"
            height="175"
          />
        </p>
        <p>&nbsp;</p>
        <p>
          <StaticImage
            src="../../../../images/java_agreement.png"
            alt=""
            width="280"
            height="199"
          />
        </p>
        <p>&nbsp;</p>
        <p>
          <StaticImage
            src="../../../../images/java_warning.png"
            alt=""
            width="280"
            height="199"
          />
        </p>
        <p>&nbsp;</p>
        <p>
          <StaticImage
            src="../../../../images/java_installed.png"
            alt=""
            width="280"
            height="199"
          />
        </p>
        <p>再度、以下を入力してバージョン番号が表示されるかを確認します。 </p>
        <pre>
          <code>% java -version</code>
        </pre>
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

export default AbouttPage

export const Head = () => <Seo title="matsubo's public archive on github" />
