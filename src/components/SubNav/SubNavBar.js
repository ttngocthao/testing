import React from "react"
import styles from "./subNav.module.scss"

function StickyNavBar({ navItemList, navSticky }) {
  return (
    <div
      className={`${styles.subNavWrap} ${navSticky ? styles.subNavSticky : ""}`}
    >
      <ul className={`${styles.subNavBar}  `}>
        {navItemList &&
          navItemList.map((item, index) => {
            return (
              <li key={index} className={`${styles.subNavItem} `}>
                <a href={item.linkUrl}>{item.linkText}</a>
              </li>
            )
          })}
      </ul>
    </div>
  )
}

export default StickyNavBar
