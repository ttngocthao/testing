import React, { Fragment } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons"
function GridItem({ itemData }) {
  const { type, id, text, subText, imgUrl, linkUrl, color } = itemData
  const textWrap = (
    <Fragment>
      <h2 className="text--white text--bold">{text}</h2>
      {subText && <h3 className="text--white text--bold">{subText}</h3>}
    </Fragment>
  )
  return (
    <div
      className={`box ${type} ${color ? `bkg--${color}` : ""}`}
      id={id}
      style={imgUrl && { backgroundImage: `url(${imgUrl})` }}
    >
      {/* if there is linkUrl render anchor tag outside the textwrap,if not render textwrap only */}
      {linkUrl ? (
        <a href={linkUrl}>
          <span className="sr-only">${linkUrl}</span>
          {textWrap}
          <FontAwesomeIcon
            icon={faPlusCircle}
            color="white"
            className="plus-circle--icon heading4"
          />
        </a>
      ) : (
        textWrap
      )}
    </div>
  )
}

export default GridItem
