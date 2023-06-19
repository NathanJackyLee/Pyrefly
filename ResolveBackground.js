function ResolveBackground(st){
    switch(st){
        case "Artificial_Park.jpg":
            return "bg-[url('./assets/Artificial_Park.jpg')] bg-no-repeat h-screen w-full bg-cover";
        case "Waiting_Room.jpg":
            return "bg-[url('./assets/Waiting_Room.jpg')] bg-no-repeat h-screen w-full bg-cover";
        case "MainMenu.jpg":
           return "bg-[url('./assets/MainMenu.jpg')] bg-no-repeat h-screen w-full bg-cover";
        default:
            return "";
    }
}

export default ResolveBackground;