import React, { Fragment } from "react"

import Layout from "../components/Layout/Layout"
import FeatureList from "../components/Features/FeatureList"
import Hero from "../components/Hero/Hero"
import CardWImg from "../components/Cards/CardWImg"
import TestimonyList from "../components/Testimony/TestimonyList"
import SEO from "../components/SEO/SEO"

//for the image
// import Img from "gatsby-image"
// import { graphql } from "gatsby"

export default () => {
  // console.log("data", data) //for the query
  return (
    <Layout>
      <SEO />
      <Hero />

      <FeatureList />
      <CardWImg />
      <TestimonyList />
      {/* <Img fluid={data.image1.childImageSharp.fluid} alt="testing 1" />
<Img fixed={data.image2.childImageSharp.fixed} alt="testing 2" /> */}
    </Layout>
  )
}
// export const query = graphql`
//   query {
//     image1: file(relativePath: { eq: "images/illustration-intro.png" }) {
//       childImageSharp {
//         fluid(maxWidth: 1200) {
//           ...GatsbyImageSharpFluid
//         }
//       }
//     }
//     image2: file(relativePath: { eq: "images/bg-quotes.png" }) {
//       childImageSharp {
//         fixed(width: 55) {
//           ...GatsbyImageSharpFixed
//         }
//       }
//     }
//   }
// `
