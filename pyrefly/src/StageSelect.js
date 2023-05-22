function StageSelect(props){
    return(
        <div>
            <h1>{props.lang === 0 ? "Stage Select" : "Pilih Stage"}</h1>
            <button onClick={() => props.setChapter(1)}>chapter 1</button>
            <button onClick={() => props.setChapter(2)}>chapter 2</button>
            <button onClick={() => props.setChapter(3)}>chapter 3</button>
            <button onClick={() => props.setRoot(0)}>{props.lang === 0 ? "Back" : "Kembali"}</button>
        </div>
    )
}

export default StageSelect;