import React from "react"
import FeatureCard from "./FeatureCard"
import { FEATURES } from "../../data/feature.data"

function FeatureList() {
  return (
    <section className="midBrown-bkg">
      <section className="feature-list padding-vertical--40">
        {FEATURES &&
          FEATURES.map((item, indx) => {
            return (
              <FeatureCard
                key={indx}
                imgAlt={item.imgAlt}
                imgUrl={item.imgUrl}
                title={item.title}
                bodyText={item.bodyText}
              />
            )
          })}
      </section>
    </section>
  )
}

export default FeatureList
