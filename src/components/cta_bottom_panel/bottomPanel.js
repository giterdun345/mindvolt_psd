import React from 'react'
import * as bottomPanelStyles from './botPanel.module.scss'
import { StaticImage } from 'gatsby-plugin-image'

const BottomPanel = () => {
  return ( 
    <div>
      <StaticImage
          src="../../images/headphones-guy.png"
          alt="smiling at laptop on headphones"
          placeholder="blurred"
          formats={["AUTO", "WEBP", "AVIF"]}
          loading='lazy'
          className={bottomPanelStyles.sideImage}
      />

      <BottomPanel />
      
      <StaticImage
          src="../../images/people-eating.png"
          alt="couple eating pizza and laughing"
          placeholder="blurred"
          formats={["AUTO", "WEBP", "AVIF"]}
          loading='lazy'
          className={bottomPanelStyles.sideImage}    
      />
    </div>
   );
}
 
export default BottomPanel;
