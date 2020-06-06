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
import AgnovosWorkImg from "../images/work/agnovos.png"
import HsbcMentorWorkImg from "../images/work/HSBCMentoring.png"
import BupaWorkImg from "../images/work/BupaTalent.png"
import DiageoTechWorkImg from "../images/work/diageoTechcafe.png"
import HsbcUniWorkImg from "../images/work/HSBCUniversity.png"
import SsyWorkImg from "../images/work/SSY.png"
import WaveWorkImg from "../images/work/Waves.png"
import DiageoWorkPlaceImg from "../images/work/DiageoWorkplace.png"
export const gridHomeData = [
  new GridItemData(
    "type-a",
    "item-1",
    "We are a multimedia design agency specialising in brand development, creative communications and digital solutions.",
    null,
    "mainOrange",
    null,
    null,
    false,
    false
  ),
  new GridItemData(
    "type-b",
    "item-2",
    "Branding & website design:",
    "Simpson Spence Young",
    null,
    SsyImg,
    "/simpson-spence-young",
    true,
    false
  ),
  new GridItemData(
    "type-c",
    "item-3",
    "Talent toolkit:",
    "Bupa",
    null,
    BupaImg,
    "/bupa",
    true,
    false
  ),
  new GridItemData(
    "type-d",
    "item-4",
    "Our expertise",
    null,
    "green",
    null,
    "/expertise",
    true,
    false
  ),
  new GridItemData(
    "type-d",
    "item-5",
    "Get in touch",
    null,
    "mainBlue",
    null,
    "/contact",
    true,
    false
  ),
  new GridItemData(
    "type-b",
    "item-6",
    "Insight & Ideas:",
    "Colour of the Year 2020",
    null,
    ColorOfTheYearImg,
    "https://www.instagram.com/p/B8GlU12AlsY/",
    true,
    false
  ),
  new GridItemData(
    "type-a",
    "item-7",
    "Mentoring Portal:",
    "HSBC",
    null,
    HsbcMentoringImg,
    "/hsbc-mentoring-portal",
    true,
    false
  ),
  new GridItemData(
    "type-b",
    "item-8",
    "Branding:",
    "HSBC University",
    null,
    HsbcUniversityImg,
    "/hsbc-university",
    true,
    false
  ),
  new GridItemData(
    "type-d",
    "item-9",
    "Clients",
    null,
    "burgendy",
    null,
    "/about",
    true,
    false
  ),
  new GridItemData(
    "type-d",
    "item-10",
    "Inspiring & exceeding expectations for 25 years",
    null,
    "mainBlue",
    null,
    null,
    false,
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
    false,
    true
  ),
  new GridItemData(
    "type-b",
    "item-12",
    "Mobile booking app:",
    "Waves",
    null,
    WavesImg,
    "/waves",
    true,
    false
  ),
  new GridItemData(
    "type-b",
    "item-13",
    "About Us",
    null,
    null,
    AboutUsImg,
    "/about",
    true,
    false
  ),
  new GridItemData(
    "type-c",
    "item-14",
    "Looks like good design",
    "Interesting design that caught our eye this week...",
    "green",
    null,
    "https://www.behance.net/gallery/94203457/Guess-Voice-Mobile-app?tracking_source=curated_tools_xd",
    false,
    true
  ),
  new GridItemData(
    "type-c",
    "item-15",
    "Employee engagement",
    null,
    null,
    DiageoImg,
    "/diageo-techcafe",
    true,
    false
  ),
  new GridItemData(
    "type-b",
    "item-16",
    "Corporate website:",
    "Agnovos",
    null,
    AgnovosImg,
    "/agnovos",
    true,
    false
  ),
]

export const caseStudyData = [
  {
    linkUrl: "/agnovos",
    title: "AgNovos website",
    imgUrl: AgnovosWorkImg,
    type: "digital",
  },
  {
    linkUrl: "/hsbc-mentoring-portal",
    title: "HSBC Mentoring",
    imgUrl: HsbcMentorWorkImg,
    type: "digital",
  },
  {
    linkUrl: "/bupa",
    title: "Bupa talent toolkit",
    imgUrl: BupaWorkImg,
    type: "communications",
  },
  {
    linkUrl: "/diageo-techcafe",
    title: "Diageo Tech Cafe",
    imgUrl: DiageoTechWorkImg,
    type: "branding",
  },
  {
    linkUrl: "/hsbc-university",
    title: "HSBC University",
    imgUrl: HsbcUniWorkImg,
    type: "branding",
  },
  {
    linkUrl: "/simpson-spence-young",
    title: "Simpson Spence Young",
    imgUrl: SsyWorkImg,
    type: "branding",
  },
  {
    linkUrl: "/waves",
    title: "Waves booking app",
    imgUrl: WaveWorkImg,
    type: "digital",
  },
  {
    linkUrl: "/diageo-workplace",
    title: "Diageo Workplace",
    imgUrl: DiageoWorkPlaceImg,
    type: "communications",
  },
]
