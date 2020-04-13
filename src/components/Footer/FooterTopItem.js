import React from "react"

function FooterTopItem({ imgUrl, imgAlt, text }) {
  return (
    <li className="footer__top-bar__item">
      <figure>
        <img alt={imgAlt} src={imgUrl} className="full-width-img" />
      </figure>
      <p>{text}</p>
    </li>
  )
}

export default FooterTopItem
