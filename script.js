//your JS code here. If required.
const sounds = ["applause", "boo", "gasp", "tada", "victory", "wrong"];

const buttonsContainer = document.getElementById("buttons");

let currentAudio = null;

sounds.forEach(sound => {

	const button = document.createElement("button");
	button.classList.add("btn");
	button.innerText = sound;
	
	currentAudio = new Audio(`sounds/${sound}.mp3`);
        currentAudio.play();
})

// Create the stop button
const stopButton = document.createElement("button");
stopButton.classList.add("stop");
stopButton.innerText = "stop";

stopButton.addEventListener("click", () => {
    if (currentAudio) {
        currentAudio.pause();
        currentAudio.currentTime = 0;
        currentAudio = null;
    }
});

buttonsContainer.appendChild(stopButton);