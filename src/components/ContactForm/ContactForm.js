import React, { useState, useRef } from "react"
import { navigate } from "gatsby-link"
import { useFormik } from "formik"
import Recaptcha from "react-google-recaptcha"
import Input from "./Input"
import Button from "../Buttons/Button"
import styles from "./contactForm.module.scss"

const validate = values => {
  const errors = {}
  if (!values.name) {
    errors.name = "Required"
  } else if (values.name.length > 15) {
    errors.name = "Must be 15 characters or less"
  } else if (values.name.length < 3) {
    errors.name = "Must be more than 3 characters"
  }

  if (!values.message) {
    errors.message = "Required"
  } else if (values.message.length > 225) {
    errors.message = "Must be 225 characters or less"
  }

  if (!values.email) {
    errors.email = "Required"
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email address"
  }

  return errors
}

const RECAPTCHA_KEY = "6LfSVOsUAAAAAOpPADYNs737d02vKb0z0KQaku3I"
//const recaptchaRef = useRef("")
const encode = data => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&")
}

function ContactForm() {
  const [captchaValue, setCaptchaValue] = useState(null)
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      message: "",
    },
    validate,
    onSubmit: values => {
      //console.log(JSON.stringify(values, null, 2))
      return values
    },
  })
  // const refRecaptcha = useRef("recaptcha")
  const handleRecaptcha = value => {
    //  setCaptchaValue(value)
    console.log("Captcha value:", value)
  }
  const handleSubmit = e => {
    e.preventDefault()
    const values = formik.onSubmit
    const form = e.target
    if (formik.errors.length !== 0) {
      return formik.errors
    }
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": form.getAttribute("name"),
        "g-recaptcha-response": captchaValue,
        values,
      }),
    })
      .then(() => navigate(form.getAttribute("action")))
      .catch(error => alert(error))
  }
  return (
    <form
      className={styles.form}
      onSubmit={handleSubmit}
      name="contact"
      method="post"
      action="/thanks/"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      data-netlify-recaptcha="true"
    >
      <input type="hidden" name="form-name" value="contact" />{" "}
      {/*this is for netlify to work*/}
      <h2 className={styles.title}>Get in touch</h2>
      <h5 className={styles.text}>
        Contact us to find out how we can help you.
      </h5>
      <Input
        className="testing"
        id="name"
        name="name"
        label="Your name:"
        onChange={formik.handleChange}
        value={formik.values.firstName}
        onBlur={formik.handleBlur}
        errorMsg={formik.errors.name}
      />
      {/* {formik.errors.name ? <div>{formik.errors.name}</div> : null} */}
      <Input
        className="testing"
        name="email"
        id="email"
        label="Your email:"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.firstName}
        errorMsg={formik.errors.email}
      />
      <Input
        className="testing"
        name="message"
        id="message"
        label="Your message:"
        textBox={true}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.firstName}
        errorMsg={formik.errors.message}
      />
      <Recaptcha sitekey={RECAPTCHA_KEY} onChange={handleRecaptcha} />
      <Button formSubmit orangeBtn>
        Submit
      </Button>
    </form>
  )
}

export default ContactForm
