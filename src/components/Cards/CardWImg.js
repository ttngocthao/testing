import React from "react"
import productiveImgUrl from "../../../public/images/illustration-stay-productive.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowCircleRight } from "@fortawesome/free-solid-svg-icons"
function CardWImg() {
  return (
    <section className="midBrown-bkg padding-vertical--40 padding-horizontal--20">
      <figure className="padding-vertical--40">
        <img
          src={productiveImgUrl}
          alt="illustration of staying productive whenever you are"
          className="full-width-img"
        />
      </figure>
      <article>
        <h2 className="heading heading-bold heading2 padding-bottom--20">
          Stay productive wherever you are
        </h2>
        <div>
          <p className="padding-vertical--5">
            Never let location be an issue when accessing your files. Fylo has
            you covered for all your file storage needs
          </p>
          <p className="padding-vertical--5">
            Securely share files and folders with friends, family and colleagues
            for live collaboration. No email attachments required.
          </p>
        </div>
        <p className="padding-vertical--20 ">
          <span className="padding-bottom--5 border-bottom border-color--cyan">
            <a href="#" className="link cyan-blue padding-right--10">
              See how Fylo works
            </a>
            <FontAwesomeIcon icon={faArrowCircleRight} className="cyan-blue" />
          </span>
        </p>
      </article>
    </section>
  )
}

export default CardWImg
