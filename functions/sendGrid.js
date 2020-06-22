const sgMail = require("@sendgrid/mail")
const { SENDGRID_API_KEY } = process.env

exports.handler = async event => {
  console.log("click", event)
  const payload = JSON.parse(event.body)
  console.log("api", SENDGRID_API_KEY)
  const body = Object.keys(payload)
    .map(k => {
      return `${k}: ${payload[k]}`
    })
    .join("<br><br>")
  const msg = {
    to: SENDGRID_TO_EMAIL,
    from: email,
    subject: subject ? subject : "Contact Form Submission",
    html: body,
  }
  console.log("msg", msg)
}
