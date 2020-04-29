import React from "react"
import { Link, graphql, StaticQuery } from "gatsby"
function BlogThumbnail({ data }) {
  const { node: postData } = data
  const { id, frontmatter } = postData
  return (
    <li>
      <figure style={{ width: "100px" }}>
        <img src={frontmatter.thumbnailImg} />
      </figure>
      <h2>{frontmatter.title}</h2>
      <p>{id}</p>
      <p>{frontmatter.shortIntro}</p>
      <Link to={frontmatter.path}>Read more</Link>
    </li>
  )
}

export default BlogThumbnail
// export const postQuery = graphql`
//   query MyQuery {
//     markdownRemark(frontmatter: {}) {
//       frontmatter {
//         date(fromNow: true)
//         path
//         title
//       }
//     }
//   }
// `
