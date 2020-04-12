import React from "react"
import Layout from "../components/Layout/Layout"
import Img from "../images/404-image.jpg"
function PageNotFound() {
  return (
    <Layout>
      <section style={{ backgroundColor: "black", position: "relative" }}>
        <h1
          className="heading heading-bold text--center heading1"
          style={{
            position: "absolute",
            top: "20%",
            left: "50%",
            transform: "translate(-50%,0)",
            width: "100%",
          }}
        >
          Page Not Found 404
        </h1>
        <figure style={{ width: "100%", height: "100%" }}>
          <img
            src={Img}
            alt="black cat on black background"
            className="full-width-img"
          />
        </figure>
      </section>
    </Layout>
  )
}

export default PageNotFound
