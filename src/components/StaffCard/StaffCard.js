import React from "react"
import ImgCard from "../ImgCard/ImgCard"

function StaffCard({ itemData }) {
  const { name, imgUrl, role } = itemData
  return (
    <li className="staff-card">
      <ImgCard
        src={imgUrl}
        alt={`${name} - ${role} `}
        className="staff-img-wrap"
      />
      <h3 className="heading3 padding-top--10 padding-bottom--5 staff-name">
        {name}
      </h3>
      <h5 className="heading5 text--upperCase staff-role padding-bottom--10">
        {role}
      </h5>
    </li>
  )
}

export default StaffCard
