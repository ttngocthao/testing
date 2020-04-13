import React from "react"

function GridItem({ itemData }) {
  const { id, type, text, subText, imgUrl, linkUrl, color } = itemData
  return <div className={`${type}`}></div>
}

export default GridItem
