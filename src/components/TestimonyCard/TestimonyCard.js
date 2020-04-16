import React from "react"
import ImgCard from "../ImgCard/ImgCard"
function linesToParagraphs(str) {
  return str.split("<br/> ")
}
function TestimonyCard({ itemData }) {
  const { text, imgUrl, imgAlt, name, role, company } = itemData

  return (
    <li className="testimony-card padding-bottom--20">
      <div className="bkg--whiteGray padding-horizontal--20 padding-vertical--20 testimony-text">
        {linesToParagraphs(text).map((line, indx) => {
          return <p key={indx}>{line}</p>
        })}
      </div>
      <div className="testimony-info">
        <ImgCard src={imgUrl} alt={imgAlt} className="testimony-logo" />
        <p className="text--bold heading5 text--lightGray text--center">
          {name}
        </p>
        <p className="text--bold heading5 text--darkBlue text--center">
          {role} | <span className="text--upperCase">{company}</span>
        </p>
      </div>
    </li>
  )
}

export default TestimonyCard
