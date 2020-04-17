import React from "react"
import ImgCard from "../ImgCard/ImgCard"
import localStyles from "./staffCard.module.scss"

function StaffCard({ itemData }) {
  const { name, imgUrl, role } = itemData
  return (
    <li className={localStyles.staffCard}>
      <ImgCard
        src={imgUrl}
        alt={`${name} - ${role} `}
        className="staff-img-wrap"
      />
      <h3 className={`heading3 ${localStyles.staffName}`}>{name}</h3>
      <h5 className={localStyles.staffRole}>{role}</h5>
    </li>
  )
}

export default StaffCard
