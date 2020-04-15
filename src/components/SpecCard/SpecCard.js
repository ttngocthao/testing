import React from "react"

function SpecCard({ itemData }) {
  const { imgUrl, text, color } = itemData
  return (
    <li className={`border--${color} padding-vertical--15 spec-card`}>
      <figure className="spec-icon">
        <img src={imgUrl} alt={text} className="img--full-width" />
      </figure>
      <p className={`text--${color} text-center`}>{text}</p>
    </li>
  )
}

export default SpecCard
