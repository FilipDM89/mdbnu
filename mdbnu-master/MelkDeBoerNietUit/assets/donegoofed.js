const getStubbed = document.getElementById("getGoofed")
const sound = new Audio();

function playSound(){
    sound.src = "./assets/songs/pils-en-gordijnen.mp3";
    sound.play();
};

getStubbed.addEventListener("click", playSound)

