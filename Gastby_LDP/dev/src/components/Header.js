import React from "react"
import { Link } from "gatsby"
import LogoUrl from "../../public/images/logo.svg"
function Header() {
  return (
    <header>
      <nav>
        <figure>
          <img src={LogoUrl} alt="Fylo logo in white" />
        </figure>
        <ul>
          <li>
            <a href="#">Features</a>
          </li>
          <li>
            <a href="#">Team</a>
          </li>
          <li>
            <a href="#">Sign In</a>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
