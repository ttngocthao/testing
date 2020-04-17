import React from "react"
import { Link } from "gatsby"
import styles from "./header.module.scss"

function MenuItem({ url, text }) {
  const isActivePage = ({ isCurrent }) => {
    return isCurrent ? { className: styles.activePage } : {}
  }
  return (
    <li className={styles.menuItem}>
      <Link getProps={isActivePage} to={url}>
        {text}
      </Link>
    </li>
  )
}

export default MenuItem
