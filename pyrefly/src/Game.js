import React from "react";
import {useRef} from "react";
import StageSelect from "./StageSelect";
import IDE from "./IDE";
import story from "./data/story.json"
import './Game.css';
import ResolveBackground from "./ResolveBackground";

function Game(props){
    const [chapter, setChapter] = React.useState(0);
    const [idx, setIdx] = React.useState(0);

    const advance = () =>{
        if(story[chapter][idx]["action"][0] === "end") setIdx(0);
        else setIdx(old => old + 1);
    }

    const bg = useRef("");
    const diname = useRef("");
    const ditext = useRef("");
    const lsprite = useRef("");
    const rsprite = useRef("");
    let battle_number = 0;
    const endBattle = () =>{
        console.log("endBattle triggered");
        battle_number = 0;
        console.log(battle_number);
        advance();
    }

    
    const endChapter = () =>{
        console.log("end chapter");
        bg.current = "";
        lsprite.current = "";
        rsprite.current = "";
        diname.current = "";
        ditext.current = "";
        setChapter(0);
        setIdx(0);
        props.setbgm('bgm1.mp3');
    }

    if(chapter === 0) return (<StageSelect lang={props.lang} setChapter={setChapter} setRoot={props.setRoot}/>);
    else{
        let leg = story[chapter][idx]["action"].length;
        let i = 0; for(i=0;i<leg;i++){
            if(story[chapter][idx]["action"][i] === "bg"){
                // const a = require(`./assets/${story[chapter][idx]["data"][i]}`);
                bg.current = ResolveBackground(story[chapter][idx]["data"][i]);
            }else if(story[chapter][idx]["action"][i] === "bgm"){
                props.setbgm(story[chapter][idx]["data"][i]);
            }else if(story[chapter][idx]["action"][i] == "sfx"){
                props.playsfx(story[chapter][idx]["data"][i]);
            }else if(story[chapter][idx]["action"][i] === "lsprite"){
                lsprite.current = require(`./assets/${story[chapter][idx]["data"][i]}`);
            }else if(story[chapter][idx]["action"][i] === "rsprite"){
                rsprite.current = require(`./assets/${story[chapter][idx]["data"][i]}`);
            }else if(story[chapter][idx]["action"][i] === "diname") diname.current = story[chapter][idx]["data"][i][props.lang];
            else if(story[chapter][idx]["action"][i] === "ditext") ditext.current = story[chapter][idx]["data"][i][props.lang];
            else if(story[chapter][idx]["action"][i] === "battle"){
                battle_number = story[chapter][idx]["data"][i];
            }
            else if(story[chapter][idx]["action"][i] === "end"){
                endChapter();
            }else console.log("unknown action");
        }

        if(battle_number != 0) return (
            <IDE lang={props.lang} battle={battle_number} endBattle={endBattle}/>
        );
        else return(
            <div className="GameMainContainer">
                        <div className={bg.current}>
                    <div className="LeftSprite">
                        {/* Position for LeftSprite */}
                        <img src={lsprite.current} alt="didnt work"></img>
                        {/* <p>{lsprite.current}</p> <br/> */}
                    </div>
                        
                    <div className="RightSprite">
                        {/* Position For Right Sprite */}
                        <img src={rsprite.current} alt={rsprite.current}></img>
                        {/* <p>{rsprite.current}</p> <br/> */}
                    </div>
                    
                    <div className="TextBoxContainer">
                        <div className="NameBox">
                            <p className="Speaking"> {diname.current}</p> <br/>
                        </div>
                        <div className="TextBoxRectangle">
                            <div className="Textss">
                                <p> {ditext.current}</p> <br/>
                            </div>
                        </div>
                    </div>

                    <div className="AdvanceandEnd">
                        <div className="Advance">
                            <button onClick={() => advance()}>Next Page</button>
                        </div>
                        
                        {/* <button onClick={() => setInBattle(true)}>try entering battle</button> */}

                        <div className="End">
                            <button onClick={() => endChapter()}>Quit Chapter</button>
                        </div>
                        
                    </div>

                    
                </div>
            </div>
        
        );
    }
}

export default Game;