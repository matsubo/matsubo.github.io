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
            Ruby on Railsの動作確認
          </li>
        </ol>
      </nav>

      <div>
        <h1>
          <span className="active">Ruby on Railsの動作確認</span>
        </h1>

        <div>
          Aptana StudioでRuby on Railsのプロジェクトを作成し、Ruby on
          Railsを起動してみます。
        </div>
        <h2>手順</h2>
        <div>
          Aptana Studioを立ち上げ、[File] -&gt; [New] -&gt; [Rails
          Project]を選択します。
        </div>
        <div>
          <StaticImage
            src="../../../../images/rails_project.png"
  alt=""
          />
        </div>
        <div>&nbsp;</div>
        <div>[Name] にプロジェクト名を入力し、[Finish]ボタンを押します。</div>
        <div>
          <StaticImage
            src="../../../../images/aptana_new.png"
  alt=""
          />
        </div>
        <div>&nbsp;</div>

        <div>
          右下に表示されているウィンドウに、以下のような出力が出ていれば成功です。下に表示されている青いバーが終了するまで待ちます。
        </div>
        <div>
          <StaticImage
            src="../../../../images/progress.png"
  alt=""
          />
        </div>
        <div>&nbsp;</div>

        <div>
          [App Explorer]タブのギアの形をしたアイコンから、[Run
          Server]を選択して、サーバを起動します。
        </div>
        <div>
          <StaticImage
            src="../../../../images/aptana_run_server.png"
  alt=""
          />
        </div>
        <div>&nbsp;</div>

        <div>Console画面に以下のような表示が出力されれば、成功です。。</div>
        <div>
          <StaticImage
            src="../../../../images/server_console.png"
  alt=""
          />
        </div>

        <div>
          ブラウザで、以下のページを開き、ページが表示されることを確認します。
        </div>
        <div>
          <a
            href="http://0.0.0.0:3000/"
            target="_blank"
            rel="noreferrer"
            className="btn btn-lg btn-info"
          >
            <i className="bi bi-box-arrow-up-right"></i>
            http://0.0.0.0:3000/
          </a>
        </div>
        <div>&nbsp;</div>
        <div>
          以下のような、&quot;Welcome
          aboard&quot;と表示されていれば、正常にセットアップが完了したことになります。
        </div>
        <div>
          <StaticImage
            src="../../../../images/aptana_browser.png"
  alt=""
          />
        </div>
        <div>&nbsp;</div>
        <div>最後に、Aptana Studioを終了します。</div>
        <div>
          <StaticImage
            src="../../../../images/aptana_quit.png"
  alt=""
          />
        </div>
        <div>&nbsp;</div>
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

export default AboutPage

export const Head = () => <Seo title="matsubo's public archive on github" />
