import React from 'react'
import { StaticImage } from "gatsby-plugin-image"

import * as heroStyle from './hero.module.scss'

const CtaContainer = () => {
  return ( 
    <div className={heroStyle.ctaContainer}>
      <StaticImage
          src="../../images/credit-card.png"
          alt="Demo FirstBank Visa debit card"
          placeholder="blurred"
          formats={["AUTO", "WEBP", "AVIF"]}
          loading='eager'
          className={heroStyle.creditCard}
        />
      <button className={heroStyle.ctaButton}>
        <span>See details</span>
        <div className={heroStyle.arrowDown} />
      </button>
    </div>
   );
}
 
export default CtaContainer;