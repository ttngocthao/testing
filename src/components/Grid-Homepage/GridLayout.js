import React from "react"
import { gridHomeData } from "../../data/dummy.data"
import GridItem from "./GridItem"

function GridLayout() {
  console.log(gridHomeData)
  // const data =useStaticQuery(graphql`
  // query AllImages {
  //   allImageSharp {
  //     edges {
  //       node {
  //         fluid {
  //           originalImg
  //           originalName
  //           src
  //         }
  //       }
  //     }
  //   }
  // }`)

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
