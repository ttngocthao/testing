import React from "react"
import Button from "../Buttons/Button"
function StartForm() {
  return (
    <section className="midBrown-bkg padding-vertical--40 form-wrap">
      <form className="midBrown2-bkg padding-vertical--20 padding-horizontal--20 start-form">
        <h2 className="heading heading2 heading-bold text--center padding-vertical--20">
          Get early access today
        </h2>
        <div className="text--center">
          It only takes a minute to sign up and our free starter tier is
          extremely generous. If you have any questions, our support team would
          be happy to help you.
        </div>
        <div className="padding-vertical--20">
          <input type="text" placeholder="email@example.com" />
        </div>
        <Button>Get Started For Free</Button>
      </form>
    </section>
  )
}

export default StartForm
