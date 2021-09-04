import React from 'react'
import MidPanelText from './MiddlePanelText'
import MidPanelList from './MiddlePanelList'

const MiddlePanel = () => {
  return ( 
    <div >
      <MidPanelText 
      heading= 'For all your online spending today, rely on Visa Debit.'
      paragraph= "It's simple and safe to use your FirstBank Visa® Debit Card for the purchases you make online and the bills you pay digitally. Make it your go-to card for things like:"
      />
      <MidPanelList />
      <div style={{marginTop: "8rem"}}>
        <MidPanelText 
            heading= 'No worries-your purchases are always protected*.'
            paragraph= {`Peace of mind is built right in with Visa's security technology including 
            Continuous Fraud Monitoring, Transaction Alerts and Data Encryption. Plus with 
            Visa's Zero Liability Policy* you won't be held responsible 
            for unauthorized purchases, gauranteed.`}
        />
      </div>
    
    </div>
   );
}
 
export default MiddlePanel;