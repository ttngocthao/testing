import React from "react"
import { Formik, Field, Form, ErrorMessage } from "formik"
import Button from "../Buttons/Button"
import styles from "./direction-form.module.scss"

function DirectionForm() {
  const arthausLocation =
    "Arthaus Visual Communications Ltd, 24 Old Brewery Ln, New St, Henley-on-Thames RG9 2DE"
  const destination = arthausLocation.replace(/[^A-Z0-9]+/gi, "+")
  return (
    <Formik
      initialValues={{ postcode: "" }}
      validate={values => {
        const errors = {}
        if (!values.postcode) {
          errors.postcode = "Postcode cannot be blank!"
        } else if (values.postcode.length < 5 && values.postcode.length > 10) {
          errors.postcode = "Invalid postcode"
        } else if (values.postcode.match(/[^A-Z0-9 ]+/gi)) {
          errors.postcode = "No space or special characters"
        }
        return errors
      }}
      onSubmit={data => {
        const directionParams = {
          api: 1,
          origin: data.postcode.trim(),
          destination: destination,
        }
        const directionsUrl =
          "https://www.google.com/maps/dir/?" +
          new URLSearchParams(directionParams).toString()
        window.open(directionsUrl, "_blank")
      }}
    >
      <Form name="direction-form" className={styles.form}>
        <div className={styles.inputWrap}>
          <label htmlFor="postcode" hidden></label>
          <Field
            name="postcode"
            id="postcode"
            type="text"
            placeholder="Ex:  RG92DE"
          />
          <span className={styles.errorMessage}>
            <ErrorMessage name="postcode" />
          </span>
        </div>

        <Button formSubmit orangeBtn>
          Get directions
        </Button>
      </Form>
    </Formik>
  )
}

export default DirectionForm
