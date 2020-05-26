import React from "react"
import Header from "../Header/Header"
import Footer from "../Footer/Footer"
import "../../styles/styles.scss"
import styles from "./layout.module.scss"
import { IdentityContextProvider } from "react-netlify-identity"
function Layout({ ...props }) {
  const url = "https://nostalgic-curran-576267.netlify.app/"
  return (
    <IdentityContextProvider value={url}>
      <Header />
      <main className={styles.main}>{props.children}</main>
      <Footer />
    </IdentityContextProvider>
  )
}

export default Layout
