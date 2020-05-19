import React from "react"
import { Link } from "gatsby"
function BlogThumbnail({ data }) {
  const { node: postData } = data
  const { id, frontmatter } = postData
  return (
    <li className={styles.thumbnailItem} blogid={id}>
      <ImgCard
        className={styles.thumbnailImg}
        src={frontmatter.thumbnailImg}
        width={220}
        height={220}
      />

      <h3 className={styles.thumbnailTitle}>{frontmatter.title}</h3>

      <p className={styles.thumbnailIntro}>{frontmatter.shortIntro}</p>
      <Link className={styles.thumbnailLink} to={frontmatter.path}>
        Read more
      </Link>
    </li>
  )
}

export default BlogThumbnail
