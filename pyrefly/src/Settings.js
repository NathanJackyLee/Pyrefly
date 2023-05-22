import React from 'react';
// import Slider from 'react-input-slider';

function Settings(props){
    // let slide = 0.5;
    // const handleSlide = (x) =>{
    //     slide = x;
    //     props.setvol(x);
    // }
    const [slide, setSlide] = React.useState(0.5);
    const handleSlide = (x) =>{
        // x is an event???
        console.log(x.target.value);
        props.setvol(x.target.value);
        setSlide(x.target.value);
    }
    return(
        <div>
            <h1>{props.lang === 0 ? "Settings" : "Pengaturan"}</h1> <br/>
            <button onClick={props.toggleLanguage}>{props.lang === 0 ? "Language: English" : "Bahasa: Indonesia"}</button> <br/>
            <button onClick={() => props.setRoot(0)}>{props.lang === 0 ? "Back to Main Menu" : "Kembali ke Main Menu"}</button> <br/>
            <button onClick={() => props.setbgm("bgm_owl.mp3")}>set bgm owl</button> <br/>
            <button onClick={() => props.setbgm("bgm1.mp3")}>set bgm1</button> <br/>
            <button onClick={() => props.setvol(0.25)}>set volume 0.25</button> <br/>
            <button onClick={() => props.setvol(0.75)}>set volume 0.75</button> <br/>
            {/* <Slider axis="x" x={slide} xmin={0.0} xmax={1.0} xstep={0.05} onChange={({x}) => handleSlide(x)} /> */}
            <input
                type="range"
                value={slide}
                onChange={(value) => handleSlide(value)}
                min={0.0}
                max={1.0}
                step={0.05}
                className="audio-volume-slider"
            ></input>
        </div>
    )

}

export default Settings;