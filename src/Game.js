import React from "react";
import {useRef} from "react";
import StageSelect from "./StageSelect";
import IDE from "./IDE";
import testimg from "./assets/testimg.jpg";
import story from "./data/story.json"
import lsprite1 from "./assets/TestCharacteressTransparentBack.png";
import bg1 from "./assets/MainMenu.jpg"
import './Game.css';


function Game(props){
    const [chapter, setChapter] = React.useState(0);
    const [idx, setIdx] = React.useState(0);

    const advance = () =>{
        // console.log("idx is now " + idx);
        if(story[chapter][idx]["action"][0] === "end") setIdx(0);
        else setIdx(old => old + 1);
    }
    // const [inBattle, setInBattle] = React.useState(false);
    // function enterBattle(){
    //     if(inBattle == false) setInBattle(true);
    //     console.log("enterBattle");
    //     console.log(inBattle);
    // }
    // function exitBattle(){
    //     if(inBattle == true) setInBattle(false);
    //     console.log("exitBattle");
    //     console.log(inBattle);
    // }

    // const leg = story[chapter].length;
    // console.log("story[chapter] leg: " + story[chapter].length);
    const bg = useRef("");
    // const bgm = useRef("");
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
        // bgm.current = "";
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
            if(story[chapter][idx]["action"][i] === "go"){
                advance();
            }else if(story[chapter][idx]["action"][i] === "bg"){
                bg.current = "bg-[url('./assets/" + story[chapter][idx]["data"][i] + "')]";
            }else if(story[chapter][idx]["action"][i] === "bgm"){
                console.log("story bgm " + story[chapter][idx]["data"][i]);
                props.setbgm(story[chapter][idx]["data"][i]);
            }
            else if(story[chapter][idx]["action"][i] === "lsprite") lsprite.current = story[chapter][idx]["data"][i];
            else if(story[chapter][idx]["action"][i] === "rsprite") rsprite.current = story[chapter][idx]["data"][i];
            else if(story[chapter][idx]["action"][i] === "diname") diname.current = story[chapter][idx]["data"][i][props.lang];
            else if(story[chapter][idx]["action"][i] === "ditext") ditext.current = story[chapter][idx]["data"][i][props.lang];
            else if(story[chapter][idx]["action"][i] === "battle"){
                battle_number = story[chapter][idx]["data"][i];
                // enterBattle();
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

                {/* <h1>This is a VN Page in chapter {chapter}</h1> */}
                {/* <p>background: {bg.current}</p> <br/> */}
                {/* <p>background: {bg1}</p> <br/> */}
                {/* <p>music: {bgm.current}</p> <br/> */}

                <div className="LeftSprite">
                    {/* Position for LeftSprite */}
                    {/* <img src={lsprite1}></img> */}
                    {/* <p>lsprite: {lsprite.current}</p> <br/> */}
                </div>
                
                <div className="RightSprite">
                    {/* Position For Right Sprite */}
                    {/* <img src={lsprite1}></img> */}
                    {/* <p>rsprite: {rsprite.current}</p> <br/> */}
                </div>
                
                <div className="TextBoxContainer">
                    <div className="NameBox">
                        <p>diname: {diname.current}</p> <br/>
                    </div>
                    <div className="TextBoxRectangle">
                        <p>ditext: {ditext.current}</p> <br/>
                    </div>
                    
                </div>

                <div className="AdvanceandEnd">
                    <div className="Advance">
                        <button onClick={() => advance()}>try advancing page</button>
                    </div>
                    
                {/* <button onClick={() => setInBattle(true)}>try entering battle</button> */}

                    <div className="End">
                        <button onClick={() => endChapter()}>try end of chapter</button>
                    </div>
                    
                </div>

            </div>
        </div>
        );
    }
}

export default Game;