import React from "react"
import { Link } from "gatsby"
import LogoUrl from "../../../public/images/logo.svg"

function Header() {
  return (
    <header className="lightBrown-bkg">
      <nav className="display-flex justify-content__space-between align-center headerWrap">
        <figure className="logoImgWrap">
          <img
            src={LogoUrl}
            alt="Fylo logo in white"
            className="full-width-img"
          />
        </figure>
        <ul className="display-flex">
          <li className="navItem">
            <a href="#">Features</a>
          </li>
          <li className="navItem">
            <a href="#">Team</a>
          </li>
          <li className="navItem">
            <a href="#">Sign In</a>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
