import React from "react"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFacebookF } from "@fortawesome/free-brands-svg-icons"

function Footer() {
  return (
    <footer>
      <h3>This is footer</h3>
      <FontAwesomeIcon icon={faFacebookF} />
    </footer>
  )
}

export default Footer
