import * as heroStyle from './hero.module.scss'

const GoldbarHeader = () => {
  // gold bar with linear gradient to right on top of hero image 
  return ( 
    <svg className= {heroStyle.rectangleSVG} viewBox=' 0 0 50 60' preserveAspectRatio='none'>
      <defs>
        <linearGradient id="linear" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%"   stop-color="#fa9f01"/>
          <stop offset="100%" stop-color="#f4ca12"/>
        </linearGradient>
      </defs>
      <rect width="100%" height="100%" fill="url(#linear)"/>
    </svg>
   );
}
 
export default GoldbarHeader;