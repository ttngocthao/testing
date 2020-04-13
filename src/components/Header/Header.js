import React, { useState } from "react"
import Logo from "../../images/header/Logo.png"
import { Link } from "gatsby"

function Header() {
  const [menuOpened, setMenuOpened] = useState(false)
  const menuClickHandle = () => {
    setMenuOpened(!menuOpened)
  }
  return (
    <header className="padding-top--20 padding-horizontal--10">
      <nav>
        <section className="display-flex align-end justify-content__space-between padding-bottom--10">
          <figure className="logo-wrap">
            <Link to='/'>
              <img src={Logo} alt="Arthaus logo" className="img--full-width" /></Link>            
          </figure>
          <ul
            className={`menu-btn ${menuOpened && "menu-open"}`}
            onClick={menuClickHandle}
          >
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </section>

        <ul className={`menu-list ${menuOpened ? "menu-list--show" : ""}`}>
          <li className="menu-item">
            <Link to="/about">ABOUT</Link>
          </li>
          <li className="menu-item">
            <Link to="/expertise">EXPERTISE</Link>
          </li>
          <li className="menu-item">
            <Link to="/work">WORK</Link>
          </li>
          <li className="menu-item">
            <Link to="/contact">CONTACT</Link>
          </li>
          <li className="menu-item">
            <Link to="/">BLOG?</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
