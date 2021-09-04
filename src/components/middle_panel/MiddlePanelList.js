import React from 'react'
import { StaticImage } from "gatsby-plugin-image"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { useStaticQuery, graphql } from 'gatsby'
import * as midPanelStyle from './midPanel.module.scss'

const MidPanelList = ({title, text, image, altText, idx}) => {

  console.log(image)
  return ( 
      <li className={midPanelStyle.listItem} key={idx}>
        <GatsbyImage
          src={image}
          alt={altText}
          // placeholder="blurred"
          // formats={["AUTO", "WEBP", "AVIF"]}
          // loading='lazy'
          // className={midPanelStyle.listIcon}
        />
        <h4>{title}</h4>
        <p>{text}</p>
      </li>
   );
}
 
export default MidPanelList;