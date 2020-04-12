import React, { Fragment } from "react"
import IntroImgUrl from "../../images/illustration-intro.png"
import BgCurvyDesktop from "../../images/bg-curvy-desktop.svg"
import BgCurvyMobile from "../../images/bg-curvy-mobile.svg"

import Button from "../Buttons/Button"

function Hero() {
  return (
    <Fragment>
      <section className="lightBrown-bkg">
        <figure className="lightBrown-bkg padding-horizontal--20 hero-img--figure">
          <img
            alt="all your files in one rescure loation and accessible anywhere"
            src={IntroImgUrl}
            className="full-width-img"
          />
        </figure>
      </section>

      <section className="lightBrown-bkg" style={{ position: "relative" }}>
        <figure className="curvy-img--figure">
          <img
            srcSet={`${BgCurvyMobile} 375w,${BgCurvyDesktop} 1440w`}
            sizes="(max-width:600px) 375px,1440px"
            src={BgCurvyDesktop}
            alt="curvy background in black"
            className="full-width-img vertical-align__b"
          />
        </figure>
        <section className="heroText">
          <h1 className="heading heading-bold heading1">
            All your files in one secure location, accessible anywhere
          </h1>
        </section>
      </section>
      <section className="midBrown-bkg">
        <div className="heroSubText">
          <p style={{ position: "relative", paddingBottom: 20 }}>
            Fylo stores all your most important files in one secure loation.
            Access them whenever you need, share and collaborate with friends,
            family and co-workers
          </p>
          <Button>Get Started</Button>
        </div>
      </section>
    </Fragment>
  )
}

export default Hero
