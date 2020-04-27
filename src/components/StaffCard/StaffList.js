import React from "react"

import Section from "../Section/Section"

import MarkLImg from "../../images/about/staff/Mark L.png"
import MarkBImg from "../../images/about/staff/Mark B.png"
import BeckyImg from "../../images/about/staff/Becky.png"
import ClaireImg from "../../images/about/staff/Claire.png"
import MatthewImg from "../../images/about/staff/Matthew.png"
import MichaelImg from "../../images/about/staff/Mike.png"
import CallumIng from "../../images/about/staff/Callum.png"
import EdImg from "../../images/about/staff/Ed.png"
import HasanImg from "../../images/about/staff/Hasan.png"
import ThaoImg from "../../images/about/staff/Thao.png"
import LennaImg from "../../images/about/staff/Lenna.png"
import RoxyImg from "../../images/about/staff/Roxy.png"
import StaceyImg from "../../images/about/staff/Stacey.png"
import StaffCard from "./StaffCard"
import styles from "./staffCard.module.scss"

var staffData = [
  { name: "Mark Luckett", imgUrl: MarkLImg, role: "chairman" },
  { name: "Mark Bowerman", imgUrl: MarkBImg, role: "Managing Director" },
  {
    name: "Becky Carter",
    imgUrl: BeckyImg,
    role: "Director/Creative Director",
  },
  { name: "Claire Watson", imgUrl: ClaireImg, role: "Finance Manager" },
  { name: "Matthew Masiak", imgUrl: MatthewImg, role: "Development Manager" },
  { name: "Michael Spiers", imgUrl: MichaelImg, role: "Senior Designer" },
  { name: "Callum King", imgUrl: CallumIng, role: "web developer" },
  { name: "Ed Garbutt", imgUrl: EdImg, role: "web developer" },
  { name: "Hasan Afzal", imgUrl: HasanImg, role: "Junior Developer" },
  { name: "Thao Truong", imgUrl: ThaoImg, role: "web developer" },
  { name: "Lenna Sarantopoulou", imgUrl: LennaImg, role: "graphic designer" },
  { name: "Roxy Bradley", imgUrl: RoxyImg, role: "graphic designer" },
  { name: "Stacey Jenkins", imgUrl: StaceyImg, role: "graphic / web designer" },
]
function StaffList() {
  return (
    <Section
      title="Our people"
      titleColor="green"
      titleCenter={true}
      id="people"
    >
      <p className="text--center">
        A diverse team of creative designers and developers headed up by a very
        experienced group of directors.
      </p>
      <ul className={styles.staffList}>
        {staffData &&
          staffData.map((item, indx) => {
            return <StaffCard itemData={item} key={indx} />
          })}
      </ul>
    </Section>
  )
}
export default StaffList
