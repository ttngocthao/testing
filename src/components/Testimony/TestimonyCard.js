import React from "react"

function TestimonyCard({ name, role, text, imgUrl }) {
  return (
    <article className="midBrown2-bkg profile-wrap">
      <div className="padding-vertical--20">{text}</div>
      <div className="display-flex align-center">
        <figure className="profile-img">
          <img alt="profile photo" src={imgUrl} className="full-width-img" />
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
