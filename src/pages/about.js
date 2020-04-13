import React from "react"
import Layout from "../components/Layout/Layout"
import SEO from "../components/SEO/SEO"
import PageTitle from "../components/PageTiltle/PageTitle"

function about() {
  return (
    <Layout>
      <SEO
        title="Arthaus Visual Communications - About us"
        description="Give information about company CEO and employees. Provide more details of our clients"
      />
      <PageTitle pageTitle="about us" />
    </Layout>
  )
}

export default about
