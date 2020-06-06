import React from "react"
import styles from "./button.module.scss"
function Button({ orangeBtn, formSubmit, ...props }) {
  return (
    <>
      {formSubmit ? (
        <button
          type="submit"
          className={`${styles.btnWrap} ${orangeBtn && styles.orangeBtn} ${
            props.className ? props.className : ""
          }`}
        >
          {props.children}
        </button>
      ) : (
        <a
          href="#"
          className={`${styles.btnWrap} ${orangeBtn && styles.orangeBtn} ${
            props.className ? props.className : ""
          }`}
        >
          {props.children}
        </a>
      )}
    </>
  )
}

export default Button
