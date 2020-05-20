import React from "react"
import Layout from "../components/Layout/Layout"
import SEO from "../components/SEO/SEO"
import WorkPageLayout from "../components/Works/WorkPageLayout"
import HeroImg from "../images/cases/waves/hero.png"
import ExampleImg1 from "../images/cases/waves/img1.png"
import ExampleImg2 from "../images/cases/waves/img2.png"
const paragraphs = [
  {
    text:
      "Hand car wash specialist Waves approached Arthaus to build a bespoke app that could be used to check cars in while monitoring their progress through the wash process. The system also needs to allow for real-time monitoring of the daily output from each of its 250+ sites. The app was designed to be simple to use and is delivered through the Apple App Store.",
    img: null,
    link: null,
  },
  {
    text:
      "The app has been extremely successful and continues to be developed with a new Trade Account section and an Employee Compliance sub-site being recently launched to ensure all sites comply with Home Office employment laws.",
    img: ExampleImg1,
    link: null,
  },
  { text: null, img: ExampleImg2, link: null },
]
function Waves() {
  return (
    <Layout>
      <SEO
        title="Arthaus Visual Communications - Work"
        description="Branding, digital marketing, communications, HSBC"
      />

      <WorkPageLayout
        pageTile="Waves app"
        heroSrc={HeroImg}
        paragraphs={paragraphs}
      />
    </Layout>
  )
}

export default Waves
