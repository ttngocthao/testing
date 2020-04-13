import React from "react"

import LogoUrl from "../../images/logo.svg"
import PhoneLogoUrl from "../../images/icon-phone.svg"
import LocationLogoUrl from "../../images/icon-location.svg"
import MailLogoUrl from "../../images/icon-email.svg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faFacebookF,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons"
import FooterTopItem from "./FooterTopItem"
import { Link } from "gatsby"

const socialMediaItems = [
  { iconUrl: faFacebookF, url: "https://www.facebook.com/ttngocthao" },
  { iconUrl: faInstagram, url: "https://www.instagram.com/ttngocthao/" },
  { iconUrl: faTwitter, url: "https://twitter.com/ThaoTruong203" },
]
const topBarItems = [
  {
    imgUrl: LocationLogoUrl,
    altUrl: "location icon",
    text:
      " Lorem ipsum, dolor sit amet consectetur adipisicing elit.  Voluptates, quisquam similique eum assumenda.",
  },
  { imgUrl: PhoneLogoUrl, altUrl: "phone icon", text: "+1-543-123-4567" },
  {
    imgUrl: MailLogoUrl,
    altUrl: "contact email address",
    text: "example@fylo.com",
  },
]
const midBarItems = [
  { title: "About Us", url: "/", listNo: 1 },
  { title: "Jobs", url: "/jobs", listNo: 1 },
  { title: "Press", url: "/", listNo: 1 },
  { title: "Blog", url: "/", listNo: 1 },
  { title: "Contact Us", url: "/", listNo: 2 },
  { title: "Terms", url: "/", listNo: 2 },
  { title: "Privacy", url: "/", listNo: 2 },
]

const showMidBarItems = (data, listNo) => {
  const list = data.filter(item => item.listNo === listNo)
  return list.map((item, index) => (
    <li key={index} className="padding-vertical--10">
      <Link to={item.url}>{item.title}</Link>
    </li>
  ))
}
function Footer() {
  return (
    <footer className="darkBrown-bkg padding-top--40 padding-horizontal--20">
      <figure>
        <img alt="Fylo logo in white" src={LogoUrl} />
      </figure>
      <section className="footer__bars-wrap">
        <ul className="padding-vertical--40 footer__top-bar">
          {topBarItems &&
            topBarItems.map((item, indx) => {
              return (
                <FooterTopItem
                  key={indx}
                  imgUrl={item.imgUrl}
                  altUrl={item.altUrl}
                  text={item.text}
                />
              )
            })}
        </ul>
        <section className="footer__mid-bar--wrap">
          <ul className="footer__mid-bar footer__mid-bar--list1 padding-vertical--20">
            {showMidBarItems(midBarItems, 1)}
          </ul>
          <ul className="footer__mid-bar footer__mid-bar--list2 padding-vertical--20">
            {showMidBarItems(midBarItems, 2)}
          </ul>
        </section>
        <section className="padding-bottom--40">
          <ul className="footer__bottom-bar media-list">
            {socialMediaItems &&
              socialMediaItems.map((item, index) => {
                return (
                  <li key={index} className="media-item">
                    <a href={item.url}>
                      <FontAwesomeIcon
                        icon={item.iconUrl}
                        className="media-icon"
                      />
                    </a>
                  </li>
                )
              })}
          </ul>
        </section>
      </section>
    </footer>
  )
}

export default Footer
