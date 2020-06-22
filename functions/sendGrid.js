const sgMail = require("@sendgrid/mail")
const { SENDGRID_API_KEY } = process.env

exports.handler = async event => {
  console.log("event", event)
  const payload = JSON.parse(event.body)
  console.log("api", SENDGRID_API_KEY)
  sgMail.setApiKey(SENDGRID_API_KEY)
  const body = Object.keys(payload)
    .map(k => {
      return `${k}: ${payload[k]}`
    })
    .join("<br><br>")
  const msg = {
    to: "thao.truong@arthaus.co.uk",
    from: "testing page",
    subject: "Contact Form Submission",
    html: body,
  }
  console.log("msg", msg)
  console.log("sgMail", sgMail)
}
