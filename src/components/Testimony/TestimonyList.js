import React from "react"
import TestimonyCard from "./TestimonyCard"
import { PROFILES } from "../../data/profile.data"
import QuoteImg from "../../images/bg-quotes.png"

function TestimonyList() {
  return (
    <section className="midBrown-bkg profile-list">
      <figure className="quote-img padding-top--40">
        <img
          src={QuoteImg}
          alt="double quote icon"
          className="full-width-img"
        />
      </figure>
      {PROFILES &&
        PROFILES.map((item, indx) => (
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
