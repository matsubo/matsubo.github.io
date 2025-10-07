import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import { Seo } from "../components/seo"

const IndexPage = () => (
  <Layout>
    <section className="py-12">
      <div className="text-center mb-12">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold mb-4">
            Welcome to Yuki Matsukura github page
          </h1>
        </div>
      </div>

      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-6">Archive</h2>

        <div className="space-y-4 mb-12">
          <Link
            to="sfc/"
            className="card bg-base-200 hover:bg-base-300 shadow-xl transition-colors"
          >
            <div className="card-body">
              <h3 className="card-title">
                Archive during the university student.
              </h3>
              <p>Reports during Shonan Fujisawa Campus.</p>
            </div>
          </Link>

          <Link
            to="ht/"
            className="card bg-base-200 hover:bg-base-300 shadow-xl transition-colors"
          >
            <div className="card-body">
              <h3 className="card-title">During Hide Tokuda reserch lab.</h3>
              <p>Archive of academic segment.</p>
            </div>
          </Link>
        </div>

        <h2 className="text-3xl font-bold mb-6">Contents</h2>

        <div className="space-y-4">
          <Link
            to="rails/"
            className="card bg-base-200 hover:bg-base-300 shadow-xl transition-colors"
          >
            <div className="card-body">
              <h3 className="card-title">Ruby on Rails Installation</h3>
              <p>
                Illustrating how to install Ruby on Rails setup. Goal of the
                document is to start Rails development using Aptana.
              </p>
            </div>
          </Link>
        </div>
      </div>
    </section>
  </Layout>
)

export default IndexPage

export const Head = () => <Seo />
