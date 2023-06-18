import './Landing.css';

function Landing(props){
    const ignite = () =>{
        props.setbgm("bgm1.mp3");
        props.setRoot(0);
    }
    return(
        <div className="bg-[url('./assets/MainMenuCropped1280x765.jpg')] bg-no-repeat h-screen w-full bg-cover">
            <h1>Pyrefly</h1>
            <button onClick={() => ignite()}>Start!</button>
        </div>
    );
}

export default Landing;