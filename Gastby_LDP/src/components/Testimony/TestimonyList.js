import React from "react"
import TestimonyCard from "./TestimonyCard"
const testimonyData = [
  {
    name: "Saltish Pastel",
    role: "Founder & CEO, Huddle",
    text:
      "Fylo has improved our team productivity by an order of magnitude.  Since making the switch our team has become a well-oiled collaboration machine.",
    imgUrl: require("../../../public/images/profile-1.jpg"),
  },
  {
    name: "Bruce McKenzie",
    role: "Founder & CEO, Huddle",
    text:
      "Fylo has improved our team productivity by an order of magnitude.  Since making the switch our team has become a well-oiled collaboration machine.",
    imgUrl: require("../../../public/images/profile-2.jpg"),
  },
  {
    name: "Iva Boyd",
    role: "Founder & CEO, Huddle",

    text:
      "Fylo has improved our team productivity by an order of magnitude.  Since making the switch our team has become a well-oiled collaboration machine.",
    imgUrl: require("../../../public/images/profile-3.jpg"),
  },
]
function TestimonyList() {
  return (
    <section className="midBrown-bkg">
      {testimonyData &&
        testimonyData.map((item, indx) => (
          <TestimonyCard
            key={indx}
            name={item.name}
            role={item.role}
            text={item.text}
            imgUrl={item.imgUrl}
          />
        ))}
    </section>
  )
}

export default TestimonyList
