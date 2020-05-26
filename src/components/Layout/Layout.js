import React, { useEffect } from "react"
import Header from "../Header/Header"
import Footer from "../Footer/Footer"
import "../../styles/styles.scss"
import styles from "./layout.module.scss"
import netlifyIdentity from "netlify-identity-widget"
function Layout({ ...props }) {
  useEffect(() => {
    netlifyIdentity.init()
  }, [])
  return (
    <>
      <Header />
      <main className={styles.main}>{props.children}</main>
      <Footer />
    </>
  )
}

export default Layout
