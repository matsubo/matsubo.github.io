import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import { Seo } from "../components/seo"

const IndexPage = () => (
  <Layout>
    <section className="py-12 px-4">
      <div className="text-center mb-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Welcome to Yuki Matsukura's GitHub Page
          </h1>
          <p className="text-lg text-base-content/80 mb-8 max-w-2xl mx-auto">
            Software Engineer passionate about web development, open source, and
            sharing knowledge through code and writing.
          </p>

          {/* Social Links */}
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <a
              href="https://blog.teraren.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline btn-accent gap-2 hover:scale-105 transition-transform"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-5 h-5"
              >
                <path d="M11.25 4.533A9.707 9.707 0 006 3a9.735 9.735 0 00-3.25.555.75.75 0 00-.5.707v14.25a.75.75 0 001 .707A8.237 8.237 0 016 18.75c1.995 0 3.823.707 5.25 1.886V4.533zM12.75 20.636A8.214 8.214 0 0118 18.75c.966 0 1.89.166 2.75.47a.75.75 0 001-.708V4.262a.75.75 0 00-.5-.707A9.735 9.735 0 0018 3a9.707 9.707 0 00-5.25 1.533v16.103z" />
              </svg>
              Blog
            </a>
            <a
              href="https://zenn.dev/matsubokkuri"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline btn-primary gap-2 hover:scale-105 transition-transform"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-5 h-5"
              >
                <path d="M.264 23.771h4.984c.264 0 .498-.147.645-.352L19.614.874c.176-.293-.029-.645-.381-.645h-4.72c-.235 0-.44.117-.557.323L.03 23.361c-.088.176-.029.41.234.41zM17.445 23.419l6.479-10.408c.205-.323-.029-.733-.41-.733h-4.691c-.176 0-.352.088-.44.235l-6.655 10.643c-.176.264.029.616.352.616h4.779c.234-.001.468-.118.586-.353z" />
              </svg>
              Zenn
            </a>
            <a
              href="https://x.com/matsubokkuri"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline gap-2 hover:scale-105 transition-transform"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-5 h-5"
              >
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
              X (Twitter)
            </a>
            <a
              href="https://github.com/matsubo"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline gap-2 hover:scale-105 transition-transform"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-5 h-5"
              >
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
              GitHub
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto space-y-12">
        <section>
          <h2 className="text-3xl font-bold mb-8 text-center">Archive</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <Link
              to="sfc/"
              className="card bg-base-200 hover:bg-base-300 hover:shadow-2xl transition-all duration-300 group"
            >
              <div className="card-body">
                <h3 className="card-title group-hover:text-primary transition-colors">
                  University Archive
                </h3>
                <p className="text-base-content/70">
                  Academic reports and projects from Shonan Fujisawa Campus
                  period.
                </p>
              </div>
            </Link>

            <Link
              to="ht/"
              className="card bg-base-200 hover:bg-base-300 hover:shadow-2xl transition-all duration-300 group"
            >
              <div className="card-body">
                <h3 className="card-title group-hover:text-primary transition-colors">
                  Research Lab Archive
                </h3>
                <p className="text-base-content/70">
                  Academic work and research from Hide Tokuda laboratory.
                </p>
              </div>
            </Link>
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-8 text-center">
            Technical Content
          </h2>
          <div className="grid gap-6">
            <Link
              to="rails/"
              className="card bg-base-200 hover:bg-base-300 hover:shadow-2xl transition-all duration-300 group"
            >
              <div className="card-body">
                <h3 className="card-title group-hover:text-primary transition-colors">
                  Ruby on Rails Setup Guide
                </h3>
                <p className="text-base-content/70">
                  Complete installation and setup guide for Ruby on Rails
                  development environment with Aptana integration.
                </p>
                <div className="card-actions justify-end mt-4">
                  <div className="badge badge-outline">Rails</div>
                  <div className="badge badge-outline">Tutorial</div>
                </div>
              </div>
            </Link>
          </div>
        </section>
      </div>
    </section>
  </Layout>
)

export default IndexPage

export const Head = () => <Seo />
