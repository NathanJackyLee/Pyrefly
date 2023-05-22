// import logo from './logo.svg';
import './App.css';
import React from 'react';
import { useRef } from 'react';
import MainMenu from './MainMenu';
import Game from './Game';
import Settings from './Settings';
// import AudioContext from './context/AudioContext';

// accessed by <App />
function App(props) {
  // const [curbgm, setbgm] = React.useContext(AudioContext);

  const [root, setRoot] = React.useState(0);
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

  // let bgm_path = require('./assets/bgm1.mp3');
  // let bgm = new Audio(bgm_path);
  // bgm.loop = true;
  // bgm.autoplay = true;
  // bgm.play();

  // let sfx_path = require('./assets/sfx.mp3');
  // let sfx = new Audio(sfx_path);

  if(root === 0) return (
      <MainMenu setRoot={setRoot} lang={language} />
  );
  else if(root === 1) return (
      <Game setRoot={setRoot} lang={language} setbgm={props.setbgm} setvol={props.setvol}/>
  );
  else if(root === 2) return (
      <Settings setRoot={setRoot} lang={language} toggleLanguage={toggleLanguage} setbgm={props.setbgm} setvol={props.setvol} vol={props.vol}/>
  );
}

export default App;
