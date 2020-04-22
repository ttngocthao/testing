import React from "react"
import { gridHomeData } from "../../data/dummy.data"
import GridItem from "./GridItem"

function GridLayout() {
  //console.log(gridHomeData)
  return (
    <div className="grid-layout">
      {gridHomeData &&
        gridHomeData.map((itemData, indx) => (
          <GridItem key={indx} itemData={itemData} />
        ))}
    </div>
  )
}

export default GridLayout
