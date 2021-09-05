import MidPanelText from './MiddlePanelText.js'
import MidPanelList from './MiddlePanelList.js'

const MiddlePanel = () => {
  return ( 
    <div id='middle_panel' name='middle_panel'>
      <MidPanelText 
        heading= 'For all your online spending today, rely on Visa Debit.'
        paragraph= "It's simple and safe to use your FirstBank Visa® Debit Card for the purchases you make online and the bills you pay digitally. Make it your go-to card for things like:"
        />
      <MidPanelList />
      <MidPanelText 
        heading= 'No worries-your purchases are always protected*.'
        paragraph= {`Peace of mind is built right in with Visa's security technology including 
        Continuous Fraud Monitoring, Transaction Alerts and Data Encryption. Plus with 
        Visa's Zero Liability Policy* you won't be held responsible 
        for unauthorized purchases, gauranteed.`}
      />
    </div>
   );
}

 
export default MiddlePanel;