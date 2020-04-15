import React from 'react'

function StaffCard({itemData}) {
  const { name, imgUrl, role} = itemData;
  return (
    <li className="staff-card padding-bottom--20"> 
    <figure className="staff-img-wrap">
      <img className='img--full-width' src={imgUrl} alt="staff photo in grey scale -Mark Luckett __ chairman "/>
    </figure>
    
    <p className="smallText2 padding-t--10 text-left staff-name">Mark Luckett</p>
     <p className="smallText1 text-uppercase staff-role text-left adding-b--10">chairman</p>
     </li>
  )
}

export default StaffCard
