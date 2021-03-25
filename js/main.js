// get time & date and display them in the top bar of the ePod
function updateTime() {
  // declare variables for am/pm & the symbols that go with them
  var timeIndicator, timeIndicatorSymbol;
  // grab the container for the date & time to be plugged into
  const dateContainer = document.getElementById("time-date");
  // declare date & the time/date methods to go along with them
  var today = new Date();
  var todayMonth = today.getMonth();
  var todayDay = today.getDate();
  var todayYear = today.getFullYear();
  var todayHour = today.getHours();
  var todayMins = today.getMinutes();
  // switch months from 0 index to traditional 1-12 month format
  switch (todayMonth) {
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
      todayMonth = "Error";
  }
  // am/pm  indicator
  if (todayHour <= 10) {
    timeIndicator = "AM";
  } else {
    timeIndicator = "PM";
  }
  // day or night time indicator symbol
  if (todayHour >= 18) {
    timeIndicatorSymbol = "&#9789;";
  } else {
    timeIndicatorSymbol = "&#9728;";
  }
  // convert hours from military time into US standard time
  if (todayHour == 0 || todayHour == 12) {
    todayHour = "12";
  } else if (todayHour == 1 || todayHour == 13) {
    todayHour = "01";
  } else if (todayHour == 2 || todayHour == 14) {
    todayHour = "02";
  } else if (todayHour == 3 || todayHour == 15) {
    todayHour = "03";
  } else if (todayHour == 4 || todayHour == 16) {
    todayHour = "04";
  } else if (todayHour == 5 || todayHour == 17) {
    todayHour = "05";
  } else if (todayHour == 6 || todayHour == 18) {
    todayHour = "06";
  } else if (todayHour == 7 || todayHour == 19) {
    todayHour = "07";
  } else if (todayHour == 8 || todayHour == 20) {
    todayHour == "08";
  } else if (todayHour == 9 || todayHour == 21) {
    todayHour == "09";
  } else if (todayHour == 10 || todayHour == 22) {
    todayHour == "10";
  } else {
    todayHour = "11";
  }
  // plug the date & time into the inner HTML of the container
  dateContainer.innerHTML =
    todayMonth +
    "/" +
    todayDay +
    "/" +
    todayYear +
    " " +
    todayHour +
    ":" +
    todayMins +
    timeIndicator +
    " " +
    timeIndicatorSymbol;
}
// update time continuously
setInterval(updateTime);
// audio element container
const audioElement = document.getElementById("song-container");
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
// available songs
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
    artist: "Victoria Monét <br> ft. Kehlani",
    album: "Jaguar",
    length: "3:11",
    source: "songs/touch_me.mp3",
    albumArt: "url('img/album-art-jaguar.png')",
    vibe: "late-night",
  },
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