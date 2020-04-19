import React from "react"
import styles from "./contactForm.module.scss"
function Input({
  className,
  name,
  label,
  textBox,
  required,
  value,
  onChange,
  id,
  errorMsg,
  onBlur,
}) {
  return (
    <div className={`${styles.inputWrap} ${className} `}>
      <label htmlFor={name}>{label}</label>
      {textBox ? (
        <textarea
          name={name}
          id={id}
          value={value}
          onBlur={onBlur}
          onChange={onChange}
          type="text"
          rows="5"
          required={required}
        />
      ) : (
        <input
          name={name}
          id={id}
          type="text"
          onBlur={onBlur}
          required={required}
          value={value}
          onChange={onChange}
        />
      )}
      {errorMsg ? (
        <span className={styles.errorMessage}>{errorMsg}</span>
      ) : null}
    </div>
  )
}

export default Input
