import './App.css';
import React from 'react';
import { useRef } from 'react';
import MainMenu from './MainMenu';
import Game from './Game';
import Settings from './Settings';
import Landing from './Landing.js'

// accessed by <App />
function App(props) {
  const [root, setRoot] = React.useState(-1);
  const [language, setLanguage] = React.useState(0);
  const toggleLanguage = () =>{
    if(language === 0) setLanguage(1);
    else setLanguage(0);
  }
  // 0 = English
  // 1 = Indo
  // bedanya nanti cuma pas akses bbrp data story,
  // data diname & ditext dlm format [versi eng, versi indo]
  // jadi akses ny cuma kek data[language]
  if(root === -1) return (
      <Landing setRoot={setRoot} setbgm={props.setbgm}/>
  );
  else if(root === 0) return (
      <MainMenu setRoot={setRoot} lang={language} />
  );
  else if(root === 1) return (
      <Game setRoot={setRoot} lang={language} setbgm={props.setbgm} setbgmvol={props.setbgmvol} playsfx={props.playsfx} setsfxvol={props.setsfxvol}/>
  );
  else if(root === 2) return (
      <Settings setRoot={setRoot} lang={language} toggleLanguage={toggleLanguage} setbgm={props.setbgm} setbgmvol={props.setbgmvol} bgmvol={props.bgmvol} playsfx={props.playsfx} setsfxvol={props.setsfxvol} sfxvol={props.getsfxvol}/>
  );
}

export default App;
