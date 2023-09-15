import * as React from "react"
import { Link } from "gatsby"

import Layout from "../../../../components/layout"
import { Seo } from "../../../../components/seo"

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
          <li className="breadcrumb-item active" aria-current="page">
            Mac OS X 10.8
          </li>
        </ol>
      </nav>

      <div>
        <h1>Mac OS X 10.8 (Snow Leopard)</h1>
        <p>
          PDFファイルかPowerPointファイルをダウンロードし、参照してください。
        </p>
        <div className="row mt-3">
          <div className="col-xs-12 text-center">
            <a
              href={`../../../manual_formac_v11.pdf`}
              className="btn btn-lg btn-primary"
            >
              <i className="bi bi-filetype-pdf"></i>
              PDFファイルをダウンロード
            </a>
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-xs-12 text-center"> or </div>
        </div>
        <div className="row mt-3">
          <div className="col-xs-12 text-center">
            <a
              href={`../../../manual_formac_v11.pptx`}
              className="btn btn-lg btn-primary"
            >
              <i className="bi bi-filetype-ppt"></i>
              PowerPointファイルをダウンロード
            </a>
          </div>
        </div>

        <p className="mt-5">
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
