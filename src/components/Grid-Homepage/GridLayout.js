import React from "react"
import GridItem from "../../models/gridItem.model"
const gridHomeData = [
  new GridItem(
    "type-a",
    "item-1",
    "We are a multimedia design agency specialising in brand development, creative communications and digital solutions.",
    null,
    "mainOrange",
    null,
    null
  ),
  new GridItem(
    "type-b",
    "item-2",
    "Branding & website design:",
    "Simpson Spence Young",
    null,
    "../../images/home/ssy.png",
    "/"
  ),
  new GridItem(
    "type-c",
    "item-3",
    "Talent toolkit:",
    "Bupa",
    null,
    "../../images/home/bupa-talent.png"
  ),
  new GridItem("type-d", "item-4", "Our expertise", null, "green", null, "/"),
  new GridItem("type-d", "item-5", "Get in touch", null, "mainBlue", null, "/"),
  new GridItem(
    "type-b",
    "item-6",
    "Insight & Ideas:",
    "Colour of the Year 2020",
    null,
    "../../images/home/color-of-the-year.png",
    "/"
  ),
  new GridItem(
    "type-a",
    "item-7",
    "Mentoring Portal:",
    "HSBC",
    null,
    "../../images/home/hsbc-mentoring.png"
  ),
  new GridItem(
    "type-b",
    "item-8",
    "Branding:",
    "HSBC University",
    null,
    "../../images/home/hsbc-university.png",
    "/"
  ),
  new GridItem("type-d", "item-9", "Clientts", null, "burgendy", null, "/"),
  new GridItem(
    "type-d",
    "item-10",
    "Inspiring & exceeding expectations for 25 years",
    null,
    "mainBlue",
    null,
    null
  ),
  new GridItem(
    "type-c",
    "item-11",
    "Digital expertise",
    "Conceiving, building and supporting a wide range of user-centric sites, portals and tools",
    "mainBlue",
    null,
    "/"
  ),
  new GridItem(
    "type-b",
    "item-12",
    "Mobile booking app:",
    "Waves",
    null,
    "../../images/home/waves-app.png"
  ),
  new GridItem(
    "type-b",
    "item-13",
    "About Us",
    null,
    null,
    "../../images/home/about-us.png",
    "/"
  ),
  new GridItem(
    "type-c",
    "item-14",
    "Looks like good design",
    "Interesting design that caught our eye this week...",
    "green",
    null,
    "/"
  ),
  new GridItem(
    "type-c",
    "item-15",
    "Employee engagement",
    null,
    null,
    "../../images/home/diageo-tech-cafe.png",
    "/"
  ),
  new GridItem(
    "type-b",
    "item-16",
    "Corporate website:",
    "Agnovos",
    null,
    "../../images/home/agnovos-website.png",
    "/"
  ),
]
function GridLayout() {
  console.log(gridHomeData)
  return <div>this is grid layout</div>
}

export default GridLayout
