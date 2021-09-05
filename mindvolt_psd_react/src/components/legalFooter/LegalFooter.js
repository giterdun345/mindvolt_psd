import bankLogo from '../../images/FB-logo.png'
import visaLogo from '../../images/visa.png'

import * as legalFooterStyles from './legalFooter.module.scss'

const LegalFooter = () => {
  return ( 
    <div className={legalFooterStyles.footerContainer}>
      <div className={legalFooterStyles.logos} >
        <img src={bankLogo} alt='FirstBank Logo'/>
        <img src={visaLogo} alt='Visa Logo' />
      </div>
      <p>
        *Visa's Zero Liability Policy does not apply to certain
        commercial card and anonymous prepaid card transactions
        or transactions not processed by Visa. Cardholders must
        use care in protecting their card and notify their financial
        institution immediately of any unauthorized use. Contact your 
        Issuer for more detail.
      </p>
    </div>
   );
}
 
export default LegalFooter;