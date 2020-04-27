import React from "react"

import BSILogo from "../images/about/BSI logo.png"

import Layout from "../components/Layout/Layout"
import SEO from "../components/SEO/SEO"
import Section from "../components/Section/Section"
import SpecCardList from "../components/SpecCard/SpecCardList"
import StaffList from "../components/StaffCard/StaffList"
import ImgCard from "../components/ImgCard/ImgCard"
import OurClients from "../components/OurClients/OurClients"
import TestimonyList from "../components/TestimonyCard/TestimonyList"
import CountUpList from "../components/CountUp/CountUpList"
import PageTitleSubNavWrap from "../components/PageTitleSubNaWrap/PageTitleSubNavWrap"

import ContactForm from "../components/ContactForm/ContactForm"

const navItemList = [
  { linkUrl: "#fact", linkText: "fact" },
  { linkUrl: "#people", linkText: "people" },
  { linkUrl: "#clients", linkText: "clients" },
]

function About({ location }) {
  // useEffect(() => {
  //   configureAnchors({ offset: -200, scrollDuration: 400 })
  // })
  console.log("location", location)
  return (
    <Layout>
      <SEO
        title="Arthaus Visual Communications - About us"
        description="Give information about company CEO and employees. Provide more details of our clients"
      />

      <PageTitleSubNavWrap
        pageTitle="about us"
        navItemList={navItemList}
        location={location}
      />

      <Section
        title="Brand development &#38; communications"
        titleColor="burgendy"
      >
        <p>
          Arthaus is a multi discipline design agency, based in the Old Brewery,
          Henley.
        </p>
        <p>
          Our unique mix of design communications expertise and leading edge
          technology capability, enables us to deliver great user experiences
          and tangible business benefits through both traditional and digital
          mediums.
        </p>
        <SpecCardList />
      </Section>
      <CountUpList />
      <section id="testing"></section>
      <StaffList />

      <Section
        title="We build relationships"
        titleColor="darkBlue"
        titleCenter={true}
      >
        <TestimonyList />
      </Section>

      <OurClients />

      <Section
        title="Quality Assurance"
        subTitle="ISO 9001 QUALITY MANAGEMENT CERTIFIED BY BSI, FS707737"
        titleColor="teal"
        titleCenter={true}
      >
        <ImgCard
          className="bsi-logo-wrap padding-bottom--10"
          src={BSILogo}
          alt="BSI logo in teal colour"
        />

        <p className="text--center">
          Arthaus are one of few design agencies with a defined quality
          management system and have been independently assessed by BSI against
          internationally recognised standards endorsing our commitment to
          quality and assurance.
        </p>
      </Section>
      <ContactForm />
    </Layout>
  )
}

export default About
