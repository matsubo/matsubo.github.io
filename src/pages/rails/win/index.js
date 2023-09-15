import * as React from "react"
import { Link } from "gatsby"

import Layout from "../../../components/layout"
import { Seo } from "../../../components/seo"

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
          <li className="breadcrumb-item active" aria-current="page">
            Windows
          </li>
        </ol>
      </nav>

      <div>
        <h1>Windows</h1>

        <ul>
          <li>Windows 7とWindows 8向けのドキュメントです。</li>
          <li>
            ドキュメントはWindows 7環境で作られていますが、Windows
            8でも操作手順は同様です。
          </li>
        </ul>

        <div className="row mt-3">
          <div className="col-xs-12 text-center">
            <a
              href={`../../manual_forwin_v12.pdf`}
              className="btn btn-lg btn-primary"
            >
              <i className="bi bi-filetype-pdf"></i>
              PDFファイルをダウンロード
            </a>{" "}
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-xs-12 text-center"> or </div>
        </div>
        <div className="row mt-3">
          <div className="col-xs-12 text-center">
            <a
              href={`../../manual_forwin_v12.pptx`}
              className="btn btn-lg btn-primary"
            >
              <i className="bi bi-filetype-ppt"></i>
              PowerPointファイルをダウンロード
            </a>
          </div>
        </div>

        <p>
          <Link to="/rails/" className="btn btn-info">
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
