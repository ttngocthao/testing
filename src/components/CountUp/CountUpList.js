import React from "react"
import CountUpItem from "./CountUpItem"
import styles from "./countUp.module.scss"
const countItemData = [
  { end: 25, topText: "IN BUSINESS FOR", bottomText: "year", unit: null },
  { end: 100, topText: "WE ARE", bottomText: "PRIVATELY OWNED", unit: "%" },
  {
    end: 14,
    topText: "WE‘VE CREATED",
    bottomText: "THOUSAND JOB TICKETS",
    unit: null,
  },
  {
    end: 40,
    topText: "WE HAVE OVER",
    bottomText: "YEARS OF EXPERIENCE",
    unit: null,
  },
]
function CountUpList() {
  return (
    <section className={styles.section}>
      <h4 className={styles.title}>A FEW FACTS ABOUT US</h4>
      <ul className={styles.countList}>
        {countItemData &&
          countItemData.map((item, index) => {
            return (
              <CountUpItem
                key={index}
                end={item.end}
                topText={item.topText}
                bottomText={item.bottomText}
                unit={item.unit}
              />
            )
          })}
      </ul>
    </section>
  )
}

export default CountUpList
