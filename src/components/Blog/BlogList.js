import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import styles from "./blog.module.scss"
import BlogThumbnail from "./BlogThumbnail"

function BlogList({ pageContext }) {
  const data = useStaticQuery(graphql`
    query BlogListQuery {
      allMarkdownRemark(
        filter: { fields: { sourceName: { eq: "markdownBlog" } } }
      ) {
        edges {
          node {
            id
            fields {
              slug
            }
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
  console.log("page context", pageContext)
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
