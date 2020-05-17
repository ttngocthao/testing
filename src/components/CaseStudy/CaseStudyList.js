import React from "react"

import CaseStudyCard from "./CaseStudyCard"
import { caseStudyData } from "../../data/dummy.data"

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
