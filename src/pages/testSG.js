import React from "react"
import { Formik, Field, Form, ErrorMessage } from "formik"

const testSG = () => {
  return (
    <div>
      <h1>Test send grid</h1>

      <Formik
        initialValues={{ name: "" }}
        onSubmit={(data, { resetForm }) => {
          fetch("/.netlify/functions/sendGrid", {
            method: "POST",

            body: JSON.stringify(data),
          })
          console.log("data from frontend", data)
        }}
      >
        <Form>
          <Field name="name" type="text" />
          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </div>
  )
}

export default testSG
