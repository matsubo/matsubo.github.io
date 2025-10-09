import * as React from "react"
import { graphql } from "gatsby"
import { Link } from "gatsby-plugin-react-i18next"

import Layout from "../components/layout"
import { Seo } from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <div className="hero min-h-[60vh] bg-base-200">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-6xl font-bold mb-4">404</h1>
          <p className="text-xl mb-6">Page Not Found</p>
          <p className="mb-6">お探しのページは見つかりませんでした。</p>
          <Link to="/" className="btn btn-primary">
            ホームに戻る
          </Link>
        </div>
      </div>
    </div>
  </Layout>
)

export default NotFoundPage

export const Head = () => <Seo title="404: Not Found" />

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
