import React from "react"

import Layout from "../components/Layout/Layout"
import SEO from "../components/SEO/SEO"
export default () => {
  // console.log("data", data) //for the query
  return (
    <Layout>
      <SEO />
      <h1>This is home page</h1>
    </Layout>
  )
}
