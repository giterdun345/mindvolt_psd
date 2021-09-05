import creditCard from '../../images/credit-card.png'
import * as heroStyle from './hero.module.scss'

const CtaContainer = () => {
  // container holds credit card image and button within the hero 
  return ( 
    <div className={heroStyle.ctaContainer}>
      <img className={heroStyle.creditCard} src={creditCard} alt='Demo FirstBank Visa debit card' />
      <button className={heroStyle.ctaButton} aria-label='more details'>
        <a href='#middle_panel'>
          <span>See details</span>
          <div className={heroStyle.arrowDown} />
        </a>
      </button>
    </div>
   );
}
 
export default CtaContainer;