import React from "react"
import BlogList from "../components/Blog/BlogList"
import Layout from "../components/Layout/Layout"
import PageTitle from "../components/PageTiltle/PageTitle"

function Blog() {
  return (
    <Layout>
      <PageTitle pageTitle="Tool Kits" />

      <BlogList />
    </Layout>
  )
}

export default Blog
