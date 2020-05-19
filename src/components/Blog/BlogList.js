import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import styles from "./blog.module.scss"
import BlogThumbnail from "./BlogThumbnail"

function BlogList() {
  const data = useStaticQuery(graphql`
    query BlogListQuery {
      allMarkdownRemark {
        edges {
          node {
            id
            frontmatter {
              title
              path
              shortIntro
              thumbnailImg
            }
            html
          }
        }
      }
    }
  `)
  const postList = data.allMarkdownRemark.edges
  console.log("data blog list", postList)
  // console.log("BlogListQuery", BlogListQuery)
  return (
    <ul className={styles.blogList}>
      {postList &&
        postList.map((item, indx) => {
          return <BlogThumbnail data={item} key={indx} />
        })}
    </ul>
  )
}

export default BlogList
