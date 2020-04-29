import React from "react"
import { Link, graphql, StaticQuery } from "gatsby"
function BlogList({ data }) {
  console.log("data blog", data)
  return (
    <div>
      <h1>This is Blog list</h1>
    </div>
  )
}

// export default BlogList
export default () => {
  return (
    <StaticQuery
      query={graphql`
        query BlogQuery {
          allMarkdownRemark(sort: { order: ASC }) {
            edges {
              node {
                excerpt(pruneLength: 20)
                id
                frontmatter {
                  path
                  title
                  date(fromNow: true)
                }
              }
            }
          }
        }
      `}
      render={data => <BlogList data={data} />}
    />
  )
}
