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
            Ruby on Railsの動作確認
          </li>
        </ol>
      </nav>

      <div>
        <h1>
          <span className="active">Ruby on Railsの動作確認</span>
        </h1>

        <p>
          Aptana StudioでRuby on Railsのプロジェクトを作成し、Ruby on
          Railsを起動してみます。
        </p>
        <h2>手順</h2>
        <p>
          Aptana Studioを立ち上げ、[File] -&gt; [New] -&gt; [Rails
          Project]を選択します。
        </p>
        <p>
          <StaticImage
            src="../../../../images/rails_project.png"
            alt=""
            width="493"
            height="174"
          />
        </p>
        <p>&nbsp;</p>
        <p>[Name] にプロジェクト名を入力し、[Finish]ボタンを押します。</p>
        <p>
          <StaticImage
            src="../../../../images/aptana_new.png"
            alt=""
            width="351"
            height="310"
          />
        </p>
        <p>&nbsp;</p>

        <p>
          右下に表示されているウィンドウに、以下のような出力が出ていれば成功です。下に表示されている青いバーが終了するまで待ちます。
        </p>
        <p>
          <StaticImage
            src="../../../../images/progress.png"
            alt=""
            width="800"
            height="261"
          />
        </p>
        <p>&nbsp;</p>

        <p>
          [App Explorer]タブのギアの形をしたアイコンから、[Run
          Server]を選択して、サーバを起動します。
        </p>
        <p>
          <StaticImage
            src="../../../../images/aptana_run_server.png"
            alt=""
            width="452"
            height="160"
          />
        </p>
        <p>&nbsp;</p>

        <p>Console画面に以下のような表示が出力されれば、成功です。。</p>
        <p>
          <StaticImage
            src="../../../../images/server_console.png"
            alt=""
            width="800"
            height="245"
          />
        </p>

        <p>
          ブラウザで、以下のページを開き、ページが表示されることを確認します。
        </p>
        <p>
          <a
            href="http://0.0.0.0:3000/"
            target="_blank"
            rel="noreferrer"
            className="btn btn-lg btn-info"
          >
            <i className="bi bi-box-arrow-up-right"></i>
            http://0.0.0.0:3000/
          </a>
        </p>
        <p>&nbsp;</p>
        <p>
          以下のような、&quot;Welcome
          aboard&quot;と表示されていれば、正常にセットアップが完了したことになります。
        </p>
        <p>
          <StaticImage
            src="../../../../images/aptana_browser.png"
            alt=""
            width="786"
            height="669"
          />
        </p>
        <p>&nbsp;</p>
        <p>最後に、Aptana Studioを終了します。</p>
        <p>
          <StaticImage
            src="../../../../images/aptana_quit.png"
            alt=""
            width="330"
            height="286"
          />
        </p>
        <p>&nbsp;</p>
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
