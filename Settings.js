import React from 'react';
import './Settings.css';

function Settings(props){
    let bg = "bg-[url('./assets/CyberPunkSettings.jpg')]"
    let screening = bg + " bg-no-repeat w-full h-screen";
    console.log(props)
    // let slide = 0.5;
    // const handleSlide = (x) =>{
    //     slide = x;
    //     props.setvol(x);
    // }
    const [bgmSlide, setBgmSlide] = React.useState(1.0);
    const [sfxSlide, setSfxSlide] = React.useState(1.0);
    const handleBgmSlide = (x) =>{
        // x is an event???
        // console.log(x.target.value);
        props.setbgmvol(x.target.value);
        setBgmSlide(x.target.value);
    }
    const handleSfxSlide = (x) =>{
        props.setsfxvol(x.target.value);
        setSfxSlide(x.target.value);
    }
    return(
        <div className='SettingsMainContainer'>

            <div className='Darker'>
                <div className={screening}></div>
            </div>

            <div className='Toprectangle'></div>
            
            <div className='SettingsText'>
                <h1>{props.lang === 0 ? "Settings" : "Pengaturan"}</h1> <br/>
            </div>
            
            <button className="LanguageButton" onClick={props.toggleLanguage}>{props.lang === 0 ? "Language: English" : "Bahasa: Indonesia"}</button> <br/>
            <button className = "BackMenu" onClick={() => props.setRoot(0)}>{props.lang === 0 ? "Back to Main Menu" : "Kembali ke Main Menu"}</button> <br/>
            <button className="BGMOWL" onClick={() => props.setbgm("bgm_owl.mp3")}>set bgm owl</button> <br/>
            <button className ="BGM1" onClick={() => props.setbgm("bgm1.mp3")}>set bgm1</button> <br/>
            <button className="PlaySFX" onClick={() => props.playsfx("sfx.mp3")}>play sfx</button> <br />
            
            
                <input
                    type="range"
                    value={bgmSlide}
                    onChange={(value) => handleBgmSlide(value)}
                    min={0.0}
                    max={1.0}
                    step={0.05}
                    className="bgm-volume-slider"
                ></input> <br />
           


            <input
                type="range"
                value={sfxSlide}
                onChange={(value) => handleSfxSlide(value)}
                min={0.0}
                max={1.0}
                step={0.05}
                className="sfx-volume-slider"
            ></input>
        </div>
    )

}

export default Settings;