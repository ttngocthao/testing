import React, { useState, useEffect } from "react"
import { Formik, Field, Form, ErrorMessage } from "formik"

import Recaptcha from "react-recaptcha"

const encode = data => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&")
}

function TestForm() {
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
        "bot-field": "",
        "form-name": "contactTest",
        fullName: "",
        email: "",
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
        return errors
      }}
      onSubmit={(data, { resetForm }) => {
        if (token !== null) {
          fetch("/", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: encode({
              "form-name": "contactTest",
              ...data,
              "g-recaptcha-response": token,
            }),
          })
            .then(() => {
              alert("send")
              resetForm(true)
              //navigate(form.getAttribute("action"))
            })
            .catch(error => alert(error))
        } else {
          alert("recaptcha needed")
        }
      }}
    >
      {({ values, errors }) => (
        <Form
          data-netlify="true"
          name="contactTest"
          data-netlify-honeypot="bot-field"
          data-netlify-recaptcha="true"
        >
          <Field type="hidden" name="form-name" />
          <Field type="hidden" name="bot-field" />
          <label htmlFor="fullName">Full name:</label>
          <Field name="fullName" type="text" />
          <ErrorMessage name="fullName" />
          <br />
          <label htmlFor="email">Email</label>
          <Field name="email" type="text" />
          <ErrorMessage name="email" />
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
          <button type="submit">Submit</button>
          <pre>{JSON.stringify(values, null, 2)}</pre>
          <pre>{JSON.stringify(errors, null, 2)}</pre>
          <pre>{JSON.stringify(token)}</pre>
        </Form>
      )}
    </Formik>
  )
}

export default TestForm
