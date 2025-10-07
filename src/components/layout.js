import * as React from "react"
import PropTypes from "prop-types"

import Footer from "./footer"
import "../styles/global.css"

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen bg-base-100 flex flex-col">
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
