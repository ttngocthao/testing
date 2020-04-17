import React from "react"
import SpecCard from "./SpecCard"

import styles from "./specCard.module.scss"

import EBIcon from "../../images/about/eb-icon.png"
import EDIcon from "../../images/about/ed-icon.png"
import EEIcon from "../../images/about/ee-icon.png"
import ICIcon from "../../images/about/ic-icon.png"
import MCIcon from "../../images/about/mc-icon.png"
import TMIcon from "../../images/about/tm-icon.png"

const specCardData = [
  { imgUrl: EEIcon, text: "Employee engagement", color: "burgendy" },
  { imgUrl: MCIcon, text: "Marketing communications", color: "darkBlue" },
  { imgUrl: TMIcon, text: "Talent management", color: "green" },
  { imgUrl: EBIcon, text: "Employer branding", color: "mainOrange" },
  { imgUrl: ICIcon, text: "Internal communications", color: "teal" },
  { imgUrl: EDIcon, text: "Employee development", color: "navy" },
]
function SpecCardList() {
  return (
    <ul className={styles.specCardList}>
      {specCardData &&
        specCardData.map((item, indx) => {
          return <SpecCard key={indx} itemData={item} />
        })}
    </ul>
  )
}

export default SpecCardList
