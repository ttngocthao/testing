import React from "react"
import QuoteImg from "../../images/bg-quotes.png"
function TestimonyCard({ indx, name, role, text, imgUrl }) {
  return (
    <article className="midBrown2-bkg profile-wrap">
      {indx === 0 && (
        <figure className="quote-img">
          <img
            src={QuoteImg}
            alt="double quote icon"
            className="full-width-img"
          />
        </figure>
      )}
      <div className="padding-vertical--20">{text}</div>
      <div className="display-flex align-center">
        <figure className="profile-img">
          <img alt="profile" src={imgUrl} className="full-width-img" />
        </figure>
        <ul className=" padding-left--20">
          <li className="heading heading-bold">{name}</li>
          <li className="text--xsmall">{role}</li>
        </ul>
      </div>
    </article>
  )
}

export default TestimonyCard
