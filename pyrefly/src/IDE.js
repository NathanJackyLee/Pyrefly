import React from "react";
import Editor from '@monaco-editor/react';
import battledata from "./data/battledata.json";
import axios from "axios";

function IDE(props){
    const question = battledata[props.battle]["question"][props.lang];
    const testcase = battledata[props.battle]["testcase"];
    const expectout = battledata[props.battle]["expectout"];
    const [testing, setTesting] = React.useState(true);
    const [value, setValue] = React.useState("");
    const [input, setInput] = React.useState("");
    const [output, setOutput] = React.useState(<div className="OutputBox"></div>);

    const handleEditorChange = (value) => {setValue(value);}
    const toggleTesting = () => {
        
        setTesting((prev) => !prev);
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
                if(obstacle === -1) setOutput(<div className="OutputBox"><p>{verdict}</p></div>);
                // else{
                //     verdict += '\n';
                //     verdict += "Failed Case: " + testcase[obstacle] + '\n';
                //     verdict += "Your answer: " + response.data.submissions[obstacle].stdout + '\n';
                //     verdict += "Answer was supposed to be: " + expectout[obstacle];
                //     setOutput(verdict);
                // }
                else setOutput(
                    <div>
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
            <h1>This is the IDE with battle number {props.battle}</h1> <br/>
            <button onClick={toggleTesting}>testing mode: on</button> <br/>
            <p>{question}</p>
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
            <div className="OutputBox">
                <h5>Output boxe</h5>
                <p>{output}</p>
            </div>
            <div className="UserInputBox">
                <h3>Custom input boxe</h3>
                <textarea
                    className = "input-box"
                    rows = "5"
                    value = {input}
                    onChange = {(e) => setInput(e.target.value)}
                >
                </textarea>
            </div>
            <button onClick={handleTestRun}>Test Run!</button>
            <button onClick={props.endBattle}>end battle</button>
        </div>
    );
    else return(
        <div className="IDE">
            <h1>This is the IDE with battle number {props.battle}</h1> <br/>
            <button onClick={toggleTesting}>testing mode: off</button> <br/>
            <p>{question}</p>
            <br/>
            {/* <p>testcase input: {testcase[0]}{testcase[1]}{testcase[2]}</p> */}
            {/* <br/> */}
            {/* <p>expected output: {expectout[0]}{expectout[1]}{expectout[2]}</p> */}
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
            <div className="OutputBox">
                <h5>Output boxe</h5>
                <p>{output}</p>
            </div>
            <button onClick={handleJudge}>Judge!</button>
            <button onClick={props.endBattle}>end battle</button>
        </div>
    )
}

export default IDE;