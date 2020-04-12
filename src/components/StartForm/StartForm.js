import React from "react"
import Button from "../Buttons/Button"
function StartForm() {
  return (
    <section className="midBrown-bkg padding-top--40 padding-bottom--60 form-wrap">
      <form className="midBrown2-bkg padding-top--20 padding-bottom--60 start-form">
        <h2 className="heading heading2 heading-bold text--center padding-vertical--20">
          Get early access today
        </h2>
        <div className="text--center padding-horizontal--40">
          It only takes a minute to sign up and our free starter tier is
          extremely generous. If you have any questions, our support team would
          be happy to help you.
        </div>
        <div className="button-list padding-top--20">
          <div className="input-wrap">
            <input type="text" placeholder="email@example.com" />
          </div>

          <Button>Get Started For Free</Button>
        </div>
      </form>
    </section>
  )
}

export default StartForm
