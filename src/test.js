import axios from "axios";
import battledata from "./data/battledata.json";
import React from "react";
import './test.css';
import ResolveBackground from "./ResolveBackground";

function Test(props){

    let bg = "MainMenu.jpg";
    let shrek = ResolveBackground(bg);

    return(
        <div className={shrek}>
            <p>hello</p>
            <button onClick={() => props.setbgm("bgm1.mp3")}>Play bgm</button> <br/>
            <button onClick={() => props.setvol(0.25)}>Volume 0.25</button>
            <button onClick={() => props.setvol(0.75)}>Volume 0.75</button>
            {/* <button onClick={() => coba()}>coba</button> */}
            {/* <div>{bruh}</div> */}
            {/* <img src={im}></img> */}
        </div>
    );
}

export default Test;