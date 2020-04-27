import React, { Fragment, useState, useRef, useEffect } from "react"
import PageTitle from "../PageTiltle/PageTitle"
import SubNavBar from "../SubNav/SubNavBar"
function PageTitleSubNavWrap({ pageTitle, navItemList, location }) {
  const [navSticky, setNavSticky] = useState(false)
  const ref = useRef(null)
  const handleScroll = () => {
    if (ref.current) {
      if (ref.current.getBoundingClientRect().top <= 0) {
        setNavSticky(true)
      } else {
        setNavSticky(false)
      }
    }
  }
  useEffect(() => {
    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", () => handleScroll)
    }
  }, [])
  return (
    <Fragment>
      <PageTitle pageTitle={pageTitle} reference={ref} />
      <SubNavBar
        navItemList={navItemList}
        navSticky={navSticky}
        location={location}
      />
    </Fragment>
  )
}

export default PageTitleSubNavWrap
