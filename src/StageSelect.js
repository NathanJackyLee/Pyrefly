import './StageSelect.css';

function StageSelect(props){
    let bg = "bg-[url('./assets/MainMenuCropped1280x765.jpg')]"
    let screening = bg + " bg-no-repeat w-full h-screen";



    return(
// {/* <center> */}
<div className='StageMainContainer'>
        <div className='justify'>
            
            <div className="Darker">
                <div className= {screening}></div>
            </div>
            

                <div style={{
                    position: 'fixed',
                    top: 0,
                    right: 0,
                    width: '390px', 
                    height: '767px',
                    backgroundColor: 'rgba(217, 217, 217, 1)' // Adjust the color and opacity as needed
                }}></div>

                    <div className ='ChapterContainer'>
                        <div className ='Chapter'>
                            <h1>{props.lang === 0 ? "Chapter" : "Episode"}</h1>
                        </div>
                    </div>    

                            <div className='ButtonContainer'>
                                <div className='Chapter1img'>   
                                </div>
                                <button className='buttonstage' onClick={() => props.setChapter(1)}>
                                    <strong>Chapter I</strong> The Calm Before the Storm
                                </button>

                            </div>

                            <div className='ButtonContainer2'>
                                <div className='Chapter2img'>
                                </div>
                                <button className='buttonstage' onClick={() => props.setChapter(2)}>
                                    <strong>Chapter II</strong> The Chaos Begin
                                </button>
                            </div>

                            <div className='ButtonContainer3'>
                                <div className='Chapter3img'>
                                </div>
                                <button className='buttonstage' onClick={() => props.setChapter(3)}>
                                    <strong>Chapter III</strong> A Call to Adventure
                                </button>
                            </div>
                        
                        <div className='BackButton'>
                            <button className='buttonstage2' onClick={() => props.setRoot(0)}>{props.lang === 0 ? "Back" : "Kembali"}</button>
                        </div>
                        
                    
                
            
        </div>
</div>

    )
}

export default StageSelect;