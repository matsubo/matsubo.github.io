import * as React from "react"
import { graphql } from "gatsby"
import { Link } from "gatsby-plugin-react-i18next"

import Layout from "../../../components/layout"
import { Seo } from "../../../components/seo"
import {
  ChevronLeftIcon,
  ArrowDownTrayIcon,
  DocumentTextIcon,
} from "@heroicons/react/24/outline"

const AboutPage = () => (
  <Layout>
    {/* Breadcrumb */}
    <div className="bg-base-200 py-4">
      <div className="container mx-auto px-4">
        <div className="breadcrumbs text-sm">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/rails/">Ruby on Rails install</Link>
            </li>
            <li>Windows</li>
          </ul>
        </div>
      </div>
    </div>

    <div className="container mx-auto px-4 py-12 max-w-4xl">
      {/* Header */}
      <div className="mb-12">
        <h1 className="text-5xl font-bold mb-6 flex items-center gap-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-12 h-12 text-info"
          >
            <path d="M0 3.449L9.75 2.1v9.451H0m10.949-9.602L24 0v11.4H10.949M0 12.6h9.75v9.451L0 20.699M10.949 12.6H24V24l-12.9-1.801" />
          </svg>
          Windows
        </h1>
        <div className="alert alert-info">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="stroke-current shrink-0 w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            ></path>
          </svg>
          <div>
            <p>Windows 7とWindows 8向けのドキュメントです。</p>
            <p className="mt-2">
              ドキュメントはWindows 7環境で作られていますが、Windows
              8でも操作手順は同様です。
            </p>
          </div>
        </div>
      </div>

      {/* Download Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
          <ArrowDownTrayIcon className="h-8 w-8 text-primary" />
          ドキュメントをダウンロード
        </h2>

        <div className="space-y-6">
          {/* PDF Download Card */}
          <div className="card bg-gradient-to-br from-red-500 to-orange-500 text-white shadow-xl">
            <div className="card-body items-center text-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-20 h-20 mb-4"
              >
                <path
                  fillRule="evenodd"
                  d="M5.625 1.5H9a3.75 3.75 0 013.75 3.75v1.875c0 1.036.84 1.875 1.875 1.875H16.5a3.75 3.75 0 013.75 3.75v7.875c0 1.035-.84 1.875-1.875 1.875H5.625a1.875 1.875 0 01-1.875-1.875V3.375c0-1.036.84-1.875 1.875-1.875zm6.905 9.97a.75.75 0 00-1.06 0l-3 3a.75.75 0 101.06 1.06l1.72-1.72V18a.75.75 0 001.5 0v-4.19l1.72 1.72a.75.75 0 101.06-1.06l-3-3z"
                  clipRule="evenodd"
                />
                <path d="M14.25 5.25a5.23 5.23 0 00-1.279-3.434 9.768 9.768 0 016.963 6.963A5.23 5.23 0 0016.5 7.5h-1.875a.375.375 0 01-.375-.375V5.25z" />
              </svg>
              <h3 className="card-title text-2xl mb-2">PDF版</h3>
              <p className="text-lg opacity-90 mb-6">
                PDFリーダーで閲覧可能なドキュメント
              </p>
              <div className="card-actions">
                <a
                  href="/manual_forwin_v12.pdf"
                  className="btn btn-lg btn-secondary gap-2"
                  download
                >
                  <DocumentTextIcon className="h-6 w-6" />
                  PDFをダウンロード
                </a>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="divider text-lg font-semibold">OR</div>

          {/* PowerPoint Download Card */}
          <div className="card bg-gradient-to-br from-orange-500 to-amber-500 text-white shadow-xl">
            <div className="card-body items-center text-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-20 h-20 mb-4"
              >
                <path d="M5.625 1.5c-1.036 0-1.875.84-1.875 1.875v17.25c0 1.035.84 1.875 1.875 1.875h12.75c1.035 0 1.875-.84 1.875-1.875V12.75A3.75 3.75 0 0016.5 9h-1.875a1.875 1.875 0 01-1.875-1.875V5.25A3.75 3.75 0 009 1.5H5.625z" />
                <path d="M12.971 1.816A5.23 5.23 0 0114.25 5.25v1.875c0 .207.168.375.375.375H16.5a5.23 5.23 0 013.434 1.279 9.768 9.768 0 00-6.963-6.963z" />
              </svg>
              <h3 className="card-title text-2xl mb-2">PowerPoint版</h3>
              <p className="text-lg opacity-90 mb-6">
                編集可能なPowerPoint形式のドキュメント
              </p>
              <div className="card-actions">
                <a
                  href="/manual_forwin_v12.pptx"
                  className="btn btn-lg btn-accent gap-2"
                  download
                >
                  <DocumentTextIcon className="h-6 w-6" />
                  PowerPointをダウンロード
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Back Button */}
      <div className="flex justify-start">
        <Link to="/rails/" className="btn btn-ghost gap-2">
          <ChevronLeftIcon className="h-5 w-5" />
          戻る
        </Link>
      </div>
    </div>
  </Layout>
)

export default AboutPage

export const Head = () => <Seo title="Windows - Ruby on Rails Install Guide" />

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
