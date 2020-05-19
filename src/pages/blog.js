import React from "react"
import Layout from "../components/Layout/Layout"
import BlogList from "../components/Blog/BlogList"
import PageTitle from "../components/PageTiltle/PageTitle"

function Blog() {
  return (
    <Layout>
      <SEO
        title="Arthaus Visual Communications - Blog"
        description="Branding, digital marketing, communications, HSBC"
      />
      <PageTitle pageTitle="Tool kit" />
      <BlogList />
    </Layout>
  )
}

export default Blog
