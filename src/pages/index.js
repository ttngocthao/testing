import React from "react"

import Layout from "../components/Layout/Layout"
import FeatureList from "../components/Features/FeatureList"
import Hero from "../components/Hero/Hero"
import CardWImg from "../components/Cards/CardWImg"
import TestimonyList from "../components/Testimony/TestimonyList"
import SEO from "../components/SEO/SEO"
import StartForm from "../components/StartForm/StartForm"

export default () => {
  // console.log("data", data) //for the query
  return (
    <Layout>
      <SEO />
      <Hero />
      <FeatureList />
      <CardWImg />
      <TestimonyList />
      <StartForm />
    </Layout>
  )
}
