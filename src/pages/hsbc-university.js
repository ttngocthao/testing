import React from "react"
import Layout from "../components/Layout/Layout"
import SEO from "../components/SEO/SEO"
import WorkPageLayout from "../components/Works/WorkPageLayout"
import HeroImg from "../images/cases/hsbcUni/hero.png"
import ExampleImg1 from "../images/cases/hsbcUni/img1.png"
import ExampleImg2 from "../images/cases/hsbcUni/img2.png"
import ExampleImg3 from "../images/cases/hsbcUni/img3.png"
import ExampleImg4 from "../images/cases/hsbcUni/img4.png"
const paragraphs = [
  {
    text:
      "HSBC set us the challenge of updating how ‘Learning’ was branded, structured, positioned, communicated and delivered throughout the business. HSBC University was the result, bringing together the many varied learning areas from across the business, including Leadership, Risk, Strategy & Performance into a structured and easily accessible brand.",
    img: null,
    link: null,
  },
  {
    text:
      "The visual brand brings this all to life and was created to be distinctive, flexible and easy to implement across all media whilst adhering to the tight HSBC brand guidelines.",
    img: ExampleImg1,
    link: null,
  },
  {
    text:
      "We worked closely with Nick Crussell, Global head of Learning Design, and the HSBC corporate brand team to deliver on the brief and to ensure that both the key stake holders and employees globally were fully engaged and inspired.",
    img: null,
    link: null,
  },
  {
    text:
      "Along with an extensive set of brand guidelines and supporting visual assets, we have carried the brand across many communications materials from, the University buildings, through interactive learning modules, to the design and creation of the all new Sharepoint based University portal.",
    img: ExampleImg2,
    link: null,
  },
  { text: null, img: ExampleImg3, link: null },
  { text: null, img: ExampleImg4, link: null },
]

function HsbcUniversity() {
  return (
    <Layout>
      <SEO
        title="Arthaus Visual Communications - Work"
        description="Branding, digital marketing, communications, HSBC"
      />

      <WorkPageLayout
        heroSrc={HeroImg}
        pageTile="HSBC University"
        paragraphs={paragraphs}
      />
    </Layout>
  )
}

export default HsbcUniversity
