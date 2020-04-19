import React, { useState } from "react"
import Formsy from "formsy-react"
import Input from "./Input"

import styles from "./allAboutForm.module.scss"

function ContactForm() {
  const [canSubmit, setcanSubmit] = useState(false)
  const enableButton = () => {
    setcanSubmit(true)
  }
  const disableButton = () => {
    setcanSubmit(false)
  }
  const submitHandle = model => {
    console.log("model", model)
  }
  return (
    <Formsy
      className={styles.form}
      onValidSubmit={submitHandle}
      onValid={enableButton}
      onInvalid={disableButton}
    >
      <h2 className={styles.title}>Get in touch</h2>
      <h5 className={styles.text}>
        Contact us to find out how we can help you.
      </h5>
      <Input
        className="testing"
        name="name"
        label="Your name:"
        validations="isExisty"
        validationError="This is not valid. Name cannot be empty!"
        required
      />
      <Input
        className="testing"
        name="email"
        label="Your email:"
        validations="isEmail"
        validationError="This is not a valid email address!"
        required
      />
      <Input
        className="testing"
        name="message"
        label="Your message:"
        validations="isExisty"
        textArea={true}
        validationError="This is not valid. Message cannot be empty!"
        required
      />
      <button type="submit" disabled={!canSubmit}>
        Submit
      </button>
    </Formsy>
  )
}

export default ContactForm
