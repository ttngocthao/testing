import React from "react"

function PageTitle({ pageTitle }) {
  return (
    <h1 className="heading1 text--center text--upperCase page-title padding-vertical--30">
      <span className="border-bottom--2 border-color--mainOrange">
        {pageTitle}
      </span>
    </h1>
  )
}

export default PageTitle
