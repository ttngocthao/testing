import React from "react"
import { Link } from "gatsby"
import styles from "./moreWorks.module.scss"
const ShowMoreWorks = ({ itemData }) => {
  const { linkUrl, title, imgUrl } = itemData
  return (
    <li className={styles.item}>
      <Link to={linkUrl} className={styles.itemLink}>
        <h4 className={styles.itemTitle}>{title}</h4>
        <img className={styles.itemImg} src={imgUrl} alt="" />
      </Link>
    </li>
  )
}

export default ShowMoreWorks
