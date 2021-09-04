import { StaticImage } from 'gatsby-plugin-image'
import React from 'react'
import * as midPanelStyles from './midPanel.module.scss'

const MiddlePanelList = () => {
  // needs graphql queries for mapping 
  return ( 
    <div id='middle_panel' name='middle_panel' className={midPanelStyles.listContainer}>
      
      <div className={midPanelStyles.listItem}>
        <StaticImage
          src="../../images/cellphone-icon.png"
          alt="pay bills online cellphone icon"
          placeholder="blurred"
          formats={["AUTO", "WEBP", "AVIF"]}
          loading='lazy'
          className={midPanelStyles.listIcon}
        />
        <h4>Cell phone bills</h4>
        <p>
          Take care of your monthly
          payments online with ease
        </p>
      </div>

      <div className={midPanelStyles.listItem}>
        <StaticImage
          src="../../images/headphones-icon.png"
          alt="pay for subscriptions online headphones icon"
          placeholder="blurred"
          formats={["AUTO", "WEBP", "AVIF"]}
          loading='lazy'
          className={midPanelStyles.listIcon}
        />
        <h4>Streaming services</h4>
        <p>
           Pay for subscriptions such as music,
           movies and TV streaming
        </p>
      </div>
      
      <div className={midPanelStyles.listItem}>
        <StaticImage
          src="../../images/socket-faucet-icon.png"
          alt="pay for utilities online icon"
          placeholder="blurred"
          formats={["AUTO", "WEBP", "AVIF"]}
          loading='lazy'
          className={midPanelStyles.listIcon}
          style={{width: '150px'}}
        />
        <h4>Utilities</h4>
        <p>
           It's simple to pay utility bills
           online, from water to electric
        </p>
      </div>

    </div>
      
   );
}
 
export default MiddlePanelList;