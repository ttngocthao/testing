import React from "react"
import { Link } from "gatsby"
import ImgCard from "../ImgCard/ImgCard"
import styles from "./blog.module.scss"
function BlogThumbnail({ data }) {
  //console.log("finding slug", data)
  const { node: postData } = data
  const { id, frontmatter, fields } = postData
  const shortenTitle = title => {
    if (title.length > 22) {
      title = title.slice(0, 19) + " ..."
    }
    return title
  }
  return (
    <li className={styles.thumbnailItem} blogid={id}>
      <ImgCard
        className={styles.thumbnailImg}
        src={frontmatter.thumbnailImg}
        width={220}
        height={220}
      />
      <div className={styles.thumbnailInfo}>
        <h3 className={styles.thumbnailTitle}>
          {shortenTitle(frontmatter.title)}
        </h3>

        <p className={styles.thumbnailIntro}>{frontmatter.shortIntro}</p>
        <Link className={styles.thumbnailLink} to={`blog${fields.slug}`}>
          Read more
        </Link>
      </div>
    </li>
  )
}

export default BlogThumbnail
