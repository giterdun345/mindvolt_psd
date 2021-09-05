import headphonesGuy from '../../images/headphones-guy.png'
import peopleEating from '../../images/people-eating.png'
import BottomPanelText from './BottomPanelText'
import * as BottomPanelStyle from './bottomPanel.module.scss'

const BottomPanel = () => {
  // BottomPanelText reacts to the screen size offsetting the rectangular box with the 
  // images to allow images to get closer together, might need a redesign for tablet 
  return ( 
    <>
      <div className={BottomPanelStyle.bottomContainer}>
        <img src={headphonesGuy} className={BottomPanelStyle.imageLeft} alt="smiling at laptop on headphones" />      
        <BottomPanelText classSize='rectangleBackgroundFull' />
        <img src={peopleEating} className={BottomPanelStyle.imageRight} alt="couple eating pizza and laughing" />
      </div>
      <BottomPanelText classSize='rectangleBackgroundSmall' />
    </>
   );
}
 
export default BottomPanel;