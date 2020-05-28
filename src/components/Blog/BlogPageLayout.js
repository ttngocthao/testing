import React from "react"
import { graphql } from "gatsby"
import Layout from "../Layout/Layout"
import ImgCard from "../ImgCard/ImgCard"
import PageTitle from "../PageTiltle/PageTitle"
import stlyes from "./blog.module.scss"
function BlogPageLayout({ pageContext }) {
  const { blogItem } = pageContext

  const { title, thumbnailImg, paragraph } = blogItem.frontmatter
  console.log("blog page layout data", pageContext)
  const displayEachParagraph = (eachParagraph, key) => {
    const {
      paragraphText,
      paragraphImage,
      paragraphLink,
      paragraphHeading,
    } = eachParagraph
    return (
      <div key={key} className={stlyes.para}>
        {paragraphHeading && (
          <h2 className={stlyes.paraHeading}>{paragraphHeading}</h2>
        )}
        {paragraphText && <p>{paragraphText}</p>}
        {paragraphLink && (
          <a href={paragraphLink} className={stlyes.paraLink}>
            Read more here
          </a>
        )}
        {paragraphImage && (
          <ImgCard
            className={stlyes.paraImg}
            alt={`image demonstrate the text content`}
            src={paragraphImage}
          />
        )}
      </div>
    )
  }
  return (
    <Layout>
      {pageContext && (
        <>
          <PageTitle pageTitle={title} />

          <ImgCard alt="hero blog post" src={thumbnailImg} />
          <div className={stlyes.paraWrap}>
            {paragraph &&
              paragraph.map((item, index) => {
                return displayEachParagraph(item, index)
              })}
          </div>
        </>
      )}
    </Layout>
  )
}

export default BlogPageLayout
