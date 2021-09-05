import * as midPanelStyle from './middlePanel.module.scss'

const MidPanelText = ({heading, paragraph}) => {
  return (  
    // two sections in the middle panel 
    // require a title and heading passed from MiddlePanel (Container) 
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