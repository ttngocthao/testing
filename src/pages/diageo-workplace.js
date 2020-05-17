import React from "react"
import Layout from "../components/Layout/Layout"
import SEO from "../components/SEO/SEO"
import WorkPageLayout from "../components/Works/WorkPageLayout"
import HeroImg from "../images/cases/diageoWorkplace/hero.png"
import ExampleImg1 from "../images/cases/diageoWorkplace/img1.png"
import ExampleImg2 from "../images/cases/diageoWorkplace/img2.png"
import ExampleImg3 from "../images/cases/diageoWorkplace/img3.png"
const paragraphs = [
  {
    text:
      "Diageo wanted to introduce a new range of technologies into the Workplace that would help both individuals and the business collaborate, communicate, connect and meet long into the next decade. They looked to Arthaus to help them brand, launch and embed this initiative.",
    img: null,
    link: null,
  },
  {
    text:
      "The YOURWORKPLACE change programme we developed was the result and ran across all the Diageo comms channels, using various vehicles from: office launch pop-up events to mail outs; launch animations to online information sites.",
    img: ExampleImg1,
    link: null,
  },
  { text: null, img: ExampleImg2, link: null },
  {
    text:
      "The initial aim was to raise awareness, then build understanding and finally drive passion and commitment",
    img: null,
    link: null,
  },
  {
    text:
      "The campaign has ‘Powered possibilities’ at Diageo – it has been rolled out across all markets, helping to engage users and to deliver technologies that are transforming the business.",
    img: ExampleImg3,
    link: null,
  },
]
function DiageoWorkplace() {
  return (
    <Layout>
      <SEO
        title="Arthaus Visual Communications - Work"
        description="Branding, digital marketing, communications, HSBC"
      />

      <WorkPageLayout
        paragraphs={paragraphs}
        heroSrc={HeroImg}
        pageTile="Diageo Workplace"
      />
    </Layout>
  )
}

export default DiageoWorkplace
