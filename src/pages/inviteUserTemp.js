import React from "react"

function inviteUserTemp() {
  return (
    <div>
      <h1>Welcome to admin site</h1>
      <a href="{{ .SiteURL }}/admin/#invite_token={{ .Token }}">
        Click here to access admin site
      </a>
    </div>
  )
}

export default inviteUserTemp
