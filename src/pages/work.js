import React from "react"
import Layout from "../components/Layout/Layout"
import SEO from "../components/SEO/SEO"
import PageTitle from "../components/PageTiltle/PageTitle"

const navItemList = [
  { linkUrl: "#all", linkText: "all" },
  { linkUrl: "#branding", linkText: "BRANDING" },
  { linkUrl: "#digital", linkText: "DIGITAL" },
  { linkUrl: "#communication", linkText: " COMMUNICATIONS" },
]

function work() {
  return (
    <Layout>
      <SEO
        title="Arthaus Visual Communications - Work"
        description="Branding, digital marketing, communications, HSBC"
      />
      <PageTitle pageTitle="work" />
    </Layout>
  )
}

export default work
