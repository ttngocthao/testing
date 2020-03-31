import React from "react"
import { Link } from "gatsby"
import LogoUrl from "../../../public/images/logo.svg"
import styles from "./header.module.css"
function Header() {
  return (
    <header className="lightBrown-bkg">
      <nav
        className={`diplay-flex justify-content__space-between align-center ${styles.headerWrap}`}
      >
        <figure className={styles.logoImgWrap}>
          <img
            src={LogoUrl}
            alt="Fylo logo in white"
            className="full-width-img"
          />
        </figure>
        <ul className="diplay-flex">
          <li className={styles.navItem}>
            <a href="#">Features</a>
          </li>
          <li className={styles.navItem}>
            <a href="#">Team</a>
          </li>
          <li className={styles.navItem}>
            <a href="#">Sign In</a>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
