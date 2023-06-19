function ResolveBackground(imageName) {
    switch (imageName) {
      case "Playing_Area.jpg":
        return "bg-[url('./assets/Playing_Area.jpg')] bg-no-repeat h-screen w-full bg-cover";
      case "Hospital.jpg":
        return "bg-[url('./assets/Hospital.jpg')] bg-no-repeat h-screen w-full bg-cover";
      case "Virtual_Lab_Night.jpg":
        return "bg-[url('./assets/Virtual_Lab_Night.jpg')] bg-no-repeat h-screen w-full bg-cover";
      case "Virtual_Lab_Morning.jpg":
        return "bg-[url('./assets/Virtual_Lab_Morning.jpg')] bg-no-repeat h-screen w-full bg-cover";
      case "Secret_Base.jpg":
        return "bg-[url('./assets/Secret_Base.jpg')] bg-no-repeat h-screen w-full bg-cover";
      case "City_Night.jpg":
        return "bg-[url('./assets/City_Night.jpg')] bg-no-repeat h-screen w-full bg-cover";
      case "Secret_Location.jpg":
        return "bg-[url('./assets/Secret_Location.jpg')] bg-no-repeat h-screen w-full bg-cover";
      case "Underground.jpg":
        return "bg-[url('./assets/Underground.jpg')] bg-no-repeat h-screen w-full bg-cover";
      case "Virtual_Lab.jpg":
        return "bg-[url('./assets/Virtual_Lab.jpg')] bg-no-repeat h-screen w-full bg-cover";
      case "Virtual_World.jpg":
        return "bg-[url('./assets/Virtual_World.jpg')] bg-no-repeat h-screen w-full bg-cover";
      case "Virtual_Headquarters.jpg":
        return "bg-[url('./assets/Virtual_Headquarters.jpg')] bg-no-repeat h-screen w-full bg-cover";
      case "Underground_facility3.jpg":
        return "bg-[url('./assets/Underground_facility3.jpg')] bg-no-repeat h-screen w-full bg-cover";
      case "Underground_facility2.jpg":
        return "bg-[url('./assets/Underground_facility2.jpg')] bg-no-repeat h-screen w-full bg-cover";
      case "tbc.jpg":
        return "bg-[url('./assets/tbc.jpg')] bg-no-repeat h-screen w-full bg-cover";
      case "Stronghold.jpg":
        return "bg-[url('./assets/Stronghold.jpg')] bg-no-repeat h-screen w-full bg-cover";
      case "Server_Room.jpg":
        return "bg-[url('./assets/Server_Room.jpg')] bg-no-repeat h-screen w-full bg-cover";
      case "Archives.jpg":
        return "bg-[url('./assets/Archives.jpg')] bg-no-repeat h-screen w-full bg-cover";
      case "Artificial_Park.jpg":
        return "bg-[url('./assets/Artificial_Park.jpg')] bg-no-repeat h-screen w-full bg-cover";
      case "Waiting_Room.jpg":
        return "bg-[url('./assets/Waiting_Room.jpg')] bg-no-repeat h-screen w-full bg-cover";
      case "MainMenu.jpg":
        return "bg-[url('./assets/MainMenu.jpg')] bg-no-repeat h-screen w-full bg-cover";
      case "MC_Bedroom.jpg":
        return "bg-[url('./assets/MC_Bedroom.jpg')] bg-no-repeat h-screen w-full bg-cover";
      default:
        return "";
    }
  }
  
  export default ResolveBackground;