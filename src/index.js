import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Test from './test';

const bgm = new Audio()
const sfx = new Audio()
const setbgm = (name) =>{
  let bgm_path = require('./assets/' + name);
  bgm.src = bgm_path;
  bgm.loop = true;
  bgm.play();
}
const setbgmvol = (vol) =>{bgm.volume = vol;}
function getbgmvol(){return bgm.volume;}

const playsfx = (name) =>{
  let sfx_path = require('./assets/' + name);
  sfx.src = sfx_path;
  sfx.play();
}
const setsfxvol = (vol) =>{sfx.volume = vol;}
function getsfxvol(){return sfx.volume;}

console.log("index rendered");
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
    <App setbgm={setbgm} setbgmvol={setbgmvol} bgmvol={getbgmvol} playsfx={playsfx} setsfxvol={setsfxvol} sfxvol={getsfxvol}/>
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
