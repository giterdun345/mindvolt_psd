import React from 'react'
import { StaticImage } from "gatsby-plugin-image"

import * as midPanelStyle from './midPanel.module.scss'


const MiddlePanel = () => {
  return ( 
    <div >
      <h3>
        For all your online spending today, rely on Visa Debit.
      </h3>
      <p>
        It's simple and safe to use your FirstBank Visa&reg; Debit Card for 
        the purchases you make online and the bills you pay digitally. Make it
        your go-to card for things like:
      </p>

      <div id='middle_panel' name='middle_panel'>
        <h4>Cell phone Bulls</h4>
        <p>Take care of your monthly payments online with ease</p>
        <h4>Streaming Services</h4>
        <p>Pay for subscriptions such as music, movies and TV streaming</p>
        <h4>Utilities</h4>
        <p>It's simple to pay utility bills online, from water to electric</p>
      </div>

      <div>
        <h3>No worries-your purchases are always protected<span>&#42;</span></h3>
        <p>Peace of mind is built right in with Visa's security technology including
          Continuous Fraud Monitoring, Transaction ALerts and Data Encryption. Plus with 
          Visa's Zero Liability Policy<span>&#42;</span> you won't be held responsible 
          for unauthorized purchases, gauranteed.
        </p>
      </div>
    </div>
   );
}
 
export default MiddlePanel;