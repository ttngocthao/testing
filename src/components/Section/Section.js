import React from "react"

function Section({
  title,
  titleColor,
  subTitle,
  children,
  subTitle2,
  titleCenter,
}) {
  return (
    <section className="padding-vertical--30 padding-horizontal--10">
      <h2
        className={`text--bold heading2 text--${titleColor} ${titleCenter &&
          "text--center"} padding-bottom--10`}
      >
        {title}
      </h2>
      {subTitle && (
        <h4 className="heading4 text--upperCase padding-bottom--20 text--center">
          {subTitle}
        </h4>
      )}
      {subTitle2 && (
        <h4 className={`heading4 padding-bottom--10 text--${titleColor}`}>
          {subTitle2}
        </h4>
      )}
      {children}
    </section>
  )
}

export default Section
