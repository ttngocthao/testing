import React from "react"

function FeatureCard({ imgAlt, imgUrl, title, bodyText }) {
  return (
    <article className="feature-item">
      <figure className="padding-vertical--30">
        <img alt={imgAlt} src={imgUrl} />
      </figure>
      <h2 className="heading heading-bold heading2 padding-vertical--10">
        {title}
      </h2>
      <div>{bodyText}</div>
    </article>
  )
}

export default FeatureCard
