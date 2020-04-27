import React, { useState } from "react"
import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react"

import styles from "./googleMap.module.scss"
import ImgCard from "../ImgCard/ImgCard"

import MarkerImg from "../../images/contact/mappin.png"

function GoogleMap(props) {
  const location = { lat: 51.538712, lng: -0.902438 }
  const [selectedPlace, setSelectedPlace] = useState({})
  const [activeMarker, setActiveMarker] = useState({})
  const [showInfoWindow, setShowInfoWindow] = useState(false)
  const onMarkerClick = (props, marker, e) => {
    setSelectedPlace(props)
    setActiveMarker(marker)
    setShowInfoWindow(true)
  }

  const onMapClicked = () => {
    if (showInfoWindow) {
      setShowInfoWindow(false)
    }
  }
  return (
    <section className={styles.mapWrap}>
      <Map
        google={props.google}
        initialCenter={location}
        zoom={14}
        onClick={onMapClicked}
        style={{ width: "100%", height: "100%" }}
      >
        <Marker
          onClick={onMarkerClick}
          className={styles.markerPin}
          title={"Arthaus Visual Communications Ltd"}
          name={"Arthaus Visual Communications Ltd"}
          icon={{ url: MarkerImg }}
        />

        <InfoWindow
          marker={activeMarker}
          visible={showInfoWindow}
          onClose={() => setShowInfoWindow(false)}
          className="map-info-wrap"
        >
          <div>
            <h4>Arthaus Visual Communications Ltd</h4>
            <p>24/26 Old Brewery Lane</p>
            <p>New Street, Henley on Thames,</p>
            <p>Oxon, RG9 2DE</p>
          </div>
        </InfoWindow>
      </Map>
    </section>
  )
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyAswQEs8tBssxXVuR6EPBsjx_BJ_dMWbAs",
})(GoogleMap)
