import React from "react"
import Layout from "../components/Layout/Layout"
import SEO from "../components/SEO/SEO"
import PageTitle from "../components/PageTiltle/PageTitle"
import HeroImg from "../images/cases/ssy/hero.png"
import ExampleImg1 from "../images/cases/ssy/img1.png"
import ExampleImg2 from "../images/cases/ssy/img2.png"
import ExampleImg3 from "../images/cases/ssy/img3.png"
import WorkPageLayout from "../components/Works/WorkPageLayout"
const paragraphs = [
  {
    text:
      "Simpson Spence Young, the world’s largest independent shipbroker, commissioned Arthaus to create a new brand identity for the business that would build on their heritage whilst reflecting the fact that this is very much a 21st century business. The brand design included creating brand guidelines, a new corporate brochure and redesigning the web site.",
    img: ExampleImg1,
    link: "https://www.ssyonline.com/",
  },
  { text: null, img: ExampleImg2, link: null },
  { text: null, img: ExampleImg3, link: null },
]
function Ssy() {
  return (
    <Layout>
      <SEO
        title="Arthaus Visual Communications - Work"
        description="Branding, digital marketing, communications, HSBC"
      />
      <WorkPageLayout
        heroSrc={HeroImg}
        paragraphs={paragraphs}
        pageTile="SIMPSON SPENCE YOUNG"
      />
    </Layout>
  )
}

export default Ssy
