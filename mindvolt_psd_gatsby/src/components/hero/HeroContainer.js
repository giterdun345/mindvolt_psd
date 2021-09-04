import React from 'react'
import { StaticImage } from "gatsby-plugin-image"

import CtaContainer from './CtaContainer'
import * as heroStyle from './hero.module.scss'

const HeroContainer = () => {  
  return (
    <div className='hero-container'>
      <svg className= {heroStyle.rectangleSVG} viewBox=' 0 0 50 60' preserveAspectRatio='none'>
        <rect width="100%" height="100%" fill='#f9a403'  />
      </svg>
      <StaticImage
            src="../../images/hero-image.png"
            alt="Woman smiling, looking at First Bank mobile app"
            placeholder="blurred"
            formats={["AUTO", "WEBP", "AVIF"]}
            layout="fullWidth"
            loading='eager'
          />
      <div className={heroStyle.heroText}>  
        <h1> 
          Safe and smart way to pay online. 
          <br/>
          For just about everything. 
        </h1>
        <h2>
          Your FirstBank Visa&reg; Debit Card.
        </h2>
        <CtaContainer />
      </div>
    </div>
    );
}
 
export default HeroContainer;