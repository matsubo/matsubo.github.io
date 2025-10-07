import * as React from "react"
import { Link } from "gatsby"

import Layout from "../../../components/layout"
import { Seo } from "../../../components/seo"
import { ChevronLeftIcon } from "@heroicons/react/24/outline"
import { CommandLineIcon } from "@heroicons/react/24/solid"

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
            <li>Mac OS X</li>
          </ul>
        </div>
      </div>
    </div>

    <div className="container mx-auto px-4 py-12 max-w-4xl">
      {/* Header */}
      <div className="mb-12">
        <h1 className="text-5xl font-bold mb-6 flex items-center gap-3">
          <CommandLineIcon className="h-12 w-12 text-primary" />
          Mac OS X
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
            <p>
              現在利用中のバージョンを確認する方法は
              <a
                href="http://www.apple.com/jp/support/dotmac/os_version.html"
                className="link link-primary font-semibold"
                target="_blank"
                rel="noreferrer"
              >
                こちら
              </a>
              をご参照ください。
            </p>
            <p className="mt-2">
              現時点で最新版である、Mac OS 10.9 (Marvericks)
              を利用するのを推奨します。
            </p>
          </div>
        </div>
      </div>

      {/* Version Cards */}
      <div className="space-y-6 mb-12">
        <Link
          to="10_8/"
          className="card bg-base-100 shadow-lg hover:shadow-xl transition-all hover:scale-[1.02]"
        >
          <div className="card-body">
            <h2 className="card-title text-2xl">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-8 h-8 text-secondary"
              >
                <path d="M11.47 1.72a.75.75 0 011.06 0l3 3a.75.75 0 01-1.06 1.06l-1.72-1.72V7.5h-1.5V4.06L9.53 5.78a.75.75 0 01-1.06-1.06l3-3zM11.25 7.5V15a.75.75 0 001.5 0V7.5h3.75a3 3 0 013 3v9a3 3 0 01-3 3h-9a3 3 0 01-3-3v-9a3 3 0 013-3h3.75z" />
              </svg>
              Mac OS X 10.8 (Snow Leopard)
            </h2>
            <p className="text-base-content/70">
              2012年7月25日に発売されたバージョンです。
            </p>
            <div className="card-actions justify-end mt-2">
              <div className="badge badge-outline">Legacy</div>
            </div>
          </div>
        </Link>

        <Link
          to="10_9/"
          className="card bg-primary text-primary-content shadow-lg hover:shadow-xl transition-all hover:scale-[1.02]"
        >
          <div className="card-body">
            <h2 className="card-title text-2xl">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-8 h-8"
              >
                <path d="M11.47 1.72a.75.75 0 011.06 0l3 3a.75.75 0 01-1.06 1.06l-1.72-1.72V7.5h-1.5V4.06L9.53 5.78a.75.75 0 01-1.06-1.06l3-3zM11.25 7.5V15a.75.75 0 001.5 0V7.5h3.75a3 3 0 013 3v9a3 3 0 01-3 3h-9a3 3 0 01-3-3v-9a3 3 0 013-3h3.75z" />
              </svg>
              Mac OS X 10.9 (Mavericks)
              <span className="badge badge-secondary badge-lg">推奨</span>
            </h2>
            <p className="opacity-90">
              2013年10月22日に無料でリリースされました。こちらのOSを利用するのを推奨します。
            </p>
            <div className="card-actions justify-end mt-2">
              <div className="badge badge-secondary badge-lg">Recommended</div>
            </div>
          </div>
        </Link>
      </div>

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

export const Head = () => <Seo title="Mac OS X - Ruby on Rails Install Guide" />
