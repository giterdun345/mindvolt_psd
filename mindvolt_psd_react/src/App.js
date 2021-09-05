import HeroContainer from './components/hero/HeroContainer'
import MiddlePanel from './components/middlePanel/MiddlePanel';
import BottomPanel from './components/bottomPanel/BottomPanel';

import './App.scss';
import 'normalize.css'
import LegalFooter from './components/legalFooter/LegalFooter';

const App= ()=> {
  return (
    <div className="App">
      <HeroContainer />
      <MiddlePanel />
      <BottomPanel />
      <LegalFooter />
    </div>
  );
}

export default App;
