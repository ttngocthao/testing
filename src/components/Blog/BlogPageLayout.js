import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../Layout/Layout"
import PageTitle from "../PageTiltle/PageTitle"
function BlogPageLayout({ data }) {
  const post = data && data.markdownRemark

  return (
    <Layout>
      <Link to="/blog">Back to Blog page</Link>
      <PageTitle pageTitle={post.frontmatter.title} />
      {post && <div dangerouslySetInnerHTML={{ __html: post.html }} />}
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
