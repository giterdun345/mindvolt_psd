import * as BottomPanelStyle from './bottomPanel.module.scss'

const BottomPanelText = ({ classSize }) => {
  // depending on screen size classes rectangleBackgroundFull and rectangleBackgroundSmall
  // provide responsiveness 
  return ( 
    <div className={BottomPanelStyle[classSize]}>
      <h5>When it's time to make an online purchase, use your FirstBank Visa &reg; Debit Card.</h5>
    </div>
   );
}
 
export default BottomPanelText;