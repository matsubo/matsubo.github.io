import * as React from "react"
import { Link } from "gatsby"

import Layout from "../../../components/layout"
import { Seo } from "../../../components/seo"

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
          <li class="breadcrumb-item active" aria-current="page">
            Mac OS X
          </li>
        </ol>
      </nav>

      <div>
        <h1>Mac OS X</h1>

        <ul>
          <li>
            現在利用中のバージョンを確認する方法はこちらをご参照ください。
            <a href="http://www.apple.com/jp/support/dotmac/os_version.html">
              http://www.apple.com/jp/support/dotmac/os_version.html
            </a>
          </li>
          <li>
            現時点で最新版である、Mac OS 10.9 (Marvericks)
            を利用するのを推奨します。
          </li>
        </ul>
        <div class="list-group">
          <a href="10_8/" class="list-group-item">
            <h4 class="list-group-item-heading">
              <i class="bi bi-apple"></i>
              Mac OS X 10.8 (Snow Leopard)
            </h4>
            <p class="list-group-item-text">
              2012年7月25日に発売されたバージョンです。
            </p>
          </a>
          <a href="10_9/" class="list-group-item">
            <h4 class="list-group-item-heading">
              <i class="bi bi-apple"></i>
              Mac OS X 10.9 (Mavericks)
            </h4>
            <p class="list-group-item-text">
              2013年10月22日に無料でリリースされました。こちらのOSを利用するのを推奨します。
            </p>
          </a>
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
