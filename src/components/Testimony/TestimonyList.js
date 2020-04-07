import React from "react"
import TestimonyCard from "./TestimonyCard"
import { graphql } from "gatsby"
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
// export const query = graphql`
//   query {
//     profile1: file(relativePath: { eq: "images/profile-1.jpg" }) {
//       childImageSharp {
//         fluid(maxWidth: 40) {
//           ...GatsbyImageSharpFluid
//         }
//       }
//     }
//     profile2: file(relativePath: { eq: "images/profile-2.jpg" }) {
//       childImageSharp {
//         fluid(maxWidth: 40) {
//           ...GatsbyImageSharpFluid
//         }
//       }
//     }
//     profile3: file(relativePath: { eq: "images/profile-3.jpg" }) {
//       childImageSharp {
//         fluid(maxWidth: 40) {
//           ...GatsbyImageSharpFluid
//         }
//       }
//     }
//   }
// `
