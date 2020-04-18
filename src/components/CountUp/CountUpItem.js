import React, { useState } from "react"
import Count from "react-countup"
import VisibilitySensor from "react-visibility-sensor"
import styles from "./countUp.module.scss"

function CountUpItem({ end, topText, bottomText, unit }) {
  const [isInView, setInView] = useState(false)
  //const isInView = useRef(false)
  const onChange = isVisible => {
    if (isVisible) {
      setInView(true)
    }
  }

  return (
    <VisibilitySensor onChange={onChange} delayedCall>
      <li className={styles.countItem}>
        <div className="counterItem text-center">
          <p className={styles.text}>{topText}</p>
          <p className={styles.countValue}>
            <Count duration={3} start={0} end={isInView ? end : 0} />
            {unit && <span>{unit}</span>}
          </p>
          <p className={styles.text}>{bottomText}</p>
        </div>
      </li>
    </VisibilitySensor>
  )
}

export default CountUpItem
