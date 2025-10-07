import * as React from "react"
import { Link } from "gatsby"

import Layout from "../../components/layout"
import { Seo } from "../../components/seo"
import { StaticImage } from "gatsby-plugin-image"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faFilePdf,
  faFileArchive,
  faFileAlt,
  faFilePowerpoint,
  faFileWord,
  faFileZipper,
} from "@fortawesome/free-solid-svg-icons"

const AboutPage = () => (
  <Layout>
    <div className="container my-2">
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link to="/">Home</Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            University
          </li>
        </ol>
      </nav>
    </div>

    <div className="container">
      <div className="starter-template">
        <div className="p-3 mb-4 bg-light rounded-3">
          <div className="container">
            <h1 className="display-3">Archive during university.</h1>
            <p>
              2011年9月〜2014年9月までの大学在籍中に制作したドキュメントやプレゼン、ソースコードなどを置いておきます。誰かの役に立つかも知れないので公開しておきます。(2009/5/8)
              <br />
              <br />
              卒業と同時に、SFC-CNSに置いていたファイルが消えてしまい、バックアップが手元に残っているファイルだけを復元しました。
            </p>
            <div className="row">
              <div className="col-md-12 text-end">
                <Link
                  className="btn btn-primary btn-md"
                  href="https://matsu.teraren.com/blog/"
                  role="button"
                >
                  最近のブログはこちら &raquo;
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="contents">
          <h2>卒業論文</h2>
          <dl>
            <dt>タイトル</dt>
            <dd>
              MUGI:利用者の行動履歴と場所の属性を用いた提案型ナビゲーションのための行動モデル
            </dd>

            <dt>概要</dt>
            <dd>
              近年，ユビキタスコンピューティング環境の発達により，GPS やRF
              タグなどのセンサを用いてユーザの位置や行動を取得できるようになった．これにより，システムはユーザの位置や行動を分析し，ユーザの意図や習慣を抽出した行動モデルを構築できる．システムが行動モデルを利用するとユーザの状態に適応したサービスを提供できる．例えば，ユーザが訪問しようする場所へのナビゲーション情報や，訪問しようとしている場所の情報をユーザの指示無しに提示できる．しかし，従来の行動モデル構築手法では，行動履歴のみを用いて行動モデルを構築するため，ユーザは行動履歴が存在しない地域では行動モデルを利用したサービスを享受できない．本研究では，ユーザは既知の地域，訪れたことのない地域に関わらず行動に習慣性があると仮定し，訪れたことのない地域で利用可能な行動モデルを構築する．本研究では，位置情報だけでなく場所の属性を用いた行動モデルMUGIを提案し，MUGIを構築するCHOCO
              システムを構築する．MUGI
              はユーザが滞在した場所の属性と，場所から場所への遷移を隠れマルコフモデルを用いてグラフ化する．CHOCOはユーザの習慣性を利用した行動予測と，ナビゲーション経路の評価機能を提供する．アプリケーションはCHOCO
              の利用により，訪れたことのない地域で行動の習慣性に合ったサービスを提供できる．
            </dd>
          </dl>
          <p className="text-end">
            <Link
              to="/archive/sfc/documents/g-pro/pdf/200502_thesis.pdf"
              className="btn btn-primary"
            >
              <FontAwesomeIcon icon={faFilePdf} />
              PDF
            </Link>
            <a
              href={`/archive/sfc/documents/g-pro/src.zip`}
              className="btn btn-info"
            >
              <FontAwesomeIcon icon={faFileArchive} />
              Java Application (zip compressed)
            </a>
          </p>

          <h2>授業</h2>
          <p>
            SFCでのレポートや授業の最終課題など．プログラムのソースコードなど．
          </p>

          <div>
            <h3>時間割</h3>
            <ul>
              <li>
                <Link to="documents/time_table_2001_9">
                  <i className="fab fa-html5"></i> 1年秋学期
                </Link>
              </li>
              <li>
                <a href="documents/time_table_2002_4">
                  <i className="fab fa-html5"></i> 1年春学期
                </a>
              </li>
              <li>
                <a href="documents/time_table_2002_9">
                  <i className="fab fa-html5"></i> 2年秋学期
                </a>
              </li>
              <li>
                <a href="documents/time_table_2003_4">
                  <i className="fab fa-html5"></i> 2年春学期
                </a>
              </li>
              <li>
                <a href="documents/time_table_2003_9">
                  <i className="fab fa-html5"></i> 2年秋学期
                </a>
              </li>
              <li>
                <a href="documents/time_table_2004_4">
                  <i className="fab fa-html5"></i> 3年春学期
                </a>
              </li>
            </ul>

            <h3>
              ニューラルコンピューティング
              <small className="text-muted">(2004/1)</small>
            </h3>
            <ul>
              <li>
                <a href={`/archive/sfc/documents/neural/neural.lzh`}>
                  <FontAwesomeIcon icon={faFileArchive} /> プログラム (lzh)
                </a>
              </li>
              <li>
                <a href={`/archive/sfc/documents/neural/20030116_00.doc`}>
                  <FontAwesomeIcon icon={faFileWord} /> リポート (doc)
                </a>
              </li>
              <li>
                <a
                  href={`/archive/sfc/documents/neural/neural_final_presentation.ppt`}
                >
                  <FontAwesomeIcon icon={faFilePowerpoint} /> プレゼン (ppt)
                </a>
              </li>
            </ul>
            <h3>グラフィックスプログラミング</h3>
            <ul>
              <li>
                <a href={`/archive/sfc/gp_final.tar.gz`}>
                  <FontAwesomeIcon icon={faFileArchive} /> source code
                </a>
              </li>
            </ul>
            <h3>
              環境情報分析 <small className="text-muted">(2003/7)</small>
            </h3>
            <ul>
              <li>
                <a href={`/archive/sfc/documents/ei/01.doc`}>
                  <FontAwesomeIcon icon={faFileWord} /> 最終課題1 (doc)
                </a>
              </li>
              <li>
                <a href={`/archive/sfc/documents/ei/sample.tex`}>
                  <FontAwesomeIcon icon={faFileAlt} /> 最終課題2 (tex)
                </a>
              </li>
              <li>
                <a href={`/archive/sfc/documents/ei/sample.ps`}>
                  <FontAwesomeIcon icon={faFileAlt} /> 最終課題2 (ps)
                </a>
              </li>
            </ul>
            <h3>
              データベース構築法 <small className="text-muted">(2003/7)</small>
            </h3>
            <ul>
              <li>
                <a href={`/archive/sfc/documents/db.zip`}>
                  <FontAwesomeIcon icon={faFileZipper} />
                  最終課題のシステム
                </a>
              </li>
            </ul>
            <h3>
              CNSガイド <small className="text-muted">(2003/5)</small>
            </h3>
            <ul>
              <li>
                <a href={`/archive/sfc/documents/texinst.zip`}>
                  <FontAwesomeIcon icon={faFileZipper} />
                  How to install TeX environment on Windows
                </a>
              </li>
            </ul>
            <h3>
              インターネット概論
              <small className="text-muted">（2年春学期）</small>
            </h3>
            <ul>
              <li>
                <a href={`/archive/sfc/documents/internet_02/index.pdf`}>
                  <FontAwesomeIcon icon={faFilePdf} />
                  第2回課題
                </a>
              </li>
              <li>
                <a href={`/archive/sfc/documents/internet_02/3.pdf`}>
                  <FontAwesomeIcon icon={faFilePdf} />
                  第3回課題
                </a>
              </li>
              <li>
                <a href={`/archive/sfc/documents/internet_02/iikoto.pdf`}>
                  <FontAwesomeIcon icon={faFilePdf} />
                  第4回課題
                </a>
              </li>
            </ul>
            <h3>
              インターネット構成法
              <small className="text-muted">（2年秋学期） </small>
            </h3>
            <ul>
              <li>
                <a href={`/archive/sfc/documents/internet/0301-internet.ppt`}>
                  <FontAwesomeIcon icon={faFilePowerpoint} /> 最終プレゼン
                </a>
              </li>
            </ul>
            <h3>
              消費とライフスタイル
              <small className="text-muted">（2年秋学期）</small>
            </h3>
            <ul>
              <li>
                <a
                  href={`/archive/sfc/documents/lifestyle/intermediate_04.doc`}
                >
                  <FontAwesomeIcon icon={faFileWord} /> 中間リポート
                </a>
              </li>
              <li>
                <a href={`/archive/sfc/documents/lifestyle/final_01.doc`}>
                  <FontAwesomeIcon icon={faFileWord} /> 期末リポート
                </a>
              </li>
            </ul>
            <h3>
              プレゼンテーション技法
              <small className="text-muted">（1年秋学期）</small>
            </h3>
            <ul>
              <li>
                <a href={`/archive/sfc/documents/moudou.ppt`}>
                  <FontAwesomeIcon icon={faFilePowerpoint} /> 第1回目発表資料
                </a>
              </li>
              <li>
                <a href={`/archive/sfc/documents/feedback.txt`}>
                  <FontAwesomeIcon icon={faFileAlt} /> 第1回目発表評価
                </a>
              </li>
              <li>
                <a href={`/archive/sfc/documents/sekai.ppt`}>
                  <FontAwesomeIcon icon={faFilePowerpoint} /> 第2回目発表資料
                </a>
              </li>
              <li>
                <del>
                  <a href="non_cvs/cgi-bin/connect/index.cgi">
                    ホップ数に応じた友達数検索システム
                  </a>
                </del>
              </li>
            </ul>
            <h3>
              入学課題 <small className="text-muted">（1年秋学期開始時)</small>
            </h3>
            <ul>
              <li>
                <a href={`/archive/sfc/documents/outline.pdf`}>
                  <FontAwesomeIcon icon={faFilePdf} /> 概要
                </a>
              </li>
              <li>
                <a href={`/archive/sfc/documents/entrance_assignment.pdf`}>
                  <FontAwesomeIcon icon={faFilePdf} /> PDF
                </a>
              </li>
            </ul>
            <h3>
              統計解析 <small className="text-muted">（2年春学期）</small>
            </h3>
            <ul>
              <li>
                <a href={`/archive/sfc/documents/stat/proposal.doc`}>
                  <FontAwesomeIcon icon={faFileWord} /> 第1回研究計画書
                </a>
              </li>
              <li>
                <a href={`/archive/sfc/documents/stat/20021031_00.doc`}>
                  <FontAwesomeIcon icon={faFileWord} /> 課題1
                </a>
                （消費関数）
              </li>
              <li>
                <a href={`/archive/sfc/documents/stat/final_01.doc`}>
                  <FontAwesomeIcon icon={faFileWord} /> 最終課題
                </a>
              </li>
            </ul>
            <h3>CNSガイドWeb版作成に関して</h3>
            <p>
              <a href="http://cns-guide.sfc.keio.ac.jp/">CNSガイド</a>
              はSFCのIT環境の使い方を載せたテキストです。1年生の1学期で履修する情報処理で教材として使われています。
            </p>
            <ul>
              <li>
                <a href={`/archive/sfc/documents/guide/2002.zip`}>
                  <FontAwesomeIcon icon={faFileZipper} /> 2002年仕様書
                </a>
              </li>
              <li>
                <a href={`/archive/sfc/documents/guide/2003.zip`}>
                  <FontAwesomeIcon icon={faFileZipper} /> 2003年仕様書
                </a>
              </li>
            </ul>
            <h3>
              情報処理授業 <small className="text-muted">（1年秋学期）</small>
            </h3>
            <ul>
              <li>
                <a href={`/archive/sfc/documents/sdoc.zip`}>
                  <FontAwesomeIcon icon={faFileZipper} /> smartdoc and assets
                </a>
              </li>
            </ul>
            <h3>
              分散処理系論 <small className="text-muted">（2年秋学期） </small>
            </h3>
            <ul>
              <li>
                <a href={`/archive/sfc/documents/distributed/syllabus.dtd`}>
                  dtd
                </a>
              </li>
              <li>
                <a
                  href={`/archive/sfc/documents/distributed/distributed_system.xml`}
                >
                  xml
                </a>
              </li>
            </ul>
            <h3>
              English Skill B Presentation
              <small className="text-muted">（1年春学期）</small>
            </h3>
            <ul>
              <li>
                <a href={`/archive/sfc/documents/umeboshi.ppt`}>
                  <FontAwesomeIcon icon={faFilePowerpoint} /> ppt
                </a>
              </li>
            </ul>
            <h3>
              統計言語 <small className="text-muted">（1年秋学期）</small>
            </h3>
            <ul>
              <li>
                <a href={`/archive/sfc/documents/toukei.doc`}>
                  <FontAwesomeIcon icon={faFileWord} /> 最終課題
                </a>
              </li>
            </ul>
            <h3>
              データ分析 <small className="text-muted">（1年秋学期） </small>
            </h3>
            <ul>
              <li>
                <a href={`/archive/sfc/documents/da/1031_homework_02.doc`}>
                  <FontAwesomeIcon icon={faFileWord} /> 10月31日課題
                </a>
              </li>
              <li>
                <a href={`/archive/sfc/documents/da/1128_homework_02.doc`}>
                  <FontAwesomeIcon icon={faFileWord} /> 11月28日課題
                </a>
              </li>
              <li>
                <a href={`/archive/sfc/documents/da/1219_homework_01.doc`}>
                  <FontAwesomeIcon icon={faFileWord} /> 12月19日課題
                </a>
              </li>
              <li>
                <a href={`/archive/sfc/documents/da/0109_homework_01.doc`}>
                  <FontAwesomeIcon icon={faFileWord} /> 1月9日課題
                </a>
              </li>
              <li>
                <a href={`/archive/sfc/documents/da/final_08_pub.doc`}>
                  <FontAwesomeIcon icon={faFileWord} /> 最終課題
                </a>
              </li>
            </ul>
            <h3>
              資料検索法 <small className="text-muted">（1年春学期） </small>
            </h3>
            <ul>
              <li>
                エッセイ中間
                <a href={`/archive/sfc/documents/resource/essay_0424_02.doc`}>
                  <FontAwesomeIcon icon={faFileWord} /> 1
                </a>
              </li>
              <li>
                エッセイ中間
                <a href={`/archive/sfc/documents/resource/essay_0509_01.doc`}>
                  <FontAwesomeIcon icon={faFileWord} /> 2
                </a>
              </li>
              <li>
                <a href={`/archive/sfc/documents/resource/essay_final_02.doc`}>
                  <FontAwesomeIcon icon={faFileWord} /> エッセイ最終
                </a>
              </li>
              <li>
                <a href={`/archive/sfc/documents/resource/kadai_0424_01.doc`}>
                  <FontAwesomeIcon icon={faFileWord} /> 4月24日課題
                </a>
              </li>
              <li>
                <a href={`/archive/sfc/documents/resource/kadai_0509_02.doc`}>
                  <FontAwesomeIcon icon={faFileWord} /> 5月9日課題
                </a>
              </li>
              <li>
                <a href={`/archive/sfc/documents/resource/kadai_0516_02.doc`}>
                  <FontAwesomeIcon icon={faFileWord} /> 5月16日課題
                </a>
              </li>
              <li>
                <a href={`/archive/sfc/documents/resource/kadai_0522_02.doc`}>
                  <FontAwesomeIcon icon={faFileWord} /> 5月22日課題
                </a>
              </li>
              <li>
                <a
                  href={`/archive/sfc/documents/resource/kadai_0710_final.doc`}
                >
                  <FontAwesomeIcon icon={faFileWord} /> 最終課題
                </a>
              </li>
            </ul>
            <h3>
              最適自転車テスト <small className="text-muted">2002/7</small>
            </h3>
            <ul>
              <li>
                <del>
                  <span>テスト</span>
                </del>
              </li>
              <li>
                <del>
                  <span>log</span>
                </del>
              </li>
            </ul>
            <h3>チートシート</h3>
            <ul>
              <li>
                <a href="/sfc/mule.html">
                  <i className="fab fa-html5"></i> muleコマンドリファレンス
                </a>
              </li>
            </ul>
          </div>
          <h2>Project sites</h2>
          <div className="article">
            <h3>
              コラボレーション技法 （3年春学期）
              <small className="text-muted"> 2位/25グループ</small>
            </h3>
            <ul>
              <li>
                <del>
                  <span>http://www.sfc.keio.ac.jp/~t01549ym/collab/</span>
                </del>
              </li>
            </ul>
            <h3>
              モバイル分散プログラミング ミニプロ
              <small className="text-muted">（1年春学期）</small>
            </h3>
            <ul>
              <li>
                <del>
                  <span>http://www.sfc.keio.ac.jp/~t99845ny/mdp/</span>
                </del>
              </li>
            </ul>
            <h3>
              プログラミング入門C
              <small className="text-muted">（1年春学期）</small>
            </h3>
            <ul>
              <li>
                <a href="/sfc/pro/">http://www.sfc.keio.ac.jp/~t01549ym/pro/</a>
              </li>
            </ul>
            <h3>
              binbouz <small className="text-muted">（1年秋学期〜） </small>
            </h3>
            <ul>
              <li>
                <a href="/sfc/binbou/">
                  http://web.sfc.keio.ac.jp/~t01549ym/binbou/
                </a>
              </li>
            </ul>
          </div>

          <h2>Profile</h2>
          <div>
            慶應義塾大学環境情報学部 (Keio University Faculty of Environmental
            Information)
            <br />
            松倉 友樹 (Yuki MATSUKURA)
          </div>
        </div>
      </div>
    </div>

    <footer className="footer">
      <div className="container">
        <p>
          <a
            rel="license"
            href="http://creativecommons.org/licenses/by-sa/4.0/"
          >
            <StaticImage src="images/88x31.png" />
          </a>
          <br />
          This work is licensed under a
          <a
            rel="license"
            href="http://creativecommons.org/licenses/by-sa/4.0/"
          >
            Creative Commons Attribution-ShareAlike 4.0 International License
          </a>
          .
        </p>
        <p className="text-muted"> Last update: 2018/9/10</p>
      </div>
    </footer>
  </Layout>
)

export default AboutPage

export const Head = () => <Seo title="Yuki Matsukura @SFC" />
