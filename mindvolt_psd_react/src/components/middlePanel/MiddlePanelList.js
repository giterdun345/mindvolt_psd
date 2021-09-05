import * as midPanelStyle from './middlePanel.module.scss'

const MidPanelList = () => {
// maps images and text associated with the feature section of the middle panel 
  const listObj = [
    {
      "title":"Cell phone bills",
      "text":"Take care of your monthly payments online with ease",
      "image": "cellphone-icon.png",
      "altText":"cell phone bills icon"
    },
    { 
      "title":"Streaming services",
      "text":"Pay for subscriptions such as music, and TV streaming",
      "image":"headphones-icon.png",
      "altText":"streaming services icon"
    },
    {
      "title":"Utilities",
      "text":"It's simple to pay -utility bills online, from water to electric",
      "image":"socket-faucet-icon.png",
      "altText":"utilities icon"
    }
  ] 

  return (  
    <ul className={midPanelStyle.listContainer}>
      {
        listObj.map((item, idx)=>(
          <li className={midPanelStyle.listItem} key={idx}>
          <img src={require(`../../images/${item.image}`).default} 
            // .default required for current version of webpack 
               alt={item.altText} 
               className={midPanelStyle.listIcon}
               style={ item.title === 'Utilities' ? {width:'150px'}: {textAlign:'center'} } 
          />
          <h4>{item.title}</h4>
          <p>{item.text}</p>
          </li>
        ))
      }
    </ul>
  );
}
 
export default MidPanelList;