import React from "react"
import { Formik, Field, Form, ErrorMessage } from "formik"

const encode = data => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&")
}

function TestForm() {
  return (
    <Formik
      initialValues={{ fullName: "", email: "" }}
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
        fetch("/", {
          method: "POST",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: encode({
            "form-name": document.getElementsByName("contactTest")[0],
            data,
          }),
        })
          .then(() => {
            alert("send")
            resetForm(true)
            //navigate(form.getAttribute("action"))
          })
          .catch(error => alert(error))
      }}
    >
      {({ values, errors }) => (
        <Form
          name="contactTest"
          method="post"
          action="/thanks/"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          data-netlify-recaptcha="true"
        >
          <input type="hidden" name="form-name" value="contactTest" />{" "}
          {/*this is for netlify to work*/}
          <label htmlFor="fullName">Full name:</label>
          <Field name="fullName" type="text" />
          <ErrorMessage name="fullName" />
          <br />
          <label htmlFor="email">Email</label>
          <Field name="email" type="text" />
          <ErrorMessage name="email" />
          <br />
          <button type="submit">Submit</button>
          <pre>{JSON.stringify(values, null, 2)}</pre>
          <pre>{JSON.stringify(errors, null, 2)}</pre>
        </Form>
      )}
    </Formik>
  )
}

export default TestForm
