import React from "react"
import styles from "./pageTitle.module.scss"
function PageTitle({ pageTitle, reference }) {
  return (
    <h1 className={styles.titleContainer} ref={reference}>
      <span className={styles.titleText}>{pageTitle}</span>
    </h1>
  )
}

export default PageTitle
