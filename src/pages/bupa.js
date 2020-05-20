import React from "react"
import Layout from "../components/Layout/Layout"
import SEO from "../components/SEO/SEO"

import WorkPageLayout from "../components/Works/WorkPageLayout"
import HeroImg from "../images/cases/bupa/hero.png"
import ExampleImg1 from "../images/cases/bupa/img1.png"
import ExampleImg2 from "../images/cases/bupa/img2.png"
const paragraphs = [
  {
    text:
      "Bupa talent Toolkit is a creative communication guide that helps support the drive to global standardisation of talent management best practice. The guide was created to excite and engage Bupa managers and give them the tools to cascade to and engage their own teams.",
    img: ExampleImg1,
    link: null,
  },
  { text: null, img: ExampleImg2, link: null },
]
function Bupa() {
  return (
    <Layout>
      <SEO
        title="Arthaus Visual Communications - Work"
        description="Branding, digital marketing, communications, HSBC"
      />

      <WorkPageLayout
        heroSrc={HeroImg}
        pageTile="Bupa Talent Toolkit"
        paragraphs={paragraphs}
      />
    </Layout>
  )
}

export default Bupa
