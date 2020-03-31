import React, { Fragment } from "react"
import Header from "./header"
import Footer from "./Footer"

function Layout({ ...props }) {
  return (
    <Fragment>
      <Header />
      <main>{props.children}</main>
      <Footer />
    </Fragment>
  )
}

export default Layout
