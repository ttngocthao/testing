import React from "react"
import { graphql } from "gatsby"
import Layout from "../Layout/Layout"
import ImgCard from "../ImgCard/ImgCard"
import PageTitle from "../PageTiltle/PageTitle"
import stlyes from "./blog.module.scss"
function BlogPageLayout({ data }) {
  const post = data && data.markdownRemark
  const { title, thumbnailImg, paragraph } = post.frontmatter
  console.log("blog page layout data", data)
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
      {post && (
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
export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        thumbnailImg
        paragraph {
          paragraphImage
          paragraphText
          paragraphLink
          paragraphHeading
        }
      }
    }
  }
`
export default BlogPageLayout
