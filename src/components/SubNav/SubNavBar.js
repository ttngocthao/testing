import React from "react"

import Scrollspy from "react-scrollspy"
import styles from "./subNav.module.scss"

function StickyNavBar({ navItemList, navSticky, location }) {
  const items =
    navItemList && navItemList.map(item => item.linkUrl.replace("#", ""))
  let indicateWorkType = false

  //if let allWorks = location.pathname==='/work' && location.hash==='' && item.linkUrl==='#all'
  //location.pathname==='/work' && location.hash===linkUrl
  // console.log("items", items)

  return (
    <div
      className={`${styles.subNavWrap} ${navSticky ? styles.subNavSticky : ""}`}
    >
      <Scrollspy
        items={items}
        offset={-300}
        currentClassName={styles.subNavItemActive}
        className={`${styles.subNavBar}  `}
      >
        {navItemList &&
          navItemList.map((item, index) => {
            if (
              location.pathname === "/work" &&
              (location.hash === "") & (item.linkUrl === "#all")
            ) {
              indicateWorkType = true
            } else if (
              location.pathname === "/work" &&
              location.hash === item.linkUrl
            ) {
              indicateWorkType = true
            } else {
              indicateWorkType = false
            }
            return (
              <li
                key={index}
                className={`${styles.subNavItem} ${
                  indicateWorkType ? styles.subNavItemActive : ""
                }`}
              >
                <a href={item.linkUrl}>{item.linkText}</a>
                {/* <Link to={item.linkUrl}>{item.linkText}</Link> */}
                {/* <span onClick={() => scrollTo(item.linkUrl)}>
                  {item.linkText}
                </span> */}
              </li>
            )
          })}
      </Scrollspy>
      {/* <ul className={`${styles.subNavBar}  `}>
      
      </ul> */}
    </div>
  )
}

export default StickyNavBar
