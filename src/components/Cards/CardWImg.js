import React from "react"
import productiveImgUrl from "../../../public/images/illustration-stay-productive.png"
function CardWImg() {
  return (
    <section className="midBrown-bkg">
      <figure>
        <img
          src={productiveImgUrl}
          alt="illustration of staying productive whenever you are"
          className="full-width-img"
        />
      </figure>
      <article>
        <h2 className="heading heading-bold">
          Stay productive wherever you are
        </h2>
        <div>
          <p>
            Never let location be an issue when accessing your files. Fylo has
            you covered for all your file storage needs
          </p>
          <p>
            Securely share files and folders with friends, family and colleagues
            for live collaboration. No email attachments required.
          </p>
        </div>
        <a href="#">See how Fylo works</a>
      </article>
    </section>
  )
}

export default CardWImg
