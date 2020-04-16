import React from "react"

function ImgCard({ src, alt, className }) {
  return (
    <figure className={className}>
      <img src={src} alt={alt} className="img--full-width" />
    </figure>
  )
}

export default ImgCard
