import React from "react"
import Layout from "../components/Layout/Layout"
import SEO from "../components/SEO/SEO"

import Section from "../components/Section/Section"
import CaseStudyList from "../components/CaseStudy/CaseStudyList"
import PageTitleSubNavWrap from "../components/PageTitleSubNaWrap/PageTitleSubNavWrap"
import ContactForm from "../components/ContactForm/ContactForm"

const navItemList = [
  { linkUrl: "#all", linkText: "ALL" },
  { linkUrl: "#branding", linkText: "BRANDING" },
  { linkUrl: "#digital", linkText: "DIGITAL" },
  { linkUrl: "#communications", linkText: " COMMUNICATIONS" },
]

function Work({ location }) {
  const filterCase = location.hash.replace("#", "")

  return (
    <Layout>
      <SEO
        title="Arthaus Visual Communications - Work"
        description="Branding, digital marketing, communications, HSBC"
      />{" "}
      <PageTitleSubNavWrap
        pageTitle="work"
        navItemList={navItemList}
        location={location}
      />
      <Section>
        <div className="text--center">
          Whether you need a powerful brand, engaging communications or a great
          user centric digital solution, we have the skills, expertise and
          experience to deliver.
        </div>
      </Section>
      <CaseStudyList filterCase={filterCase === "all" ? "" : filterCase} />
      <ContactForm />
    </Layout>
  )
}

export default Work
