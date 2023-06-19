import './StageSelect.css';

function StageSelect(props){
    let bg = "bg-[url('./assets/MainMenuCropped1280x765.jpg')]"
    let screening = bg + " bg-cover w-full h-screen";



    return(
// {/* <center> */}
<div className='StageMainContainer'>
        <div className='justify'>
            
            <div className="Darker">
                <div className= {screening}></div>
            </div>

                <div className="RightRectangle2">

                </div>


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
                                    <strong>Chapter II</strong> Unraveling the Mystery
                                </button>
                            </div>

                            <div className='ButtonContainer3'>
                                <div className='Chapter3img'>
                                </div>
                                <button className='buttonstage' onClick={() => props.setChapter(3)}>
                                    <strong>Chapter III</strong> New Companion
                                </button>
                            </div>

                            <div className='ButtonContainer4'>
                                <div className='Chapter4img'>
                                </div>
                                <button className='buttonstage' onClick={() => props.setChapter(4)}>
                                    <strong>Chapter IV</strong> Trials
                                </button>
                            </div>

                            <div className='ButtonContainer5'>
                                <div className='Chapter5img'>
                                </div>
                                <button className='buttonstage' onClick={() => props.setChapter(5)}>
                                    <strong>Chapter V</strong> Unveiling the Truth
                                </button>
                            </div>

                            <div className='ButtonContainer6'>
                                <div className='Chapter6img'>
                                </div>
                                <button className='buttonstage' onClick={() => props.setChapter(6)}>
                                    <strong>Chapter VI</strong> Final Fight
                                </button>
                            </div>
                            
                        <div className='BackButton'>
                            <button  onClick={() => props.setRoot(0)}>{props.lang === 0 ? "Back" : "Kembali"}</button>
                        </div>
                        
                    
                
            
        </div>
</div>

    )
}

export default StageSelect;