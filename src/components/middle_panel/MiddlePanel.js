import React from 'react'
import { StaticImage, GatsbyImage, getImage } from "gatsby-plugin-image"

import { StaticQuery, graphql, useStaticQuery } from "gatsby"

import MidPanelText from './MidPanelText'
import MiddlePanelList from './MiddlePanelList'
import * as midPanelStyle from './midPanel.module.scss'

const MiddlePanel = () => {
  const data = useStaticQuery(graphql`  
      query TextandImages {
        datafromjson: allFeaturesListJson {
          edges {
            node {
              title
              text
              image
            }
          }
        }
        image: allFile(filter: {name: {regex: "/icon/g"}}) {
          edges {
            node {
              id
              name
              childImageSharp {
                gatsbyImageData(
                  width: 200,
                  placeholder: BLURRED,
                  formats: [AUTO, WEBP, AVIF]
                )
              }
            }
          }
        }
      }
  `)


//   const textData = data.datafromjson.edges
console.log(data)
const image = getImage(data.image.edges[0].node.childImageSharp.gatsbyImageData)
    return ( 
      <div >
        <MidPanelText 
        heading= 'For all your online spending today, rely on Visa Debit.'
        paragraph= "It's simple and safe to use your FirstBank Visa® Debit Card for the purchases you make online and the bills you pay digitally. Make it your go-to card for things like:"
        />
        <GatsbyImage
          src={image}
          // alt={altText}
          // placeholder="blurred"
          // formats={["AUTO", "WEBP", "AVIF"]}
          // loading='lazy'
          // className={midPanelStyle.listIcon}
        />
        {/* <ul className={midPanelStyle.listContainer}>
          {textData.map( (item, idx) => <MiddlePanelList 
                                          title={item.node.title}
                                          text={item.node.text}
                                          image={image}
                                          alt={item.node.alt}
                                          idx={idx}
                                        />
                                        
                      )
          } 
        </ul> */}
{/* 
         <StaticImage
          src="../../images/headphones-icon.png"
          // alt={altText}
          placeholder="blurred"
          formats={["AUTO", "WEBP", "AVIF"]}
          loading='lazy'
          className={midPanelStyle.listIcon}
        /> */}
        <MidPanelText 
          heading= 'No worries-your purchases are always protected*'
          paragraph= {`Peace of mind is built right in with Visa's security technology including 
          Continuous Fraud Monitoring, Transaction Alerts and Data Encryption. Plus with 
          Visa's Zero Liability Policy* you won't be held responsible 
          for unauthorized purchases, gauranteed.`}
        />
      </div>
    );
}
 
export default MiddlePanel;