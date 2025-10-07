import * as React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"

const Breadcrumb = ({ items }) => {
  return (
    <div className="breadcrumbs text-sm mb-4">
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            {item.href ? <Link to={item.href}>{item.label}</Link> : item.label}
          </li>
        ))}
      </ul>
    </div>
  )
}

Breadcrumb.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      href: PropTypes.string,
    })
  ).isRequired,
}

export default Breadcrumb
