import React from "react"

import DiageoImg from "../../images/about/clients/diageo_logo.png"
import WaveImg from "../../images/about/clients/waves_logo.png"
import ItvImg from "../../images/about/clients/itv_logo.png"
import TescoImg from "../../images/about/clients/tesco_logo.png"
import SsyImg from "../../images/about/clients/ssy_logo.png"
import AgnovosImg from "../../images/about/clients/agnovos_logo.png"
import TuiImg from "../../images/about/clients/tui_logo.png"
import LloydsImg from "../../images/about/clients/lloyds_logo.png"
import WorldpayImg from "../../images/about/clients/worldpay_logo.png"
import HsbcImg from "../../images/about/clients/hsbc_logo.png"
import CocacolaImg from "../../images/about/clients/cocacola_logo.png"
import OtsukaImg from "../../images/about/clients/otsuka_logo.png"
import MsImg from "../../images/about/clients/M&S_logo.png"
import DixonImg from "../../images/about/clients/dixons_logo.png"
import BupaImg from "../../images/about/clients/bupa_logo.png"

import ImgCard from "../ImgCard/ImgCard"

import styles from "./ourClient.module.scss"

const ClientsData = [
  { src: DiageoImg, alt: "Diageo Ltd" },
  { src: WaveImg, alt: "Wave Ltd" },
  { src: ItvImg, alt: "ITV Ltd" },
  { src: TescoImg, alt: "Tesco Ltd" },
  { src: SsyImg, alt: "Simson spence young Ltd" },
  { src: AgnovosImg, alt: "Agnovos Ltd" },
  { src: TuiImg, alt: "TUI Ltd" },
  { src: LloydsImg, alt: "Lloyds Ltd" },
  { src: WorldpayImg, alt: "World Pay Ltd" },
  { src: HsbcImg, alt: "HSBC Ltd" },
  { src: CocacolaImg, alt: "Coca-Cola Ltd" },
  { src: OtsukaImg, alt: "Otsuka Ltd" },
  { src: MsImg, alt: "M&S Ltd" },
  { src: DixonImg, alt: "Dixon Carphone Ltd" },
  { src: BupaImg, alt: "Bupa Ltd" },
]

function OurClients() {
  return (
    <div className={styles.clientLogoList}>
      {ClientsData &&
        ClientsData.map(({ src, alt }, indx) => {
          return (
            <ImgCard
              key={indx}
              src={src}
              alt={alt}
              className={styles.clientLogo}
            />
          )
        })}
    </div>
  )
}

export default OurClients
