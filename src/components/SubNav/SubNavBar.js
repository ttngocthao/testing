import React from "react"

function StickyNavBar({ navItemList }) {
  return (
    <ul className="subNav-bar display-flex justify-content__space-between align-center padding-horizontal--10 padding-vertical--30">
      {navItemList &&
        navItemList.map((item, index) => {
          return (
            <li key={index} className="subNav-item text--upperCase ">
              <a href={item.linkUrl}>{item.linkText}</a>
            </li>
          )
        })}
    </ul>
  )
}

export default StickyNavBar
