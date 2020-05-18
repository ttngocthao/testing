import React from "react"
import { graphql, useStaticQuery } from "gatsby"
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
// export default () => {
//   return (
//     <StaticQuery
//       query={graphql`
//         query BlogQuery {
//           allMarkdownRemark(sort: { order: ASC }) {
//             edges {
//               node {
//                 excerpt(pruneLength: 20)
//                 id
//                 frontmatter {
//                   path
//                   title
//                   date(fromNow: true)
//                 }
//               }
//             }
//           }
//         }
//       `}
//       render={data => <BlogList data={data} />}
//     />
//   )
// }
// export const BlogListQuery = graphql`
//   query BlogListQuery {
//     allMarkdownRemark {
//       edges {
//         node {
//           id
//           frontmatter {
//             title
//             path
//           }
//         }
//       }
//     }
//   }
// `
