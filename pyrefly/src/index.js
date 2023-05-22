import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Test from './test';
// import reportWebVitals from './reportWebVitals';

const bgm = new Audio()
const setbgm = (name) =>{
  console.log("setbgm triggered");
  // bgm.load();
  let bgm_path = require('./assets/' + name);
  // console.log(bgm_path);
  // console.log(bgm.src);
  // if(bgm_path === bgm.src) return;
  bgm.src = bgm_path;
  // bgm.load();
  bgm.loop = true;
  bgm.play();
  // bgm.volume = 1.0;
}
const setvol = (vol) =>{
  console.log("setting volume " + vol);
  bgm.volume = vol;
}
function getvol(){
  console.log("getvol " + bgm.volume);
  return bgm.volume;
}

console.log("index rendered");
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
    <App setbgm={setbgm} setvol={setvol} vol={getvol}/>
  // </React.StrictMode>
);
// OK I know React comes with StrictMode by default,
// but according to the internet StrictMode re-renders double
// which breaks the setbgm cuz its a promise function
// and the second render just interrupts the first one's attempt to load the song
// There's probably a more professional way of handling this even with StrictMode
// but bruh pls im fighting for my fuckin life rn

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
