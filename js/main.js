// get time & date and display them in the top bar of the ePod
const dateContainer = document.getElementById("time-date");
var today = new Date();
var todayMonth = today.getMonth();
var todayDay = today.getDate();
var todayYear = today.getFullYear();
switch(todayMonth) {
    case 0:
        todayMonth = "01";
        break;
    case 1:
        todayMonth = "02";
        break;
    case 2:
        todayMonth = "03";
        break;
    case 3:
        todayMonth = "04";
        break;
    case 4:
        todayMonth = "05";
        break;
    case 5:
        todayMonth = "06";
        break;
    case 6:
        todayMonth = "07";
        break;
    case 7:
        todayMonth = "08";
        break;
    case 8:
        todayMonth = "09";
        break;
    case 9:
        todayMonth = "10";
        break;
    case 10:
        todayMonth = "11";
        break;
    case 11:
        todayMonth = "12";
        break;
    default:
        todayMonth = "Month doesn't exist";
} 
dateContainer.innerHTML = "&#9789;" + " " + todayMonth + "/" + todayDay + "/" + todayYear;
// audio element container
const audioElement = document.getElementById("song-container");
// grab the pause/play button
// counter to count how many times button has been pressed
var counter = 0;
// audio player
function playSong() {
  const playButton = document.getElementById("play");
  // define audio element
  audioElement.play();
  // alternate between pause & play depending on if the song is playing or not
  counter++;
  if (counter % 2 == 0) {
    playButton.innerHTML = "&#9658;"; // play symbol unicode
    audioElement.pause();
    playButton.classList.add("play-adjustments"); // adjust position & styles of pause/play button depending on which is on display
    playButton.classList.remove("pause-adjustments");
    // toggle between displaying play & pause symbols
  } else if (counter == 1) {
    playButton.innerHTML = "&#65372;&#65372;"; // pause symbol unicode
    playButton.classList.remove("play-adjustments");
    playButton.classList.add("pause-adjustments");
  } else {
    playButton.innerHTML = "&#65372;&#65372;";
    playButton.classList.remove("play-adjustments");
    playButton.classList.add("pause-adjustments");
  }
}
// songs
let songs = [
  {
    name: "Binz",
    artist: "Solange",
    album: "When I Get Home",
    length: "1:51",
    source: "songs/binz.mp3",
    albumArt: "url('img/album-art-solange.png')",
    vibe: "early-morning",
  },
  {
    name: "Touch Me",
    artist: "Victoria Monét ft. Kehlani",
    album: "Jaguar",
    length: "3:11",
    source: "songs/touch_me.mp3",
    albumArt: "url('img/album-art-jaguar.png')",
    vibe: "late-night",
  }
];
// shuffle song function
function shuffleSongs() {
  // access song data on the page
  const songName = document.getElementById("song-name");
  const songArtist = document.getElementById("song-artist");
  const songAlbum = document.getElementById("song-album");
  const songLength = document.getElementById("song-length");
  const songAlbumArt = document.getElementById("album-art");
  // select random song
  var shuffled = songs[Math.floor(Math.random() * songs.length)];
  // check to make sure song shuffled is not the song playing, if so, skip it
  while (shuffled.name === songName.innerHTML) {
    shuffled = songs[Math.floor(Math.random() * songs.length)];
  }
  // continue
  // set song data
  songName.innerHTML = shuffled.name;
  songArtist.innerHTML = shuffled.artist;
  songAlbum.innerHTML = shuffled.album;
  songLength.innerHTML = shuffled.length;
  songAlbumArt.style.backgroundImage = shuffled.albumArt;
  // set audio source
  audioElement.src = shuffled.source;
}
