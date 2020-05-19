import React from "react"
import PropTypes from "prop-types"
import PageTitle from "../PageTiltle/PageTitle"
import ImgCard from "../ImgCard/ImgCard"
import { caseStudyData } from "../../data/dummy.data"
import styles from "./workPageLayout.module.scss"
import MoreWorks from "./MoreWorks"
import ContactForm from "../ContactForm/ContactForm"
function WorkPageLayout({ pageTile, heroSrc, paragraphs }) {
  let otherWorksData
  if (typeof window !== `undefined`) {
    const currentPage = window.location.pathname
    const indexInArr = caseStudyData.findIndex(
      item => item.linkUrl === currentPage
    )
    const otherWorks = (currentIndx, itemsShow, data) => {
      let i = 1
      let html = []
      while (i < itemsShow + 1) {
        if (currentIndx + i > data.length - 1) {
          currentIndx = -i
        }
        html.push(data[currentIndx + i])
        i++
      }
      return html
    }
    //find an index of current page in the array, display the next 3 items.
    otherWorksData = otherWorks(indexInArr, 3, caseStudyData)
  }

  return (
    <>
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
      <hr style={{ maxWidth: "800px" }} />
      <h2 className={styles.otherWorkListTitle}>Our other work</h2>
      <ul className={styles.otherWorkList}>
        {otherWorksData &&
          otherWorksData.map((item, indx) => {
            return <MoreWorks itemData={item} key={indx} />
          })}
      </ul>
      <ContactForm />
    </>
  )
}
WorkPageLayout.propTypes = {
  pageTile: PropTypes.string,
  heroSrc: PropTypes.string,
  paragraphs: PropTypes.array,
}
export default WorkPageLayout
