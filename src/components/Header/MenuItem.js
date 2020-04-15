import React from "react"
import { Link } from "gatsby"
function MenuItem({ url, text }) {
  const isActivePage = ({ isCurrent }) => {
    return isCurrent ? { className: "active-page" } : {}
  }
  return (
    <li className="menu-item">
      <Link getProps={isActivePage} to={url}>
        {text}
      </Link>
    </li>
  )
}

export default MenuItem
