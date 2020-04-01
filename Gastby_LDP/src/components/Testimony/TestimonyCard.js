import React from "react"

function TestimonyCard({ name, role, text, imgUrl }) {
  return (
    <article>
      <div>{text}</div>
      <div>
        <figure>
          <img alt="profile photo" src={imgUrl} />
        </figure>
        <ul>
          <li className="heading heading-bold">{name}</li>
          <li>{role}</li>
        </ul>
      </div>
    </article>
  )
}

export default TestimonyCard
