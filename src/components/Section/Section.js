import React from "react"

import styles from "./section.module.scss"

function Section({
  title,
  titleColor,
  subTitle,
  children,
  subTitle2,
  titleCenter,
  id,
}) {
  return (
    <section className={styles.sectionWrap} id={id}>
      <h2
        className={`text--bold heading2 text--${titleColor} ${titleCenter &&
          "text--center"} padding-bottom--10 padding-top--10 ${styles.title}`}
      >
        <span></span>
        {title}
      </h2>
      {subTitle && <h4 className={styles.sectionSubTitle}>{subTitle}</h4>}
      {subTitle2 && (
        <h4 className={`heading4 padding-bottom--10 text--${titleColor}`}>
          {subTitle2}
        </h4>
      )}
      {children}
    </section>
  )
}

export default Section
