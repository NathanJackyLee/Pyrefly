import React from 'react';
import './Settings.css';
// import Slider from 'react-input-slider';

function Settings(props){

    let bg = "bg-[url('./assets/MainMenu.jpg')]"
    
    let screening = bg + " bg-no-repeat w-full h-screen";

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
        <div className='SettingsMainContainer'>
            <div className={screening}>
                <div className ='RightRectangle' style={{
                    position: 'fixed',
                    top: 0,
                    right: 0,
                    width: '390px', 
                    height: '765px',
                    backgroundColor: 'rgba(217, 217, 217, 1)'}}>
                    </div>
                <div className='Toprectangle'></div>
                <div className='SettingsText'>
                    <h1>{props.lang === 0 ? "Settings" : "Pengaturan"}</h1> <br/>
                </div>
                    
                <div className='buttonplacing'>

                    <div className='LanguageContainer'>
                        <button className='LanguageButton' onClick={props.toggleLanguage}>{props.lang === 0 ? "Language: English" : "Bahasa: Indonesia"}</button> <br/>
                    </div>

                    <div className='BacktoMainMenuContainer'>
                        <button onClick={() => props.setRoot(0)}>{props.lang === 0 ? "Back to Main Menu" : "Kembali ke Main Menu"}</button> <br/>
                    </div>
                    
                    <div className='MusicSelectionContainer'>
                        <button onClick={() => props.setbgm("bgm_owl.mp3")}>set bgm owl</button> <br/>
                    </div>

                    <div className='MusicSelectionContainer2'>
                       <button onClick={() => props.setbgm("bgm1.mp3")}>set bgm1</button> <br/> 
                    </div>
                    
                    <div className='FastVolumeSettings'>
                        <button onClick={() => props.setvol(0.25)}>set volume 0.25</button> <br/>
                        <button onClick={() => props.setvol(0.75)}>set volume 0.75</button> <br/>
                    </div>

                </div>

                {/* <Slider axis="x" x={slide} xmin={0.0} xmax={1.0} xstep={0.05} onChange={({x}) => handleSlide(x)} /> */}
                <div className='AudioSliders'>
                    <input
                        type="range"
                        value={slide}
                        onChange={(value) => handleSlide(value)}
                        min={0.0}
                        max={1.0}
                        step={0.05}
                        className="audio-volume-slider">   
                    </input>
                </div>
            </div>
        </div>
    )

}

export default Settings;