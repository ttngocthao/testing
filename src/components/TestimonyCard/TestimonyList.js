import React from "react"
import TestimonyCard from "./TestimonyCard"
import DiageoLogo from "../../images/about/testimony/Logos_Diageo.png"
import OtsukaLogo from "../../images/about/testimony/Logos_Otsuka.png"
import HsbcLogo from "../../images/about/testimony/Logos_HSBC.png"
const testimonyData = [
  {
    text:
      "I just want to say a massive thank you for all your efforts at helping us reach our deadline – despite our last-minute changes. You’ve been a delight to work with, and very supportive. <br/> Thanks once again.",
    imgUrl: DiageoLogo,
    imgAlt: "Diageo Logo",
    name: "Sally Brookes",
    role: "Communications Manager",
    company: "diageo",
  },
  {
    text:
      "I wanted to drop a note to say a very big thank you for all your support, it was a long and quite challenging project but we’ve now reached the finish line.<br/> You’ve gone above and beyond to make sure we reach the deadline, so a very big thank you for that as well.",
    imgUrl: OtsukaLogo,
    imgAlt: "Otsuka Logo",
    name: "Kajitha Umesh",
    role: "Enterprise Applications Manager",
    company: "otsuka",
  },
  {
    text:
      "Thanks to you and all the folks at Arthaus that have helped advance our brand over the last year. The impact has been significant.",
    imgUrl: HsbcLogo,
    imgAlt: "HSBC Logo",
    name: "David Morris",
    role: "Global Head of Learning ",
    company: "hsbc",
  },
]
function TestimonyList() {
  return (
    <ul className="testimony-list">
      {testimonyData &&
        testimonyData.map((item, indx) => {
          return <TestimonyCard itemData={item} key={indx} />
        })}
    </ul>
  )
}

export default TestimonyList
