exports.handler = async event => {
  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      body: "Method Not Allowed",
      headers: { Allow: "POST" },
    }
  }
  console.log("starting")
  const data = JSON.stringify(event.body)
  console.log("data", data)
  const { name } = data
  const sgMail = require("@sendgrid/mail")
  sgMail.setApiKey(process.env.SENDGRID_API_KEY)
  const msg = {
    to: "thao.truong@arthaus.co.uk",
    from: "send grid - netlify function",
    subject: "Sending with Twilio SendGrid is Fun",
    text: name,
  }
  try {
    await sgMail.send(msg)
    return {
      statusCode: 200,
      body: "Message sent",
    }
  } catch (err) {
    return {
      statusCode: err.code,
      body: err.message,
    }
  }
}
