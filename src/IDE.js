import React, { useRef } from "react";
import Editor from '@monaco-editor/react';
import battledata from "./data/battledata.json";
import axios from "axios";
import "./IDE.css";
import imagetest from "./assets/meowtonFix.png";
import imagefeedback from "./assets/TextBoxIDE.png";


function IDE(props){
    const question = battledata[props.battle]["question"][props.lang];
    const hint = battledata[props.battle]["hint"][props.lang];
    const testcase = battledata[props.battle]["testcase"];
    const expectout = battledata[props.battle]["expectout"];
    const [testing, setTesting] = React.useState(true);
    const [value, setValue] = React.useState("");
    const [input, setInput] = React.useState("");
    const [output, setOutput] = React.useState(<div className="OutputBox"></div>);

    const win = useRef(false);

    const handleEditorChange = (value) => {setValue(value);}
    const toggleTesting = () => {
        
        setTesting((prev) => !prev);
    }

    const showHint = () =>{
        setOutput(
            <div className="OutputBox">
                <p>{hint}</p>
            </div>
        )
    }
    
    const checkTestRun = async (token) =>{
        const options = {
            method: 'GET',
            url: process.env.REACT_APP_RAPID_API_URL + '/' + token,
            params: {
                base64_encoded: 'false',
                fields: '*'
            },
            headers: {
                'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
                'X-RapidAPI-Host': process.env.REACT_APP_RAPID_API_HOST,
            },
        }
        try{
            let response = await axios.request(options);
            let statusId = response.data.status?.id;

            if((statusId === 1)||(statusId === 2)){
                setTimeout(()=>{
                    checkTestRun(token);
                }, 2000)
                return
            }else{
                setOutput(<div className="OutputBox"><p>{response.data.stdout}</p></div>);
                console.log("got a code verdict!" + statusId);
                return
            }
        }catch (err){
            console.log("error!", err);
        }
    }

    const handleTestRun = () =>{
        console.log("handle compile triggered with value:");
        console.log(value);
        console.log("and input:");
        console.log(input);
        const options = {
            method: 'POST',
            url: process.env.REACT_APP_RAPID_API_URL,
            params: {
                base64_encoded: 'true',
                fields: '*'
            },
            headers: {
                "content-type": "application/json",
                "Content-Type": "application/json",
                'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
                'X-RapidAPI-Host': process.env.REACT_APP_RAPID_API_HOST,
            },
            data: {
                language_id: 71,
                source_code: btoa(value),
                stdin: btoa(input)
            }
        }
        axios.request(options).then((response)=>{
            const token = response.data.token;
            checkTestRun(token);
        }).catch((err) =>{
            let error = err.response ? err.response.data : err;
            console.log(err);
        });
    }

    const checkJudge = async (token) =>{
        const options = {
            method: 'GET',
            url: process.env.REACT_APP_RAPID_API_URL + '/batch',
            params: {
                tokens: token,
                base64_encoded: 'false',
                fields: '*'
            },
            headers: {
                'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
                'X-RapidAPI-Host': process.env.REACT_APP_RAPID_API_HOST,
            },
        }
        try{
            let response = await axios.request(options);
            let statusId = response.data.submissions[0].status?.id;

            if((statusId === 1)||(statusId === 2)){
                setTimeout(()=>{
                    checkJudge(token);
                }, 2000)
                return
            }else{
                for(let i=0;i<response.data.submissions.length;i++) console.log(response.data.submissions[i].status?.description);
                // console.log("got a code verdict!" + statusId);
                let verdict = "You did it!"
                let obstacle = -1;
                for(let i=0;i<response.data.submissions.length;i++) if(response.data.submissions[i].status?.id !== 3){
                    verdict = response.data.submissions[i].status?.description;
                    obstacle = i;
                    break;
                }
                if(obstacle === -1){
                    win.current = true;
                    setOutput(<div className="OutputBox"><p>{verdict}</p></div>);
                }
                else setOutput(
                    <div className="OutputBox">
                        <p>{verdict}</p>
                        <p>Failed Case: {testcase[obstacle]}</p>
                        <p>Your Answer: {response.data.submissions[obstacle].stdout}</p>
                        <p>Answer was supposed to be: {expectout[obstacle]}</p>
                    </div>
                )
                return
            }
        }catch (err){
            console.log("error!", err);
        }
    }

    const handleJudge = () =>{
        let object_array = [];
        for(let i=0;i<battledata[props.battle]["testcase"].length;i++){
            let temp = {
                language_id: 71,
                source_code: btoa(value),
                stdin: btoa(battledata[props.battle]["testcase"][i]),
                expected_output: btoa(battledata[props.battle]["expectout"][i])
            };
            object_array.push(temp);
        }
        const options = {
            method: 'POST',
            url: process.env.REACT_APP_RAPID_API_URL + '/batch',
            params: {
                base64_encoded: 'true',
                fields: '*'
            },
            headers: {
                "content-type": "application/json",
                "Content-Type": "application/json",
                'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
                'X-RapidAPI-Host': process.env.REACT_APP_RAPID_API_HOST,
            },
            data: {
                submissions: object_array
            }
        }
        axios.request(options).then((response)=>{
            let token = response.data[0].token;
            for(let i=1;i<response.data.length;i++) token += ',' + response.data[i].token;
            checkJudge(token);
        }).catch((err) =>{
            let error = err.response ? err.response.data : err;
            console.log(err);
        });
    }

    if(testing) return(
        <div className="IDE">
            <button className="ChangeMode" onClick={toggleTesting}>testing mode: on</button>

            <div className="questionbox">
                <p style={{ color: "white"}}>{question}</p>
            </div>

            <div className="EditorBox">
                <Editor
                height="85vh"
                width={`100%`}
                language="python"
                value={value}
                theme="vs-light"
                defaultValue="// write your code here"
                onChange={handleEditorChange}
            />
            <br/>    
            </div>

            <div className="OutputTexts">
                {output}    
            </div>

            <div className="Feedback">
            <img src={imagefeedback}></img>
            </div>

            <div className="UserInputBox">
                <h3 style={{ color: "white"}}>Custom input box:</h3>
                <textarea
                    className = "input-box"
                    rows = "5"
                    value = {input}
                    onChange = {(e) => setInput(e.target.value)}
                >
                </textarea>
            </div>

            <div className="TestSiteChars">
                <img src={imagetest}></img>
            </div>
            <button className='CompileButton' onClick={handleTestRun}>Test Run!</button>
            <button className='ShowHint' onClick={showHint}>show hint</button>
            {/* <button onClick={props.endBattle}>end battle</button> */}
        </div>
        
    );
    else return(
        <div className="IDE">
            {/* <h1>This is the IDE with battle number {props.battle}</h1> <br/> */}
            
            <button className="ChangeModeYes" onClick={toggleTesting}>testing mode: off</button>
            <div className="questionbox">
                <p style={{ color: "white"}}>{question}</p>
            </div>

            <div className="EditorBox">
                <Editor
                height="85vh"
                width={`100%`}
                language="python"
                value={value}
                theme="vs-light"
                defaultValue="// write your code here"
                onChange={handleEditorChange}
                />
                <br/>
            </div>
            <br/>
       
            <div className="Feedback">
                <img src={imagefeedback}></img>
            </div>

            <div className="OutputTexts">
                {output}    
            </div>

            <div className="TestSiteChars">
                <img src={imagetest}></img>
            </div>
            <button className="ContinueEp" onClick={props.endBattle}>Skip!</button>
            <button className="CompileButton" onClick={handleJudge}>Judge!</button>
            {win.current ? <button className ="ContinueEp" onClick={props.endBattle}>end battle</button>: <></>}
        </div>
    )
}

export default IDE;