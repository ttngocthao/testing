import React from "react"
import styles from "./button.module.css"
function Button({ children }) {
  return <div className={styles.btnWrap}>{children}</div>
}

export default Button
