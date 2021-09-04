import React from 'react'
import * as bottomPanelStyle from './botPanel.module.scss'

const CenterRectangle = () => {
  return ( 
    <div>
      <svg width="1000" height="362">
        <rect x="0" y="0" width="800" height="362" fill="#f9a403"/>
        <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle">
          When it's time to make an online purchase, use your FirstBank Visa &reg; Debit Card.
        </text>    
      </svg>
    </div>
  );
}
 
export default CenterRectangle;