import React from 'react'
import * as midPanelStyle from './midPanel.module.scss'

const MidPanelText = ({heading, paragraph}) => {
  return (
    <div className={midPanelStyle.panelText}>  
      <h3>
        {heading}
      </h3>
      <p>
        {paragraph}
      </p>
    </div>
  );
}
 
export default MidPanelText;