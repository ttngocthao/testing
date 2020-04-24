import React, { useState, useEffect } from "react"
import { navigate } from "gatsby"
import { Formik, Field, Form, ErrorMessage } from "formik"
import styles from "./contactForm.module.scss"
import Recaptcha from "react-recaptcha"
import Button from "../Buttons/Button"

const encode = data => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&")
}

function ContactForm() {
  const [token, setToken] = useState(null)
  useEffect(() => {
    const script = document.createElement("script")
    script.src = "https://www.google.com/recaptcha/api.js"
    script.async = true
    script.defer = true
    document.body.appendChild(script)
  }, [])
  return (
    <Formik
      initialValues={{
        fullName: "",
        email: "",
        message: "",
      }}
      validate={values => {
        const errors = {}
        if (!values.fullName) {
          errors.fullName = "Required"
        } else if (values.fullName.length <= 1) {
          errors.fullName = "must be at least 2 characters"
        }
        if (!values.email) {
          errors.email = "Required"
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
        ) {
          errors.email = "Invalid email address"
        }
        if (!values.message) {
          errors.message = "Required"
        } else if (values.message.length > 300) {
          errors.message = "must be less than 300 characters"
        }
        return errors
      }}
      onSubmit={(data, { resetForm }) => {
        if (token !== null) {
          fetch("/", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: encode({
              "form-name": "contact-form",
              ...data,
              "g-recaptcha-response": token,
            }),
          })
            .then(() => {
              navigate("/thanks/")
            })
            .catch(error => alert(error))
        } else {
          alert("recaptcha needed")
        }
      }}
    >
      <Form
        className={styles.form}
        data-netlify="true"
        name="contact-form"
        data-netlify-honeypot="bot-field"
        data-netlify-recaptcha="true"
      >
        <Field type="hidden" name="form-name" />
        <Field type="hidden" name="bot-field" />
        <h2 className={styles.title}>Get in touch</h2>
        <h5 className={styles.text}>
          Contact us to find out how we can help you.
        </h5>

        <div className={styles.inputWrap}>
          <label htmlFor="fullName">Full name:</label>
          <Field name="fullName" type="text" />
          <span className={styles.errorMessage}>
            <ErrorMessage name="fullName" />
          </span>
        </div>

        <div className={styles.inputWrap}>
          <label htmlFor="email">Email</label>
          <Field name="email" type="text" />
          <span className={styles.errorMessage}>
            <ErrorMessage name="email" />
          </span>
        </div>

        <div className={styles.inputWrap}>
          <label htmlFor="message">Message</label>
          <Field name="message" type="text" as="textarea" />
          <span className={styles.errorMessage}>
            <ErrorMessage name="message" />
          </span>
        </div>
        <br />
        <Recaptcha
          sitekey={process.env.SITE_RECAPTCHA_KEY}
          render="explicit"
          theme="dark"
          verifyCallback={response => {
            setToken(response)
          }}
          onloadCallback={() => {
            console.log("done loading!")
          }}
        />
        <br />
        <Button formSubmit orangeBtn>
          Submit
        </Button>
      </Form>
    </Formik>
  )
}

export default ContactForm
