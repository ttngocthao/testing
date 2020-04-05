import React from "react"

import LogoUrl from "../../../public/images/logo.svg"
import PhoneLogoUrl from "../../../public/images/icon-phone.svg"
import LocationLogoUrl from "../../../public/images/icon-location.svg"
import MailLogoUrl from "../../../public/images/icon-email.svg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faFacebookF,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons"

function Footer() {
  return (
    <footer className="darkBrown-bkg">
      <figure>
        <img src={LogoUrl} alt="Fylo logo in white" />
      </figure>
      <section>
        <div>
          <figure>
            <img src={LocationLogoUrl} alt="location icon" />
          </figure>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Voluptates, quisquam similique eum assumenda.
          </p>
        </div>
        <div>
          <figure>
            <img src={PhoneLogoUrl} alt="contact phone number" />
          </figure>
          <p>+1-543-123-4567</p>
        </div>
        <div>
          <figure>
            <img src={MailLogoUrl} alt="contact email address" />
          </figure>
          <p>example@fylo.com</p>
        </div>
      </section>
      <section>
        <nav>
          <ul>
            <li>
              <a href="#">About Us</a>
            </li>
            <li>
              <a href="#">Jobs</a>
            </li>
            <li>
              <a href="#">Press</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
          </ul>
          <ul>
            <li>
              <a href="#">Contact Us</a>
            </li>
            <li>
              <a href="#">Terms</a>
            </li>
            <li>
              <a href="#">Privacy</a>
            </li>
          </ul>
        </nav>
      </section>
      <section>
        <ul>
          <li>
            <a href="#">
              <FontAwesomeIcon icon={faFacebookF} />
            </a>
          </li>
          <li>
            <a href="#">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
          </li>
          <li>
            <a href="#">
              <FontAwesomeIcon icon={faTwitter} />
            </a>
          </li>
        </ul>
      </section>
    </footer>
  )
}

export default Footer
