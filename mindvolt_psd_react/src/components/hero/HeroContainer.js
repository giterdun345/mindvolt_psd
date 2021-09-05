import heroImage from '../../images/hero-image.png'

import GoldbarHeader from './GoldbarHeader';
import CtaContainer from './CtaContainer';
import * as heroStyle from './hero.module.scss'

const HeroContainer = () => {  
  return (
    <div className={heroStyle.heroContainer}>
      <GoldbarHeader />
      <img className={heroStyle.heroImage} src={heroImage} alt="Woman smiling, looking at First Bank mobile app" />
      <div className={heroStyle.heroText}>  
        <h1> 
          Safe and smart way to pay online. 
          <br/>
          For just about everything. 
        </h1>
        <h2>
          Your FirstBank Visa&reg; Debit Card.
        </h2>
        <CtaContainer />
      </div>
    </div>
    );
}
 
export default HeroContainer;