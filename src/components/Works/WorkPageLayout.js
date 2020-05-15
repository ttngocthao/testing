import React, { Fragment } from "react"
import PropTypes from "prop-types"
import PageTitle from "../PageTiltle/PageTitle"
import ImgCard from "../ImgCard/ImgCard"
import styles from "./workPageLayout.module.scss"
function WorkPageLayout({ pageTile, heroSrc, paragraphs }) {
  return (
    <div>
      <PageTitle pageTitle={pageTile} />
      <ImgCard src={heroSrc} alt="Hero Banner" className={styles.heroImg} />
      {paragraphs &&
        paragraphs.map((item, indx) => {
          return (
            <div className={styles.paragraph} key={indx}>
              {item.text && <div>{item.text}</div>}
              {item.link && (
                <a href={item.link} className={styles.link}>
                  View the site
                </a>
              )}
              {item.img && (
                <ImgCard
                  src={item.img}
                  alt="work examples"
                  className={styles.exampleImg}
                />
              )}
            </div>
          )
        })}
    </div>
  )
}
WorkPageLayout.propTypes = {
  pageTile: PropTypes.string,
  heroSrc: PropTypes.string,
  paragraphs: PropTypes.array,
}
export default WorkPageLayout
