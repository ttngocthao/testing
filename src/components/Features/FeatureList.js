import React from "react"
import AccessIconUrl from "../../../public/images/icon-access-anywhere.svg"
import SecurityIconUrl from "../../../public/images/icon-security.svg"
import CollaborationIconUrl from "../../../public/images/icon-collaboration.svg"
import AnyFileIconUrl from "../../../public/images/icon-any-file.svg"
import FeatureCard from "./FeatureCard"

const featureData = [
  {
    imgAlt: "computer and devises icon means accessible anywhere",
    imgUrl: AccessIconUrl,
    title: "Access your files, anywhere",
    bodyText:
      "The ability to user a smartphone, tablet, or computer to access your    account means your files follow you everywhere.",
  },
  {
    imgAlt: "security icon mean its secured",
    imgUrl: SecurityIconUrl,
    title: "Security you can trust",
    bodyText:
      "2-factor authentication and user-controlled encryption are just a couple of the security features we allow to help secure your files.",
  },
  {
    imgAlt: "collaboration icon",
    imgUrl: CollaborationIconUrl,
    title: "Real-time collaboration",
    bodyText:
      "Securely share files and folders with friends, family and colleagues for live collaboration. No email attachments required.",
  },
  {
    imgAlt: "any types of file icon",
    imgUrl: AnyFileIconUrl,
    title: "Store any type of file",
    bodyText:
      " Whether you're sharing holidays photos or work documents, Fylo has you covered allowing for all file types to be securely stored and shared.",
  },
]
function FeatureList() {
  return (
    <section className="midBrown-bkg">
      <section className="feature-list padding-vertical--40">
        {featureData &&
          featureData.map((item, indx) => (
            <FeatureCard
              key={indx}
              imgAlt={item.imgAlt}
              imgUrl={item.imgUrl}
              title={item.title}
              bodyText={item.bodyText}
            />
          ))}
      </section>
    </section>
  )
}

export default FeatureList
