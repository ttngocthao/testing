import React from "react"

function Button(props) {
  return (
    <div className={`btn-wrap ${props.className ? props.className : ""}`}>
      {props.children}
    </div>
  )
}

export default Button
