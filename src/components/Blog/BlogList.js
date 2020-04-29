import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
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
    <div>
      <h1>This is Blog list</h1>
      <ul>
        {postList &&
          postList.map((item, indx) => {
            return <BlogThumbnail data={item} key={indx} />
          })}
      </ul>
    </div>
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
