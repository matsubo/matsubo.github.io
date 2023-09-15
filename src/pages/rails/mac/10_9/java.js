import * as React from "react"
import { Link } from "gatsby"

import Layout from "../../../../components/layout"
import { Seo } from "../../../../components/seo"
import { StaticImage } from "gatsby-plugin-image"

const AbouttPage = () => (
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
            Ruby on Railsのインストール
          </li>
        </ol>
      </nav>

      <div>
        <h1>
          <span className="active">Java</span>のインストール
        </h1>
        <div>
          AptanaはJavaに依存しているため、Javaがインストールされていない場合は、Javaをインストールします。
        </div>
        <h2>Javaがインストールされているか確認</h2>
        <div>[ターミナル] を立ち上げます。</div>
        <div>ターミナルに、以下のように入力して[Enter]キーを押します。 </div>
        <pre>
          <code>% java -version</code>
        </pre>
        <div>
          以下のようにバージョン番号が表示されれば、既にインストールされているのでここで、Javaのインストールをする必要は有りません。
        </div>
        <div>
          <StaticImage src="../../../../images/java.png" alt="java" />
        </div>
        <h2>Javaのダウンロードとインストール</h2>
        <div>以下のサイトへアクセスし、Javaをダウンロードします。</div>
        <div>
          <a
            href="http://java.com/ja/download/"
            target="_blank"
            rel="noreferrer"
            className="btn btn-lg btn-info"
          >
            <i className="bi bi-box-arrow-up-right"></i>
            http://java.com/ja/download/
          </a>
        </div>
        <div>
          「同意して無料ダウンロードを開始」ボタンをクリックすると、ダウンロードが開始されるためデスクトップなどの適当な場所へファイルを保存します。
        </div>
        <div>
          <StaticImage
            src="../../../../images/java_download.png"
            alt="java download"
          />
        </div>
        <div>
          保存したファイルを開き、表示されたないよう通りに進んで行けばインストールを完了できます。
        </div>
        <div>
          <StaticImage src="../../../../images/java_installer.png" alt="" />
        </div>
        <div>
          <StaticImage src="../../../../images/java_agreement.png" alt="" />
        </div>
        <div>
          <StaticImage src="../../../../images/java_warning.png" alt="" />
        </div>
        <div>
          <StaticImage src="../../../../images/java_installed.png" alt="" />
        </div>
        <div>再度、以下を入力してバージョン番号が表示されるかを確認します。 </div>
        <pre>
          <code>% java -version</code>
        </pre>
      </div>

      <div className="mt-5">
        <Link to="../" className="btn btn-info">
          <i className="bi bi-chevron-left"></i>
          戻る
        </Link>
      </div>
    </div>
  </Layout>
)

export default AbouttPage

export const Head = () => <Seo title="matsubo's public archive on github" />
