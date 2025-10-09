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
            Timetable 2001/9
          </li>
        </ol>
      </nav>
    </div>

    <table class="table">
      <tr bgcolor="#01597E" class="text-white">
        <td bgcolor="#01597E" align="center" valign="middle"></td>
        <td align="center">月</td>
        <td align="center">火</td>
        <td align="center">水</td>
        <td align="center">木</td>
        <td align="center">金</td>
      </tr>
      <tr>
        <td bgcolor="#01597E" align="center" valign="middle" class="text-white">
          {" "}
          1<br />
          (9:25〜10:55){" "}
        </td>
        <td align="center">
          {" "}
          <br />
        </td>
        <td align="center" width="97">
          {" "}
          <br />
        </td>
        <td align="center">
          {" "}
          <br />
        </td>
        <td align="center" width="131">
          {" "}
          connectカスタマー
          <br />
          戦略定期会議
          <br />
        </td>
        <td align="center" width="121">
          {" "}
          <br />
        </td>
      </tr>
      <tr>
        <td
          bgcolor="#01597E"
          align="center"
          valign="middle"
          width="58"
          class="text-white"
        >
          {" "}
          2<br />
          (11:10〜12:40){" "}
        </td>
        <td align="center" width="111">
          {" "}
          <br />
        </td>
        <td align="center" width="97">
          {" "}
          <br />
        </td>
        <td align="center">
          {" "}
          <a href="">英語スキル B(Integrated)</a>
          <br />
          (Wesselhoff)
          <br />
          λ17{" "}
        </td>
        <td align="center" width="121">
          　{" "}
        </td>
        <td align="center" width="121">
          {" "}
          <a href="">英語スキル B(Integrated)</a>
          <br />
          (Wesselhoff)
          <br />
          ι13{" "}
        </td>
      </tr>
      <tr>
        <td
          bgcolor="#01597E"
          align="center"
          valign="middle"
          width="58"
          class="text-white"
        >
          {" "}
          3<br />
          (13:00〜14:30){" "}
        </td>
        <td align="center" width="111">
          {" "}
          <br />
        </td>
        <td align="center" width="97">
          {" "}
          <br />
          connect システム
          <br />
          定期会議
        </td>
        <td align="center">
          {" "}
          <a href="">英語スキル B(Oral)</a>
          <br />
          (Rand)
          <br />θ{" "}
        </td>
        <td align="center" width="131">
          {" "}
          <a href="">統計言語</a>
          <br />
          (湯前祥二)
          <br />
          ο13{" "}
        </td>
        <td align="center" width="121">
          {" "}
          <a href="">
            保健衛生
            <br />
            【学期前半】
          </a>
          <br />
          (濱田庸子)
          <br />
          κ12{" "}
        </td>
      </tr>
      <tr>
        <td
          bgcolor="#01597E"
          align="center"
          valign="middle"
          width="58"
          class="text-white"
        >
          {" "}
          4<br />
          (14:40〜16:10){" "}
        </td>
        <td align="center" width="111">
          {" "}
          <a href="">プレゼンテーション技法</a>
          <br />
          (高橋一貢)
          <br />
          Ω22{" "}
        </td>
        <td align="center" width="97">
          {" "}
          <br />
        </td>
        <td align="center">
          {" "}
          <a href="">体育I(30)</a>
          <br />
          (加藤幸司)
          <br />
        </td>
        <td align="center" width="131">
          {" "}
          Fisher研究会
        </td>
        <td align="center" width="121">
          {" "}
          <a href="">情報処理(30)</a>
          <br />
          (小林裕之)
          <br />
          ε17{" "}
        </td>
      </tr>
      <tr>
        <td
          bgcolor="#01597E"
          align="center"
          valign="middle"
          width="58"
          class="text-white"
        >
          {" "}
          5<br />
          (16:20〜17:50){" "}
        </td>
        <td align="center" width="111">
          {" "}
          <a href="">ネットワークアーキテクチャ</a>
          <br />
          (村井純)
          <br />
          Ω21{" "}
        </td>
        <td align="center" width="97">
          {" "}
          <a href="">データベース概論</a>
          <br />
          (清木康)
          <br />
          Ω12{" "}
        </td>
        <td align="center">
          {" "}
          <a href="">データ分析</a>
          <br />
          (石塚直樹)
          <br />
          ι23{" "}
        </td>
        <td align="center" width="131">
          　<br />
        </td>
        <td align="center" width="121">
          {" "}
          <a href="">情報処理(30)</a>
          <br />
          (小林裕之)
          <br />
          ε17{" "}
        </td>
      </tr>
      <tr>
        <td
          bgcolor="#01597E"
          align="center"
          valign="middle"
          width="58"
          class="text-white"
        >
          {" "}
          6<br />
          (18:00〜19:30){" "}
        </td>
        <td align="center" width="111">
          connect カスタマー
          <br />
          戦略定期会議
        </td>
        <td align="center" width="97">
          {" "}
          <br />
        </td>
        <td align="center">
          {" "}
          <br />
        </td>
        <td align="center" width="131">
          {" "}
          <br />
        </td>
        <td align="center" width="121">
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
