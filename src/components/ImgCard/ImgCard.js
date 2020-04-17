import React from "react"
import styles from "./imgCard.module.scss"
function ImgCard({ src, alt, className }) {
  return (
    <figure className={className}>
      <img src={src} alt={alt} className={styles.imgFullWidth} />
    </figure>
  )
}

export default ImgCard
