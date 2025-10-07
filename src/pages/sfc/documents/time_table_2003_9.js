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
          ニューラルコンピューティング
          <br />
          (武藤佳恭)
          <br />
          ε12{" "}
        </td>
        <td align="center" width="70">
          {" "}
          地図情報論
          <br />
          (厳網林)
          <br />
          ι23{" "}
        </td>
        <td align="center" width="70">
          {" "}
          <br />{" "}
        </td>
        <td align="center" width="70">
          {" "}
          空間情報処理
          <br />
          (石橋健一)
          <br />
          λ18{" "}
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
          <br />{" "}
        </td>
        <td align="center" width="70">
          {" "}
          情報通信セキュリティ論
          <br />
          (苗村憲司)
          <br />
          ε22{" "}
        </td>
        <td align="center" width="70">
          {" "}
          <br />{" "}
        </td>
        <td align="center" width="70">
          {" "}
          人工知能論
          <br />
          (古川康一)
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
          <font color="#FFFFFF">4</font>
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
          RG
          <br />
          ι23 <br />{" "}
        </td>
        <td align="center" width="70">
          {" "}
          <br />
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
          <br />{" "}
        </td>
        <td align="center" width="70">
          {" "}
          統計解析
          <br />
          (宮川幸三)
          <br />
          ε22{" "}
        </td>
        <td align="center" width="70">
          {" "}
          RG
          <br />
          ι23
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
