import React from "react"
import { graphql } from "gatsby"
import Layout from "../Layout/Layout"

function BlogPageLayout({ data }) {
  const post = data && data.markdownRemark

  return (
    <Layout>
      {post && (
        <>
          <h1>{post.frontmatter.title}</h1>
          <div dangerouslySetInnerHTML={{ __html: post.html }} />
        </>
      )}
    </Layout>
  )
}
export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`
export default BlogPageLayout
