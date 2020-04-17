import React from "react"
import styles from "./button.module.scss"
function Button(props) {
  return (
    <div className={`btn-wrap ${props.className ? props.className : ""}`}>
      {props.children}
    </div>
  )
}

export default Button
