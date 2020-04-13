import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

function socialMediaIcon({ icon, linkUrl }) {
  return (
    <a href={linkUrl} className="text--white social-icon--link">
      <span className="sr-only">social media icon</span>
      <FontAwesomeIcon icon={icon} color="white" className="social-icon" />
    </a>
  )
}

export default socialMediaIcon
