import * as React from "react"
import { graphql } from "gatsby"
import { Link } from "gatsby-plugin-react-i18next"

import Layout from "../../../components/layout"
import { Seo } from "../../../components/seo"

const AboutPage = () => (
  <Layout>
    <div className="container my-2">
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link to="/">Home</Link>
          </li>
          <li className="breadcrumb-item">
            <Link to="/sfc/">Univerisity</Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            Timetable 2002/4
          </li>
        </ol>
      </nav>
    </div>

    <table width="96%" border="1" cellspacing="0" bordercolor="#999999">
      <tr bgcolor="#01597E">
        <td bgcolor="#01597E" align="center" valign="middle" width="12%">
          {" "}
          <font color="#FFFFFF">　　</font>
        </td>
        <td align="center" width="12%">
          <font color="#FFFFFF">月</font>
        </td>
        <td align="center" width="12%">
          <font color="#FFFFFF">火</font>
        </td>
        <td align="center" width="12%">
          <font color="#FFFFFF">水</font>
        </td>
        <td align="center" width="12%">
          <font color="#FFFFFF">木</font>
        </td>
        <td align="center" width="12%">
          <font color="#FFFFFF">金</font>
        </td>
      </tr>
      <tr>
        <td bgcolor="#01597E" align="center" valign="middle" width="12%">
          {" "}
          <font color="#FFFFFF">
            1<br />
            (9:25〜10:55){" "}
          </font>
        </td>
        <td align="center" width="12%">
          {" "}
          <br />
        </td>
        <td align="center" width="12%">
          {" "}
          <a href="">英語スキルB (Test)</a>
          <br />
          (黒澤麻美)
          <br />
          λ13{" "}
        </td>
        <td align="center" width="12%">
          {" "}
          <br />
        </td>
        <td align="center" width="12%">
          {" "}
          <br />
        </td>
        <td align="center" width="12%">
          <a href="">英語スキルB (Presentation)</a>
          <br />
          (Sorenson)
          <br />
          ο15
        </td>
      </tr>
      <tr>
        <td bgcolor="#01597E" align="center" valign="middle" width="12%">
          {" "}
          <font color="#FFFFFF">
            2<br />
            (11:10〜12:40){" "}
          </font>
        </td>
        <td align="center" width="12%">
          {" "}
          <br />
        </td>
        <td align="center" width="12%">
          {" "}
          <a href="">英語スキルB (Test)</a>
          <br />
          (吉原学)
          <br />
          ε21{" "}
        </td>
        <td align="center" width="12%">
          {" "}
          <a href="">体育II・III (バドミントン)</a>
          <br />
          (加藤幸司)
          <br />
        </td>
        <td align="center" width="12%">
          {" "}
          <a href="">資料検索法</a>
          <br />
          (渋川雅俊)
          <br />
          ε21{" "}
        </td>
        <td align="center" width="12%">
          {" "}
          <a href="">マーケティング戦略</a>
          <br />
          (桑原武夫)
          <br />
          Ω11{" "}
        </td>
      </tr>
      <tr>
        <td bgcolor="#01597E" align="center" valign="middle" width="12%">
          {" "}
          <font color="#FFFFFF">
            3<br />
            (13:00〜14:30){" "}
          </font>
        </td>
        <td align="center" width="12%">
          {" "}
          <br />
        </td>
        <td align="center" width="12%">
          {" "}
          <br />
        </td>
        <td align="center" width="12%">
          {" "}
          <a href="">グラフィックスプログラミング</a>
          <br />
          (脇田玲)
          <br />
          κ11{" "}
        </td>
        <td align="center" width="12%">
          {" "}
          <a href="">モバイル・分散プログラミング</a>
          <br />
          (徳田英幸)
          <br />
          τ11{" "}
        </td>
        <td align="center" width="12%">
          {" "}
          <a href="">英語スキルB (Academic writing)</a>
          <br />
          (Lepple)
          <br />
          ι16{" "}
        </td>
      </tr>
      <tr>
        <td bgcolor="#01597E" align="center" valign="middle" width="12%">
          {" "}
          <font color="#FFFFFF">
            4<br />
            (14:40〜16:10){" "}
          </font>
        </td>
        <td align="center" width="12%">
          {" "}
          <br />
        </td>
        <td align="center" width="12%">
          {" "}
          <br />
        </td>
        <td align="center" width="12%">
          {" "}
          <a href="">グラフィックスプログラミング</a>
          <br />
          (脇田玲)
          <br />
          κ11{" "}
        </td>
        <td align="center" width="12%">
          {" "}
          <a href="">徳田英幸研究プロジェクト1</a>
          <br />
          (徳田英幸)
          <br />
          ι23{" "}
        </td>
        <td align="center" width="12%">
          {" "}
          <a href="">プログラミング入門C</a>
          <br />
          (坂田洋幸)
          <br />
          κ18{" "}
        </td>
      </tr>
      <tr>
        <td bgcolor="#01597E" align="center" valign="middle" width="12%">
          {" "}
          <font color="#FFFFFF">
            5<br />
            (16:20〜17:50){" "}
          </font>
        </td>
        <td align="center" width="12%">
          {" "}
          <br />
        </td>
        <td align="center" width="12%">
          {" "}
          <br />
        </td>
        <td align="center" width="12%">
          {" "}
          <br />
        </td>
        <td align="center" width="12%">
          {" "}
          <br />
        </td>
        <td align="center" width="12%">
          {" "}
          <a href="">プログラミング入門C</a>
          <br />
          (坂田洋幸)
          <br />
          κ18{" "}
        </td>
      </tr>
      <tr>
        <td bgcolor="#01597E" align="center" valign="middle" width="12%">
          {" "}
          <font color="#FFFFFF">
            6<br />
            (18:00〜19:30){" "}
          </font>
        </td>
        <td align="center" width="12%">
          {" "}
          <br />
        </td>
        <td align="center" width="12%">
          {" "}
          <br />
        </td>
        <td align="center" width="12%">
          {" "}
          <br />
        </td>
        <td align="center" width="12%">
          {" "}
          <br />
        </td>
        <td align="center" width="12%">
          {" "}
          <br />
        </td>
      </tr>
    </table>
  </Layout>
)

export default AboutPage

export const Head = () => <Seo title="Yuki Matsukura @SFC" />

export const query = graphql`
  query {
    locales: allLocale {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
  }
`
