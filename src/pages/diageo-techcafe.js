import React from "react"
import Layout from "../components/Layout/Layout"
import SEO from "../components/SEO/SEO"
import PageTitle from "../components/PageTiltle/PageTitle"
import WorkPageLayout from "../components/Works/WorkPageLayout"
import HeroImg from "../images/cases/diageoCafe/hero.png"
import ExampleImg1 from "../images/cases/diageoCafe/img1.png"
import ExampleImg2 from "../images/cases/diageoCafe/img2.png"
import ExampleImg3 from "../images/cases/diageoCafe/img3.png"
import ExampleImg4 from "../images/cases/diageoCafe/img4.png"
import ExampleImg5 from "../images/cases/diageoCafe/img5.png"
const paragraphs = [
  {
    text:
      "Diageo has launched an all new initiative to build a great technology employee experience in the form of a ‘Tech Cafe’. A place where all employees can ‘drop in’ for face to face on site technical support, capability building & quick fixes.",
    img: ExampleImg1,
    link: null,
  },
  {
    text:
      "A key requirement for its success was to develop a strong, relevant and engaging brand approach and Arthaus was tasked to deliver this. Supporting Diageo in the scoping and positioning, Arthaus went on to design and deliver the overall visual brand, which included the design and production for the physical cafe and all the supporting assets, communications and collateral.",
    img: ExampleImg2,
    link: null,
  },
  { text: null, img: ExampleImg3, link: null },
  { text: null, img: ExampleImg4, link: null },
  { text: null, img: ExampleImg5, link: null },
]
function DiageoTechCafe() {
  return (
    <Layout>
      <SEO
        title="Arthaus Visual Communications - Work"
        description="Branding, digital marketing, communications, HSBC"
      />

      <WorkPageLayout
        heroSrc={HeroImg}
        pageTile="Diageo Tech Cafe"
        paragraphs={paragraphs}
      />
    </Layout>
  )
}

export default DiageoTechCafe
