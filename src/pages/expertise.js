import React from "react"
import Layout from "../components/Layout/Layout"
import SEO from "../components/SEO/SEO"
import PageTitleSubNavWrap from "../components/PageTitleSubNaWrap/PageTitleSubNavWrap"
import Section from "../components/Section/Section"
import BrandingImgUrl from "../images/expertise/branding.png"
import CommunicationsImgUrl from "../images/expertise/communications.png"
import DigitalImgUrl from "../images/expertise/digital.png"
import ImgCard from "../components/ImgCard/ImgCard"
import ContactForm from "../components/ContactForm/ContactForm"

const navItemList = [
  { linkUrl: "#branding", linkText: "branding" },
  { linkUrl: "#communications", linkText: "communications" },
  { linkUrl: "#digital", linkText: "digital" },
]

function expertise({ location }) {
  return (
    <Layout>
      <SEO
        title="Arthaus Visual Communications - Expertise"
        description="Branding, digital marketing, communications"
      />
      <PageTitleSubNavWrap
        pageTitle="expertise"
        navItemList={navItemList}
        location={location}
      />

      <Section
        title="Branding"
        titleColor="burgendy"
        subTitle2="Develop, nurture, protect &#38; build"
        id="branding"
      >
        <ImgCard
          className="padding-bottom--5 max-width--467 float-right margin-left--15"
          alt="Branding projects"
          src={BrandingImgUrl}
        />

        <p>
          We all love brands, they make a statement about us, they make us feel
          good, they make choosing easier - they are fast! We call them ‘Brain
          Tattoos’. From initial research &#38; brand positioning, through brand
          architecture, core concepts, messaging, visual identity and
          activation, we are helping clients develop their brands both
          externally and internally. Creating corporate identities and employer
          brands along with specific identities for programmes, products and
          events.
        </p>
      </Section>
      <section className="testing"></section>
      <Section
        clearfloat
        title="Communications"
        titleColor="darkBlue"
        subTitle2="Enable, engage &#38; inspire"
        id="communications"
      >
        <ImgCard
          className="padding-bottom--5 max-width--467 float-right margin-left--15 "
          src={CommunicationsImgUrl}
          alt="Communications projects"
        />
        <div>
          <p>
            We’re experts in internal communications and employee engagement.
            From initial positioning and planning, through concepts,
            inspirational activation and ongoing support we have the team that
            can deliver business changing solutions.
          </p>
          <p>
            Engaged organisations are successful organisations and great
            internal communication is at the heart of this. So whether you need
            to evolve your culture, engage employees, develop learning
            capability, build talent or communicate change, we can help.
          </p>
        </div>
      </Section>
      <section className="testing"></section>
      <Section
        clearfloat
        title="Digital"
        titleColor="green"
        subTitle2="Concept, solutioning, design, development, delivery &#38; support"
        id="digital"
      >
        <ImgCard
          className="padding-bottom--5 max-width--467 float-right margin-left--15"
          src={DigitalImgUrl}
          alt="Digital projects"
        />

        <p>
          We design and deliver a wide range of digital projects including,
          corporate websites and intranets, bespoke tools and systems,
          sharepoint environments and mobile apps, for some of the worlds top
          businesses.
        </p>
        <p>
          Our proven processes, great people, original thinking, technology
          capability and ‘real world‘ pragmatism makes us a great partner.
        </p>
      </Section>
      <ContactForm />
    </Layout>
  )
}

export default expertise
