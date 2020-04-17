import React from "react"
import ImgCard from "../ImgCard/ImgCard"

import styles from "./specCard.module.scss"

function SpecCard({ itemData }) {
  const { imgUrl, text, color } = itemData
  return (
    <li className={styles.specCard}>
      <ImgCard src={imgUrl} alt={text} className={styles.specIon} />

      <p className={`text--${color} text-center`}>{text}</p>
    </li>
  )
}

export default SpecCard
