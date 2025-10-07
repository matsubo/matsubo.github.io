import * as React from "react"
import { Link } from "gatsby"

import Layout from "../../components/layout"
import { Seo } from "../../components/seo"
import { StaticImage } from "gatsby-plugin-image"
import {
  AcademicCapIcon,
  DocumentTextIcon,
  FolderIcon,
  CodeBracketIcon,
  BookOpenIcon,
} from "@heroicons/react/24/outline"

const AboutPage = () => (
  <Layout>
    {/* Hero Section */}
    <div className="bg-gradient-to-r from-primary to-secondary text-primary-content py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl">
          <h1 className="text-5xl font-bold mb-4">
            Archive during the university student.
          </h1>
          <p className="text-lg opacity-90 mb-4">
            2001年9月〜2005年9月までの大学在籍中に制作したドキュメントやプレゼン、ソースコードなどを置いておきます。誰かの役に立つかも知れないので公開しておきます。
          </p>
          <p className="text-base opacity-80">
            卒業と同時に、SFC-CNSに置いていたファイルが消えてしまい、バックアップが手元に残っているファイルだけを復元しました。
          </p>
          <div className="mt-6">
            <a
              href="https://matsu.teraren.com/blog/"
              className="btn btn-accent btn-lg"
              target="_blank"
              rel="noreferrer"
            >
              最近のブログはこちら →
            </a>
          </div>
        </div>
      </div>
    </div>

    <div className="container mx-auto px-4 py-12 max-w-6xl">
      {/* Thesis Section */}
      <section className="mb-16">
        <h2 className="text-4xl font-bold mb-8 flex items-center gap-3">
          <AcademicCapIcon className="h-10 w-10 text-primary" />
          卒業論文
        </h2>
        <div className="card bg-base-100 shadow-xl">
          <div className="card-body">
            <h3 className="card-title text-2xl mb-4">
              MUGI:利用者の行動履歴と場所の属性を用いた提案型ナビゲーションのための行動モデル
            </h3>
            <div className="prose max-w-none">
              <p>
                近年，ユビキタスコンピューティング環境の発達により，GPS
                やRFタグなどのセンサを用いてユーザの位置や行動を取得できるようになった．これにより，システムはユーザの位置や行動を分析し，ユーザの意図や習慣を抽出した行動モデルを構築できる．システムが行動モデルを利用するとユーザの状態に適応したサービスを提供できる．例えば，ユーザが訪問しようする場所へのナビゲーション情報や，訪問しようとしている場所の情報をユーザの指示無しに提示できる．
              </p>
              <p>
                しかし，従来の行動モデル構築手法では，行動履歴のみを用いて行動モデルを構築するため，ユーザは行動履歴が存在しない地域では行動モデルを利用したサービスを享受できない．本研究では，ユーザは既知の地域，訪れたことのない地域に関わらず行動に習慣性があると仮定し，訪れたことのない地域で利用可能な行動モデルを構築する．
              </p>
              <p>
                本研究では，位置情報だけでなく場所の属性を用いた行動モデルMUGIを提案し，MUGIを構築するCHOCOシステムを構築する．MUGIはユーザが滞在した場所の属性と，場所から場所への遷移を隠れマルコフモデルを用いてグラフ化する．CHOCOはユーザの習慣性を利用した行動予測と，ナビゲーション経路の評価機能を提供する．アプリケーションはCHOCOの利用により，訪れたことのない地域で行動の習慣性に合ったサービスを提供できる．
              </p>
            </div>
            <div className="card-actions justify-end mt-4">
              <Link
                to="/paper/200502_thesis.pdf"
                className="btn btn-primary"
                target="_blank"
              >
                <DocumentTextIcon className="h-5 w-5 mr-2" />
                PDF
              </Link>
              <a
                href="/archive/sfc/documents/g-pro/src.zip"
                className="btn btn-secondary"
              >
                <FolderIcon className="h-5 w-5 mr-2" />
                Java Application (zip)
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Time Table Section */}
      <section className="mb-16">
        <h2 className="text-4xl font-bold mb-8 flex items-center gap-3">
          <BookOpenIcon className="h-10 w-10 text-primary" />
          授業・時間割
        </h2>
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <Link
            to="/sfc/documents/time_table_2001_9"
            className="card bg-base-100 shadow-lg hover:shadow-xl transition-all hover:scale-105"
          >
            <div className="card-body">
              <h3 className="card-title">1年秋学期</h3>
              <p className="text-sm opacity-70">2001年秋</p>
            </div>
          </Link>
          <Link
            to="/sfc/documents/time_table_2002_4"
            className="card bg-base-100 shadow-lg hover:shadow-xl transition-all hover:scale-105"
          >
            <div className="card-body">
              <h3 className="card-title">2年春学期</h3>
              <p className="text-sm opacity-70">2002年春</p>
            </div>
          </Link>
          <Link
            to="/sfc/documents/time_table_2002_9"
            className="card bg-base-100 shadow-lg hover:shadow-xl transition-all hover:scale-105"
          >
            <div className="card-body">
              <h3 className="card-title">2年秋学期</h3>
              <p className="text-sm opacity-70">2002年秋</p>
            </div>
          </Link>
          <Link
            to="/sfc/documents/time_table_2003_4"
            className="card bg-base-100 shadow-lg hover:shadow-xl transition-all hover:scale-105"
          >
            <div className="card-body">
              <h3 className="card-title">2年春学期</h3>
              <p className="text-sm opacity-70">2003年春</p>
            </div>
          </Link>
          <Link
            to="/sfc/documents/time_table_2003_9"
            className="card bg-base-100 shadow-lg hover:shadow-xl transition-all hover:scale-105"
          >
            <div className="card-body">
              <h3 className="card-title">2年秋学期</h3>
              <p className="text-sm opacity-70">2003年秋</p>
            </div>
          </Link>
          <Link
            to="/sfc/documents/time_table_2004_4"
            className="card bg-base-100 shadow-lg hover:shadow-xl transition-all hover:scale-105"
          >
            <div className="card-body">
              <h3 className="card-title">3年春学期</h3>
              <p className="text-sm opacity-70">2004年春</p>
            </div>
          </Link>
        </div>
      </section>

      {/* Course Materials Section */}
      <section className="mb-16">
        <h2 className="text-4xl font-bold mb-8 flex items-center gap-3">
          <DocumentTextIcon className="h-10 w-10 text-primary" />
          授業資料
        </h2>
        <div className="space-y-6">
          {/* ニューラルコンピューティング */}
          <div className="card bg-base-100 shadow-lg">
            <div className="card-body">
              <h3 className="card-title text-xl">
                ニューラルコンピューティング
                <span className="badge badge-outline">2004/1</span>
              </h3>
              <div className="flex flex-wrap gap-2 mt-2">
                <a
                  href="/archive/sfc/documents/neural/neural.lzh"
                  className="btn btn-sm btn-outline"
                >
                  <CodeBracketIcon className="h-4 w-4 mr-1" />
                  プログラム (lzh)
                </a>
                <a
                  href="/archive/sfc/documents/neural/20030116_00.doc"
                  className="btn btn-sm btn-outline"
                >
                  <DocumentTextIcon className="h-4 w-4 mr-1" />
                  レポート (doc)
                </a>
                <a
                  href="/archive/sfc/documents/neural/neural_final_presentation.ppt"
                  className="btn btn-sm btn-outline"
                >
                  <DocumentTextIcon className="h-4 w-4 mr-1" />
                  プレゼン (ppt)
                </a>
              </div>
            </div>
          </div>

          {/* グラフィックスプログラミング */}
          <div className="card bg-base-100 shadow-lg">
            <div className="card-body">
              <h3 className="card-title text-xl">
                グラフィックスプログラミング
              </h3>
              <div className="flex flex-wrap gap-2 mt-2">
                <a
                  href="/archive/sfc/gp_final.tar.gz"
                  className="btn btn-sm btn-outline"
                >
                  <CodeBracketIcon className="h-4 w-4 mr-1" />
                  Source code
                </a>
              </div>
            </div>
          </div>

          {/* 環境情報分析 */}
          <div className="card bg-base-100 shadow-lg">
            <div className="card-body">
              <h3 className="card-title text-xl">
                環境情報分析
                <span className="badge badge-outline">2003/7</span>
              </h3>
              <div className="flex flex-wrap gap-2 mt-2">
                <a
                  href="/archive/sfc/documents/ei/01.doc"
                  className="btn btn-sm btn-outline"
                >
                  <DocumentTextIcon className="h-4 w-4 mr-1" />
                  最終課題1 (doc)
                </a>
                <a
                  href="/archive/sfc/documents/ei/sample.tex"
                  className="btn btn-sm btn-outline"
                >
                  <DocumentTextIcon className="h-4 w-4 mr-1" />
                  最終課題2 (tex)
                </a>
                <a
                  href="/archive/sfc/documents/ei/sample.ps"
                  className="btn btn-sm btn-outline"
                >
                  <DocumentTextIcon className="h-4 w-4 mr-1" />
                  最終課題2 (ps)
                </a>
              </div>
            </div>
          </div>

          {/* データベース構築法 */}
          <div className="card bg-base-100 shadow-lg">
            <div className="card-body">
              <h3 className="card-title text-xl">
                データベース構築法
                <span className="badge badge-outline">2003/7</span>
              </h3>
              <div className="flex flex-wrap gap-2 mt-2">
                <a
                  href="/archive/sfc/documents/db.zip"
                  className="btn btn-sm btn-outline"
                >
                  <FolderIcon className="h-4 w-4 mr-1" />
                  最終課題のシステム
                </a>
              </div>
            </div>
          </div>

          {/* CNSガイド */}
          <div className="card bg-base-100 shadow-lg">
            <div className="card-body">
              <h3 className="card-title text-xl">
                CNSガイド
                <span className="badge badge-outline">2003/5</span>
              </h3>
              <div className="flex flex-wrap gap-2 mt-2">
                <a
                  href="/archive/sfc/documents/texinst.zip"
                  className="btn btn-sm btn-outline"
                >
                  <DocumentTextIcon className="h-4 w-4 mr-1" />
                  TeX environment on Windows
                </a>
              </div>
            </div>
          </div>

          {/* インターネット概論 */}
          <div className="card bg-base-100 shadow-lg">
            <div className="card-body">
              <h3 className="card-title text-xl">
                インターネット概論
                <span className="badge badge-outline">2年春学期</span>
              </h3>
              <div className="flex flex-wrap gap-2 mt-2">
                <a
                  href="/archive/sfc/documents/internet_02/index.pdf"
                  className="btn btn-sm btn-outline"
                >
                  <DocumentTextIcon className="h-4 w-4 mr-1" />
                  第2回課題
                </a>
                <a
                  href="/archive/sfc/documents/internet_02/3.pdf"
                  className="btn btn-sm btn-outline"
                >
                  <DocumentTextIcon className="h-4 w-4 mr-1" />
                  第3回課題
                </a>
                <a
                  href="/archive/sfc/documents/internet_02/iikoto.pdf"
                  className="btn btn-sm btn-outline"
                >
                  <DocumentTextIcon className="h-4 w-4 mr-1" />
                  第4回課題
                </a>
              </div>
            </div>
          </div>

          {/* インターネット構成法 */}
          <div className="card bg-base-100 shadow-lg">
            <div className="card-body">
              <h3 className="card-title text-xl">
                インターネット構成法
                <span className="badge badge-outline">2年秋学期</span>
              </h3>
              <div className="flex flex-wrap gap-2 mt-2">
                <a
                  href="/archive/sfc/documents/internet/0301-internet.ppt"
                  className="btn btn-sm btn-outline"
                >
                  <DocumentTextIcon className="h-4 w-4 mr-1" />
                  最終プレゼン
                </a>
              </div>
            </div>
          </div>

          {/* 消費とライフスタイル */}
          <div className="card bg-base-100 shadow-lg">
            <div className="card-body">
              <h3 className="card-title text-xl">
                消費とライフスタイル
                <span className="badge badge-outline">2年秋学期</span>
              </h3>
              <div className="flex flex-wrap gap-2 mt-2">
                <a
                  href="/archive/sfc/documents/lifestyle/intermediate_04.doc"
                  className="btn btn-sm btn-outline"
                >
                  <DocumentTextIcon className="h-4 w-4 mr-1" />
                  中間レポート
                </a>
                <a
                  href="/archive/sfc/documents/lifestyle/final_01.doc"
                  className="btn btn-sm btn-outline"
                >
                  <DocumentTextIcon className="h-4 w-4 mr-1" />
                  期末レポート
                </a>
              </div>
            </div>
          </div>

          {/* プレゼンテーション技法 */}
          <div className="card bg-base-100 shadow-lg">
            <div className="card-body">
              <h3 className="card-title text-xl">
                プレゼンテーション技法
                <span className="badge badge-outline">1年秋学期</span>
              </h3>
              <div className="flex flex-wrap gap-2 mt-2">
                <a
                  href="/archive/sfc/documents/moudou.ppt"
                  className="btn btn-sm btn-outline"
                >
                  <DocumentTextIcon className="h-4 w-4 mr-1" />
                  第1回目発表資料
                </a>
                <a
                  href="/archive/sfc/documents/feedback.txt"
                  className="btn btn-sm btn-outline"
                >
                  <DocumentTextIcon className="h-4 w-4 mr-1" />
                  第1回目発表評価
                </a>
                <a
                  href="/archive/sfc/documents/sekai.ppt"
                  className="btn btn-sm btn-outline"
                >
                  <DocumentTextIcon className="h-4 w-4 mr-1" />
                  第2回目発表資料
                </a>
              </div>
            </div>
          </div>

          {/* 入学課題 */}
          <div className="card bg-base-100 shadow-lg">
            <div className="card-body">
              <h3 className="card-title text-xl">
                入学課題
                <span className="badge badge-outline">1年秋学期開始時</span>
              </h3>
              <div className="flex flex-wrap gap-2 mt-2">
                <a
                  href="/archive/sfc/documents/outline.pdf"
                  className="btn btn-sm btn-outline"
                >
                  <DocumentTextIcon className="h-4 w-4 mr-1" />
                  概要
                </a>
                <a
                  href="/archive/sfc/documents/entrance_assignment.pdf"
                  className="btn btn-sm btn-outline"
                >
                  <DocumentTextIcon className="h-4 w-4 mr-1" />
                  PDF
                </a>
              </div>
            </div>
          </div>

          {/* 統計解析 */}
          <div className="card bg-base-100 shadow-lg">
            <div className="card-body">
              <h3 className="card-title text-xl">
                統計解析
                <span className="badge badge-outline">2年春学期</span>
              </h3>
              <div className="flex flex-wrap gap-2 mt-2">
                <a
                  href="/archive/sfc/documents/stat/proposal.doc"
                  className="btn btn-sm btn-outline"
                >
                  <DocumentTextIcon className="h-4 w-4 mr-1" />
                  第1回研究計画書
                </a>
                <a
                  href="/archive/sfc/documents/stat/20021031_00.doc"
                  className="btn btn-sm btn-outline"
                >
                  <DocumentTextIcon className="h-4 w-4 mr-1" />
                  課題1（消費関数）
                </a>
                <a
                  href="/archive/sfc/documents/stat/final_01.doc"
                  className="btn btn-sm btn-outline"
                >
                  <DocumentTextIcon className="h-4 w-4 mr-1" />
                  最終課題
                </a>
              </div>
            </div>
          </div>

          {/* CNSガイドWeb版作成 */}
          <div className="card bg-base-100 shadow-lg">
            <div className="card-body">
              <h3 className="card-title text-xl">CNSガイドWeb版作成</h3>
              <p className="text-sm mb-3">
                <a
                  href="http://cns-guide.sfc.keio.ac.jp/"
                  className="link link-primary"
                  target="_blank"
                  rel="noreferrer"
                >
                  CNSガイド
                </a>
                はSFCのIT環境の使い方を載せたテキストです。1年生の1学期で履修する情報処理で教材として使われています。
              </p>
              <div className="flex flex-wrap gap-2 mt-2">
                <a
                  href="/archive/sfc/documents/guide/2002.zip"
                  className="btn btn-sm btn-outline"
                >
                  <FolderIcon className="h-4 w-4 mr-1" />
                  2002年仕様書
                </a>
                <a
                  href="/archive/sfc/documents/guide/2003.zip"
                  className="btn btn-sm btn-outline"
                >
                  <FolderIcon className="h-4 w-4 mr-1" />
                  2003年仕様書
                </a>
              </div>
            </div>
          </div>

          {/* 情報処理授業 */}
          <div className="card bg-base-100 shadow-lg">
            <div className="card-body">
              <h3 className="card-title text-xl">
                情報処理授業
                <span className="badge badge-outline">1年秋学期</span>
              </h3>
              <div className="flex flex-wrap gap-2 mt-2">
                <a
                  href="/archive/sfc/documents/sdoc.zip"
                  className="btn btn-sm btn-outline"
                >
                  <FolderIcon className="h-4 w-4 mr-1" />
                  smartdoc and assets
                </a>
              </div>
            </div>
          </div>

          {/* 分散処理系論 */}
          <div className="card bg-base-100 shadow-lg">
            <div className="card-body">
              <h3 className="card-title text-xl">
                分散処理系論
                <span className="badge badge-outline">2年秋学期</span>
              </h3>
              <div className="flex flex-wrap gap-2 mt-2">
                <a
                  href="/archive/sfc/documents/distributed/syllabus.dtd"
                  className="btn btn-sm btn-outline"
                >
                  <DocumentTextIcon className="h-4 w-4 mr-1" />
                  DTD
                </a>
                <a
                  href="/archive/sfc/documents/distributed/distributed_system.xml"
                  className="btn btn-sm btn-outline"
                >
                  <DocumentTextIcon className="h-4 w-4 mr-1" />
                  XML
                </a>
              </div>
            </div>
          </div>

          {/* English Skill B Presentation */}
          <div className="card bg-base-100 shadow-lg">
            <div className="card-body">
              <h3 className="card-title text-xl">
                English Skill B Presentation
                <span className="badge badge-outline">1年春学期</span>
              </h3>
              <div className="flex flex-wrap gap-2 mt-2">
                <a
                  href="/archive/sfc/documents/umeboshi.ppt"
                  className="btn btn-sm btn-outline"
                >
                  <DocumentTextIcon className="h-4 w-4 mr-1" />
                  PPT
                </a>
              </div>
            </div>
          </div>

          {/* 統計言語 */}
          <div className="card bg-base-100 shadow-lg">
            <div className="card-body">
              <h3 className="card-title text-xl">
                統計言語
                <span className="badge badge-outline">1年秋学期</span>
              </h3>
              <div className="flex flex-wrap gap-2 mt-2">
                <a
                  href="/archive/sfc/documents/toukei.doc"
                  className="btn btn-sm btn-outline"
                >
                  <DocumentTextIcon className="h-4 w-4 mr-1" />
                  最終課題
                </a>
              </div>
            </div>
          </div>

          {/* データ分析 */}
          <div className="card bg-base-100 shadow-lg">
            <div className="card-body">
              <h3 className="card-title text-xl">
                データ分析
                <span className="badge badge-outline">1年秋学期</span>
              </h3>
              <div className="flex flex-wrap gap-2 mt-2">
                <a
                  href="/archive/sfc/documents/da/1031_homework_02.doc"
                  className="btn btn-sm btn-outline"
                >
                  10月31日課題
                </a>
                <a
                  href="/archive/sfc/documents/da/1128_homework_02.doc"
                  className="btn btn-sm btn-outline"
                >
                  11月28日課題
                </a>
                <a
                  href="/archive/sfc/documents/da/1219_homework_01.doc"
                  className="btn btn-sm btn-outline"
                >
                  12月19日課題
                </a>
                <a
                  href="/archive/sfc/documents/da/0109_homework_01.doc"
                  className="btn btn-sm btn-outline"
                >
                  1月9日課題
                </a>
                <a
                  href="/archive/sfc/documents/da/final_08_pub.doc"
                  className="btn btn-sm btn-outline"
                >
                  最終課題
                </a>
              </div>
            </div>
          </div>

          {/* 資料検索法 */}
          <div className="card bg-base-100 shadow-lg">
            <div className="card-body">
              <h3 className="card-title text-xl">
                資料検索法
                <span className="badge badge-outline">1年春学期</span>
              </h3>
              <div className="flex flex-wrap gap-2 mt-2">
                <a
                  href="/archive/sfc/documents/resource/essay_0424_02.doc"
                  className="btn btn-sm btn-outline"
                >
                  エッセイ中間1
                </a>
                <a
                  href="/archive/sfc/documents/resource/essay_0509_01.doc"
                  className="btn btn-sm btn-outline"
                >
                  エッセイ中間2
                </a>
                <a
                  href="/archive/sfc/documents/resource/essay_final_02.doc"
                  className="btn btn-sm btn-outline"
                >
                  エッセイ最終
                </a>
                <a
                  href="/archive/sfc/documents/resource/kadai_0424_01.doc"
                  className="btn btn-sm btn-outline"
                >
                  4月24日課題
                </a>
                <a
                  href="/archive/sfc/documents/resource/kadai_0509_02.doc"
                  className="btn btn-sm btn-outline"
                >
                  5月9日課題
                </a>
                <a
                  href="/archive/sfc/documents/resource/kadai_0516_02.doc"
                  className="btn btn-sm btn-outline"
                >
                  5月16日課題
                </a>
                <a
                  href="/archive/sfc/documents/resource/kadai_0522_02.doc"
                  className="btn btn-sm btn-outline"
                >
                  5月22日課題
                </a>
                <a
                  href="/archive/sfc/documents/resource/kadai_0710_final.doc"
                  className="btn btn-sm btn-outline"
                >
                  最終課題
                </a>
              </div>
            </div>
          </div>

          {/* チートシート */}
          <div className="card bg-base-100 shadow-lg">
            <div className="card-body">
              <h3 className="card-title text-xl">チートシート</h3>
              <div className="flex flex-wrap gap-2 mt-2">
                <Link to="/sfc/mule" className="btn btn-sm btn-outline">
                  <DocumentTextIcon className="h-4 w-4 mr-1" />
                  muleコマンドリファレンス
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Sites Section */}
      <section className="mb-16">
        <h2 className="text-4xl font-bold mb-8 flex items-center gap-3">
          <CodeBracketIcon className="h-10 w-10 text-primary" />
          Project Sites
        </h2>
        <div className="space-y-6">
          <div className="card bg-base-100 shadow-lg">
            <div className="card-body">
              <h3 className="card-title text-xl">
                コラボレーション技法（3年春学期）
                <span className="badge badge-success">2位/25グループ</span>
              </h3>
              <p className="text-sm opacity-70 line-through">
                http://www.sfc.keio.ac.jp/~t01549ym/collab/
              </p>
            </div>
          </div>

          <div className="card bg-base-100 shadow-lg">
            <div className="card-body">
              <h3 className="card-title text-xl">
                モバイル分散プログラミング ミニプロ
                <span className="badge badge-outline">1年春学期</span>
              </h3>
              <p className="text-sm opacity-70 line-through">
                http://www.sfc.keio.ac.jp/~t99845ny/mdp/
              </p>
            </div>
          </div>

          <div className="card bg-base-100 shadow-lg">
            <div className="card-body">
              <h3 className="card-title text-xl">
                プログラミング入門C
                <span className="badge badge-outline">1年春学期</span>
              </h3>
              <Link to="/sfc/pro/" className="link link-primary">
                http://www.sfc.keio.ac.jp/~t01549ym/pro/
              </Link>
            </div>
          </div>

          <div className="card bg-base-100 shadow-lg">
            <div className="card-body">
              <h3 className="card-title text-xl">
                binbouz
                <span className="badge badge-outline">1年秋学期〜</span>
              </h3>
              <Link to="/sfc/binbou/" className="link link-primary">
                http://web.sfc.keio.ac.jp/~t01549ym/binbou/
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Profile Section */}
      <section className="mb-16">
        <div className="card bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title text-3xl mb-4">Profile</h2>
            <div className="prose max-w-none">
              <p>
                慶應義塾大学環境情報学部 (Keio University Faculty of
                Environmental Information)
              </p>
              <p>松倉 友樹 (Yuki MATSUKURA)</p>
            </div>
          </div>
        </div>
      </section>
    </div>

    {/* Footer */}
    <footer className="footer footer-center p-10 bg-base-200 text-base-content rounded-t-3xl">
      <div>
        <p className="text-sm opacity-70 mt-4">Last update: 2018/9/10</p>
      </div>
    </footer>
  </Layout>
)

export default AboutPage

export const Head = () => <Seo title="Yuki Matsukura @SFC" />
