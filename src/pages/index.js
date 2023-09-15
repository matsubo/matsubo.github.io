import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import { Seo } from "../components/seo"

const IndexPage = () => (
  <Layout>
    <section className="py-5 text-center container">
      <div className="row py-lg-5">
        <div className="col-lg-6 col-md-8 mx-auto">
          <h1 className="fw-light">Welcome to Yuki Matsukura github page</h1>
          <p className="lead text-muted">
            This site is prepared for the document written in Markdown. Please
            visit <a href="https://matsu.teraren.com/">my blog</a> instead.
          </p>
        </div>
      </div>

      <div className="text-start">
        <h2 className="mt-3">Contents</h2>

        <div className="list-group">
          <Link to="rails/" className="list-group-item">
            <h4 className="list-group-item-heading">
              Ruby on Rails Installation
            </h4>
            <p className="list-group-item-text">
              Illustrating how to install Ruby on Rails setup. Goal of the
              document is to start Rails development using Aptana.
            </p>
          </Link>
        </div>
      </div>
    </section>
  </Layout>
)

export default IndexPage

export const Head = () => <Seo />
