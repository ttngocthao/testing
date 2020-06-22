exports.handler = async event => {
  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      body: "Method Not Allowed",
      headers: { Allow: "POST" },
    }
  }
  console.log("starting")
  const data = JSON.parse(event.body)
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
  console.log("before try catch")
  try {
    await sgMail.send(msg)
    console.log("trying to send")
    return {
      statusCode: 200,
      body: "Message sent",
    }
  } catch (err) {
    console.log(err)
    return {
      statusCode: err.code,
      body: err.message,
    }
  }
}
