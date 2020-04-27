import React from "react"
import { Link } from "gatsby"
import styles from "./caseStudy.module.scss"
import ImgCard from "../ImgCard/ImgCard"

function CaseStudyCard({ caseType, caseUrl, caseTitle, caseImg }) {
  return (
    <li className={`${styles.cardContainer}`}>
      <Link to={caseUrl} className={`${styles.caseLink}`}>
        <h2 className={`${styles.title}`}>{caseTitle}</h2>
        <ImgCard
          src={caseImg}
          alt={`thumbnail image for the work case study - ${caseTitle} - ${caseType}`}
          className={styles.caseImg}
          caption="Explore the work &gt;"
        />
      </Link>
    </li>
  )
}

export default CaseStudyCard
