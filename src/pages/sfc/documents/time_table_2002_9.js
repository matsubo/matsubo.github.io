import * as React from "react"
import { Link } from "gatsby"

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
            Timetable 2003/9
          </li>
        </ol>
      </nav>
    </div>

    <table width="100%" border="1" cellspacing="0" bordercolor="#999999">
      <tr bgcolor="#01597E">
        <td bgcolor="#01597E" align="center" valign="middle" width="50">
          {" "}
          <font color="#FFFFFF">　　</font>
        </td>
        <td align="center" width="80">
          <font color="#FFFFFF">月</font>
        </td>
        <td align="center" width="80">
          <font color="#FFFFFF">火</font>
        </td>
        <td align="center" width="80">
          <font color="#FFFFFF">水</font>
        </td>
        <td align="center" width="80">
          <font color="#FFFFFF">木</font>
        </td>
        <td align="center" width="80">
          <font color="#FFFFFF">金</font>
        </td>
      </tr>
      <tr>
        <td bgcolor="#01597E" align="center" valign="middle" width="50">
          {" "}
          <font color="#FFFFFF">1</font>
        </td>
        <td align="center" width="70">
          {" "}
          <br />{" "}
        </td>
        <td align="center" width="70">
          {" "}
          <br />{" "}
        </td>
        <td align="center" width="70">
          {" "}
          <br />{" "}
        </td>
        <td align="center" width="70">
          {" "}
          <br />{" "}
        </td>
        <td align="center" width="70">
          {" "}
          <br />{" "}
        </td>
      </tr>
      <tr>
        <td bgcolor="#01597E" align="center" valign="middle" width="50">
          {" "}
          <font color="#FFFFFF">2</font>
        </td>
        <td align="center" width="70">
          {" "}
          <a href="">インターネットオペレーション</a>
          <br />
          (中村修)
          <br />
          Ω21{" "}
        </td>
        <td align="center" width="70">
          {" "}
          <br />{" "}
        </td>
        <td align="center" width="70">
          {" "}
          <br />{" "}
        </td>
        <td align="center" width="70">
          {" "}
          <a href="">統計解析</a>
          <br />
          (中條安芸子)
          <br />
          ι12{" "}
        </td>
        <td align="center" width="70">
          {" "}
          <br />{" "}
        </td>
      </tr>
      <tr>
        <td bgcolor="#01597E" align="center" valign="middle" width="50">
          {" "}
          <font color="#FFFFFF">3</font>
        </td>
        <td align="center" width="70">
          {" "}
          <a href="">インターネット構成法</a>
          <br />
          (村井純)
          <br />
          τ11{" "}
        </td>
        <td align="center" width="70">
          {" "}
          <a href="">分散処理系論</a>
          <br />
          (萩野達也)
          <br />
          ι12{" "}
        </td>
        <td align="center" width="70">
          {" "}
          <br />{" "}
        </td>
        <td align="center" width="70">
          {" "}
          <a href="">消費とライフスタイル</a>
          <br />
          (栗林敦子)
          <br />
          Ω22{" "}
        </td>
        <td align="center" width="70">
          {" "}
          <br />{" "}
        </td>
      </tr>
      <tr>
        <td bgcolor="#01597E" align="center" valign="middle" width="50">
          {" "}
          <font color="#FFFFFF">4</font>
        </td>
        <td align="center" width="70">
          {" "}
          <a href="">中国語I(ベーシック)</a>
          <br />
          (飯田・川田)
          <br />
          ε22{" "}
        </td>
        <td align="center" width="70">
          {" "}
          <br />{" "}
        </td>
        <td align="center" width="70">
          {" "}
          <a href="">中国語I(ベーシック)</a>
          <br />
          (飯田・植松)
          <br />
          ε22{" "}
        </td>
        <td align="center" width="70">
          {" "}
          <a href="">徳田英幸 研究プロジェクトB(1)</a>
          <br />
          (徳田英幸)
          <br />
          ι23{" "}
        </td>
        <td align="center" width="70">
          {" "}
          <br />{" "}
        </td>
      </tr>
      <tr>
        <td bgcolor="#01597E" align="center" valign="middle" width="50">
          {" "}
          <font color="#FFFFFF">5</font>
        </td>
        <td align="center" width="70">
          {" "}
          <br />{" "}
        </td>
        <td align="center" width="70">
          {" "}
          <a href="">オブジェクト指向モデリング</a>
          <br />
          (児玉公信)
          <br />
          τ12{" "}
        </td>
        <td align="center" width="70">
          {" "}
          <a href="">体育II・III(バレーボール)</a>
          <br />
          (若井憲彰)
          <br />{" "}
        </td>
        <td align="center" width="70">
          {" "}
          <a href="">徳田英幸 研究プロジェクトB(2)</a>
          <br />
          (徳田英幸)
          <br />
          ι23{" "}
        </td>
        <td align="center" width="70">
          {" "}
          <br />{" "}
        </td>
      </tr>
      <tr>
        <td bgcolor="#01597E" align="center" valign="middle" width="50">
          {" "}
          <font color="#FFFFFF">6</font>
        </td>
        <td align="center" width="70">
          {" "}
          <br />{" "}
        </td>
        <td align="center" width="70">
          {" "}
          <br />{" "}
        </td>
        <td align="center" width="70">
          {" "}
          <br />{" "}
        </td>
        <td align="center" width="70">
          {" "}
          <br />{" "}
        </td>
        <td align="center" width="70">
          {" "}
          <br />{" "}
        </td>
      </tr>
    </table>
  </Layout>
)

export default AboutPage

export const Head = () => <Seo title="Yuki Matsukura @SFC" />
