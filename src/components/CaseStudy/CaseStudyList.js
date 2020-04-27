import React from "react"
import { Link } from "gatsby"

import AgNovosImg from "../../images/work/agnovos.png"
import hsbcMentoringImg from "../../images/work/HSBCMentoring.png"
import bupaImg from "../../images/work/BupaTalent.png"
import diageoTechImg from "../../images/work/diageoTechcafe.png"
import hsbcUniversityImg from "../../images/work/HSBCUniversity.png"
import ssyImg from "../../images/work/SSY.png"
import waveImg from "../../images/work/Waves.png"
import diageoWorkplaceImg from "../../images/work/DiageoWorkplace.png"

import Section from "../../components/Section/Section"
import CaseStudyCard from "./CaseStudyCard"

const caseStudyData = [
  {
    linkUrl: "/agnovos",
    title: "AgNovos website",
    imgUrl: AgNovosImg,
    type: "digital",
  },
  {
    linkUrl: "/hsbc-mentoring-portal",
    title: "HSBC Mentoring",
    imgUrl: hsbcMentoringImg,
    type: "digital",
  },
  {
    linkUrl: "/bupa",
    title: "Bupa talent toolkit",
    imgUrl: bupaImg,
    type: "communications",
  },
  {
    linkUrl: "/diageo-techcafe",
    title: "Diageo Tech Cafe",
    imgUrl: diageoTechImg,
    type: "branding",
  },
  {
    linkUrl: "/hsbc-university",
    title: "HSBC University",
    imgUrl: hsbcUniversityImg,
    type: "branding",
  },
  {
    linkUrl: "/simpson-spence-young",
    title: "Simpson Spence Young",
    imgUrl: ssyImg,
    type: "branding",
  },
  {
    linkUrl: "/waves",
    title: "Waves booking app",
    imgUrl: waveImg,
    type: "digital",
  },
  {
    linkUrl: "/diageo-workplace",
    title: "Diageo Workplace",
    imgUrl: diageoWorkplaceImg,
    type: "communications",
  },
]
function CaseStudyList({ filterCase }) {
  return (
    <ul>
      {filterCase !== ""
        ? caseStudyData
            .filter(item => item.type === filterCase)
            .map((item, indx) => {
              return (
                <CaseStudyCard
                  key={indx}
                  caseType={item.type}
                  caseUrl={item.linkUrl}
                  caseTitle={item.title}
                  caseImg={item.imgUrl}
                />
              )
            })
        : caseStudyData.map((item, indx) => {
            return (
              <CaseStudyCard
                key={indx}
                caseType={item.type}
                caseUrl={item.linkUrl}
                caseTitle={item.title}
                caseImg={item.imgUrl}
              />
            )
          })}
    </ul>
  )
}

export default CaseStudyList
