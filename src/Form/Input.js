import React, { useState } from "react"
import { withFormsy } from "formsy-react"
import styles from "./allAboutForm.module.scss"

function Input({ className, name, label, textArea, required, errorMessage }) {
  const [inputValue, setInputValue] = useState("")
  const onChangeHandle = e => {
    setInputValue(e.currentTarget.value)
    // console.log(inputValue)
  }

  return (
    <div className={`${styles.inputWrap} ${className} `}>
      <label htmlFor={name}>{label}</label>
      {textArea ? (
        <textarea
          onChange={onChangeHandle}
          name={name}
          id={name}
          type="text"
          value={inputValue}
          rows="5"
        />
      ) : (
        <input
          onChange={onChangeHandle}
          name={name}
          id={name}
          type="text"
          value={inputValue}
          required={required}
        />
      )}

      <span className={styles.errorMessage}>{errorMessage}</span>
    </div>
  )
}

export default withFormsy(Input)
