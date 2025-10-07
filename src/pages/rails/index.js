import * as React from "react"
import { Link } from "gatsby"

import Layout from "../../components/layout"
import { Seo } from "../../components/seo"
import Breadcrumb from "../../components/breadcrumb"

const RailsPage = () => (
  <Layout>
    <div className="max-w-7xl mx-auto px-4 py-8">
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Ruby on Rails install" },
        ]}
      />

      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-4">Ruby on Rails Installation</h1>
        <p className="text-lg mb-6">
          This page illustrates how to install and setup Ruby on Rails
          development environment. The goal is to start Rails development using
          Aptana Studio.
        </p>
      </div>

      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6">Select Your OS</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Link
            to="win/"
            className="card bg-base-200 hover:bg-base-300 transition-colors shadow-lg"
          >
            <div className="card-body">
              <h3 className="card-title text-2xl">
                <i className="bi bi-windows mr-2"></i>
                Windows
              </h3>
              <p>Windowsをご利用の方はこちらのドキュメントを参照ください。</p>
            </div>
          </Link>

          <Link
            to="mac/"
            className="card bg-base-200 hover:bg-base-300 transition-colors shadow-lg"
          >
            <div className="card-body">
              <h3 className="card-title text-2xl">
                <i className="bi bi-apple mr-2"></i>
                Mac OS X
              </h3>
              <p>Mac OS Xをご利用の方はこちらのドキュメントを参照ください。</p>
            </div>
          </Link>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6">Deploy to Heroku</h2>
        <div className="card bg-base-200 shadow-lg">
          <div className="card-body">
            <h3 className="card-title text-xl">
              <i className="bi bi-filetype-js mr-2"></i>
              HerokuでRailsのプロジェクトを公開する手順
            </h3>
            <p className="mb-4">
              Railsアプリケーションを無料でHerokuにデプロイする方法を説明します。
            </p>
            <div className="card-actions">
              <a
                href="https://github.com/matsubo/rails4heroku/blob/master/README.md"
                className="btn btn-primary"
                target="_blank"
                rel="noreferrer"
              >
                View on GitHub
              </a>
            </div>
          </div>
        </div>
      </section>

      <div className="mt-8">
        <Link to="/" className="btn btn-ghost">
          <i className="bi bi-chevron-left mr-2"></i>
          Back to Home
        </Link>
      </div>
    </div>
  </Layout>
)

export default RailsPage

export const Head = () => <Seo title="Ruby on Rails Installation" />
