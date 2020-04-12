import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFacebookF } from "@fortawesome/free-brands-svg-icons"
function socialMediaIcon({ icon, linkUrl }) {
  return (
    <a href={linkUrl} className="text--white social-icon--link">
      <FontAwesomeIcon icon={icon} color="white" className="social-icon" />
    </a>
  )
}

export default socialMediaIcon