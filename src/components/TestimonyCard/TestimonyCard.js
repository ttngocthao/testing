import React from "react"
import ImgCard from "../ImgCard/ImgCard"
import styles from "./testimony.module.scss"
function linesToParagraphs(str) {
  return str.split("<br/> ")
}
function TestimonyCard({ itemData }) {
  const { text, imgUrl, imgAlt, name, role, company } = itemData

  return (
    <li className={styles.testimonyCard}>
      <div className={styles.testimonyText}>
        {linesToParagraphs(text).map((line, indx) => {
          return <p key={indx}>{line}</p>
        })}
      </div>
      <div className={styles.testimonyInfo}>
        <ImgCard src={imgUrl} alt={imgAlt} className={styles.testimonyLogo} />
        <p className="text--bold heading5 text--lightGray text--center">
          {name}
        </p>
        <p className="text--bold heading5 text--darkBlue text--center">
          {role} | <span className="text--upperCase">{company}</span>
        </p>
      </div>
    </li>
  )
}

export default TestimonyCard
