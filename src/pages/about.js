import React from "react"
import Layout from "../components/Layout/Layout"
import SEO from "../components/SEO/SEO"
import PageTitle from "../components/PageTiltle/PageTitle"
import SubNavBar from "../components/SubNav/SubNavBar"
import Section from "../components/Section/Section"

import BSILogo from "../images/about/BSI logo.png"
import SpecCardList from "../components/SpecCard/SpecCardList"

const navItemList = [
  { linkUrl: "#fact", linkText: "fact" },
  { linkUrl: "#people", linkText: "people" },
  { linkUrl: "#clients", linkText: "clients" },
]

function about() {
  return (
    <Layout>
      <SEO
        title="Arthaus Visual Communications - About us"
        description="Give information about company CEO and employees. Provide more details of our clients"
      />
      <PageTitle pageTitle="about us" />
      <SubNavBar navItemList={navItemList} />

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
        <div>4 numbers</div>
      </Section>
      <Section title="Our people" titleColor="green" titleCenter={true}>
        <p className="text--center">
          A diverse team of creative designers and developers headed up by a
          very experienced group of directors.
        </p>
        <div>list of staff</div>
      </Section>
      <Section
        title="We build relationships"
        titleColor="darkBlue"
        titleCenter={true}
      >
        <div>Testimony list here</div>
      </Section>
      <Section
        title="Our clients"
        subTitle="SOME OF THE GREAT BUSINESSES WE WORK WITH"
        titleColor="mainOrange"
        titleCenter={true}
      >
        <div>Logo of our clients</div>
      </Section>
      <Section
        title="Quality Assurance"
        subTitle="ISO 9001 QUALITY MANAGEMENT CERTIFIED BY BSI, FS707737"
        titleColor="teal"
        titleCenter={true}
      >
        <figure className="bsi-logo-wrap padding-bottom--10">
          <img
            src={BSILogo}
            alt="BSI logo in teal colour"
            className="img--full-width"
          />
        </figure>
        <p className="text--center">
          Arthaus are one of few design agencies with a defined quality
          management system and have been independently assessed by BSI against
          internationally recognised standards endorsing our commitment to
          quality and assurance.
        </p>
      </Section>
      <div>Contact Form here</div>
    </Layout>
  )
}

export default about
