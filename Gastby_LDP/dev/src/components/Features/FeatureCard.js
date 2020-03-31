import React from "react"

function FeatureCard({ imgAlt, imgUrl, title, bodyText }) {
  return (
    <article>
      <figure>
        <img alt={imgAlt} src={imgUrl} />
      </figure>
      <h2 class="heading heading-bold">{title}</h2>
      <div>{bodyText}</div>
    </article>
  )
}

export default FeatureCard
