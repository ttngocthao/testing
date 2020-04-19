import React from "react"
import styles from "./imgCard.module.scss"
function ImgCard({ src, alt, className, width, height }) {
  return (
    <figure className={className}>
      <img
        src={src}
        alt={alt}
        className={styles.imgFullWidth}
        width={width}
        height={height}
      />
    </figure>
  )
}

export default ImgCard
