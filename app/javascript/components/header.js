import { room } from "../plugins/video-express"

let toggleParticipants = (participants, state) => {
    const title = document.querySelector('#title');
    const mode_name = document.querySelector('#mode-name');
    Object.entries(participants).forEach(participant => {
      if (state === "chill"){
        title.innerHTML = "Big Game Live!";
        mode_name.innerHTML = "Watch Mode"
        room.setLayoutMode("active-speaker");
      } else if (state === "watch") {
        title.innerHTML = "Big Game Chill Zone";
        mode_name.innerHTML = "Chill Mode";
        room.setLayoutMode("grid")
      } else {
        console.log("Error in state of toggleParticipants")
      }
    })
  }

if (document.querySelector('vwc-switch') !== null){
  const switch_btn = document.querySelector('vwc-switch');
  switch_btn.addEventListener('change', (event) => {
    if (event.target.checked){
      room.startScreensharing();
      toggleParticipants(room.participants, "chill");
    }
    else if (!event.target.checked){
      room.stopScreensharing();
      toggleParticipants(room.participants, "watch");
    }
    else{
      console.log("Error in Switch Button Listener");
    }
  });
}
