import React from "react"
import styles from "./footer.module.scss"
import {
  faFacebookF,
  faTwitter,
  faInstagram,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons"

import SocialMediaIcon from "../SocialMediaIcon/SocialMediaIcon"
import { Link } from "gatsby"
const socialMediaList = [
  {
    icon: faFacebookF,
    linkUrl: "https://www.facebook.com/ArtHaus.design/",
    order: 4,
  },
  {
    icon: faLinkedinIn,
    linkUrl: "https://www.linkedin.com/company/arthaus-visual-communications-/",
    order: 2,
  },
  {
    icon: faInstagram,
    linkUrl: "https://www.instagram.com/arthaus_design/",
    order: 1,
  },
  { icon: faTwitter, linkUrl: "https://twitter.com/arthaus", order: 3 },
]

function Footer() {
  const { footerContainer, socialIconList } = styles
  return (
    <footer className={footerContainer}>
      <ul className={socialIconList}>
        {/* put items in order before mapping */}
        {socialMediaList &&
          socialMediaList
            .sort((a, b) => {
              return a.order - b.order
            })
            .map((item, indx) => {
              return (
                <li key={indx}>
                  <SocialMediaIcon icon={item.icon} linkUrl={item.linkUrl} />
                </li>
              )
            })}
      </ul>
      <p className="text--white text--center text--xsmall">
        ArtHaus Visual Communications - Old Brewery Lane, Henley - RG9 2DE
      </p>
      <p className="text--white text--center text--small">
        <Link to="/terms-and-condition">Privacy, terms &#38; conditions</Link>
      </p>
      <p className="text--white text--center text--xsmall">
        &#169; Copyright Arthaus {new Date().getFullYear()}
      </p>
    </footer>
  )
}

export default Footer
