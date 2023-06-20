import React from 'react';
import './Settings.css';

function Settings(props){
    let bg = "bg-[url('./assets/CyberPunkSettings.jpg')]"
    let screening = bg + " bg-cover w-full h-screen";
    console.log(props)
    
    const [bgmSlide, setBgmSlide] = React.useState(props.bgmvol);
    const [sfxSlide, setSfxSlide] = React.useState(props.sfxvol);
    const handleBgmSlide = (x) =>{
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
            {/* <button className="BGMOWL" onClick={() => props.setbgm("bgm_owl.mp3")}>set bgm owl</button> <br/> */}
            <button className ="BGMOWL" onClick={() => props.setbgm("perception.mp3")}>test bgm volume</button> <br/>
            <button className="PlaySFX" onClick={() => props.playsfx("friend-request-14878.mp3")}>test sfx volume</button> <br />
            
            
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