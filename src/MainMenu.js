import './MainMenu.css';

// <div className="bg-[url('./assets/testimg.jpg')]">

function MainMenu(props){
   
    let bg = "bg-[url('./assets/MainMenuCropped1280x765.jpg')]"
    
    let screening = bg + " bg-no-repeat w-full h-screen";

    return(
    <div className='MainMenuMainContainer'>
        <div className= {screening}>
            
            <div style={{
                position: 'fixed',
                top: 0,
                right: 0,
                width: '390px', 
                height: '765px',
                backgroundColor: 'rgba(217, 217, 217, 1)'}}>
                </div>

            <div className ="testingmain">
                <div className='Pyrefly'>
                    <h1>{props.lang === 0 ? "PyreFLY" : "PyreFLY"}</h1>
                </div>

                <button className='button_' onClick={() => props.setRoot(1)}>{props.lang === 0 ? "Play!" : "Main!"}</button>
                <button className ='button_' onClick={() => props.setRoot(2)}>{props.lang === 0 ? "Settings" : "Pengaturan"}</button>
                {/* <button className ='button_' onClick={() => props.setRoot(2)}>{props.lang === 0 ? "About" : "Pengaturan"}</button> */}
                {/* <button className ='button_' onClick={() => props.setRoot(2)}>{props.lang === 0 ? "Quit" : "Pengaturan"}</button> */}
   
            </div>
        </div>
    </div>
    )
}

export default MainMenu