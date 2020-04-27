import React from "react"
import styles from "./subNav.module.scss"

function SubWorkNav({ navItemList }) {
  return (
    <ul className={`${styles.subNavBar}`}>
      {navItemList &&
        navItemList.map((item, index) => {
          return (
            <li key={index} className={`${styles.subNavItem}}`}>
              <span> {item.linkText}</span>
            </li>
          )
        })}
    </ul>
  )
}

export default SubWorkNav
