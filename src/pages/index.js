import React from "react"

import Layout from "../components/Layout/Layout"
import SEO from "../components/SEO/SEO"
import GridLayout from "../components/Grid-Homepage/GridLayout"
export default () => {
  return (
    <Layout>
      <SEO />
      <h1 className="sr-only">This is home page</h1>
      <GridLayout />
    </Layout>
  )
}
