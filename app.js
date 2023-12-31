const prev = document.querySelector(".prev i"),
next = document.querySelector(".next i"),
video = document.querySelector(".video-lab video"),
play_pause = document.querySelector(".play_pause"),
text_name = document.querySelector(".name"),
info_name = document.querySelector(".title"),
img_box = document.querySelector(".img");

prev.addEventListener("click", (e) =>{
    prevTrack();
    backwrd();
});
next.addEventListener("click", (e) =>{
    nextTrack();
    fwrd();
});
// Specify globally used value
let track_index = 0;
let isPlaying = false;

// Create the video element for the player
let curr_track = document.createElement('video');
let track_list = [
    {
        path: "videos/gif.mp4"
	},
	{
        path: "videos/ran.mp4"
	},
	{
        path: "videos/gif2.mp4"
	},
	{
        path: "videos/ran3.mp4"
	},
	{
        path: "videos/gif3.mp4"
	},
	{
        path: "videos/ran2.mp4"
	},
	{
        path: "videos/gif4.mp4"
	},
	{
        path: "videos/ran4.mp4"
	},
	{
        path: "videos/gif5.mp4"
	},
	{
        path: "videos/gi.mp4"
	},
	{
        path: "videos/gi2.mp4"
	},
	{
        path: "videos/gi3.mp4"
	},
	{
        path: "videos/gi4.mp4"
	},
	{
        path: "videos/gi5.mp4"
	},
	{
        path: "videos/rap.mp4"
	},
];
let track = [
    "videos/gif.mp4",
    "videos/ran",
    "videos/gif2.mp4",
    "videos/gif3.mp4",
    "videos/ran3",
    "videos/gif4.mp4",
    "videos/ran2",
    "videos/gif5.mp4",
    "videos/ran4",
    "videos/gi.mp4",
    "videos/gi2.mp4",
    "videos/gi3.mp4",
    "videos/gi4.mp4",
    "videos/gi5.mp4",
    "videos/rap.mp4",
]
let radome_track = track[Math.floor(Math.random()*track.length)]; //sorting items one-by-one and picking them randomly
window.onload = (e)=>{
    video.src = radome_track;
}
// Load the first track in the tracklist
loadTrack(track_index);

// calling the loadTrack function
function loadTrack(track_index) {
    // Load new track
    video.src = track_list[track_index].path;
    curr_track.load(); //loading the firsr track
    curr_track.addEventListener("ended", nextTrack);
}
function playpauseTrack() {
    // Switch between playing and pausing
    // depending on the current state
    if(!isPlaying) playTrack();
    else pauseTrack();
}
video.addEventListener("click", e => {
    pauseTrack();
    console.log(e);
});
// function to pause track
function pauseTrack() {
    // pause the loaded track
    video.pause();
    isPlaying = false;
    play_pause.classList.add("show");
    play_pause.innerHTML = "<i class='bx bx-play' ></i>";

    setTimeout(()=>{
        video.play();
        isPlaying = true;
        play_pause.innerHTML = "<i class='bx bx-pause' ></i>";
    },1000);

    setTimeout(()=>{
        play_pause.classList.remove("show");
    }, 1300);
}
function nextTrack() {
    // Go forward to the next track if the
	// current one is the last in the track list
    if(track_index < track_list.length - 1)
    track_index += 1;
    else track_index = 0;

    // Load and play the new track
    loadTrack(track_index);
    playTrack();
}
function prevTrack() {
    // Go back to the last track if the
	// current one is the first in the track list
    if(track_index > 0)
    track_index -= 1;
    else track_index = track_list.length;

    // Load and play the new track
    loadTrack(track_index);
    playTrack();
}
function playTrack() {
	// play the loaded track
	curr_track.play();
	isPlaying = true;
}
function backwrd() {
    // storing username in an array
    idArray = new Array()
    idArray [1] = "@techno_logy"
    idArray [2] = "@primal_tech"
    idArray [3] = "@tech_videos"
    idArray [4] = "@PC_Work"
    idArray [5] = "@Meta_verse"
    idArray [6] = "@Excellent Erna"
    idArray [7] = "@Briana the Chainmail"
    idArray [8] = "@Cool Claude"
    idArray [9] = "@Quindo"

    randomParagraph = Math.floor(Math.random()*9);
  
    text_name.innerHTML = idArray[randomParagraph + 1] + "<i class='bx bxs-check-circle' style='color: red'></i>";
}
function fwrd() {
    // storing username in an array
    idArray = new Array()
    idArray [1] = "@Meta_verse"
    idArray [2] = "@PC_Work"
    idArray [3] = "@tech_videos"
    idArray [4] = "@primal_tech"
    idArray [5] = "@techno_logy"
    idArray [6] = "@Excellent Erna"
    idArray [7] = "@Briana the Chainmail"
    idArray [8] = "@Cool Claude"
    idArray [9] = "@Quindo"
  
    randomParagraph = Math.floor(Math.random()*9);
  
    text_name.innerHTML = idArray[randomParagraph + 1] + "<i class='bx bxs-check-circle' style='color: red'></i>";
}
img_box.addEventListener("click", (e) => {
    console.log(e);
    img_box.classList.add("followed");

    setTimeout(()=>{
        img_box.classList.add("fade");
    },1400);
});

function backwrd() {
    // storing info in an array
    idArray = new Array()
    idArray [1] = "#fun"
    idArray [2] = "#Never underestimate"
    idArray [3] = "#Uppercut"
    idArray [4] = "#Damn"
    idArray [5] = "#Mad dance"
    idArray [6] = "#funny guy"
    idArray [7] = "@Ninja bro"
    idArray [8] = "#fishing for gang"
    idArray [9] = "#QuindoRulz"

    randomParagraph = Math.floor(Math.random()*9);
  
    info_name.innerHTML = idArray[randomParagraph + 1];
}
function fwrd() {
    // storing info in an array
    idArray = new Array()
    idArray [1] = "#fun"
    idArray [2] = "#Never underestimate"
    idArray [3] = "#Uppercut"
    idArray [4] = "#Damn"
    idArray [5] = "#Mad dance"
    idArray [6] = "#funny guy"
    idArray [7] = "@Ninja bro"
    idArray [8] = "#fishing for gang"
    idArray [9] = "#QuindoRulz"
  
    randomParagraph = Math.floor(Math.random()*9);
  
    info_name.innerHTML = idArray[randomParagraph + 1];
}