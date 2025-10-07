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
            Timetable 2002/4
          </li>
        </ol>
      </nav>
    </div>

    <table width="100%" border="1" cellspacing="0" bordercolor="#999999">
      <tr bgcolor="#01597E">
        <td bgcolor="#01597E" align="center" valign="middle" width="15%">
          {" "}
          <font color="#FFFFFF">　　</font>
        </td>
        <td align="center" width="17%">
          <font color="#FFFFFF">月</font>
        </td>
        <td align="center" width="17%">
          <font color="#FFFFFF">火</font>
        </td>
        <td align="center" width="17%">
          <font color="#FFFFFF">水</font>
        </td>
        <td align="center" width="17%">
          <font color="#FFFFFF">木</font>
        </td>
        <td align="center" width="17%">
          <font color="#FFFFFF">金</font>
        </td>
      </tr>
      <tr>
        <td bgcolor="#01597E" align="center" valign="middle" width="15%">
          {" "}
          <font color="#FFFFFF">1</font>
        </td>
        <td align="center" width="17%">
          &nbsp;
        </td>
        <td align="center" width="17%">
          情処SA
          <br />
          （楠本）
          <br />
          ι17{" "}
        </td>
        <td align="center" width="17%">
          &nbsp;
        </td>
        <td align="center" width="17%">
          &nbsp;
        </td>
        <td align="center" width="17%">
          論理プログラミング
          <br />
          （向井　国昭）
          <br />
          ο11{" "}
        </td>
      </tr>
      <tr>
        <td bgcolor="#01597E" align="center" valign="middle" width="15%">
          {" "}
          <font color="#FFFFFF">2</font>
        </td>
        <td align="center" width="17%">
          環境情報分析
          <br />
          （清水　浩）
          <br />
          Ω21{" "}
        </td>
        <td align="center" width="17%">
          情処SA
          <br />
          （楠本）
          <br />
          ι17
        </td>
        <td align="center" width="17%">
          &nbsp;
        </td>
        <td align="center" width="17%">
          地球環境概論
          <br />
          （厳<font color="#FFFFFF">　</font>網林）
          <br />
          ε11{" "}
        </td>
        <td width="17%" align="center">
          論理プログラミング
          <br />
          （向井　国昭）
          <br />
          ο11{" "}
        </td>
      </tr>
      <tr>
        <td bgcolor="#01597E" align="center" valign="middle" width="15%">
          {" "}
          <font color="#FFFFFF">3</font>
        </td>
        <td align="center" width="17%">
          &nbsp;
        </td>
        <td align="center" width="17%">
          システム・ソフトウェア
          <br />
          （萩野　達也）
          <br />
          ο12 <br />{" "}
        </td>
        <td align="center" width="17%">
          &nbsp;
        </td>
        <td align="center" width="17%">
          &nbsp;
        </td>
        <td align="center" width="17%">
          &nbsp;
        </td>
      </tr>
      <tr>
        <td bgcolor="#01597E" align="center" valign="middle" width="15%">
          {" "}
          <font color="#FFFFFF">4</font>
        </td>
        <td align="center" width="17%">
          &nbsp;
        </td>
        <td align="center" width="17%">
          &nbsp;
        </td>
        <td align="center" width="17%">
          &nbsp;
        </td>
        <td align="center" width="17%">
          RG
          <br />
          ι23
        </td>
        <td align="center" width="17%">
          データベース構築法
          <br />
          （清木　康）
          <br />
          τ12{" "}
        </td>
      </tr>
      <tr>
        <td bgcolor="#01597E" align="center" valign="middle" width="15%">
          {" "}
          <font color="#FFFFFF">5</font>
        </td>
        <td align="center" width="17%">
          インターネット概論
          <br />
          （村井　純） <br />
          Ω21{" "}
        </td>
        <td align="center" width="17%">
          CCNA
          <br />
          ε12{" "}
        </td>
        <td align="center" width="17%">
          &nbsp;
        </td>
        <td align="center" width="17%">
          RG
          <br />
          ι23{" "}
        </td>
        <td align="center" width="17%">
          &nbsp;
        </td>
      </tr>
      <tr>
        <td bgcolor="#01597E" align="center" valign="middle" width="15%">
          {" "}
          <font color="#FFFFFF">6</font>
        </td>
        <td align="center" width="17%">
          &nbsp;
        </td>
        <td align="center" width="17%">
          CCNA
          <br />
          ε12{" "}
        </td>
        <td align="center" width="17%">
          &nbsp;
        </td>
        <td align="center" width="17%">
          &nbsp;
        </td>
        <td align="center" width="17%">
          &nbsp;
        </td>
      </tr>
      <tr>
        <td bgcolor="#01597E" align="center" valign="middle">
          <font color="#FFFFFF">7</font>
        </td>
        <td align="center">&nbsp;</td>
        <td align="center">&nbsp;</td>
        <td align="center">
          ACE meeting
          <br />
          ΔS213{" "}
        </td>
        <td align="center">&nbsp;</td>
        <td align="center">&nbsp;</td>
      </tr>
    </table>
  </Layout>
)

export default AboutPage

export const Head = () => <Seo title="Yuki Matsukura @SFC" />
