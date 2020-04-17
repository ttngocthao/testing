import React, { useState } from "react"
import { Link } from "gatsby"

import Logo from "../../images/header/Logo.png"

import MenuItem from "./MenuItem"
import ImgCard from "../ImgCard/ImgCard"

import styles from "./header.module.scss"
function Header() {
  const [menuOpened, setMenuOpened] = useState(false)

  const menuClickHandle = () => {
    setMenuOpened(!menuOpened)
  }

  return (
    <header className={styles.headerContent}>
      <nav>
        <section className={styles.navContent}>
          <Link to="/">
            <ImgCard
              src={Logo}
              alt="Arthaus logo"
              className={styles.logoWrap}
            />
          </Link>

          <ul
            className={`${styles.menuBtn} ${menuOpened && styles.menuOpened}`}
            onClick={menuClickHandle}
          >
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </section>

        <ul
          className={`${styles.menuList} ${
            menuOpened ? styles.menuListShow : ""
          }`}
        >
          <MenuItem url="/about" text="ABOUT" />
          <MenuItem url="/expertise" text="EXPERTISE" />
          <MenuItem url="/work" text="WORK" />
          <MenuItem url="/contact" text="CONTACT" />
          <MenuItem url="/" text="BLOG ?" />
        </ul>
      </nav>
    </header>
  )
}

export default Header
