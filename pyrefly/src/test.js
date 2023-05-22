import axios from "axios";
import battledata from "./data/battledata.json";
// import testimg from "./testimg.jpg";
import React from "react";
import './test.css';

function Test(props){
    // let bgm_path = require('./assets/bgm1.mp3');
    // let bgm = new Audio(bgm_path);
    // bgm.loop = true;
    // bgm.volume = 0.5;
    // volume dari 0.0 sampai 1.0
    // let sfx_path = require('./assets/sfx.mp3');
    // let sfx = new Audio(sfx_path);
    // https://www.w3schools.com/jsref/dom_obj_audio.asp
    // this way of handling sfx means can't spam click
    // have to wait until current sfx ends
    let bg = 'testimg.jpg'
    let bruh = "bg-[url('./assets/" + bg + "')]"
    // <div className="bg-[url('./assets/testimg.jpg')]">
    return(
        <div className={bruh}>
            <p>hello</p>
            <button onClick={() => props.setbgm("bgm1.mp3")}>Play bgm</button> <br/>
            <button onClick={() => props.setvol(0.25)}>Volume 0.25</button>
            <button onClick={() => props.setvol(0.75)}>Volume 0.75</button>
        </div>
    );
}

export default Test;