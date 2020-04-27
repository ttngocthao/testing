import React, { useEffect } from "react"
import { navigate } from "gatsby-link"
import Layout from "../components/Layout/Layout"
import SEO from "../components/SEO/SEO"
import ImgCard from "../components/ImgCard/ImgCard"

import styles from "../styles/pages/thanks.module.scss"

function Thanks() {
  useEffect(() => {
    setTimeout(() => {
      navigate("/")
    }, 5000)
  }, [])
  return (
    <Layout>
      <SEO />

      <section id="thanks-msg" className={styles.container}>
        <ImgCard
          src="https://www.personalitystar.com/statics/images/mail.gif"
          alt="sent email image with animation"
          className="gifImg"
        />

        <h1 className={styles.title}>Thank you for getting in touch!</h1>

        <p className="bodyText text-center">
          We appreciate you contacting us. One of our colleagues will get back
          in touch with you soon!
        </p>
        <p className="bodyText text-center">Have a great day!</p>
        <p className="bodyText text-center">
          After 5 seconds this will be automatically redirected to the Home
          page.
        </p>
      </section>
    </Layout>
  )
}

export default Thanks
