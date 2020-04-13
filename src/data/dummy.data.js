import GridItemData from "../models/gridItem.model"
import SsyImg from "../images/home/ssy.png"
import BupaImg from "../images/home/bupa-talent.png"
import ColorOfTheYearImg from "../images/home/color-of-the-year.png"
import HsbcMentoringImg from "../images/home/hsbc-mentoring.png"
import HsbcUniversityImg from "../images/home/hsbc-university.png"
import WavesImg from "../images/home/waves-app.png"
import AgnovosImg from "../images/home/agnovos-website.png"
import AboutUsImg from "../images/home/about-us.png"
import DiageoImg from "../images/home/diageo-tech-cafe.png"

export const gridHomeData = [
  new GridItemData(
    "type-a",
    "item-1",
    "We are a multimedia design agency specialising in brand development, creative communications and digital solutions.",
    null,
    "mainOrange",
    null,
    null,
    false
  ),
  new GridItemData(
    "type-b",
    "item-2",
    "Branding & website design:",
    "Simpson Spence Young",
    null,
    SsyImg,
    "/",
    true
  ),
  new GridItemData(
    "type-c",
    "item-3",
    "Talent toolkit:",
    "Bupa",
    null,
    BupaImg,
    "/",
    true
  ),
  new GridItemData(
    "type-d",
    "item-4",
    "Our expertise",
    null,
    "green",
    null,
    "/expertise",
    true
  ),
  new GridItemData(
    "type-d",
    "item-5",
    "Get in touch",
    null,
    "mainBlue",
    null,
    "/contact",
    true
  ),
  new GridItemData(
    "type-b",
    "item-6",
    "Insight & Ideas:",
    "Colour of the Year 2020",
    null,
    ColorOfTheYearImg,
    "/",
    true
  ),
  new GridItemData(
    "type-a",
    "item-7",
    "Mentoring Portal:",
    "HSBC",
    null,
    HsbcMentoringImg,
    "/",
    true
  ),
  new GridItemData(
    "type-b",
    "item-8",
    "Branding:",
    "HSBC University",
    null,
    HsbcUniversityImg,
    "/",
    true
  ),
  new GridItemData(
    "type-d",
    "item-9",
    "Clients",
    null,
    "burgendy",
    null,
    "/about",
    true
  ),
  new GridItemData(
    "type-d",
    "item-10",
    "Inspiring & exceeding expectations for 25 years",
    null,
    "mainBlue",
    null,
    null,
    false
  ),
  new GridItemData(
    "type-c",
    "item-11",
    "Digital expertise",
    "Conceiving, building and supporting a wide range of user-centric sites, portals and tools",
    "mainBlue",
    null,
    "/expertise",
    false
  ),
  new GridItemData(
    "type-b",
    "item-12",
    "Mobile booking app:",
    "Waves",
    null,
    WavesImg,
    "/",
    true
  ),
  new GridItemData(
    "type-b",
    "item-13",
    "About Us",
    null,
    null,
    AboutUsImg,
    "/about",
    true
  ),
  new GridItemData(
    "type-c",
    "item-14",
    "Looks like good design",
    "Interesting design that caught our eye this week...",
    "green",
    null,
    "/",
    false
  ),
  new GridItemData(
    "type-c",
    "item-15",
    "Employee engagement",
    null,
    null,
    DiageoImg,
    "/",
    true
  ),
  new GridItemData(
    "type-b",
    "item-16",
    "Corporate website:",
    "Agnovos",
    null,
    AgnovosImg,
    "/",
    true
  ),
]
