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
            Mac OS X 10.8
          </li>
        </ol>
      </nav>

      <div>
        <h1>Mac OS X 10.8 (Snow Leopard)</h1>
        <p>
          PDFファイルかPowerPointファイルをダウンロードし、参照してください。
        </p>
        <div class="row mt-3">
          <div class="col-xs-12 text-center">
            <a
              href={`../../../manual_formac_v11.pdf`}
              class="btn btn-lg btn-primary"
            >
              <i class="bi bi-filetype-pdf"></i>
              PDFファイルをダウンロード
            </a>
          </div>
        </div>
        <div class="row mt-3">
          <div class="col-xs-12 text-center"> or </div>
        </div>
        <div class="row mt-3">
          <div class="col-xs-12 text-center">
            <a
              href={`../../../manual_formac_v11.pptx`}
              class="btn btn-lg btn-primary"
            >
              <span class="glyphicon glyphicon-file"></span>
              <i class="bi bi-filetype-ppt"></i>
              PowerPointファイルをダウンロード
            </a>
          </div>
        </div>

        <p class="mt-5">
          <Link to="/rails/" class="btn btn-info">
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
