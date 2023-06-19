import './Landing.css';

function Landing(props){
    const ignite = () =>{
        props.setbgm("dreams.mp3");
        props.setRoot(0);
    }
    return(
        <div className="bg-[url('./assets/MainMenuCropped1280x765.jpg')] bg-cover h-screen w-full bg-cover">
            <div className="Center">
            <h1>Pyrefly</h1>
            <button onClick={() => ignite()}>Start!</button>
            </div>

        </div>
    );
}

export default Landing;
