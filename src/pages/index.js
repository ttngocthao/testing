import React, { Fragment } from "react"

import Layout from "../components/Layout/Layout"
import FeatureList from "../components/Features/FeatureList"
import Hero from "../components/Hero/Hero"
import CardWImg from "../components/Cards/CardWImg"
import TestimonyList from "../components/Testimony/TestimonyList"
import SEO from "../components/SEO/SEO"
export default () => (
  <Layout>
    <SEO />
    <Hero />
    <FeatureList />
    <CardWImg />
    <TestimonyList />
  </Layout>
)
