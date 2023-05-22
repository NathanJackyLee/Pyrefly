function MainMenu(props){
    return(
        <div>
            <h1>{props.lang === 0 ? "Main Menu" : "Menu Utama"}</h1>
            <button onClick={() => props.setRoot(1)}>{props.lang === 0 ? "Play!" : "Main!"}</button>
            <button onClick={() => props.setRoot(2)}>{props.lang === 0 ? "Settings" : "Pengaturan"}</button>
        </div>
    )
}

export default MainMenu