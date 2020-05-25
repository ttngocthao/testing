import React from "react"
import Layout from "../components/Layout/Layout"
import SEO from "../components/SEO/SEO"
import PageTitle from "../components/PageTiltle/PageTitle"
import GoogleMap from "../components/GoogleMap/GoogleMap"
import ContactForm from "../components/ContactForm/ContactForm"
import DirectionForm from "../components/DirectionForm/DirectionForm"

function contact() {
  return (
    <Layout>
      <SEO
        title="Arthaus Visual Communications - Contact Us"
        description="Branding, digital marketing, communications"
      />
      <PageTitle pageTitle="Contact us" />
      <h4 className="heading4 text--center">We'd love to hear from you</h4>
      <h2 className="heading2 text--center padding-vertical--20">
        Drop in and say hello!
      </h2>
      <p className="text--center">
        Arthaus Visual Communications,
        <br />
        24/26 Old Brewery Lane, New Street,
        <br />
        Henley on Thames
        <br />
        Oxon, RG9 2DE
      </p>
      <h3 className="heading3 text--center padding-top--20">
        Need directions?
      </h3>
      <DirectionForm />
      <h3 className="heading3 text--center">...or give us a call</h3>
      <p className="text--center">
        <a href="tel:+441628487333">+44 (0)1628 487333</a>
      </p>
      <GoogleMap />
      {/* <socialMediaIcon /> */}
      <ContactForm />
    </Layout>
  )
}

export default contact
