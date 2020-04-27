import React from "react"
import styles from "./imgCard.module.scss"
function ImgCard({ src, alt, className, width, height, caption }) {
  return (
    <figure className={className}>
      <img
        src={src}
        alt={alt}
        className={styles.imgFullWidth}
        width={width}
        height={height}
      />
      {caption ? <figcaption>{caption}</figcaption> : null}
    </figure>
  )
}

export default ImgCard
