import React from "react"
import Layout from "../components/Layout/Layout"
import SEO from "../components/SEO/SEO"
import PageTitle from "../components/PageTiltle/PageTitle"
import ImgCard from "../components/ImgCard/ImgCard"
import HeroImg from "../images/cases/agnovos/hero.png"
import ExampleImg1 from "../images/cases/agnovos/img1.png"
import ExampleImg2 from "../images/cases/agnovos/img2.png"
import WorkPageLayout from "../components/Works/WorkPageLayout"
const paragraphs = [
  {
    text:
      "AgNovos Healthcare is developing novel treatments for osteoporosis, a devastating bone disease affecting more than 200 million women worldwide​. The team approached Arthaus ahead of their launch to market with a request to design and build a website that would fit well with the company’s core values and aimed at medical professional. Originally built in Office 365 we have since updated and rebuilt the site using Umbraco, which is an open source Content Management System.",
    img: ExampleImg1,
    link: "https://www.agnovos.com/",
  },
  { text: null, img: ExampleImg2, link: null },
]
function Agnovos() {
  return (
    <Layout>
      <SEO
        title="Arthaus Visual Communications - Work"
        description="Branding, digital marketing, communications, HSBC"
      />

      <WorkPageLayout
        pageTile="Agnovos Website"
        heroSrc={HeroImg}
        paragraphs={paragraphs}
      />
    </Layout>
  )
}

export default Agnovos
