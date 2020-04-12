import React from "react"
import TestimonyCard from "./TestimonyCard"
import { PROFILES } from "../../data/profile.data"

function TestimonyList() {
  return (
    <section className="midBrown-bkg">
      <section className="midBrown-bkg profile-list">
        {PROFILES &&
          PROFILES.map((item, indx) => (
            <TestimonyCard
              key={indx}
              indx={indx}
              name={item.name}
              role={item.role}
              text={item.text}
              imgUrl={item.imgUrl}
            />
          ))}
      </section>
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
