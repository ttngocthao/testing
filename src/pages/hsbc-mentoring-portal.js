import React from "react"
import Layout from "../components/Layout/Layout"
import SEO from "../components/SEO/SEO"
import WorkPageLayout from "../components/Works/WorkPageLayout"

import HeroImg from "../images/cases/hsbcMentoring/hero.png"
import ExampleImg1 from "../images/cases/hsbcMentoring/img1.png"
import ExampleImg2 from "../images/cases/hsbcMentoring/img2.png"

const paragraphs = [
  {
    text:
      "Design and develop an all new Mentoring solution on Sharepoint to allow our people to easily manage and build mentoring connections across the business’. This was the task HSBC set us.",
    img: null,
    link: null,
  },
  {
    text:
      "They wanted a portal that would be a great user experience for mentors, mentees and admins. It also needed to automate as many tasks as possible which were previously handled manually. ",
    img: ExampleImg1,
    link: null,
  },
  {
    text:
      "Working within the HSBC digital guidelines, the result was a feature rich portal that enabled users to self register as mentors and mentees. It allowed them to find other mentors, connect with them and manage those relationships all through an engaging and user-friendly interface.",
    img: null,
    link: null,
  },
  {
    text:
      "The system uses automated work flows to push out emails and surveys which are also captured in an admin dashboard for monitoring and reporting.",
    img: null,
    link: null,
  },
  {
    text:
      "The portal has now been rolled out across various areas of the business with each new version building and developing further to meet additional requirements and user needs, enhancing the overall functionality and user experience.",
    img: ExampleImg2,
    link: null,
  },
]
function HsbcMentoring() {
  return (
    <Layout>
      <SEO
        title="Arthaus Visual Communications - Work"
        description="Branding, digital marketing, communications, HSBC"
      />
      <WorkPageLayout
        heroSrc={HeroImg}
        pageTile="HSBC Mentoring Portal"
        paragraphs={paragraphs}
      />
    </Layout>
  )
}

export default HsbcMentoring
